import React, {Component} from "react";
import {Link} from 'react-router';
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
                    <MenuItem><Link to="home">home</Link></MenuItem>
                    <MenuItem><Link to="about">about</Link></MenuItem>
                    <MenuItem><Link to="contacts">contacts</Link></MenuItem>
                </Menu>
            </div>
        )
    }
}
