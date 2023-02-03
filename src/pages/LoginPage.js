
import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";
import '../css/Login.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [client, setClient] = useState();
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("tayy");
        try {
            async function fetchData() {
                const response =  await axios.post('https://webservice20-production.up.railway.app/encher/login',{
                    'login':username,
                    'mdp': password
                });
                //console.log(response.data);
                checked(response.data);
            }
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };
    const checked = (any) => {
        console.log("KII "+any.nom);
        if (any.id_client!=-100){
            console.log("Misyy");
            localStorage.setItem("id_owner",any.id_client);
            const removeVariableFromLocalStorage = (variableName) => {
                setTimeout(() => {
                    localStorage.removeItem(variableName);
                }, 1 * 60 * 1000);
            };
            removeVariableFromLocalStorage('id_owner');

            history.push("/");
        }
        else{
            console.log("tsusy ehh");
            history.push("/Login");
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;










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
