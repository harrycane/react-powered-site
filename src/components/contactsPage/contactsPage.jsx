import React, {Component} from "react";
import Content from '../content/content';
import css from "./contactsPage.scss";

export default class ContactsPage extends Component {
    render() {
        return (
            <Content className={css.container}>
                this is contacts page content
            </Content>
        )
    }
}