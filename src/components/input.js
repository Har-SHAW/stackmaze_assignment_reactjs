import React from "react";
import { Add } from "@material-ui/icons";
import moment from "moment";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      note: "",
      amount: "",
    };
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
      document.getElementById("title").className === "" &&
      document.getElementById("amount").className === "" &&
      document.getElementById("note").className === "" &&
      document.getElementById("date").className === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="leftContainer">
        <input
          id="title"
          placeholder="Title"
          onChange={(e) => {
            this.setState({
              title: e.target.value,
            });
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
          Atleast 8 characters
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
              this.props.add({
                title: this.state.title,
                date: this.state.date,
                amount: this.state.amount,
                note: this.state.note,
              });
            }
          }}
        >
          <div className="buttonrow">
            <Add />
            <div>ADD EXPENSE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
