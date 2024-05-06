import styled from "styled-components";

const Content = styled.div`
margin-left: 15%; /* Adjust for sidebar width */
margin-top: 50px; /* Adjust for header height */
padding-top:22px;
width: 85%;
color:white;
z-index:0;
color:#989898;
// background-color:black;
background-color:#212121;


 @media (max-width: 768px) {
    /* Adjust for smaller screens */
    background-color:#212121;
     margin-left:5px;
     margin-top:26px;
     padding-left:10px;
     padding-right:10px;
    grid-template-columns: repeat(2, 1fr); /* Three columns for smaller screens */
  
  }



`

export default Content;