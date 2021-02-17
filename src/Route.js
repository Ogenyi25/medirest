import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Teams from './Pages/Teams';
import Contact from './Pages/Contact';
import Navbar from './component/Navbar';


export class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/teams" component={Teams} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default AppRouter;