import { createContext, ReactNode, useState } from 'react'

interface Props {
  children: ReactNode
}

interface ContextData {
  customerId: string
}

export const Context = createContext<ContextData>({} as ContextData)

export const Provider: React.FC<Props> = ({ children }: Props) => {
  const [customerId, setCustomerId] = useState('')

  return (
    <Context.Provider
      value={{
        customerId
      }}
    >
      {children}
    </Context.Provider>
  )
}
