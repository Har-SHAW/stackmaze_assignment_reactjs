import React from "react";
import "./App.css";

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
              <input
                placeholder="Title"
                style={{
                  marginBottom: "10px",
                  width: "25vw",
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  padding: "15px",
                  borderRadius: "5px",
                  color: "white",
                }}
              ></input>
              <input
                placeholder="Amount"
                style={{
                  marginBottom: "10px",
                  width: "25vw",
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  padding: "15px",
                  borderRadius: "5px",
                  color: "white",
                }}
              ></input>
              <input
                placeholder="Note"
                style={{
                  marginBottom: "10px",
                  width: "25vw",
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  padding: "15px",
                  borderRadius: "5px",
                  color: "white",
                }}
              ></input>
              <input
                placeholder="Date"
                style={{
                  marginBottom: "10px",
                  width: "25vw",
                  border: "1px solid white",
                  backgroundColor: "transparent",
                  padding: "15px",
                  borderRadius: "5px",
                  color: "white",
                }}
              ></input>
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
                    edit
                  </div>
                  <div
                    style={{
                      width: "80%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }}
                  >
                    data
                  </div>
                  <div
                    style={{
                      width: "10%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    remove
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
