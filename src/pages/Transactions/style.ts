import styled from "styled-components";

export const TransanctionsContainer = styled.main`
width: 100%;
max-width: 1120px;
margin: 4rem auto 0;
padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
width: 100%;
border-collapse: separate;
border-spacing: 0 .5rem;

td {
  padding: 1.25rem 2rem;
  background: ${props => props.theme["gray-700"]};

  &:first-child {
    border-radius: 0 0 6px 6px
  }

  &:last-child {
    border-radius: 0 0 6px 6px
  }
}
`;

interface PriceHightLigthProps {
  variant: 'income' | 'outcome';
}

export const PriceHighLight = styled.span<PriceHightLigthProps>`
color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`;