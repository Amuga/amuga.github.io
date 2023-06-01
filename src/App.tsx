import React, { FC, useState } from 'react';
import {Grid} from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import logo from './logo.svg';
import './App.css';

function App() {
  const [playerName, setPlayerName] = useState<string>('Nameless Scum')
  const [bingoCards, setBingoCards] = useState<string[]>([])
  const listOptions: string[] = ['ranger die to a sneeze (ranger die before day 6)','Ranger Muton Aggro','AI Derp','Sawmill Bop',
    'Ballista didnt shoot','Mute 2 hit Crit','Soldier ded',
    'Chicken Check','Mountain Donut','Worst Mayors','Micro fail','Tea Time','Muton one ballsita pull','Chokemap (one entrance)',
    'Soldier on doomtown side start','5 volcano stack','Harpy ranger pull','Double taco trucks','3 gold one stack',
    '3 zombies one Scratching post','stuck giant','No wood >4','Mayor joke','spinning muton','Koi pond!',
    'over 100 gold mine', 'Great lake', 'Barracks before Woodshop', 'Condition Example 29', 'Condition Example 30']
  const getRandomNumber = (maxValue: number): number => {
    return Math.floor(Math.random() * maxValue)
  }

  interface BingoCard {
    card: string
  }

  const Card: FC<BingoCard> = ({card}) => {
    return <Grid xs={2.4} className='bingo-card'>{card}</Grid>

  }
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Generating for bing card for ${playerName}`)
    if (bingoCards.length >= 25 ) {
      console.log('huh')
      setBingoCards([])
    }
    for (let i: number = 0; i < 25 ; i++) {
      const randomItem: string = listOptions[getRandomNumber(listOptions.length)]
      setBingoCards(prevValues => [...prevValues ,randomItem])
      listOptions.splice(listOptions.indexOf(randomItem), 1)
    }
    console.log('bingo card', bingoCards)

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
          <p>Meaty's TABS Bingo
          <div className='button'>{playerName}'s Bingo</div>
          </p>
            <Grid container spacing={2} className='bingo-board'>
              {bingoCards.map(c => <Card card={c} key={`card ${c}`}/>)}
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
