import styled from "styled-components"

const Input = styled.input`
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.7);
    padding: 18px 26px;
    border-radius: 8px;
    width: min(560px, calc(100% - 48px));
    color: #17324d;
    font-size: 16px;
    margin-bottom: 28px;
    outline: none;
    box-shadow: 0 18px 45px rgba(0, 20, 40, 0.18);
    box-sizing: border-box;

    &::placeholder {
        color: #678198;
        font-size: 16px;
    }

    &:focus {
        border-color: #f6c85f;
        box-shadow: 0 18px 45px rgba(0, 20, 40, 0.22), 0 0 0 4px rgba(246, 200, 95, 0.22);
    }
`

export default Input
