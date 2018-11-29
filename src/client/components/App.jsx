import React, { Component } from "react";
import MonkeyDisplay from "./MonkeyDisplay.jsx";
import Typebox from "./Typebox.jsx";
import Market from "./Market.jsx";
import "../css/App.css";
import TypeGame from "../game_logic/TypeGame.js";
import shittyDB from "../../server/db/shittydb.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: "",
      lettArrs: [],
      classArrs: [],
      spanIndex: 0
    };
  }

  componentDidMount() {
    console.log("componentdidmount");
  }
  componentDidUpdate() {
    console.log("updated");
  }

  // createSpans = () => {
  //   console.log('spans created')
  //   const spans = [];
  //   this.state.currentSection.forEach(el => {
  //     const letters = el.split("");
  //     letters.forEach(ele => {
  //       spans.push(<span className="spans">{ele}</span>);
  //     });
  //     spans.push(<span> </span>);
  //   });
  //   console.log(spans)
  //   this.setState({ spans: spans });
  // };

  createSpans = () => {
    console.log("creating spans");
    const lettArrs = [];
    this.state.currentSection.forEach(el => {
      const letters = el.split("");
      letters.forEach(ele => {
        lettArrs.push(ele);
      });
      lettArrs.push(" ");
    });
    const classArrs = new Array(lettArrs.length).fill("spans");
    this.setState({ lettArrs: lettArrs, classArrs: classArrs });
  };

  handleKeys = e => {
    console.log("keypress: " + e.target.value);
    console.log(this.state.lettArrs[this.state.spanIndex]);
    if (this.state.lettArrs[this.state.spanIndex] === " ") {
      this.state.spanIndex += 1;
    }
    if (TypeGame.checkLetter(e.target.value)) {
      const newClassArrs = this.state.classArrs;
      newClassArrs[this.state.spanIndex] = "dead-span";
      const newSpanIndex = this.state.spanIndex += 1;
      // if(this.state.spanIndex === this.state.lettArrs.length){


      // }
      this.setState({classArrs : newClassArrs, spanIndex :newSpanIndex})
    }
  };

  chooseBook = book => {
    //eventually make ajax call to server
    console.log("chooseBook");
    TypeGame.loadBook(book);
    const cs = TypeGame.currentSection;
    this.state.currentSection = cs;
    this.createSpans();
  };

  render() {
    return (
      <div id="App">
        <h1>Monkey Typewriter</h1>
        <button onClick={() => this.chooseBook(shittyDB)}>
          Pride and Prejudice
        </button>
        <Typebox
          handleKeys={this.handleKeys}
          currentSection={this.state.currentSection}
          lettArrs={this.state.lettArrs}
          classArrs={this.state.classArrs}
        />
        <MonkeyDisplay />
        <Market />
      </div>
    );
  }
}
