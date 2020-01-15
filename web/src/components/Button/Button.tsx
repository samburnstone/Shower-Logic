import styled from "styled-components";
import media from "utils/media";

export default styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: ${props => props.theme.white}
  font-size: 1rem;
  align-self: center;
  cursor: pointer;
  align-self: center;
  ${media.small} {
    flex-direction: column;
  }
`;
