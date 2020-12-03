import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title/";
// import employees from "../employees.json";
import API from "../util/API"
class Staff extends Component {
  

  //setting this.state.employees to the employee api
  state = {
    employees:[]
  };

  componentDidMount(){
    API.getUserData()
    .then(res=> this.setState({employees: res.data.results}))
    console.log(employees)
  }


  // Map over this.state.employees and render a Card component for each Employee object
  render() {
    return (
      <Wrapper>
        <Title>Employees</Title>
        {this.state.employees.map(employees => (
          <EmployeeCard
            id={employees.id}
            key={employees.id}
            name={employees.name}
            image={employees.picture}
            occupation={employees.occupation}
            DOB={employees.dob}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Staff;
