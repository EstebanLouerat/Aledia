import React, { Component } from "react";

import UserService from "../services/user.service";
import Tab from "./tab.component";
import ValidationButton from './validation-button.component'
import '../styles/react-select.css'
import '../styles/react-datasheet.css';

export default class BoardSplitEntry extends Component {
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.getInputValue= this.getInputValue.bind(this);

    this.state = {
      content: "",
      showExcelGrid: false
    };
  }

  getInputValue() {
    const grid  = this.gridRef.current.getValue();
    return grid;
  }

  componentDidMount() {
    UserService.getSplitEntryBoard().then(
      response => {
        this.setState({
          content: response.data,
          showExcelGrid: true
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    const { content, showExcelGrid } = this.state;

    return (
      <div className="container">
        <h1 className="center underline">{content}</h1>
        {showExcelGrid && (
          <>
            <Tab ref={this.gridRef}/>
            <ValidationButton grid={this.getInputValue}/>
          </>
        )}
      </div>
    );
  }
}