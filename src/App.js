import React from "react";
import "./App.css";
import { Delete, Edit } from "@material-ui/icons";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#6200EE",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "20vh",
            justifyContent: "space-between",
            marginLeft: "10vw",
            marginRight: "10vw",
            alignItems: "center",
            borderBottom: "1px solid white",
          }}
        >
          <div className="expText">MY EXPENSES</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "15vw",
              height: "20vh",
              alignItems: "center",
            }}
          >
            <label className="totText">Total</label>
            <label className="totText">4500</label>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "70vh",
            marginLeft: "10vw",
          }}
        >
          <div style={{ width: "50vw", height: "70vw" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "10vh",
              }}
            >
              <input placeholder="Title"></input>
              <input placeholder="Amount"></input>
              <input placeholder="Note"></input>
              <input placeholder="Date"></input>
              <div
                style={{
                  backgroundColor: "#03DAC5",
                  width: "200px",
                  padding: "10px",
                  borderRadius: "20px",
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "5vh",
                }}
              >
                ADD EXPENSE
              </div>
            </div>
          </div>
          <div
            style={{
              width: "50vw",
              height: "70vw",
              paddingTop: "10vh",
              paddingRight: "10vw",
            }}
          >
            <div
              style={{
                overflowY: "auto",
                overflowX: "hidden",
                height: "60vh",
                width: "40vw",
                scrollbarWidth: "none",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
                <div className="listEle" id={e}>
                  <div
                    style={{
                      width: "10%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Edit style={{ color: "rgba(225, 225, 225, 0.7)" }} />
                  </div>
                  <div
                    style={{
                      width: "80%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "22px",
                    }}
                  >
                    <div
                      style={{
                        height: "10%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        color: "grey",
                        fontSize: "12px",
                      }}
                    >
                      15 . 8 . 2020
                    </div>
                    <div
                      style={{
                        height: "80%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          color: "#6200EE",
                        }}
                      >
                        Expense Title
                      </div>
                      <div
                        style={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        $50,000
                      </div>
                    </div>
                    <div
                      style={{
                        height: "10%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        color: "grey",
                        fontSize: "13px",
                      }}
                    >
                      <label
                        style={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        <strong>Note:</strong> Note for expense goes here
                      </label>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "10%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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

export default App;
