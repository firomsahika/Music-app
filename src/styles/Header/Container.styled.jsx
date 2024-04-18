// Container.js

import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
  margin: 0 auto;
  padding:0 40px; /* Adjusted padding */
  background-color:#212121;
  z-index:10;
  

  input{
    border:none;
    position:relative;
    padding:10px;
    font-family:Poppins;
    width: 25%; /* Adjusted width */
    border-radius:10px;
    font-family: "Poppins";
    display:flex;
    background-color: #F0F0F5;
    align-items:center;
    justify-content:center;
    font-size:14px;
  }
  
  input::placeholder{
    display:flex;
    font-size:16px;
    align-items:center;
    justify-content:center;
  }
  input:focus{
    border:none;
    outline:none;
  }

`

export default Container
