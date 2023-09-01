import React, { createContext, useState, useContext } from 'react'

interface LoadingContextType {
  isIssueListLoading: boolean
  setIsIssueListLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

interface LoadingProviderProps {
  children: React.ReactNode
}

export const LoadingProvider: React.FunctionComponent<LoadingProviderProps> = ({ children }) => {
  const [isIssueListLoading, setIsIssueListLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isIssueListLoading, setIsIssueListLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)

  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }

  return context
}
