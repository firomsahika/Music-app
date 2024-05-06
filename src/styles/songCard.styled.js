import styled from "styled-components";

const SongCard = styled.div`

background-color:#000000;
padding-left:5px;
display:flex;
flex-direction:column;
font-size:13px;
border-radius:10px;
transition:transform 0.3s ease;

&:hover{
    transform:scale(1.05);
}

`

export default SongCard;