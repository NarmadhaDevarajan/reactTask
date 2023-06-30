// // function Header({course}){
// //   return(
// //     <h1>{course}</h1>
// //   )
// // }

// // function Content({part,exercise}){
// //   return(
  
// //       <p>{part}{exercise}</p>
  
// //   )
// // }
// // function Total({exercises}){
// //   return(
// //     <p>Number Of Exercises {exercises}</p>
// //   )
// // }
// // function App() {
// //   const course='Half Stack application development';
// //   const part1='Fundamentals of React';
// //   const exercises1=10;
// //   const part2='Using props to pass data';
// //   const exercises2=7;
// //   const part3='State of component';
// //   const exercises3=14;

//   // return (
//   //   <div>
//   //     <h1>{course}</h1>
//   //     <p>{part1}{excercises1}</p>
//   //     <p>{part2}{excercises2}</p>
//   //     <p>{part3}{excercises3}</p>
//   //     <p>Number of Excercises{excercises1+excercises2+excercises3}</p>
//   //   </div>
//   // );

// // return(
// //   <div>
// //     <Header course={course}/>
// //     <Content part={part1} exercise={exercises1}/>
// //     <Content part={part2} exercise={exercises2}/>
// //     <Content part={part3} exercise={exercises3}/>
// //     <Total exercises={[exercises1+exercises2+exercises3]}/>
// //   </div>
// // );

// // }

// // export default App;


// // import { useState } from 'react'

// // function App() {
// //   const [good,setGood]=useState(0);
// // const [neutral,setNeutral]=useState(0);
// // const [bad,setBad]=useState(0);

// //   return (
// //     <div>
// //       <div>
// //       <h1>give feedback</h1>
// //       <button onClick={()=>setGood(good+1)}>good</button>
// //       <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
// //       <button onClick={()=>setBad(bad+1)}>bad</button>

// //       </div>
// //       <div>
// //         <h1>Statistics</h1>
// //         <p>good {good}</p>
// //         <p>neutral {neutral}</p>
// //         <p>bad {bad}</p>
// //         <p>all {good+neutral+bad}</p>
// //         <p>average {(good+neutral+bad)/3}%</p>
// //         <p>positivity {(good/(good+neutral+bad)*100)}%</p>
        
// //       </div>
// //       </div>
// //   );
// // }

// // export default App

// import { useState } from 'react'


// function Statistics(good,neutral,bad){
//   return(
//     <div>
        
//         <h1>Statistics</h1>
//         <p>good {good}</p>
//         <p>neutral {neutral}</p>
//         <p>bad {bad}</p>
//         <p>all {good+neutral+bad}</p>
//         <p>average {(good+neutral+bad)/3}%</p>
//         <p>positivity {(good/(good+neutral+bad)*100)}%</p>
        
//       </div>

//   )
// }
// function Button(handleClick,text){
//   return(
//     <button onClick={handleClick}>{text}</button>
//   )
// }

// function App() {
// const [good,setGood]=useState(0);
// const [neutral,setNeutral]=useState(0);
// const [bad,setBad]=useState(0);

//   return (
//     <div>
//       <div>
//       <h1>give feedback</h1>
//       <Button handleClick={()=>setGood(good+1)} text="good"/>
//       <Button handleClick={()=>setNeutral(neutral+1)} text="neutral"/>
//       <Button handleClick={()=>setGood(bad+1)} text="bad"/>
      

//       </div>
//       <Statistics good={good} neutral={neutral} bad={bad}/>
      
//       </div>
//   );
// }

// export default App

// import React from 'react'
// function List(props)
// {
//   return(
//     <div>✔{props.name}</div>
//   )
// }
// function Item(props)
// {
//   return(
//     <div>×{props.name}</div>
//   )
// }

// function App() {

//   return (
//     <div className="container">
//       <h4>Result  HTML  Css  JavaScript  Resources</h4>
//       <div className="row">
//         <div className="col">

//       <div className='card' alt="card2" width="100%">
//         <div className='card-body'>
//         <h5>PLUS</h5>
//     <h6 className='card-price text-center'>$0/month</h6>
//     <p>-----------------------------</p>
    
// <ul><List name="Single User"/>
//   <List name="5GB Storage"/>
//   <List name="Unlimited Public Project"/>
//   <List name="Community Access"/>
//   <Item name="Unlimited Private Projects"/>
//   <Item name="Dedicated Phone Support"/>
//   <Item name="Free Sub Domain"/>
//   <Item name="Monthly Status Report"/>
  
  
//   </ul>
//     <button>BUTTON</button>
     
//     </div>
//     </div>
//     </div>
    
//     <div className="col">

//       <div className='card' alt="card1" width="100%">
//         <div className='card-body'>
          
    
//     <h5>Free</h5>
//     <h6 className='card-price text-center'>$9/month</h6>
//     <p>-----------------------------</p>
//     <ul>
//     <List name=<b>5 Users</b> />
//   <List name="50GB Storage"/>
//   <List name="Unlimited Public Projects"/>
//   <List name="Community Access"/>
//   <List name="Unlimited Private Projects"/>
//   <List name="Dedicated Phone Support"/>
//   <List name= "Free SubDomain"/>
//   <Item name="Monthly Status Report" status="disable"/>
// </ul>

//       <button>BUTTON</button>
//         </div>
//     </div>
//     </div>

//     <div className="col">

// <div className='card' alt="card1" width="100%">
//   <div className='card-body'>
    

// <h5>PRO</h5>
// <h6 className='card-price text-center'>$49/month</h6>
// <p>-----------------------------</p>
// <ul>
// <List name=<b>Unlimited Users</b> />
// <List name="150GB Storage"/>
// <List name="Unlimited Public Projects"/>
// <List name="Community Access"/>
// <List name="Unlimited Private Projects"/>
// <List name="Dedicated Phone Support"/>
// <List name= "Unlimited Free SubDomain"/>
// <List name="Monthly Status Report" status="disable"/>
// </ul>

// <button>BUTTON</button>
//   </div>
// </div>
// </div>





//     </div>
//     </div>
//   )
// }

// export default App










































