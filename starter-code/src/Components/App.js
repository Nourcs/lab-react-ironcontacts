import React, { Component } from "react";
import contacts from "../contacts.json";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(contacts[i]);
    }
    this.setState({
      contacts: arr
    });
    console.log(arr);
  }

  addRandom = () => {
    let random = Math.floor(Math.random() * contacts.length);
    let arr = [...this.state.contacts];

    if (arr.includes(contacts[random])) {
      this.addRandom();
    } else {
      arr.push(contacts[random]);
      this.setState({
        contacts: arr
      });
    }
    console.log(contacts[random]);
  };

  sortName = () => {
    let arr = [...this.state.contacts].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    console.log("ARR", arr);
    this.setState({
      contacts: arr
    });
  };

  sortPopularity = () => {
    let arr = [...this.state.contacts].sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      } else if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    });
    console.log("ARR", arr);
    this.setState({
      contacts: arr
    });
  };

  deletePerson = e => {
    let index = e.target.attributes.index.value;
    let arr = [...this.state.contacts];
    arr.splice(index, 1);
    this.setState({
      contacts: arr
    });
  };
  render() {
    return (
      <div>
        <h1>Contacts : {this.state.contacts.length}</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <button onClick={this.addRandom}>Add Random Contact</button>
              </td>
              <td>
                <button onClick={this.sortName}>Sort By Name</button>
              </td>
              <td>
                <button onClick={this.sortPopularity}>
                  Sort By Popularity
                </button>
              </td>
            </tr>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
            {this.state.contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={this.deletePerson} index={index}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
