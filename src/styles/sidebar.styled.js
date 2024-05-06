import { SiDeepnote } from "react-icons/si";
import styled from "styled-components";


const Side = styled.div`
  height: 100vh;
  width: 12%;
  background-color:#212121;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap:20px;
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 13px;
  position: fixed;
  margin-top: 30px;
 

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 80px;
    color: white;
  }
  div:hover {
    width: 150px;
    background-color: gray;
    border-radius: 10px;
  }
  p {
    color: white;
  }

   @media (max-width: 768px) {
    /* Hide sidebar on small screens */
    display: none;
  }
`;

export default Side;