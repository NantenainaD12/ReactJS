
import '../App.css';
import React, { useState } from 'react';
import YourComponent from "../component/Current_encher";
import ListPage from "../component/Func_list";
import {useHistory} from "react-router-dom";

const Homepage = () => {

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
        <form>
            <h1>AONAAA</h1>
            <button onClick={handleClick}>My own encher</button>
            <br />
            <ListPage />
        </form>
    );
};

export default Homepage;

