import { NavLink  } from 'react-router-dom'
import styled from "styled-components";

import logo from '../../assets/images/logo.svg'

export default function Header() {
  return (
    <Container>
      <Logo src={logo} alt="Logo UserHunt" />

      <NavBar>
        <NavLink to='/' activeClassName="active">Search</NavLink>
        <NavLink to='/historic' activeClassName="active">Historic</NavLink>
      </NavBar>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
  align-items:center;
  padding: 48px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    padding: 24px;
  }
`

const Logo = styled.img`
  width: 200px;
`;

const NavBar = styled.nav`
  display:flex;
  gap: 0 16px;

  a {
    font-size:20px;
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    transition: 0.3s all;
  }

  .active,
  a:hover {
    color: ${({ theme }) => theme.primary};
  }
`
