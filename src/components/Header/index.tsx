import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logoIMG from '../../assets/LOA_LOGO.png'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIMG} alt="logotipo" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}