import React from "react";
import InputGroup from "./InputGroup";
import Button from "./Button";
import { useState } from "react";

const Form = () => {
  return (
    <div
      style={{
        width: "60%",
        padding: "2rem",
        backgroundColor: "#ddd",
        margin: "2rem auto",
      }}
    >
      <div
        style={{
          textAlign: "center ",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h3>Sign up</h3>
        <p
          style={{
            fontFamily: "Arial",
            color: "#424242",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum quas voluptate recusandae
          possimus doloribus .
        </p>
      </div>
      <form>
        <InputGroup type="text" label="What is your name" />
        <InputGroup type="email" label="What is your email" />
        <InputGroup type="password" label="What is your password" />
        <div>
          <Button label="Reset" type="reset" variant="primary" size="small" />
          <Button label="Submit" type="submit" variant="success" size="medium" />
          <Button label="Submit" type="submit" variant="info" size="large" />
          <Button label="Submit" type="submit" variant="error" size="small" />
          <Button label="Submit" type="submit" variant="warning" size="medium" />
        </div>
      </form>
    </div>
  );
};

export default Form;
