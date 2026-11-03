
import { useState, useEffect, useRef } from "react";
import "./newthisweek.css";

function NewThisWeek() {
    const [imgthisweek, setImgthisweek] = useState([]);
    const [error, setError] = useState("");
    const [button, setButton] = useState(0);
    const [animate, setAnimate] = useState(true);
    const [visibleItems, setVisibleItems] = useState(() => {
        if (window.matchMedia("(max-width: 500px)").matches) return 1;
        if (window.matchMedia("(max-width: 900px)").matches) return 2;
        return 4;
    });
    const visibleItemsRef = useRef(visibleItems);
    const moveItems = 1;
    const carouselGap = visibleItems === 1 ? 12 : 20;

    // Add duplicate items at both ends for infinite looping
    const carouselItems =
        imgthisweek.length > visibleItems
            ? [
                  ...imgthisweek.slice(-moveItems),
                  ...imgthisweek,
                  ...imgthisweek.slice(0, moveItems),
              ]
            : imgthisweek;

    useEffect(() => {
        const updateVisibleItems = () => {
            const nextVisibleItems = window.matchMedia("(max-width: 500px)").matches
                ? 1
                : window.matchMedia("(max-width: 900px)").matches
                    ? 2
                    : 4;
            if (nextVisibleItems === visibleItemsRef.current) return;

            visibleItemsRef.current = nextVisibleItems;
            setVisibleItems(nextVisibleItems);
            setButton(imgthisweek.length > nextVisibleItems ? moveItems : 0);
        };

        window.addEventListener("resize", updateVisibleItems);
        return () => window.removeEventListener("resize", updateVisibleItems);
    }, [imgthisweek.length]);

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3001/newThisWeek"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch collection");
                }

                const data = await response.json();
                setImgthisweek(data);
                setButton(data.length > visibleItemsRef.current ? moveItems : 0);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchCollection();
    }, []);

    // Re-enable animation after an invisible jump
    useEffect(() => {
        if (!animate) {
            const timer = setTimeout(() => {
                setAnimate(true);
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [animate]);

    const nextSlide = () => {
        if (imgthisweek.length <= visibleItems) return;

        setAnimate(true);
        setButton((prev) => prev + moveItems);
    };

    const prevSlide = () => {
        if (imgthisweek.length <= visibleItems) return;

        setAnimate(true);
        setButton((prev) => prev - moveItems);
    };

    const handleTransitionEnd = () => {
        const total = imgthisweek.length;

        if (total <= visibleItems) return;

        if (button >= total + moveItems) {
            setAnimate(false);
            setButton((prev) => prev - total);
        } else if (button < moveItems) {
            setAnimate(false);
            setButton((prev) => prev + total);
        }
    };

    return (
        <>
            <div className="newthisweek-main">
                <h1>
                    NEW THIS WEEK
                    <br />
                    COLLECTION
                </h1>
            </div>

            {error && <p className="error">{error}</p>}

            {!error && (
                <div className="carousel-viewport">
                    <div
                        className="newCollectionCard_main"
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            transform: `translateX(calc(-${button * (100 / visibleItems)}% - ${button * carouselGap / visibleItems}px))`,
                            transition: animate
                                ? "transform 0.5s ease-in-out"
                                : "none",
                        }}
                    >
                        {carouselItems.map((item, index) => (
                            <div
                                className="collectionCards"
                                key={`${item.id}-${index}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="titleprice">
                                    <p className="title">{item.name}</p>
                                    <p className="price">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="prevNext_but">
                <button
                    className="prevs"
                    onClick={prevSlide}
                    disabled={imgthisweek.length <= visibleItems}
                >
                    Previous
                </button>

                <button
                    className="next"
                    onClick={nextSlide}
                    disabled={imgthisweek.length <= visibleItems}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default NewThisWeek;