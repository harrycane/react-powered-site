import React, {Component, PropTypes} from "react";
import css from "./button.scss";

export default class Button extends Component {
    static props= {
        children: PropTypes.node,
        onClick: PropTypes.func
    };

    render() {
        const {children, onClick} = this.props;

        return (
            <button onClick={onClick} className={css.container} type="button">
                {children}
            </button>
        )
    }
}
