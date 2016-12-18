import React, {Component, PropTypes} from "react";
import css from "./link.scss";

export default class Link extends Component {
    static props= {
        children: PropTypes.node,
        href: PropTypes.string,
        text: PropTypes.string
    };

    render() {
        const {children, href, text} = this.props;

        return (
            <a className={css.container} href={href}>
                {children}
                {text}
            </a>
        )
    }
}
