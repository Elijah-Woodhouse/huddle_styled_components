import { StyledCard } from './styles/Card.styled'
import { Button } from './styles/Button.styled'
import React from 'react';


export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2 data-testid="card-title-text">{title}</h2>
        <p data-testid="card-body-text">{body}</p>
      </div>

      <div>
        <img data-testid="card-image" src={`./images/${image}`} alt='' />
      </div>
    </StyledCard>
  )
}
