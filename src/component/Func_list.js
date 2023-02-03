
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory,Route} from "react-router-dom";


function ListPage() {

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://webservice20-production.up.railway.app/encher/get_all_current');
            setData(response.data);
        }
        fetchData();
    }, []);
    const history = useHistory();
    const handleClick = (item) => {
        history.push({
            pathname: '/details',
            state: { id: item.id_encher }
          //  state: { item }
        });
    };

    return (
        <div>
            <h1>List of Items</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id} onClick={() => handleClick(item)}>{item.nom_produit}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListPage;
