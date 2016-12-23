import React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import { Router, Route, browserHistory } from 'react-router';
import App from "./components/app/app.jsx";
import HomePage from "./components/homePage/homePage.jsx";
import AboutPage from "./components/aboutPage/aboutPage.jsx";
import ContactsPage from "./components/contactsPage/contactsPage.jsx";

import "./assets/styles/normalize.css";
import "./index.scss";

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="home" component={HomePage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="contacts" component={ContactsPage}/>
        </Route>
    </Router>,
    document.querySelector("#app")
);

if (module && module.hot) {
    module.hot.accept('./components/app/app.jsx', () => {
        const App = require('./components/app/app.jsx').default;
        render(
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="home" component={HomePage}/>
                    <Route path="about" component={AboutPage}/>
                    <Route path="contacts" component={ContactsPage}/>
                </Route>
            </Router>,
            document.querySelector("#app")
        );
    });
}
