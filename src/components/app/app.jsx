import React, {PropTypes, Component} from "react";
import Header from "../header/header";
import Content from "../content/content";
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
                <Content>
                    {children}
                </Content>
            </div>
        )
    }
}
