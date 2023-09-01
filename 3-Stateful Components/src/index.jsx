import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

//-------------------------------------------------------------------Destructure--------------------------------------


// const Post = ({ profileImg, name, date, text, img }) => (
//   <div className="post">
//     <div className="postHead">
//       <img src={profileImg} width={65} height={65} alt="" />
//       <div>
//         <h1> {name} </h1>
//         <div className="date"> {date}</div>
//       </div>
//     </div>
//     <br />

//     <p> {text}</p>

//     <img className="postImg" src={img} alt="" />

//     <div className="postFooter">
//       <div className="button">
//         <HandThumbsUp />
//         Like
//       </div>
//       <div className="button">
//         <ChatLeftText /> Comment
//       </div>
//       <div className="button">
//         <Share /> Share
//       </div>
//     </div>
//   </div>
// );

// ReactDOM.render(
//   <div>
//     <Post
//       profileImg={profileImg}
//       name="Inzamam Malik"
//       date="3-Jan-2013 4:30 pm"
//       img="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/353004991_634970768655599_1562410547950250051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iP5CdkXBKeQAX9MAERQ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCABLXGN6tiaYzYUK_yrCcQnWdrn0KxbFjCjy0ZTlGWSw&oe=64EDD6B0"
//       text="What’s going on here? Well, at first, it just renders “Hello “ because we’re not passing a name yet. But aside from that…
//         When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object. The props object is just a plain JS object, where the keys are prop names and the values are, well, the values of those props.
//         You might then wonder, where do props come from? How do we pass them in? Good question."
//     />
//     <Post
//       profileImg={profileImg}
//       name="Abdul Wahid"
//       date="20-Jan-2013 5:00 pm"
//       img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg"
//       text="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
//     />
//     <Post
//       profileImg={profileImg}
//       name="Shakoor"
//       date="20-Jan-2013 5:00 pm"
//       img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg"
//       text="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
//     />
//   </div>,
//   document.querySelector("#root")
// );






//--------------------------------------------------------------------useState-------------------------------------------


//-----------------------------------------------------Example-1--------------------------------

// const Counter = () => {
//   const [value, setValue] = useState(15);

//   const add = () => {
//     console.log("clicked");
//     setValue(value + 1);
//   };
//   const sub = () => {
//     console.log("clicked");
//     setValue(value - 1);
//   };

//   return (
//     <div>
//       <button onClick={add}>add</button>
//       {value}
//       <button onClick={sub}>sub</button>
//     </div>
//   );
// };

// ReactDOM.render(<Counter />, document.querySelector("#root"));







//-----------------------------------------------------Example-2--------------------------------

// const Room = () => {
//   const [isLit, setLit] = useState(true);

//   return (
//     <div className={`room ${isLit ? "lit" : "dark"}`}>
//       the room is {isLit ? "lit" : "dark"}
      
//       <br />
//       <button onClick={() => setLit(!isLit)}>flip</button>
//     </div>
//   );
// };

// ReactDOM.render(<Room />, document.querySelector("#root"));