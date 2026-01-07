import React, { type SyntheticEvent } from 'react'
import { DeletePortfolio } from '../../../Components'

interface Props {
  portfolioValue: string
  onPortfolioDelete: (e: SyntheticEvent) => void
}

function CardPortfolio({ portfolioValue, onPortfolioDelete }: Props) {
  return (
    <div>
      <h4>{portfolioValue}</h4>
      <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue} />
    </div>
  )
}

export default CardPortfolio
