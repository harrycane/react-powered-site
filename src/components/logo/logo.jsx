import React, {Component} from "react";
import logo from '../../resources/img/logo.png';
import css from "./logo.scss";

export default class Logo extends Component {
    render() {
        return (
            <img className={css.container} src={logo} alt=""/>
        )
    }
}
