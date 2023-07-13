import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  let [score, setScore] = useState(0);
  let [balls, setBall] = useState(0);
  let [wicket, setWicket] = useState(0);

  function increaseScore(a) {
    setScore(score + a);
  }
  function increaseWicket(a) {
    setWicket(wicket + a);
  }
  function decreaseWicket(a) {
    if (wicket == 0) return;
    setWicket(wicket - 1);
  }
  function decreaseBall(a) {
    if (balls == 0) return;
    setWicket(balls - 1);
  }
  function increaseBall(a) {
    setBall(balls + a);
  }
  function increaseScore(a) {
    setScore(score + a);
  }

  function decreaseScore(a) {
    if (score == 0) {
      return;
    }

    setScore(score - a);
    if (score <= 0) {
      setScore(0);
    }
  }
  function run1(){
    increaseScore(1);
    increaseBall(1);
  }
  function run2(){
    increaseScore(2);
    increaseBall(1);
  }
  function run3(){
    increaseScore(3);
    increaseBall(1);
  }
  function run4(){
    increaseScore(4);
    increaseBall(1);
  }
  function run6(){
    increaseScore(6);
    increaseBall(1);
  }
  function wide(){
    increaseScore(1);
    
  }
  function wicketdown(){
    increaseWicket(1);
    increaseBall(1);
  }
  return (
    <div>
      <header>Cricket Score Board</header>
      <div className="App">
        <div className="scoreBoard">
          <div className="item">Score = {score}</div>
          <div className="item">Wicket = {wicket}</div>
          <div className="item">
            Over = {Math.floor(balls / 6)}.{balls % 6}
          </div>
        </div>
        <div className="buttons">
          <span>
            <p>For 1 Run ={'>'} <button onClick={run1}>Click Here</button></p>
            <p>For 2 Run ={'>'} <button onClick={run2}>Click Here</button></p>
            <p>For 3 Run ={'>'} <button onClick={run3}>Click Here</button></p>
            <p>For 4 Run ={'>'} <button onClick={run4}>Click Here</button></p>
            <p>For 6 Run ={'>'} <button onClick={run6}>Click Here</button></p>
            <p>For Wide Ball Run ={'>'} <button onClick={wide}>Click Here</button></p>
            <p>For Wicket ={'>'} <button onClick={wicketdown}>Click Here</button></p>

          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
