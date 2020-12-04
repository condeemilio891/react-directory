import React, { Component } from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title/";
import employees from "../employees.json";
import Row from "../components/Row"

class Staff extends Component {
  

  //setting this.state.employees to the employee json array
  state = {
    employees
  };


  // Map over this.state.employees and render a Card component for each Employee object
  render() {
    return (
      <Row>
        <Title>Employees</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            DOB={employee.DOB}
          />
        ))}
      </Row>
    );
  }
}

export default Staff;
