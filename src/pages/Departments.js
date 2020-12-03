
// import React, { Component } from 'react';
// import API from "../utils/API"
// import Employees from '../employees.json';


// class Department extends Component {

  
//     state={
//       search:null,
//       info:[]
//     };
  

//   searchSpace=(event)=>{
//     let keyword = event.target.value;
//     this.setState({search:keyword})
//   }
//   // use component did mount for api

//   componentDidMount() {
//    API.getUserData()
//    .then(res=> this.setState({info: res.data.message}))
//     .catch(err=>console.log(err));
//   }


//   render(){
//     const styleInfo = {
//       paddingRight:'10px'
//     }
//     const elementStyle ={
//       border:'solid',
//       borderRadius:'10px',
//       position:'relative',
//       left:'10vh',
//       height:'3vh',
//       width:'20vh',
//       marginTop:'5vh',
//       marginBottom:'10vh'
//     }
//     // const employees = Employees.filter((data)=>{
//     //   if(this.state.search == null)
//     //       return data
//     //   else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.occupation.toLowerCase().includes(this.state.search.toLowerCase())){
//     //       return data
//     //   }
    

//     // filter through json object from api instead of the file employeees.json
//     const employeeinfo

//     }).map(data=>{
//       return(
//       <div>
//         <ul>
//           <li style={{position:'relative',left:'10vh'}}>
//             <span style={styleInfo}>{data.name}</span>
//             <span style={styleInfo}>{data.occupation}</span>
//             <span style={styleInfo}>{data.DOB}</span>
//           </li>
//         </ul>
//       </div>
//       )
//     })

//     return (
//       <div>
//       <input type="text" placeholder="Name or Department" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
//       {employees}
//       </div>
//     )
//   }
// }




// export default Department