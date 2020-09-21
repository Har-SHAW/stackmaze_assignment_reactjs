import React from "react";
import "./App.css";
import { Delete, Edit } from "@material-ui/icons";

function App() {
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
              <input placeholder="Title"></input>
              <input placeholder="Amount"></input>
              <input placeholder="Note"></input>
              <input placeholder="Date"></input>
              <div className="button">ADD EXPENSE</div>
            </div>
          </div>
          <div className="right">
            <div className="list">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
                <div className="listEle" id={e}>
                  <div className="listEleCorner">
                    <Edit style={{ color: "rgba(225, 225, 225, 0.7)" }} />
                  </div>
                  <div className="listEleMain">
                    <div className="date">15 . 8 . 2020</div>
                    <div className="titleRow">
                      <div className="title">Expense Title</div>
                      <div className="amount">$50,000</div>
                    </div>
                    <div className="note">
                      <label
                        style={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        <strong>Note:</strong> Note for expense goes here
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

export default App;
