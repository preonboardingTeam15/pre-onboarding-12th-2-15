import { useRef, useState } from 'react'
import { styled } from 'styled-components'

import AdBanner from './AdBanner'
import LoadingCard from '../LoadingCard'
import useInfiniteScrollIssues from './hook/useInfiniteScrollIssues'
import useFetchInitialData from '../../api/hook/useFetchInitialData'
import { useLoading } from '../../context/LodingContext'
import { IssueDataType } from '../../util/type'
import IssueCardWrapper from './IssueCardWrapper'

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
            <IssueCardWrapper
              key={id}
              number={number}
              title={title}
              id={id}
              created_at={created_at}
              comments={comments}
              user_id={login}
              avatar_url={avatar_url}
              body={body}
              isLastElement={isLastElement}
              isAdBanner={isAdBanner}
              lastIssueRefCallback={lastIssueRefCallback}
            />,
            isAdBanner && (
              <AdContainer key={`ad-${index}`} ref={isLastElement ? lastIssueRefCallback : null}>
                <AdBanner />
              </AdContainer>
            ),
          ]
        })}
        {isIssueListLoading && <LoadingCard />}
      </Box>
    </Section>
  )
}

const Section = styled.section`
  overflow-y: scroll;

  // ::-webkit-scrollbar {
  //   display: none;
  // }
`
const Box = styled.div`
  height: 70rem;
  margin: 0 2rem;
`

const AdContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default IssueListSection
