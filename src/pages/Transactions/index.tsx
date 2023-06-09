import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsTable,
  TransanctionsContainer,
} from './style'
import { TransactionsContext } from '../../contexts/TrasactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <div>
      <Header />
      <Summary />

      <TransanctionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransanctionsContainer>
    </div>
  )
}
