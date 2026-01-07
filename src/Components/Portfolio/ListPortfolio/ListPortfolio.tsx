import React, { type SyntheticEvent } from 'react'
import { CardPortfolio } from '../../../Components'

interface Props {
    portfolioValues: string[]
    onPortfolioDelete: (e: SyntheticEvent) => void
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
    return (
        <div>
            <h3>My Portfolio</h3>
            <ul>{portfolioValues &&
                portfolioValues.map((portfolioValue) => {
                    return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete} />
                })
            }
            </ul>
        </div>
    )
}

export default ListPortfolio
