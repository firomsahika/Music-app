import styled from "styled-components";
import { NavLink

 } from "react-router-dom";
const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &:hover {
    color: #ffc100;
  }
  &.active {
    color: #ffc100; /* Change the color here */
    p {
      color: #ffc100;
    }
  }
  @media(max-width:768px){
    display:flex;
    align-items:start;
    justify-content:start;
  }
`;

export default StyledNavLink;