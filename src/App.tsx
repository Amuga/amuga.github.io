import React, { FC, useState } from 'react';
import { tabsConditions } from './gameConditions'
import {Grid} from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import logo from './logo.svg';
import './App.css';

function App() {
  const [playerName, setPlayerName] = useState<string>('Nameless Scum')
  const [bingoCards, setBingoCards] = useState<string[]>([])
  //TODO Implement check for maybe multiple games?
  const conditionList = tabsConditions.slice()

    const getRandomNumber = (maxValue: number): number => {
    return Math.floor(Math.random() * maxValue)
  }

  //TODO: Export to a separate bingo card component file probably

  const handleCardClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('card clicked', e.target)
    e.currentTarget.classList.toggle('card-clicked')
  }

  interface BingoCard {
    card: string
  }

  const Card: FC<BingoCard> = ({card}) => {
    return <Grid item xs={2.4} onClick={handleCardClicked} className='bingo-card'>{card}</Grid>

  }
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Generating for bing card for ${playerName}`)
    if (bingoCards.length >= 25 ) {
      setBingoCards([])
    }
    for (let i: number = 0; i < 25 ; i++) {
      const randomItem: string = conditionList[getRandomNumber(conditionList.length)]
      setBingoCards(prevValues => [...prevValues ,randomItem])
      conditionList.splice(conditionList.indexOf(randomItem), 1)
    }
    console.log('bingo cards', bingoCards)

  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {bingoCards.length < 25 ? (
          <>
            <p>Meaty's TABS Bingo</p>
              <TextField type='text' placeholder='John Souls' variant='filled' label="Player Name" onChange={handleInputChange} />
              <div className="button">
                <Button className="button" variant="contained" onClick={handleButtonClick}>Generate bingo cards</Button>
              </div>
          </>
        ) : (<>
          <p>Meaty's TABS Bingo</p>
          <p>{playerName}'s Bingo</p>

            <Grid container spacing={2} className='bingo-board'>
              {bingoCards.map((c, index) => <Card card={c} key={index}/>)}
            </Grid>
            <div className="button">
              <Button variant="contained" onClick={handleButtonClick}>Re-generate</Button>
            </div>
          
          </>
        )}        
        <p className="credits">Created by Amuga</p>
      </header>
    </div>
  );
}

export default App;
