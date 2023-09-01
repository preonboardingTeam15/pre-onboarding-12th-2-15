import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingCard: React.FC = () => {
  return (
    <Container>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 5rem; // IssueCard의 높이에 맞춤
  margin-bottom: 1rem; // IssueCard의 마진에 맞춤
`

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`

const Spinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: ${rotate} 0.8s linear infinite;
`

const LoadingText = styled.span`
  margin-top: 10px;
  font-size: 14px;
`

export default LoadingCard
