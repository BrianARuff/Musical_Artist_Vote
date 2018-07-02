import React from "react";

export default function Artist(props) {
  const isDead = props.death.isDead ? "Death: " + props.death.date : null;

  const errorMessage = (
    <div
      style={{
        background: "#557182",
        width: "100%",
        color: "#FFF2E1",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "0.25rem"
      }}
    >
      <p
        style={{
          alignSelf: "center"
        }}
      >
        You can't vote an artist below zero!
      </p>
    </div>
  );

  function handleUpVote() {
    props.handleUpVote(props.id);
  }

  function handleDownVote() {
    props.handleDownVote(props.id);
  }

  return (
    <div style={{ margin: "1rem", textAlign: "center" }}>
      <h1>{props.name}</h1>
      <img
        src={props.image}
        alt={props.image + props.name}
        height="250px"
        width="250px"
      />
      <p>DOB: {props.dob}</p>
      <p>{isDead}</p>
      <h3 style={{ color: "#333", textDecoration: "underline" }}>
        Vote Count: {props.votes}
      </h3>
      <button
        onClick={handleUpVote}
        style={{
          width: "100%",
          padding: "0.5rem",
          background: "#368A6C",
          margin: "0.25rem 0",
          borderRadius: "5px",
          border: "transparent"
        }}
      >
        Vote
      </button>
      <button
        onClick={handleDownVote}
        style={{
          width: "100%",
          padding: "0.5rem",
          background: "rgb(188, 73, 102)",
          margin: "0.25rem 0",
          borderRadius: "5px",
          border: "transparent"
        }}
      >
        Down Vote
      </button>
      {
        props.votes < 0 ? errorMessage : null
      }
    </div>
  );
}
