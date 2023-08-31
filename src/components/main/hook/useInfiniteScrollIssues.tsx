import { useRef, useState, useEffect, useCallback } from 'react'
import useFetchNextPage from '../../../api/hook/useFetchNextPage'
import { IssueDataType } from '../../../util/type'

const useInfiniteScrollIssues = (
  setIssueCard: React.Dispatch<React.SetStateAction<IssueDataType[]>>,
) => {
  const observer = useRef<IntersectionObserver | null>(null)

  const setPageToFetch = useFetchNextPage(setIssueCard)

  const lastIssueRefCallback = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) setPageToFetch(prevPage => prevPage + 1)
      })

      if (node) observer.current.observe(node)
    },
    [setPageToFetch],
  )

  return lastIssueRefCallback
}

export default useInfiniteScrollIssues
