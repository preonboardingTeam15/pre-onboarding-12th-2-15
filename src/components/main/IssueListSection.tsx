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

          return [
            <div
              key={issueData.id}
              ref={isLastElement && !isAdBanner ? lastIssueRefCallback : null}
            >
              <IssueCard {...issueData} userId={issueData.user.login} />
            </div>,
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

const Section = styled.section``
const Box = styled.div`
  height: 70rem;
  overflow-y: scroll;
  margin: 0 20px;
`

const AdContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default IssueListSection
