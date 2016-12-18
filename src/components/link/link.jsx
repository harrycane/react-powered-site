import React, {Component} from "react";
import css from "./link.scss";

export default class App extends Component {
    static props= {
        children: PropTypes.node
    }

    render() {
        const {children} = this.props;

        return (
            <a className={css.container} href="">
                {children}
            </a>
        )
    }
}
