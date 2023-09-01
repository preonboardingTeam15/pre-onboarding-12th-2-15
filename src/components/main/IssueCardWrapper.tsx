import { styled } from 'styled-components'
import IssueCard from './IssueCard'
import { ROUTES } from '../../router/routes'
import { useNavigate } from 'react-router-dom'

interface IssueCardWrapperProp {
  id: number
  number: number | string | null
  title: string
  created_at: string
  comments: number | string | null
  user_id: string
  avatar_url?: string
  body?: string
  isLastElement: boolean
  isAdBanner: boolean
  lastIssueRefCallback: (node: HTMLDivElement | null) => void
}

const IssueCardWrapper = ({
  number,
  title,
  created_at,
  id,
  comments,
  user_id,
  avatar_url,
  body,
  isLastElement,
  isAdBanner,
  lastIssueRefCallback,
}: IssueCardWrapperProp) => {
  const navigate = useNavigate()

  const handleMove = () => {
    navigate(`${ROUTES.DETAIL}?number=${number}&comments=${comments}`, {
      state: { text: body, title, user_id, avatar_url, created_at },
    })
  }

  return (
    <MoveBtn onClick={handleMove}>
      <div key={id} ref={isLastElement && !isAdBanner ? lastIssueRefCallback : null}>
        <IssueCard
          number={number}
          title={title}
          created_at={created_at}
          comments={comments}
          user_id={user_id}
        />
      </div>
    </MoveBtn>
  )
}

const MoveBtn = styled.button`
  width: 100%;
  overflow-x: hidden;
  border-bottom: 0.1rem solid #e1e2e3;
`

export default IssueCardWrapper
