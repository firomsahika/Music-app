import styled from "styled-components";

const DetailWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:40px;
    color:white;
    background-color: black;
    height:87vh;

    img{
    width:300px;
    height:350px;
    object-fit:cover;
    border-radius:15px;
    }
    p{
    font-size:20px;
    color:#FFC100;
    
    }

`

export default DetailWrapper;