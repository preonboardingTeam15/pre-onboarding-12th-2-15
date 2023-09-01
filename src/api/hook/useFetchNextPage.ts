import { useCallback, useState, useEffect, useContext } from 'react'
import { CORE_API } from '../core'
import { OWNER, REPO } from '../constants'
import { sortingIsOpen } from '../../util/sortingIsOpen'
import { sortingComments } from '../../util/sortingComments'
import { useLoading } from '../../context/LodingContext'
import { IssueDataType } from '../../util/type'

const useFetchNextPage = (setIssueCard: React.Dispatch<React.SetStateAction<IssueDataType[]>>) => {
  const [pageToFetch, setPageToFetch] = useState(1)
  const { setIsIssueListLoading } = useLoading()

  const fetchNextPage = useCallback(async () => {
    setIsIssueListLoading(true)
    try {
      const response = await CORE_API('get', `/repos/${OWNER}/${REPO}/issues`, {
        page: pageToFetch,
        sort: 'comments',
      })
      const { data } = response

      const sortedIsOpen = sortingIsOpen(data)
      const sortedData = sortingComments(sortedIsOpen)

      setIssueCard((prev: IssueDataType[]) => [...prev, ...sortedData])
    } catch (error) {
      console.log(error)
    } finally {
      setIsIssueListLoading(false)
    }
  }, [setIssueCard, pageToFetch])

  useEffect(() => {
    if (pageToFetch > 1) fetchNextPage()
  }, [pageToFetch])

  return setPageToFetch
}

export default useFetchNextPage
