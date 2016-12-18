import React, {Component, PropTypes} from "react";
import css from "./button.scss";

export default class Button extends Component {
    static props= {
        children: PropTypes.node
    }

    render() {
        const {children} = this.props;
        return (
            <button className={css.container} type="button">
                {children}
            </button>
        )
    }
}
