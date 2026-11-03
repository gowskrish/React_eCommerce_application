import React, { useState, useEffect } from "react";
import axios from "axios";
import "./xivcollection.scss";
import {getXivCollection} from "../../../API/API";

function XIVCollections() {
    const [xivdata, setXivdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchXivCollection = async () => {
            try {
                // const xivcollection = await axios.get("http://localhost:3001/xivCollections");
                const xivcollection = await getXivCollection();
                setXivdata(xivcollection.data);
                // console.log("XIVCollections:" , xivcollection)                
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);                                                                                                  
            }

        }
        fetchXivCollection();
    }, [])

    // useEffect(()=>{
    //     console.log("xivdataxivdata", xivdata)
    // },[xivdata])

    useEffect(() => {
        // console.log("gone!!", error)
    }, [error])

    return (
        <>
            <div className="xiv-collection-main">
                <h1>XIV COLLECTIONS 23-24</h1>
                <div className="collectionCards_main">
                     {loading && <p>Loading......</p>}
                {error && <p className="error">{error}</p>}
                {xivdata.map((xivitems) => (
                    <div className="collectionCards" key={xivitems.id}>
                        <img src={xivitems.image} alt={xivitems.alt} />

                        <p>{xivitems.badge}</p>
                        <div className="xivpara">
                            <p>{xivitems.name}</p>
                            <p>{xivitems.price}</p>
                        </div>

                    </div>
                ))}

                </div>
               
            </div>
        </>
    )
}

export default XIVCollections;