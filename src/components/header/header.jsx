import React, {Component} from "react";
import Logo from '../logo/logo'
import Menu from '../menu/menu';
import MenuItem from '../menuItem/menuItem';
import css from "./header.scss";

export default class Header extends Component {
    render() {
        return (
            <div className={css.container}>
                <Logo/>
                <Menu>
                    <MenuItem href="/" text="home"/>
                    <MenuItem href="/" text="about"/>
                    <MenuItem href="/" text="contacts"/>
                </Menu>
            </div>
        )
    }
}
