import React, {Component} from "react";
import logo from '../../resources/img/logo.png';
import css from "./logo.scss";

export default class App extends Component {
    render() {
        const {children} = this.props;

        return (
            <img className={css.container} src={logo} alt=""/>
        )
    }
}
