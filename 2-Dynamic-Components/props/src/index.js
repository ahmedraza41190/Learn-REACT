// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";


// let itemNumber = 18;

// function Hi(props) {
//   return (
//     <div>
//       Hello <strong> {props.name} !</strong>
//       <h1 className="h1">Welcome To REACT</h1>
//       <ul className="myList" id="23">
//         <li>Hello world React</li>
//         <li>React Import</li>
//         <li>React Components</li>
//         <li>React Rendering</li>
//         <li>5 + 10 = {5 + 10}</li>
//         <li>8 + 10 = {itemNumber}</li>
//         <li>8 + 10 + 1 increment = {++itemNumber}</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<Hi name="Ahmed" />, document.querySelector("#root"));



// -----------------------------FaceBook Post-----------------------------------

// function Post(props) {
//   return (
//     <div className="Post">

//       <h2>{props.name}</h2>

//       <span>28-Aug-2023</span>

//       <p><strong>{props.text}</strong></p>


//          <img width={300} src={props.imgUrl}></img> <br/>

//       <button>Like</button>
//       <button>Comments</button>
//       <button>Share</button>

//     </div>
//   );
// }

// ReactDOM.render(<div>
//   <Post text='"Audi E Tron GT"' imgUrl="https://www.ccarprice.com/products/Audi-E-Tron-GT-2021_1.jpg" name="Mustafa" />
//   <Post text='"70 dodge-charger-matte-black-edition"' imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQvTBQy_yFSbCbaf2CyPVxAmabJ6Cvtexs7Mc0vwIrBOY_njlNDykjWZovCthviCiiOY&usqp=CAU" name="Ahmed"/>
//   <Post text='"F-150 RAPTOR"' imgUrl="https://build.ford.com/dig/Ford/F-150%20F-150/2023/HD-TILE/Image%5B%7CFord%7CF-150%20F-150%7C2023%7C1%7C1.%7C801A.W1R.145.PUM.LSC.88R.89B.A5GAA.TGA.SS5.573.924.435.57Q.168.RCA.BLDAC.55D.SPP.91X.61P.53B.55B.CCAB.CLFGP.CLMHN.64B.T7R.59R.AWD.998.67T.413.655.66C.50N.91B.76R.F150.471.SRS.588.50M.524.62W.763.59S.85P.77R.44G.XL4.LEA.%5D/EXT/1/vehicle.png" name="Shaheer" />
// </div>, document.querySelector("#root"));








// -----------------------------------------Dynamic Part-2 -----------------------------------------


//-------------------------------------------De-Structure--------------------------

//-------------------------------------------1-obj---------

// let obj = {name: "Ahmed", roll: "abc"};

// //------Method-1----------both are same

// // let name = obj.name;    --------example
// // let roll = obj.roll;    --------example



// //------Method-2----------both are same

// let {name , roll} = obj;


// //------------------------------------------2-Array--------------

// let arr = [ "Ahmed" , "Aemi" , "Ragix"];

// //------Method-1----------both are same

// // let one = arr[0];    --------example
// // let two = arr[1];    --------example
// // let last = arr[2];    --------example

// //------Method-2----------both are same

// let [one, two, last] = arr;



//---------------------------------------------Arrow function and De-Structure Code------------

//let Card = ({ firstName }) => <div>Hello {firstName}</div>------------example

// const Post = ({ name, text, imgUrl }) => (
//     <div className="Post">

//         <h2>{name}</h2>

//         <span>28-Aug-2023</span>

//         <p><strong>{text}</strong></p>


//         <img width={300} src={imgUrl}></img> <br />

//         <button>Like</button>
//         <button>Comments</button>
//         <button>Share</button>

//     </div>
// )

// ReactDOM.render(<div>
//     <Post text={<b>"Audi E Tron GT"</b>}
//         imgUrl={"https://www.ccarprice.com/products/Audi-E-Tron-GT-2021_1.jpg"}
//         name={"Mustafa"}
//     />

