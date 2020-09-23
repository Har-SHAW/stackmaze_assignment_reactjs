import React from "react";
import "./App.css";
import { Delete, Edit } from "@material-ui/icons";
import axios from "axios";
import { PuffLoader } from "react-spinners";
import Model from "./components/model";
import Input from "./components/input";
import ErrorModel from "./components/error";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      note: "",
      data: [],
      amount: "",
      isLoading: true,
      showModel: false,
      updateData: {},
      total: "",
      isError: "",
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    axios
      .get("https://stackmaze.herokuapp.com/expenses")
      .then((response) => {
        this.updateTotal(response.data);
        this.setState({
          data: response.data,
          isLoading: false,
        });
      })
      .catch(() => {
        this.Error();
      });
  }

  closeModel() {
    this.setState({
      showModel: false,
    });
  }

  updateTotal(data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += parseInt(data[i].amount);
    }
    this.setState({
      total: total,
    });
  }

  openModel(data) {
    this.setState({
      showModel: true,
      updateData: data,
    });
    console.log(data);
  }

  setUpdatedData(data) {
    this.setState({
      data: data,
    });
  }

  add(data) {
    this.setState({
      isLoading: true,
    });
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    console.log("validated");

    axios
      .post("https://stackmaze.herokuapp.com/expenses", data, {
        headers: headers,
      })
      .then((response) => {
        this.updateTotal(response.data);
        this.setState({
          isLoading: false,
          data: response.data,
        });

        document.getElementById("title").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("note").value = "";
        document.getElementById("date").value = "";
      })
      .catch(() => {
        this.Error();
      });
  }

  Error() {
    this.setState({
      isError: true,
      showModel: false,
      isLoading: false,
    });
  }

  noError() {
    this.setState({
      isError: false,
    });
  }

  delete(str) {
    if (str !== "") {
      this.setState({
        isLoading: true,
      });
      axios
        .delete(`https://stackmaze.herokuapp.com/expenses/${str}`)
        .then((response) => {
          this.updateTotal(response.data);
          this.setState({
            isLoading: false,
            data: response.data,
          });
        })
        .catch(() => {
          this.Error();
        });
    }
  }

  render() {
    return (
      <div className="home">
        {this.state.isLoading ? (
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
            <PuffLoader color="white" />
          </div>
        ) : null}
        {this.state.isError ? (
          <ErrorModel
            noError={() => {
              this.noError();
            }}
          />
        ) : null}
        {this.state.showModel ? (
          <Model
            data={this.state.updateData}
            setData={(data) => this.setUpdatedData(data)}
            close={() => {
              this.closeModel();
            }}
            error={() => {
              this.Error();
            }}
          />
        ) : null}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="topRow">
            <div className="expText">MY EXPENSES</div>
            <div className="totalRow">
              <label className="totText">Total</label>
              <div
                style={{
                  width: "1px",
                  backgroundColor: "rgba(225, 225, 225, 0.75)",
                  height: "30px",
                  alignSelf: "flex-end",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              ></div>
              <label className="totText">{this.state.total}</label>
            </div>
          </div>

          <div className="bottomrow">
            <div className="left">
              <Input
                add={(data) => {
                  this.add(data);
                }}
              />
            </div>
            <div className="right">
              <div className="list">
                {this.state.data.map((e) => (
                  <div className="listEle" id={e.id}>
                    <div
                      className="listEleCorner"
                      onClick={() => {
                        this.openModel(e);
                      }}
                    >
                      <Edit style={{ color: "rgba(225, 225, 225, 0.7)" }} />
                    </div>
                    <div className="listEleMain">
                      <div className="date">{e.date}</div>
                      <div className="titleRow">
                        <div className="title">{e.title}</div>
                        <div className="amount">{e.amount}</div>
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
                    <div
                      className="listEleCorner"
                      onClick={() => {
                        this.delete(e.id);
                      }}
                    >
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
