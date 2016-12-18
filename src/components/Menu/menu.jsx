import React, {Component, PropTypes} from "react";
import css from "./menu.scss";
export default class Menu extends Component {
    static props= {
        children:PropTypes.node
    };

    render() {
        const {children} = this.props;

        return (
            <ul className={css.container}>
                {children}
            </ul>
        )
    }
}
