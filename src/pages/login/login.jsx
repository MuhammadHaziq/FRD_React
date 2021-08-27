import React from "react";
import { useEffect, useState } from "react";
//var yahooFinance = require("yahoo-finance");

export default function Login() {
  const [data, setData] = useState();
  return (
    <React.Fragment>
      <div class="form-start-page form-login" id="login">
        <div class="header">
          <h1>Secure Log On Demo</h1>
          <h1></h1>
        </div>
      </div>
    </React.Fragment>
  );
}
