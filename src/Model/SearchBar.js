import React, { useState } from "react";
import {blue} from "@mui/material/colors";
import axios from "axios";


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchOption, setSearchOption] = useState("title");
    const[script,setScript]=useState("");
    let ss = "and";
    const handleTextChange = (event) => {
       // console.log("niiova ehh"+event.target.value);
        setSearchTerm(event.target.value);
    };

    const handleOptionChange = (event) => {
       // console.log("niiova ehh option"+event.target.value);
        setSearchOption(event.target.value);
    };
    const generer = () => {


        if (searchTerm && searchTerm !== '') {
            ss += " about like  '%" + searchTerm + "%'";
            console.log("search " + searchTerm + " option " + searchOption);
            console.log("scripts " + ss );
        }
        if (searchOption && searchOption !== "") {
            ss += " and idcategorie    = 1";
            console.log("huhu"+ss);
        }
        console.log("GGGG " + ss );
        setScript(ss);
        console.log("SCRIPT " + ss);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("JJJJJ");
        generer();
        try {
            async function fetchData() {
                const response = await axios.post('https://webservice20-production.up.railway.app/encher/recherche', ss, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
           <p color={blue}><input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleTextChange}
            />
             Categorie: <select value={searchOption} onChange={handleOptionChange}>
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="category">Category</option>
            </select>
               <button type="submit">Search</button>
           </p>
        </form>
    );
};

export default SearchBar;
