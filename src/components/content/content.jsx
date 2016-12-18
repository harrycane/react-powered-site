import React, {Component, PropTypes} from "react";
import css from "./content.scss";

export default class Button extends Component {
    static props= {
        children: PropTypes.node
    }

    render() {
        const {children} = this.props;

        return (
            <div className={css.container}>
                {children}
            </div>
        )
    }
}
