// Container.js

import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items:center;
  margin: 0 auto;
  padding-top:0px;
padding-bottom:0px;
padding-left:20px;
padding-right:20px;
  //padding:0 40px; /* Adjusted padding */
  background-color:#212121;
  z-index:10;
  

  input{
    border:none;
    color:black;
    position:relative;
    padding:12px;
    font-family:Poppins;
    width: 25%; /* Adjusted width */
    border-radius:10px;
    font-family: "Poppins";
    display:flex;
    //background-color: #F0F0F5;
     //background-color:#FFC100;

    align-items:center;
    justify-content:center;
    font-size:14px;
  }
  
  input::placeholder{
    display:flex;
    color:black;
    font-weight:semibold;
    font-size:18px;
    align-items:center;
    justify-content:center;
  }
  input:focus{
    border:none;
    outline:none;
  }

`

export default Container
