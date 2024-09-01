import React, { useState } from "react";
import {token} from "../../../declarations/token";

function Faucet() {
  const [isDisabled, setDisabled] = useState(false);
  const [btnText, setBtnText] = useState("Gimme Gimme");

  async function handleClick(event) {
    event.preventDefault();
    setDisabled(true);
    const result = await token.payOut();
    if (result) {
      setBtnText("Claimed!");
      setTimeout(() => {
        setBtnText("Gimme gimme");
        setDisabled(false);
      }, 2000);
    }else{
      setBtnText("Already claimed!");
      setTimeout(() => {
        setBtnText("Gimme gimme");
      }, 2000);
    }


  }

  

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {btnText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