//     <Post text={<b>"70 dodge-charger-matte-black-edition"</b>}
//         imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQvTBQy_yFSbCbaf2CyPVxAmabJ6Cvtexs7Mc0vwIrBOY_njlNDykjWZovCthviCiiOY&usqp=CAU"}
//         name={"Ahmed"}
//     />
//     <Post text={<b>"F-150 RAPTOR"</b>}
//         imgUrl={"https://build.ford.com/dig/Ford/F-150%20F-150/2023/HD-TILE/Image%5B%7CFord%7CF-150%20F-150%7C2023%7C1%7C1.%7C801A.W1R.145.PUM.LSC.88R.89B.A5GAA.TGA.SS5.573.924.435.57Q.168.RCA.BLDAC.55D.SPP.91X.61P.53B.55B.CCAB.CLFGP.CLMHN.64B.T7R.59R.AWD.998.67T.413.655.66C.50N.91B.76R.F150.471.SRS.588.50M.524.62W.763.59S.85P.77R.44G.XL4.LEA.%5D/EXT/1/vehicle.png"}
//         name={"Shaheer"}
//     />
// </div>, document.querySelector("#root"));




//--------------------------------------------if amd else --------------------------

// const Gate = ({ isOpen }) => (

//-----------Method-1------------

// <div>gate is {
//     (
//         (isOpen) => {
//             if (isOpen === true) {
//                 return "open"
//             } else {
//                 return "closed"
//             }
//         }
//     )(isOpen)
// }
// </div>

//-------------Method-2--------------

//  <div>gate is { (isOpen) ? "open" : "closed" }</div>
// )


//----------------method-3----------------------------

// const Gate = ({ name, text, imgUrl }) => (
//     <div className="Post">

//         <h2>{name}</h2>

//         <span>28-Aug-2023</span>

//         <p><strong>{text}</strong></p>

//         {
//             (imgUrl) ?  //if
//                 <img width={300} src={imgUrl} alt="this is poster image"></img>
//                 :  //else
//                 null
//         }

//         <br />

//         <button>Like</button>
//         <button>Comments</button>
//         <button>Share</button>

//     </div>
// )

// ReactDOM.render(<Gate isOpen={true} />, document.getElementById('root'))






/* 
------------------------------------Sir github code-------------------------------- */


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Stack, Button } from "react-bootstrap";
import { ArrowRight, Envelope, HandThumbsUp, ChatLeftText, Share } from "react-bootstrap-icons";


function Hi() {
  return (
    <div>
      <Stack direction="vertical" gap={2}>
        <Button as="a" variant="primary">
          <ArrowRight />
          Button as link
        </Button>
        <Button as="a" variant="success">
          <Envelope /> Button as link
        </Button>
      </Stack>

      <Stack direction="vertical" gap={2}>
        <Button>Click me</Button>
        Hello <strong>Malik</strong>
        <ul>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 1</li>
          <li>item 5</li>
          <li>item 1</li>
        </ul>
        <div className="last">{5 + 10}</div>
        {60 * 4}
        <img width={200} src="https://github.com/mInzamamMalik/b9-web-dev-SMIT/blob/main/6.%20React/hello/src/img/car.jpg?raw=true  " alt="" />
      </Stack>
    </div>
  );
}

function Post(props) {
  return (
    <div className="post">
      <div className="postHead">
        <img src={props.profileImg} width={65} height={65} alt="" />
        <div>
          <h1> {props.name} </h1>
          <div className="date"> {props.date}</div>
        </div>
      </div>

      <p> {props.text}</p>

      <img className="postImg" src={props.img} alt="" />

      <div className="postFooter">
        <div className="button">
          <HandThumbsUp />
          Like
        </div>
        <div className="button">
          <ChatLeftText /> Comment
        </div>
        <div className="button">
          <Share /> Share
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Post
      profileImg="https://avatars.githubusercontent.com/u/99830227?v=4"
      name="Inzamam Malik"
      date="3-Jan-2013 4:30 pm"
      img="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/353004991_634970768655599_1562410547950250051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iP5CdkXBKeQAX9MAERQ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCABLXGN6tiaYzYUK_yrCcQnWdrn0KxbFjCjy0ZTlGWSw&oe=64EDD6B0"
      text="What’s going on here? Well, at first, it just renders “Hello “ because we’re not passing a name yet. But aside from that…
        When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object. The props object is just a plain JS object, where the keys are prop names and the values are, well, the values of those props.
        You might then wonder, where do props come from? How do we pass them in? Good question."
    />
    <Post
      profileImg="https://avatars.githubusercontent.com/u/99830227?v=4"
      name="Abdul Wahid"
      date="20-Jan-2013 5:00 pm"
      img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg"
      text="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
    />
    <Post
      profileImg="https://avatars.githubusercontent.com/u/99830227?v=4"
      name="Shakoor"
      date="20-Jan-2013 5:00 pm"
      img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg"
      text="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
    />
  </div>,
  document.querySelector("#root")
);