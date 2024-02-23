import React, { FC } from 'react';
import { Grid } from '@mui/material';

interface BingoCard {
    card: string
  }

export const Card: FC <BingoCard> = ({card}) => {
    const normalizedCard = card.charAt(0).toUpperCase() + card.slice(1)
    const handleCardClicked = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.classList.toggle('card-clicked')
    }
    return <Grid item xs={2.4} onClick={handleCardClicked} className='bingo-card'>{ normalizedCard }</Grid>
  }