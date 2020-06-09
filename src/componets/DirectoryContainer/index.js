import React, { Component } from "react";
import Col from "../Col";
import ColumnHeading from "../ColumnHeading";
import Container from "../Container";
import CardItem from "../CardItem"
import Navbar from "../Navbar/";
import Row from "../Row/";
import SearchBar from "../SearchBar/"
import employees from "../../employees.json"
import sorting from "../../util/sorting"

class DirectoryContainer extends Component {
  state = {
    employees,
    result: employees,
    search: "",
    sortState: 0
  };

  //when component mounts, display all employees


  // helper functions

  //input change on search bar
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]:value
    })
  }

  //submit on search bar
  handleFormSubmit = event => {
    event.preventDefault();
    let searchTerm = this.state.search

    // if returned term is empty, render all employees. otherwise, render selected employee
    if (searchTerm !== "") {
      this.filterEmployeesName(this.state.employees,searchTerm)
    } else {
      this.setState({
        result:employees
      })
    }    
  };

  // sort on column headings
  handleSortButton = event => {
    event.preventDefault();
    let newState;

    this.handleNameSort(this.state.result)  
    
    if (this.state.sortState===0) {
      newState = 1;
    } else {
      newState = 0;
    }

    this.setState({
      sortState:newState
    })
  }

  // filtering employees array based on first name
  filterEmployeesName = (object, searchTerm) => {
    let filteredEmployees = [];

    for (let i=0 ; i < Object.entries(object).length ; i++){
      if (searchTerm === object[i].name.first) {
          filteredEmployees.push(object[i]);
      }
    }
 
    this.setState({
      result:filteredEmployees
    })
  }

    // filtering employees array based on incoming data
    handleNameSort = (object) => {

      let sortedEmployees = sorting.nameSort(object,this.state.sortState);

      this.setState({
        result:sortedEmployees
      })
    }

  // when form is submitted, search json file for value
  
  render () {
    return (
        <div>
            <Container>
              <Row>
                <Col size="md-12">
                  <Navbar />
                </Col>
              </Row>
              <Row>
                <Col size="md-12">
                  <SearchBar 
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    // value={this.state.search}
                  />
                </Col>
              </Row>
              <ColumnHeading 
                handleNameSort={this.handleSortButton}
                value={this.state.sortState}
              />
              <Row>
                <Col size="md-12">
                  {this.state.result.map(employee => (
                    <CardItem 
                      id={employee.id}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      email={employee.email}
                      dob={employee.dob.date}
                      phone={employee.phone}
                      picture={employee.picture.large}
                    />
                    ))}
                </Col>
              </Row>
            </Container>            
        </div>
    )
  }

}

export default DirectoryContainer;