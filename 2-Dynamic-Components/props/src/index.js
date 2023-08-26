import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


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