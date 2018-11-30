import React, { Component } from "react";
import MonkeyDisplay from "./MonkeyDisplay.jsx";
import Typebox from "./Typebox.jsx";
import Market from "./Market.jsx";
import "../css/App.css";
import TypeGame from "../game_logic/TypeGame.js";
import shittyDB from "../../server/db/shittydb.json";
import BookButtons from "./BookButtons.jsx";
const chimp = require("../img/chimp-monkey.jpg");
const smart = require("../img/smart-monkey.jpg");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: "",
      lettArrs: [],
      classArrs: [],
      monkeyMarketArr: {
        Chimpanzee: {
          pic: smart,
          name: "Chimpanzee",
          multiplier: 1.15,
          existing: 0,
          price: 8
        },
        Orangutan: {
          pic: chimp,
          name: "Orangutan",
          multiplier: 1.1,
          existing: 0,
          price: 40
        }
      },
      monkeyBoughtArr: [],
      spanIndex: 0,
      totalBananas: 0
    };
  }

  componentDidMount() {
    console.log("componentdidmount");
  }
  componentDidUpdate() {
    console.log("updated");
  }

  changeMonkeyAmount = (name, plus) => {
    const MMA = this.state.monkeyMarketArr[name];
    if (plus && this.state.totalBananas >= MMA.price) {
      const ban = this.state.totalBananas - MMA.price;
      MMA.existing = MMA.existing + 1;
      MMA.price = Math.floor(MMA.price * MMA.multiplier);
      this.setState({
        price: MMA.price,
        existing: MMA.existing,
        totalBananas: ban
      });
    } else if (!plus && MMA.existing > 0) {
      MMA.existing = MMA.existing - 1;
      MMA.price = Math.floor(MMA.price / MMA.multiplier);
      const ban = this.state.totalBananas + MMA.price / 2;
      this.setState({
        price: MMA.price,
        existing: MMA.existing,
        totalBananas: ban
      });
    }
  };

  createSpans = () => {
    console.log("creating spans");
    console.log(this.state.currentSection)
    const lettArrs = [];
    this.state.currentSection.forEach(el => {
      const letters = el.split("");
      letters.forEach(ele => {
        lettArrs.push(ele);
      });
      lettArrs.push(" ");
    });
    const classArrs = new Array(lettArrs.length).fill("spans");
    classArrs[0] = "current-span";
    this.setState({ currentSection: this.state.currentSection , lettArrs: lettArrs, classArrs: classArrs, spanIndex:0 });
  };

  handleKeys = e => {
    console.log('keypress: '+ e.target.value)

    //this could be refactored
    if (this.state.lettArrs[this.state.spanIndex] === " ") {
      if (e.target.value === " ") {
        if (this.state.lettArrs[this.state.spanIndex + 1] === undefined) {
          console.log("is it even getting ni here");
          TypeGame.loadSection();
          console.log('current Section' +TypeGame.currentSection)
          this.state.currentSection = TypeGame.currentSection;
          return this.createSpans();
        } else {
          const newClassArrs = this.state.classArrs;
          newClassArrs[this.state.spanIndex] = "spans";
          newClassArrs[this.state.spanIndex + 1] = "current-span";
          const newSpanIndex = (this.state.spanIndex += 1);
          return this.setState({ classArrs: newClassArrs, spanIndex: newSpanIndex });
        }
      }
    } else if (TypeGame.checkLetter(e.target.value)) {
      const newClassArrs = this.state.classArrs;
      newClassArrs[this.state.spanIndex] = "dead-span";
      newClassArrs[this.state.spanIndex + 1] = "current-span";

      if (this.state.lettArrs[this.state.spanIndex + 1] === " ") {
        return this.setState({
          classArrs: newClassArrs,
          spanIndex: this.state.spanIndex + 1,
          totalBananas: this.state.totalBananas + 1
        });
      } else {
        return this.setState({
          classArrs: newClassArrs,
          spanIndex: this.state.spanIndex + 1
        });
      }
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
        <p>wut {this.state.totalBananas}</p>
        <button onClick={() => this.chooseBook(shittyDB)}>
          Pride and Prejudice
        </button>
        {/* <BookButtons /> */}
        <Typebox
          handleKeys={this.handleKeys}
          currentSection={this.state.currentSection}
          lettArrs={this.state.lettArrs}
          classArrs={this.state.classArrs}
        />
        <MonkeyDisplay />
        <Market
          totalBananas={this.state.totalBananas}
          monkeyMarketArr={this.state.monkeyMarketArr}
          changeMonkeyAmount={this.changeMonkeyAmount}
        />
      </div>
    );
  }
}
