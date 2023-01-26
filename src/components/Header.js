import { StyledHeader, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <div>
            <h1>Build Your Community</h1>

            <p>
              Food is one of the oldest bridges humanity has to connect with their community.
              From pot-lucks to weddings and funerals, food has always been an absolute staple for gatherings of all kinds.
              The intention of this project is to bring communities back together doing one of the oldest practices known to mankind, growing food.
              It is our hope that you will find this resource helpful in connecting back to your roots and sharing that with your community.
              <br></br>
              <br></br>
              One Love!
            </p>
          </div>

          <Image src='./images/fallingFence.jpeg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
