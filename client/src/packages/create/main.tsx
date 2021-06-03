import React, { useState } from "react";

export default function Main() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [perc, setPerc] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [smail, setSmail] = useState("");
  const [sphone, setSphone] = useState("");
  return (
    <div>
      <form>
        <label>Class</label>
        <input placeholder="Name"></input>
      </form>
    </div>
  );
}
