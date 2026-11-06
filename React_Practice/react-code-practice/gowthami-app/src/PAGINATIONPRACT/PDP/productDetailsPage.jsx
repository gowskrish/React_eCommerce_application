import React, { useState, useEffect } from 'react'
import "./productDetailPage.scss"
import productDetailsData from "../../../pdpData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {useContext} from 'react';
import { ProductContext } from "../../context/productContext";
import {useParams} from 'react-router-dom';



function ProductDetails() {

    const [isLikeHeart, setIsLikeHeart] = useState(false)

    // console.log("PRODUCTS", product);
    const {selectProductId} = useContext(ProductContext);
    console.log("Receive selectProductId:", selectProductId)

    const {id} = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const product = productDetailsData.productDetails;
    console.log("ReferenceId:", id)


    useEffect(() => {
            const fetchProductDetails = async () => {
                try{

                    const response = await fetch(`http://localhost:3001/pdp?productId=${id}`)

                    if(!response.ok){
                        throw new Error("Fetching not Found")
                    }

                    const responseProductDetailId = await response.json()
                    console.log("fetchingDatafromId", responseProductDetailId)
                    setProductDetails(responseProductDetailId[0] || null) 


                }catch(error){
                    setError(error.message)
                
            } finally  {
                setLoading(false)
            }
            fetchProductDetails()
        }
    }, [id])
    // useEffect(()=> {
    //                 console.log("fetch:", response)

    // }, [])


    function handleHeart(){
        setIsLikeHeart(!isLikeHeart)

    }

    if (loading) return <h3>Loading...</h3>;

    if (error) return <h3>{error}</h3>;

    if (!productDetails) return <h3>Product Not Found</h3>;
    const item = productDetails;


        return (
        <>
            <div>
                {product.map((item) => (
                    <div key={item.productId} className="product_Details_main">
                        <img alt="product images" className="productImg" src={item.product.primaryImage} />
                        <div className="productSmallImag_main">
                            {item.product.images.map((x, index) => (
                                <div key={`${item.productId}-${x.id}-${index}`} className="productSmallImag">
                                    <img src={x.url} alt={x.alt}/>
                                </div>
                            ))}
                        </div>
                        <div className="productFullDetails">
                            <div className="hearLogo"><FontAwesomeIcon icon={faHeart} 
                            onClick={handleHeart}
                            style={{color : isLikeHeart ? "green" : "black"}}
                            className="heartIcon"/></div>
                            <h2>product</h2>
                            <h3>price</h3>
                            <p className="mrp">mrp details</p>
                            <p className="productPara">Details of products and extra details</p>
                            <div className="color_main">
                                <p className="colorHead">Color</p>
                                
                                <div className="colorSmall_Main">
                                    {item.product.colors?.map((c) => (
                                         <div className="color-1" key={c.id} style={{backgroundColor:c.hex}}></div>
                                    ))}                                   
                                    
                                </div>
                                <p className="colorHead">Size</p>
                                <div className="sizeSmall_Main">
                                    {item.product.sizes?.map((s) => (
                                        <div className="size" key={s}>{s}</div>
                                    ))}                                    
                                    
                                </div>
                                <p className="guidencePara">Find Size || measurement guide</p>
                            </div>
                            <button className="addbutn">ADD</button>
                        </div>
                    </div>
                ))}


            </div>

        </>
    )
}
export default ProductDetails;