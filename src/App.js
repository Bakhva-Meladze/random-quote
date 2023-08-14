import logo from './logo.svg';
import './App.css';
import React from "react";
const Quote = [
  {
    "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
  {
    "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
  {
    "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
  {
    "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
  {
    "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
  {
    "quote":"You miss 100% of the shots you don’t take.","author":"Wayne Gretzky"},
  {
    "quote":"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
  {
    "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"}

]
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      quote:"",
      author:"",
      number:0,
      color: getRandomColor()
    }
      this.put = this.put.bind(this);
      console.log(this.state.number);

  }

    put =() => {
       this.setState({
         number: Math.floor((Math.random() * 7) + 1),
         color: getRandomColor()

       });
    }
  render() {
    return (
        <div className="main" style={{background: this.state.color}}>
          <div className="text">{Quote[this.state.number].quote}</div>
          <div className="author">{Quote[this.state.number].author}</div>
          <button className="button" onClick={ ()=>this.put()}>Increment</button>
        </div>
    );
  }
}




export default App;
