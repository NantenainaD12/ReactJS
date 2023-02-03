
import React, { useState } from 'react';
import axios from 'axios';
import {useHistory, useLocation} from "react-router-dom";

const Encherir = () => {
    const [date, setDate] = useState('');
    const [vola, setVola] = useState('');

    const locate = useLocation();
    const {id_client} = locate.state;
    const {id_encher} = locate.state;
   // console.log("tayy "+id_client );
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            async function fetchData() {
                const response =  await axios.post('https://webservice20-production.up.railway.app/encher/encherir',{
                    'id_client':id_client,
                    'id_encher': id_encher,
                    'daty_encherir':date,
                    'montant': vola
                });
                console.log(response.data);
                if (response.data==true){
                    history.push("/Product_milay");
                }
            }
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Encherir ici</h1>
            <label>
                date:
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </label>
            <br />
            <label>
                Monantant:
                <input type="number" value={vola} onChange={e => setVola(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Encherir;










// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
