import React, { Component } from "react";
import styles from "./SecretSantaContainer.module.scss";
import PersonItem from "../components/PersonItem";
// import { TextInput, Modal, Icon } from "react-materialize";

class SecretSantaContainer extends Component {
  state = {
    inputValueName: "",
    inputValueEmail: "",
    detailsArray: [],
    randomDetailsArray: []
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  createRandomArray = event => {
    event.preventDefault();
    this.setState({
      randomDetailsArray: this.shuffleArray(this.state.detailsArray)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      detailsArray: [
        ...this.state.detailsArray,
        { name: this.state.inputValueName, email: this.state.inputValueEmail }
      ],
      inputValueName: "",
      inputValueEmail: ""
    });
  };

  handleChangeNewName = event => {
    this.setState({ inputValueName: event.target.value });
  };

  handleChangeNewEmail = event => {
    this.setState({ inputValueEmail: event.target.value });
  };

  handleDelete = itemToBeDeleted => {
    let newArr = this.state.detailsArray.filter(
      item => item !== itemToBeDeleted
    );
    this.setState({ detailsArray: newArr });
  };

  render() {
    return (
      <section>
        <h1>Secret Santa Generator</h1>
        <form>
          <label>Add Name </label>
          <input
            type="text"
            value={this.state.inputValueName}
            onChange={this.handleChangeNewName}
          />
          <label>Add Email </label>
          <input
            type="text"
            value={this.state.inputValueEmail}
            onChange={this.handleChangeNewEmail}
          />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
          <input
            type="submit"
            value="Generate"
            onClick={this.createRandomArray}
          />
        </form>

        <section className={styles.toDoItemsWrapper}>
          {this.state.detailsArray.map((details, index) => (
            <PersonItem
              name={details.name}
              email={details.email}
              details={details}
              handleDelete={this.handleDelete}
            />
          ))}
        </section>
      </section>
    );
  }
}

PersonItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default SecretSantaContainer;
