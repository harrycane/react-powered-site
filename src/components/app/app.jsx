import React, {PropTypes, Component} from "react";
import Header from "../header/header";
import css from "./app.scss";

export default class App extends Component {
    static props = {
        children: PropTypes.node
    };

    render() {
        const {children} = this.props;
        return (
            <div className={css.container}>
                <Header/>
                {children}
            </div>
        )
    }
}
