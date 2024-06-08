import { Button } from "@mui/material";
import React, { Component } from "react";

class Reload extends Component {
    handleClick = (event) => {
      event.preventDefault();
      window.location.reload();
    };
    render() {
      return (
        <div>
          <Button
          id = "reload_button"
          style = {{marginLeft: "10px"}}
          onClick ={this.handleClick}
          variant = "contained"
          color = "primary"
          >
            Refresh Todo's
          </Button>
        </div>
      );
    }
  }
  
  export default Reload;