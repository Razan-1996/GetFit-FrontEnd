import React from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Logout(props) {
  let history = useHistory();
  localStorage.removeItem("token");
   history.push('/');
}

export default Logout


