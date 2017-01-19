import React, {Component} from "react";
import Content from '../content/content';
import css from "./homePage.scss";

export default class HomePage extends Component {
    render() {
        return (
           <Content className={css.container}>
              <Button>Show Posts</Button>
           </Content>
        )
    }
}
