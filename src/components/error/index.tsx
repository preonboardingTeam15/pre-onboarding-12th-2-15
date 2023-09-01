import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  const returnMain = () => navigate('/')

  return (
    <ErrorWrapper>
      페이지를 찾을 수 없습니다.
      <button onClick={returnMain}>메인 화면으로 돌아가기</button>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.main`
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #c0d6e4;
  button {
    font-size: medium;
    padding: 1rem;
  }
`

export default Error
