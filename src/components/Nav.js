import { StyledNav, Image } from './styles/Nav.styled'
import { Button } from './styles/Button.styled'
import { useNavigate } from 'react-router-dom';


export default function Nav(signup) {

  const navigate = useNavigate();

  const redirectToSignUp = () => { /* ✨ implement */ 
  navigate("/signup");
}

  return (
    <StyledNav>
          <div>
            <h1>Neighborhood Food Share Project</h1>
          </div>
          <Button onClick={redirectToSignUp}>Sign Up!</Button>
    </StyledNav>
  )
}