import React from "react";
import axios from "axios";
import moment from "moment";
import { PuffLoader } from "react-spinners";

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      date: this.props.data.date,
      note: this.props.data.note,
      amount: this.props.data.amount,
      isLoading: false,
    };
  }
  componentDidMount() {
    document.getElementById("titleModel").value = this.props.data.title;
    document.getElementById("dateModel").value = this.props.data.date;
    document.getElementById("noteModel").value = this.props.data.note;
    document.getElementById("amountModel").value = this.props.data.amount;
  }

  validate() {
    var formats = [moment.ISO_8601, "DD/MM/YYYY", "D/M/YY", "D/M/YYYY"];
    if (document.getElementById("titleModel").value.length < 4) {
      document.getElementById("titleModel").className = "err";
      document.getElementById("titlespanModel").className = "spanerr";
    } else {
      document.getElementById("titlespanModel").className = "nospanerr";
      document.getElementById("titleModel").className = "";
    }

    if (
      !moment(
        document.getElementById("dateModel").value,
        formats,
        true
      ).isValid()
    ) {
      document.getElementById("dateModel").className = "err";
      document.getElementById("datespanModel").className = "spanerr";
    } else {
      document.getElementById("datespanModel").className = "nospanerr";
      document.getElementById("dateModel").className = "";
    }

    if (document.getElementById("noteModel").value.length < 8) {
      document.getElementById("noteModel").className = "err";
      document.getElementById("notespanModel").className = "spanerr";
    } else {
      document.getElementById("notespanModel").className = "nospanerr";
      document.getElementById("noteModel").className = "";
    }

    if (
      isNaN(document.getElementById("amountModel").value) ||
      document.getElementById("amountModel").value === ""
    ) {
      document.getElementById("amountModel").className = "err";
      document.getElementById("amountspanModel").className = "spanerr";
    } else {
      document.getElementById("amountspanModel").className = "nospanerr";
      document.getElementById("amountModel").className = "";
    }

    if (
      document.getElementById("titleModel").className === "" &&
      document.getElementById("amountModel").className === "" &&
      document.getElementById("dateModel").className === "" &&
      document.getElementById("noteModel").className === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

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
        {this.state.isLoading ? (
          <PuffLoader color="white"/>
        ) : (
          <div
            style={{
              height: "auto",
              width: "50vw",
              backgroundColor: "#6200ee",
              padding: "10vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px"
            }}
          >
            <input
              id="titleModel"
              placeholder="Title"
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
            ></input>
            <span id="titlespanModel" className="nospanerr">
              Atleast 4 characters
            </span>
            <input
              id="amountModel"
              placeholder="Amount"
              onChange={(e) => {
                this.setState({ amount: e.target.value });
              }}
            ></input>
            <span id="amountspanModel" className="nospanerr">
              Must be a valid amount
            </span>
            <input
              id="noteModel"
              placeholder="Note"
              onChange={(e) => {
                this.setState({ note: e.target.value });
              }}
            ></input>
            <span id="notespanModel" className="nospanerr">
              Atleast 4 characters
            </span>
            <input
              id="dateModel"
              placeholder="Date (DD/MM/YYYY)"
              onChange={(e) => {
                this.setState({ date: e.target.value });
              }}
            ></input>
            <span id="datespanModel" className="nospanerr">
              Must be a valid date
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <div
                className="button"
                onClick={() => {
                  if (this.validate()) {
                    this.setState({
                      isLoading: true,
                    });
                    const headers = {
                      "Access-Control-Allow-Origin": "*",
                      "Content-Type": "application/json",
                    };
                    const data = {
                      title: this.state.title,
                      date: this.state.date,
                      note: this.state.note,
                      amount: this.state.amount,
                    };
                    console.log("validated");

                    axios
                      .put(
                        `https://stackmaze.herokuapp.com/expenses/${this.props.data.id}`,
                        data,
                        {
                          headers: headers,
                        }
                      )
                      .then((response) => {
                        this.props.setData(response.data);
                        this.setState({
                          isLoading: false,
                        });
                        this.props.close();
                      })
                      .catch(() => {
                        this.props.error();
                      });
                  }
                }}
              >
                UPDATE
              </div>
              <div
                className="button"
                onClick={() => {
                  this.props.close();
                }}
              >
                CANCEL
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Model;
