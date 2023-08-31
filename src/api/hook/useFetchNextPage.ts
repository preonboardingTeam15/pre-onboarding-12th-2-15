import { useCallback, useState, useEffect } from 'react'
import { CORE_API } from '../core'
import { OWNER, REPO } from '../constants'
import { sortingIsOpen } from '../../util/sortingIsOpen'
import { sortingComments } from '../../util/sortingComments'
import { IssueDataType } from '../../util/type'

const useFetchNextPage = (setIssueCard: React.Dispatch<React.SetStateAction<IssueDataType[]>>) => {
  const [pageToFetch, setPageToFetch] = useState(1) // 페이지 번호를 별도의 상태로 관리합니다.

  const fetchNextPage = useCallback(
    async () => {
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
      }
    },
    [setIssueCard, pageToFetch], // 의존성 배열에 'pageToFetch' 추가
  )

  useEffect(() => {
    if (pageToFetch > 1) fetchNextPage() // 페이지 번호가 변경될 때마다 데이터를 불러옵니다.
  }, [pageToFetch]) // 의존성 배열에 'pageToFetch' 추가

  return setPageToFetch // 페이지 번호 설정 함수 반환
}

export default useFetchNextPage
