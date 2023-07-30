{/* <Progress targetAmountFromApp={targetAmount}/> */}
// donationsFromApp={donations}

function Progress(props){
 let amounts = props.donationsFromApp
let Number = amounts.map((item)=> item.amount).reduce((a,b)=>a+b)



  return(
    <>
    <section className="progress">
  <h2>
    Raised <span className="secondary">${Number}</span> of
    <span className="secondary">${props.targetAmountFromApp}</span>
  </h2>
</section>
    </>
  )
}


export default Progress






















// function Progress({targetAmountFromApp}){
//   let amounts = props.donationsFromApp
//  let Number = amounts.map((item)=> item.amount).reduce((a,b)=>a+b)
 
//  //  let CouldBe = (donations.length + 1)
 
//    return(
//      <>
//      <section className="progress">
//    <h2>
//      Raised <span className="secondary">${Number}</span> of
//      <span className="secondary">${targetAmountFromApp}</span>
//    </h2>
//  </section>
//      </>
//    )
//  }
 
 
//  export default Progress
 



















// const targetAmount = 1000;
// const donations = [
//   {
//     amount: 250,  
//     caption: "You really need this. Really.",
//     id: 1,
//     name: "Jo",
//   },
//   {
//     amount: 30,  
//     caption: "Here, take a break from work!",
//     id: 2,
//     name: "Rami",
//   },
//   {
//     amount: 20,  
//     caption: "LOL! You are too funny. Happy to do this for you. :)",
//     id: 3,
//     name: "Michelle",
//   },
//   {
//     amount: 5,  
//     caption: "Have fun!",
//     id: 4,
//     name: "Malinda",
//   },
//   {
//     amount: 30,  
//     caption: "Come visit me in Miami!",
//     id: 5,
//     name: "Sam",
//   },
// ];















//  function Progress() {
// //Why do I have to map before I reduce in JSX??!!

//   let number = donations.map((item)=> item.amount) 
//   let Total = number.reduce((a,b)=>a+b)
//  let CouldBe = (donations.length + 1)
// return (
//   <>
//     <div>
//     Raised ${Total} of ${targetAmount}
//     </div>
//  <div>
//   You could be donation #{CouldBe}
//  </div>
//  </>
//   );
// }

// export default Progress
