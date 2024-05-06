import styled from "styled-components";

const SongList = styled.div`
display: grid;
background-color: #212121;
min-width:85%;
grid-template-columns: repeat(5, 1fr); /* Three columns with equal width */
grid-gap: 10px;
// color:#FFC100;
color: #bababa;
// border-radius:40px;
padding:16px;
align-items:center;
justify-content:center;
img{
  object-fit:cover;
  width:190px;
  height:150px;
  border-radius:8px;
  padding-bottom:15px;
}
`

export default SongList;