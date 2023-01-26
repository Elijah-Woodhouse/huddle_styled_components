import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.nav};
  align-items: center;
  padding: 1%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  `