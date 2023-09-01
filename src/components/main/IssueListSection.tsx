import { useRef, useState } from 'react'
import { styled } from 'styled-components'

import IssueCard from './IssueCard'
import AdBanner from './AdBanner'
import LoadingCard from '../LoadingCard'
import useInfiniteScrollIssues from './hook/useInfiniteScrollIssues'
import useFetchInitialData from '../../api/hook/useFetchInitialData'
import { useLoading } from '../../context/LodingContext'
import { IssueDataType } from '../../util/type'

const IssueListSection = () => {
  const [issueCard, setIssueCard] = useState<IssueDataType[]>([])
  const issueListRef = useRef<HTMLDivElement>(null)
  const { isIssueListLoading } = useLoading()

  useFetchInitialData(setIssueCard)
  const lastIssueRefCallback = useInfiniteScrollIssues(setIssueCard)

  return (
    <Section>
      <Box ref={issueListRef}>
        {issueCard.flatMap((issueData, index) => {
          const isAdBanner = (index + 1) % 4 === 0
          const isLastElement = index === issueCard.length - 1
          const {
            number,
            title,
            id,
            created_at,
            comments,
            user: { login, avatar_url },
            body,
          } = issueData

          return [
            <div key={id} ref={isLastElement && !isAdBanner ? lastIssueRefCallback : null}>
              <IssueCard
                number={number}
                title={title}
                created_at={created_at}
                comments={comments}
                user_id={login}
                avatar_url={avatar_url}
                body={body}
              />
            </div>,
            isAdBanner && (
              <div key={`ad-${index}`} ref={isLastElement ? lastIssueRefCallback : null}>
                <AdBanner />
              </div>
            ),
          ]
        })}
        {isIssueListLoading && <LoadingCard />}
      </Box>
    </Section>
  )
}

const Section = styled.section``
const Box = styled.div`
  height: 65rem;
  overflow-y: scroll;
`

export default IssueListSection
