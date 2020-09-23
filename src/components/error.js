import React from "react";
import { Error } from "@material-ui/icons";

class ErrorModel extends React.Component {
  
  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          top: "0px",
          left: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "50px",
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Error color="red" />
          <div>Something went wrong!</div>
          <div>Check your internet connection or Try again later</div>
          <div
            style={{
              cursor: "pointer",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              marginTop: "25px",
            }}
            onClick={() => {
              this.props.noError();
            }}
          >
            OK
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorModel;
