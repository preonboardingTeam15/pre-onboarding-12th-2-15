import { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import IssueCard from './IssueCard'
import AdBanner from './AdBanner'
import { CORE_API } from '../../api/core'
import { OWNER, REPO } from '../../api/constants'
import useScroll from './hook/useScroll'
import { sortingIsOpen } from '../../util/sortingIsOpen'
import { sortingComments } from '../../util/sortingComments'
import { IssueDataType } from '../../util/type'

const IssueListSection = () => {
  const [issueCard, setIssueCard] = useState<IssueDataType[]>([])
  const [page, setPage] = useState(1)
  const issueListRef = useRef<HTMLDivElement>(null)
  const scrollHeight = useScroll(issueListRef)
  const refCurrent = issueListRef.current

  useEffect(() => {
    const fetchIssueData = async () => {
      try {
        const response = await CORE_API('get', `/repos/${OWNER}/${REPO}/issues`, {
          page,
          sort: 'comments',
        })
        const { data } = response

        const sortedIsOpen = sortingIsOpen(data)
        const sortedData = sortingComments(sortedIsOpen)

        setIssueCard(prev => [...prev, ...sortedData])
      } catch (error) {
        console.log(error)
      }
    }

    fetchIssueData()
  }, [page])

  useEffect(() => {
    if (scrollHeight !== 0 && refCurrent) {
      refCurrent.scrollTop >= refCurrent.scrollHeight - refCurrent.clientHeight &&
        setPage(prev => prev + 1)
    }
  }, [scrollHeight])

  return (
    <Section>
      <Box ref={issueListRef}>
        {issueCard.map((issueData, index) =>
          (index + 1) % 5 === 0 ? (
            <AdBanner key={index} />
          ) : (
            <IssueCard
              key={issueData.id}
              number={issueData.number}
              title={issueData.title}
              userId={issueData.user.login}
              created_at={issueData.created_at}
              comments={issueData.comments}
              avatar_url={issueData.user.avatar_url}
              body={issueData.body}
            />
          ),
        )}
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
