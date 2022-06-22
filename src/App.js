import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import ProductsPage from "./components/pages/ProductsPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import CartPage from "./components/pages/CartPage";
import Footer from "./components/Footer";
import AdminPage from "./components/pages/AdminPage";
import AdminEditPage from "./components/pages/AdminEditPage";


const App = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:8080/user", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                    setUser(resObject);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
    }, []);

    console.log("uzytkownik: ", user);

    return (
        <Router>
            <Header user={user} />
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/produkty' element={<ProductsPage/>}/>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/rejestracja' element={<RegisterPage />}/>
                <Route path='/koszyk' element={<CartPage user={user}/>}/>
                <Route path='/admin' element={<AdminPage />}/>
                <Route path='/edit_produkt/:id_produktu' element={<AdminEditPage/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
