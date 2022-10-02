import styled from "styled-components";

export const Sided = styled.div`

    input {
        width: 340px;
        height: 6%;
        border-radius: 30px 30px 30px 30px;
        border-style: none;
        background-color: #DCE5FF;
        background-image: url('../magnifying-glass-location-solid.svg');
        background-repeat: no-repeat;
        background-position: 3% 50%;
        background-size:20px;
        padding: 1%;
        margin: 20px;
        text-align:center;
        font-size: 18px;
    }

    input:focus {
        outline:none;
        color:hsl(183, 100%, 15%);
        border: solid 2px hsl(183, 100%, 15%);
    }
`