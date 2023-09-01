import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { dateSlice } from '../../util/dateSlice'
import { ROUTES } from '../../router/routes'

interface IssueCardProps {
  number: number | string | null
  title: string
  created_at: string
  comments: number | string | null
  user_id: string
  avatar_url?: string
  body?: string
}

const IssueCard = ({
  number,
  title,
  created_at,
  comments,
  user_id,
  avatar_url,
  body,
}: IssueCardProps) => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const { year, month, day } = dateSlice(created_at)

  const handleMove = () => {
    navigate(`${ROUTES.DETAIL}?number=${number}&comments=${comments}`, {
      state: { text: body, title, user_id, avatar_url, created_at },
    })
  }

  return (
    <>
      <MoveBtn onClick={handleMove}>
        <Box>
          <DescWrapper>
            <IssueHeader>
              <IssueNumber>#{number}</IssueNumber>
              <IssueTitle>{title}</IssueTitle>
            </IssueHeader>
            <IssueInfo>
              <IssueAuthor>작성자: {user_id}</IssueAuthor>
              <IssueCreatedAt>
                작성일: {year}년{month}월{day}일
              </IssueCreatedAt>
            </IssueInfo>
          </DescWrapper>
          <CommentWrapper>
            <CommentNumber>코멘트: {comments}</CommentNumber>
          </CommentWrapper>
        </Box>
      </MoveBtn>
    </>
  )
}

const Box = styled.div`
  display: flex;
  height: 5rem;
  margin: 1.5rem 0;
`
const MoveBtn = styled.button`
  width: 100%;
  overflow-x: hidden;
  border-bottom: 0.1rem solid #e1e2e3;
`
const DescWrapper = styled.div`
  width: 80%;
`
const IssueHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`
const IssueNumber = styled.span`
  margin-right: 0.5rem;
  font-size: 1.7rem;
  color: gray;
  font-weight: bold;
`
const IssueTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.7rem;
  font-weight: bold;
`
const IssueInfo = styled.div`
  text-align: left;
  font-size: 1.3rem;
  color: gray;

  span {
    margin-right: 0.5rem;
  }
`
const IssueAuthor = styled.span`
  margin-right: 0.5rem;
`
const IssueCreatedAt = styled.span``
const CommentWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 20%;
  margin-right: 10px;
`
const CommentNumber = styled.span`
  font-size: 1.5rem;
`

export default IssueCard
