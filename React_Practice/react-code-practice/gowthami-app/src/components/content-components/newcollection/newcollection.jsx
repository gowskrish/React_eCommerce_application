import React from 'react';
import {useState, useEffect} from 'react'
import './newcollection.scss'
// import WhitePant from  "../../../../images/WhitePant.png";
// import BlackTshirt from  "../../../../images/blackT-shirt.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function NewColloection(){

    const [imgproduct, setImgproduct] = useState([]);
    const [error, setError] = useState("")


    useEffect(() => {
        fetch("http://localhost:3001/newCollection")        
        .then(response => {
            if(!response.ok){
                throw new Error("Failed to fetch Data")
            }
            return response.json()
        })     
           
        .then(data_newCollectionData => setImgproduct(data_newCollectionData))
        .catch(error => setError(error.message))
    }, [])

    return(
        <>
        <div className="newcollection-main">
            <div className="newcollection_firstbox">
                <h1 className="newCollection_heading">NEW<br/>COLLECTION</h1>
                <h5 className="summer">Summer<br></br>2024</h5>
                <div className="buttonCoroal_main">
                <button className="gotoButn">Go to shop <FontAwesomeIcon className="rightArrow" icon={faArrowRight} /></button> 
                </div>

            </div>
            <div className="card">  
                {error && <p>{error}</p>}              
               {imgproduct.map((imgproducts) => (
                <div className="Cards" key={imgproducts.id}>
                    <img src={imgproducts.image} alt= "WhitePant" id={imgproducts.id} />
                </div>
               ))}
            </div>
        </div>
        </>
        
    )
}
export default NewColloection;