import styled from 'styled-components';

export const HomePage = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
`

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px 0px;
  }
`
