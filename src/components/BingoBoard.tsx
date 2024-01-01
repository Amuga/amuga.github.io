import  { FC } from 'react';
import { Card } from './BingoCard'
import { Grid, Button } from '@mui/material';

interface Board {
    onButtonClicked: (e: React.MouseEvent<HTMLButtonElement>) => void
    onBack: (e: React.MouseEvent<HTMLButtonElement>) => void
    name: string
    cards: string[]
    type: string
  }

export const BingoBoard: FC <Board>= ({ onButtonClicked, onBack, cards, name, type }) => {


    return (
        <>
            <Grid container spacing={1.5} className='card-description'>
                <Grid item xs={12}>{type.toUpperCase()} Bingo</Grid>
                <Grid item xs={12}>{name}'s card</Grid>
            </Grid>
            <Grid container className='bingo-board'>
                {cards.map((c, index) => <Card card={c} key={index}/>)}
            </Grid>
            <div className="button">
                <Button variant="contained" onClick={onButtonClicked}>Re-generate</Button>
            </div>
            <div className="button">
                <Button variant="contained" onClick={onBack}>Back</Button>
            </div>
        </>
  )

}
