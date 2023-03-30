import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsTable, TransanctionsContainer } from "./style";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransanctionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento</td>
              <td><PriceHighLight variant="income">R$ 12.000,00</PriceHighLight></td>
              <td>Venda</td>
              <td>13/04/2013</td>
            </tr>
            <tr>
              <td width="50%">X-Burger</td>
              <td><PriceHighLight variant="outcome">- R$ 12.000,00</PriceHighLight></td>
              <td>Alimentação</td>
              <td>13/04/2013</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransanctionsContainer>
    </div>
  )
}