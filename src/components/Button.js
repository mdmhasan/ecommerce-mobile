import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  color: ${props=>props.cart?'var(--mainYellow)':'var(--lightBlue)'};
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color:${props=>props.cart ? 'var(--mainYellow)':'var(--lightBlue)'};
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props=>props.cart? 'var(--mainYellow)':'var(--lightBlue)'};
    color: var(--mainBlue);
    border: 0.05rem solid var(--lightBlue);
  }
  &:focus {
    outline: none;
  }
`;
