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
            <div style={{ display: "flex", flexDirection: "column", paddingTop: "20px" }}>
              <input placeholder="Title" style={{marginBottom: "10px", width: "25vw", border: "1px solid white", backgroundColor: "transparent", padding: "10px", borderRadius: "5px", color: "white"}}></input>
              <input placeholder="Amount" style={{marginBottom: "10px", width: "25vw", border: "1px solid white", backgroundColor: "transparent", padding: "10px", borderRadius: "5px", color: "white"}}></input>
              <input placeholder="Note" style={{marginBottom: "10px", width: "25vw", border: "1px solid white", backgroundColor: "transparent", padding: "10px", borderRadius: "5px", color: "white"}}></input>
              <input placeholder="Date" style={{marginBottom: "10px", width: "25vw", border: "1px solid white", backgroundColor: "transparent", padding: "10px", borderRadius: "5px", color: "white"}}></input>
            </div>
          </div>
          <div style={{ width: "50vw", height: "70vw" }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
