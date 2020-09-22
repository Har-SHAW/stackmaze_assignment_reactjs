import React from "react";
import "./App.css";
import { Delete, Edit } from "@material-ui/icons";
import axios from "axios";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      note: "",
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://stackmaze.herokuapp.com/expenses")
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  validate() {
    var formats = [moment.ISO_8601, "DD/MM/YYYY", "D/M/YY", "D/M/YYYY"];
    if (document.getElementById("title").value.length < 4) {
      document.getElementById("title").className = "err";
      document.getElementById("titlespan").className = "spanerr";
    } else {
      document.getElementById("titlespan").className = "nospanerr";
      document.getElementById("title").className = "";
    }

    if (
      !moment(document.getElementById("date").value, formats, true).isValid()
    ) {
      document.getElementById("date").className = "err";
      document.getElementById("datespan").className = "spanerr";
    } else {
      document.getElementById("datespan").className = "nospanerr";
      document.getElementById("date").className = "";
    }

    if (document.getElementById("note").value.length < 8) {
      document.getElementById("note").className = "err";
      document.getElementById("notespan").className = "spanerr";
    } else {
      document.getElementById("notespan").className = "nospanerr";
      document.getElementById("note").className = "";
    }

    if (
      isNaN(document.getElementById("amount").value) ||
      document.getElementById("amount").value === ""
    ) {
      document.getElementById("amount").className = "err";
      document.getElementById("amountspan").className = "spanerr";
    } else {
      document.getElementById("amountspan").className = "nospanerr";
      document.getElementById("amount").className = "";
    }

    if (
      document.getElementById("amount").className === "" &&
      document.getElementById("amount").className === "" &&
      document.getElementById("amount").className === "" &&
      document.getElementById("amount").className === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="home">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="topRow">
            <div className="expText">MY EXPENSES</div>
            <div className="totalRow">
              <label className="totText">Total</label>
              <label className="totText">4500</label>
            </div>
          </div>

          <div className="left">
            <div style={{ width: "50vw", height: "70vw" }}>
              <div className="leftContainer">
                <input
                  id="title"
                  placeholder="Title"
                  onChange={(e) => {
                    this.setState({ title: e.target.value });
                  }}
                ></input>
                <span id="titlespan" className="nospanerr">
                  Atleast 4 characters
                </span>
                <input
                  id="amount"
                  placeholder="Amount"
                  onChange={(e) => {
                    this.setState({ amount: e.target.value });
                  }}
                ></input>
                <span id="amountspan" className="nospanerr">
                  Must be a valid amount
                </span>
                <input
                  id="note"
                  placeholder="Note"
                  onChange={(e) => {
                    this.setState({ note: e.target.value });
                  }}
                ></input>
                <span id="notespan" className="nospanerr">
                  Atleast 4 characters
                </span>
                <input
                  id="date"
                  placeholder="Date (DD/MM/YYYY)"
                  onChange={(e) => {
                    this.setState({ date: e.target.value });
                  }}
                ></input>
                <span id="datespan" className="nospanerr">
                  Must be a valid date
                </span>
                <div
                  className="button"
                  onClick={() => {
                    if (this.validate()) {
                      const headers = {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                      };
                      const data = {
                        title: this.state.title,
                        date: this.state.date,
                        note: this.state.note,
                      };
                      console.log("validated");
                      axios
                        .post(
                          "https://stackmaze.herokuapp.com/expenses",
                          data,
                          {
                            headers: headers,
                          }
                        )
                        .then((response) => {
                          console.log(response.data);
                        })
                        .catch((response) => {
                          console.log(response.data);
                        });
                    }
                  }}
                >
                  ADD EXPENSE
                </div>
              </div>
            </div>
            <div className="right">
              <div className="list">
                {this.state.data.map((e) => (
                  <div className="listEle" id={e.id}>
                    <div className="listEleCorner">
                      <Edit style={{ color: "rgba(225, 225, 225, 0.7)" }} />
                    </div>
                    <div className="listEleMain">
                      <div className="date">{e.date}</div>
                      <div className="titleRow">
                        <div className="title">{e.title}</div>
                        <div className="amount">$50,000</div>
                      </div>
                      <div className="note">
                        <label
                          style={{
                            whiteSpace: "nowrap",
                          }}
                        >
                          <strong>Note:</strong> {e.note}
                        </label>
                      </div>
                    </div>
                    <div className="listEleCorner">
                      <Delete style={{ color: "rgba(225, 225, 225, 0.7)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
