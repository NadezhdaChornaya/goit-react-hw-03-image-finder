import styled from "styled-components"

export const ButtonLoad = styled.button`
display:block;
margin: 20px auto;
    min-width: 300px;
    padding: 16px 32px;

    border: 1px solid #3f51b5;
    border-radius: 5px;

    font-size: 18px;
    font-weight: 700;
    text-align: center;

    color: #fff;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
    background-color: #3f51b5;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  &:hover,
&:focus {
    color: #3f51b5;
    background-color: #fff;
}
    
`