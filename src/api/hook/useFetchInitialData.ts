import { useEffect } from 'react'
import { CORE_API } from '../../api/core'
import { OWNER, REPO } from '../../api/constants'
import { sortingIsOpen } from '../../util/sortingIsOpen'
import { sortingComments } from '../../util/sortingComments'
import { IssueDataType } from '../../util/type'

const useFetchInitialData = (
  setIssueCard: React.Dispatch<React.SetStateAction<IssueDataType[]>>,
) => {
  useEffect(() => {
    const fetchIssueData = async () => {
      try {
        const response = await CORE_API('get', `/repos/${OWNER}/${REPO}/issues`, {
          page: 1,
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
  }, [])
}

export default useFetchInitialData
