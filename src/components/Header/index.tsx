import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'
import * as Dialog from '@radix-ui/react-dialog'
import logoIMG from '../../assets/LOA_LOGO.png'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoIMG} alt="logotipo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
