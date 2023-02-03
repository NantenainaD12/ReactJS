import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/cssAfa.css';
import {useHistory} from "react-router-dom";
import SearchBar from "./SearchBar";


function Product({ id_encher,id_owner, name, image, description ,daty_debut,daty_fin,max_encherir}) {
    const history = useHistory();
    const handleClick = (item) => {
        history.push({
            pathname: '/details',
            state: { id: item}
            //  state: { item }
        });
    };
    return (
        <div className="product" key={id_encher}>
            <img src={image} alt={image} className="product-image" />
            <h3 className="product-name"  onClick={() => handleClick(id_encher)}>{name}</h3>
            <p className="product-description">Owner: {id_owner}</p>
            <p className="product-description">Description: {description}</p>
            <p className="product-description">Max Encherir : <strong>{max_encherir}</strong></p>
        </div>
    );
}


function Products({ products }) {
    return (

        <div className="products">
            {products.map((product) => (
                <Product
                    key={product.id_encher }
                    id_encher ={product.id_encher }
                    id_owner={product.idutilisateur }
                    name={product.nom_produit}
                    image={product.sary}
                    description={product.about}
                    daty_debut={product.daty_debut}
                    daty_fin={product.daty_fin}
                    max_encherir={product.max_encherir}

                />
            ))}
        </div>
    );
}

function Product_milay() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://webservice20-production.up.railway.app/encher/get_all_current');
            setProducts(response.data);
            console.log(response.data);
        }
        fetchData();
    }, []);
    const history = useHistory();
    const handleClick = (item) => {
        ///if localstorage.session existe+> redirect encherir
        if(localStorage.getItem("id_owner")!=null){
            console.log("misy localstorage hh"+item.nom_produit);
            history.push({
                pathname: '/ownEncher',
                state: { id_client:localStorage.getItem("id_owner")}
                //  state: { item }
            });

        }
        ////else redirect login
        else {
            console.log("tsiy ehh"+item.nom_produit);
            history.push({
                pathname: '/Login',
                state: { id_client:2 ,id_encher: item.id_encher, }
                //  state: { item }
            });
        }
    };

    return (
    <div className="container">
        <header className="header">
            <h1>List Encher</h1>
            <SearchBar></SearchBar>
        </header>
        <main className="main">

            <button onClick={handleClick}>My own encher</button>
            <div className="product-list">
                {products.length ? (
                    <Products products={products} />
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </main>
        <footer className="footer">
            <p>Copyright © 2023 Example Co.</p>
        </footer>
    </div>
);
}

export default Product_milay;
