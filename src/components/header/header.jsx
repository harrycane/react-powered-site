import React, {Component} from "react";
import css from "./header.scss";

export default class Header extends Component {
    render() {
        return (
            <div className={css.container}>
                <Logo/>
                <Menu>
                    <MenuItem text="home"/>
                    <MenuItem text="about"/>
                    <MenuItem text="contacts"/>
                </Menu>
            </div>
        )
    }
}
