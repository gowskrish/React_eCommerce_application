import React, {useState, useEffect} from 'react'
import "./ourapproach.scss";


function Ourapproach(){
    const  [appImg, setAppImg] = useState([])
    const [error, setError] = useState("")
     const [loading, setLoading] = useState(true);

    useEffect(() => {
        const ourFetchImg = async() => {
            try{
                const ourresponse = await fetch("http://localhost:3001/approach")

                if (!ourresponse.ok){
                    throw new Error("Fetching is not working")
                }

                const ourDatas = await ourresponse.json();
                // console.log("API data:", ourDatas);
                setAppImg(ourDatas);

            }catch(error){
                setError(error.message);
            }        
            
        };  

        ourFetchImg();

    }, [])


    return(
        <div className="ourapproach_main">
             <h1>OUR APPROACH TO FASHION DESIGN</h1>
                <p>At elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish
                .At elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish</p>
                <div className="ourApprochImgsec">
                         {/* {loading && <p>Loading......</p>} */}
                {error && <p className="error">{error}</p>}
                {appImg.map((appImgitems) => (
                    <div className="collectionCards" key={appImgitems.id}>
                        <img src={appImgitems.image} alt={appImgitems.alt} />

                    </div>
                ))}
                </div>
        </div>
        

    )
}
export default Ourapproach;