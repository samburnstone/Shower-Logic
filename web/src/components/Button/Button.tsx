import styled from "styled-components";
import media from "utils/media";

type Props = {
  mode?: "light" | "dark";
};

const Button = styled.button<Props>`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: ${props =>
    props.mode === "light" ? props.theme.white : props.theme.brown};
  color: ${props => (props.mode === "light" ? "black" : props.theme.white)};
  font-size: 1rem;
  align-self: center;
  cursor: pointer;
  align-self: center;
  ${media.small} {
    flex-direction: column;
  }
`;

Button.defaultProps = {
  mode: "light"
};

export default Button;
