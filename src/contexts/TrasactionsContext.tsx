import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number,
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionContextProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransacions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data);
  }

  useEffect(() => {
    loadTransacions();
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}