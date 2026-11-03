import "./main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import travellerImg from "../../assets/images/Traveller 1.png";
// import playbutton from "../../assets/images/playbutton.png";
import planeImg from "../../assets/images/plane.png";

function MainOld() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

        return response.json();
      })
      .then((products) => {
        // console.log(products);
        setData(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log("data from main", data);


  return (
    <div className="main">
      <div className="travel_text_left_main">

        <h3 className="best_heading">
          best destination around the world *******************
        </h3>

        <h1 className="Traval_big_heading">
          travel, enjoy and live a new and full life
        </h1>

        {users?.body && (
          <p className="traval_para">{users.body}</p>
        )}

        <div className="find_video_but_main">
          <button className="findout">
            Find out more
          </button>

          <div className="video_butn_main">
            <button>
              <i className="fa-solid fa-circle-play"></i>
            </button>

            <p className="play">
              Play Demo
            </p>
          </div>
        </div>

      </div>

      <div className="travel_img_right_main">
        <img src={travellerImg} className="img_traveller" />
        <img src={planeImg} className="plane" />
      </div>
    </div>
  )
}

export default MainOld;