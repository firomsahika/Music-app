import styled from "styled-components";

const Content = styled.div`
margin-left: 15%; /* Adjust for sidebar width */
margin-top: 60px; /* Adjust for header height */
padding-top:22px;
width: 85%;
color:white;

z-index:0;

div{
    display: grid;
    background-color: #212121;
    grid-template-columns: repeat(5, 1fr); /* Three columns with equal width */
    grid-gap: 20px;
    border-radius:14px;
    padding:10px;
    align-items:center;
    justify-content:center;
  
    img{
       object-fit:cover;
       width:190px;
       height:150px;
       border-radius:8px;
    }
    
}

`

export default Content;