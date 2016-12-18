import React, {Component} from "react";
import Header from '../header/header';
import Content from '../content/content';

import css from "./app.scss";

export default class App extends Component {
     render() {
        return (
            <div className={css.container}>
                <Header/>
                <Content/>
            </div>
        )
    }
}
