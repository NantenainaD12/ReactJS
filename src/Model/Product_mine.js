import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Products.css';
import {useHistory, useLocation} from "react-router-dom";
import '../css/cssAfa.css';

function Product({ id_encher,id_owner, name, image, description }) {
    const history = useHistory();
    const handleClick = (item) => {
        history.push({
            pathname: '/details',
            state: { id: item}
            //  state: { item }
        });
    };
    return (
        <div className="product">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name"  onClick={() => handleClick(id_encher)}>{name}</h3>
            <p className="product-description">Owner: You</p>
            <p className="product-description">Description: {description}</p>
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

                />
            ))}
        </div>
    );
}

function Product_mine() {
    const [products, setProducts] = useState([]);

    const locate = useLocation();
    const {id_client} = locate.state;
    useEffect(() => {
        async function fetchData() {
            const response =  await axios.post('https://webservice20-production.up.railway.app/encher/my_propre_encher',{
                'id_client':id_client
            });
            setProducts(response.data);
            console.log(response.data);
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <header className="header">
                <h1>Product List</h1>
            </header>
            <main className="main">
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

export default Product_mine;
