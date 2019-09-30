import React, { Component } from "react";
import styles from "./PersonItem.module.scss";

class PersonItem extends Component {
  state = {};

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <h4>{this.props.email}</h4>
        <article>
          <button onClick={() => this.props.handleDelete(this.props.details)}>
            Delete
          </button>
        </article>
      </section>
    );
  }
}

export default PersonItem;
