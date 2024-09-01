import React, { useState } from "react";
import { token } from "../../../declarations/token";
import { Principal } from "@dfinity/principal"

function Balance() {
  const [inputValue, setInputValue] = useState("")
  const [balance, setBalance] = useState("")
  const [symbol, setSymbol] = useState("")
  const [hidden, setHidden] = useState(true)

  async function handleClick() {
    const principal = Principal.fromText(inputValue)
  
    const balanceResult = await token.balanceOf(principal)
    
    const symbolResult = await token.getSymbol()
    
    
    setBalance(balanceResult.toLocaleString())
    setSymbol(symbolResult.toLocaleString())
    setHidden(false)
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={hidden}>This account has a balance of {balance} {symbol}</p>
    </div>
  );
}

export default Balance;
