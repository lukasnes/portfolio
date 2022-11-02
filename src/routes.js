import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'

export default (
    <Routes>
        <Route exact path="/portfolio/" element={ <Home /> }/>
        <Route exact path="/portfolio/about" />
        <Route exact path="/portfolio/skills" />
        <Route exact path="/portfolio/projects" />
        <Route exact path="/portfolio/contact" />
        <Route path="/" element={ <Home /> }/>
    </Routes>
)