import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./prodDetails.css";

function ProdDetails(){

  let params = useParams();
  let [product, setProduct] = useState({});

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/${params.id}`)  
        .then((ProData) => {
        console.log(ProData.data);
        setProduct(ProData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return(
        <>
     <div className="container">
      <div class="wrapper">
        <div class="main_card">
          <div class="card_left">
            <div class="card_datails">
              <h2>{product.title}</h2>
              <div class="card_cat">
                <p class="year">Product ID: {product.id}</p>
                
                <p class="time">Product Price: {product.price} $</p>
              </div>
              <h4 class="disc">Product Description: {product.description}</h4>
              
            </div>
          </div>
          <div class="card_right">
            <div class="img_container">
              <img 
                src=
                {product.image}
                alt=""
              />
            </div>
            <br></br>
          </div>
          <br></br><br></br>
        </div>
      </div>
      </div>
        </>
    );
}
export default ProdDetails;