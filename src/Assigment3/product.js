import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from './store/action'

export default function Products(){

  let [proList, setproList] = useState([]);  
  const dispatch=useDispatch()

    useEffect(()=>{ 
      axios.get('https://fakestoreapi.com/products')
       .then((proData) => {
        console.log(proData);
        setproList(proData.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },[]);

    return (
        <>
          <div className="container">
        <div className="row">
          {proList.map((p) => (
            <div
              className="card col-3"
              style={{ width: 300, marginLeft: 10, marginBottom: 10 }}
            >
              <img class="card-img-top" src= {p.image} alt="Card image" />
              <div class="card-body">
              <Link to={`/productDetails/${p.id}`}>{p.title}</Link>
                <p class="card-text"></p>
                    <br></br>
                    <button  class="btn btn-primary" onClick={()=>dispatch(setFavorite(p))}>
                 Add to Favorites
                </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
}
