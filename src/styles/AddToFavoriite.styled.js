import styled from "styled-components";
const FavBtn = styled.button`
margin-top:10px;
padding: 10px 10px;
background-color: #007bff;
// background-color:#FFC100;
font-size:12px;

color: white;
font-weight:semibold;
font-family:Poppins;
border: none;
border-radius: 6px;
cursor: pointer;

displayflex,
alignIems:center,
justifyContent:center,

&:hover {
 background-color: #0056b3;
}
`

export default FavBtn;