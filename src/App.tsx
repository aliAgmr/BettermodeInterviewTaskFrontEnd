import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import {CookiesProvider, useCookies} from 'react-cookie'

function App() {
    const [cookies, setCookie] = useCookies(['user']);

    function handleLogin(user: any) {
        setCookie('user', user, {path: '/'})
    }

    return (
        <BrowserRouter>
            <CookiesProvider>
                <Layout>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home/>}></Route>
                            <Route path="community" element={<Community/>}></Route>
                            <Route path="*" element={<NotFound/>}/>
                        </Route>
                    </Routes>
                </Layout>
            </CookiesProvider>
        </BrowserRouter>
  );
}

export default App;
