import React, {Component, PropTypes} from "react";
import Link from '../link/link';
import css from "./menuItem.scss";

export default class MenuItem extends Component {
    static props = {
        text: PropTypes.string,
        href: PropTypes.string
    };

    render() {
        const {text, href} = this.props;
        return (
            <li className={css.container}>
                <Link href={href} text={text}/>
            </li>
        )
    }
}
