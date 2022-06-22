import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './LoginForm.css'
import {BsGoogle} from "react-icons/bs";
import Axios from "axios";



function LoginForm() {

        const google = () =>{
            window.open("http://localhost:8080/oauth2/authorization/google", "_self")
        }

        const [user, setUser] = useState([]);

        useEffect(() => {
            const getData = async () => {
                await Axios.get('http://localhost:8080/api/get/login').then((response)=> {
                    fetchingData(response.data);
                })
            }
            const fetchingData = (data) => {
                if (data.length > 0) {
                    for(let i = 0; i < data.length; i++) {
                        let newUser = {
                            user: data[i]["E_MAIL"],
                            pass: data[i]["HASLO"],
                        }
                        user.push(newUser)
                    }
                }
            }
            getData();

        }, [user]);

        console.log(user);
    const [details, setDetails] = useState({email: "", password: ""});
    const [error, setError] = useState("");
    const Login = details => {
        for(let i = 0; i < user.length; i++) {
            if (details.email === user[i].user && details.password === user[i].pass) {
                return (<div> </div>);
            } else {
                setError("Dane się nie zgadzają!")
            }
        }
    }

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div className="login">
            <form className="form" onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Logowanie</h2>
                    {(error !== "") ? ( <div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"
                               onChange={e => setDetails({...details, email: e.target.value})}
                               value={details.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Hasło:</label>
                        <input type="password" name="password" id="password"
                               onChange={e => setDetails({...details, password: e.target.value})}
                               value={details.password}
                        />
                    </div>
                    <input type="submit" value="ZALOGUJ" />
                    <Link to='/rejestracja'>
                        <button className="button">ZAREJESTRUJ</button>
                    </Link>
                    <div className="loginButton google" onClick={google}>
                        <BsGoogle color="white" fontSize="20px" />
                        &nbsp;&nbsp; Google
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;