import { Component } from 'react';
import "./classMain.css";

import "./main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import travellerImg from "../../assets/images/Traveller 1.png";
import planeImg from "../../assets/images/plane.png";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVideoOpen: false,
            fetchError: "",
        };
    }

    // componentDidMount() {
    //     console.log('Main component mounted');
    //     fetch("http://localhost:3000/products")
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`Failed to fetch products: ${response.status}`);
    //             }
    //                 console.log(response);
    //             return response.json();
    //         })
    //         .then((products) => {
    //             // console.log(products);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching products:", error);
    //             this.setState({
    //                 fetchError: error instanceof Error ? error.message : String(error),
    //             });
    //         });
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.isVideoOpen !== this.state.isVideoOpen) {
    //         // console.log('Video demo state changed:', this.state.isVideoOpen);
    //     }
    // }

    // componentWillUnmount() {
    //     console.log('Main component unmounting');
    // }

    toggleVideoDemo = () => {
        this.setState((prevState) => ({
            isVideoOpen: !prevState.isVideoOpen,
        }));
    };

    render() {
        const { users } = this.props;
        const { isVideoOpen, fetchError } = this.state;

        return (
            <div className="main">
                <div className="travel_text_left_main">

                    <h3 className="best_heading">
                        best destination around the world
                    </h3>

                    <h1 className="Traval_big_heading">
                        travel, enjoy and live a new and full life
                    </h1>

                    {fetchError && (
                        <p className="main-fetch-error" role="alert">
                            Could not load products: {fetchError}
                        </p>
                    )}

                    {users?.body && (
                        <p className="traval_para">
                            {users.body}
                        </p>
                    )}

                    <div className="find_video_but_main">

                        <button className="findout">
                            Find out more
                        </button>

                        <div className="video_butn_main">

                            <button onClick={this.toggleVideoDemo} aria-label={isVideoOpen ? "Pause demo video" : "Play demo video"}>
                                <i className={isVideoOpen ? "fa-solid fa-circle-pause" : "fa-solid fa-circle-play"}></i>
                            </button>

                            <p className="play">
                                {isVideoOpen ? "Pause Demo" : "Play Demo"}
                            </p>

                        </div>

                    </div>

                </div>

                <div className="travel_img_right_main">

                    <img src={travellerImg} className="img_traveller" />

                    <img src={planeImg} className="plane" />

                </div>
            </div>
        );
    }
}

export default Main;