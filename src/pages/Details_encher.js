import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import '../css/ProductDetails.css';
import '../css/Products.css';
function Details(){
        const locate = useLocation();
        const {id} = locate.state;
        const history = useHistory();
        const [data, setData] = useState([]);

        const  current_id=localStorage.getItem("id_owner");
     useEffect(() => {
         const fetchData = async () => {
             try {
                 const response = await axios.post('https://webservice20-production.up.railway.app/encher/get_encher_by_id', id, {
                     headers: {
                         'Content-Type': 'application/json'
                     }
                 });
                 setData(response.data);
                 console.log(response.data);
             } catch (error) {
                 console.error(error);
             }
         };
         fetchData();
     }, []);

    const isLog = (item) => {
     ///if localstorage.session existe+> redirect encherir
        if(localStorage.getItem("id_owner")!=null){
            console.log("misy localstorage hh"+item.nom_produit);
            history.push({
                pathname: '/Encherir',
                state: { id_client:localStorage.getItem("id_owner") ,id_encher: item.id_encher, }
                //  state: { item }
            });

        }
        ////else redirect login
        else {
            console.log("tsiy ehh"+item.nom_produit);
            history.push({
                pathname: '/login',
                state: { id_client:2 ,id_encher: item.id_encher, }
                //  state: { item }
            });
        }
    };

        return (
            <div className="container">
                <header className="header">
                    <h1>Product List</h1>
                </header>
                <main className="main">
        {data.map(item => (
            <div className="product-details-container">
            <div className="product-details">
                <div className="product-details">
                    <img src={item.sary} alt={item.image} className="product-image" />
                    <h3>{item.nom_produit}</h3>
                    <p> owner: {item.id_client}</p>
                    <p> idcategorie : {item.idCategorie }</p>
                    <p> about: {item.about}</p>
                    <p> prixmin: {item.prix}</p>
                    <p> max_encherir : {item.max_encherir}</p>
                    <p> daty_debut: {item.daty_debut}</p>
                    <p> daty_fin: {item.daty_fin}</p>
                    {
                        item.id_client !== current_id && (
                            <button onClick={() => isLog(item)}>Encherir</button>
                        )
                    }
                </div>
            </div>
            </div>
        ))}
        </main>
                <footer className="footer">
                    <p>Copyright © 2023 Example Co.</p>
                </footer>
            </div>
        );
}
export default Details;
