import { useLocation, useSearchParams } from 'react-router-dom'

import { styled } from 'styled-components'
import MarkdownPreview from '@uiw/react-markdown-preview'

import IssueCard from '../main/IssueCard'

const Detail = () => {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const { text, title, user_id, avatar_url, created_at } = location.state

  const numberValue = searchParams.get('number')
  const commentsValue = searchParams.get('comments')

  return (
    <Box>
      <ProfileWrapper>
        <AvatarWrapper>
          <Image src={avatar_url} alt="프로필사진" />
        </AvatarWrapper>
        <IssueCard
          number={numberValue}
          title={title}
          user_id={user_id}
          created_at={created_at}
          comments={commentsValue}
        />
      </ProfileWrapper>

      <BodyContainer>
        <MarkdownPreview source={text} wrapperElement={{ 'data-color-mode': 'light' }} />
      </BodyContainer>
    </Box>
  )
}

const Box = styled.div`
  height: 70rem;
  overflow-y: auto;
  margin: 0 2rem;
`
const ProfileWrapper = styled.div`
  display: flex;
`
const AvatarWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
`
const Image = styled.img`
  width: inherit;
  height: inherit;
`

const BodyContainer = styled.div`
  margin-top: 2rem;
`

export default Detail
