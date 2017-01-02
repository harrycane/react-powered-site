import React, {Component} from "react";
import Content from '../content/content';
import css from "./aboutPage.scss";

export default class AboutPage extends Component {
    render() {
        return (
            <Content className={css.container}>
                this is about page content
            </Content>
        )
    }
}