import React, { useState } from 'react';
import { Card } from './components/BingoCard'
import { tabsConditions } from './gameConditions'
import { Grid, TextField, Button } from '@mui/material';
import logo from './logo.svg';
import './App.css';

function App() {
  const [playerName, setPlayerName] = useState<string>('Nameless Scum')
  const [editedConfig, setEditedConfig] = useState<string>()
  const [bingoCards, setBingoCards] = useState<string[]>([])
  const [configShown, setConfigShown] = useState<boolean>(false)
  //TODO Implement check for maybe multiple games?
  let conditionList: string[] = tabsConditions.slice()

  const getRandomNumber = (maxValue: number): number => {
    return Math.floor(Math.random() * maxValue)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value)
  }

  const handleGenerateClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Generating bingo board for ${playerName}`)
    console.log('conditions', conditionList)
        console.log('conditions', conditionList)

    if (bingoCards.length >= 25 ) {
      setBingoCards([])
    }
    for (let i: number = 0; i < 25 ; i++) {
      const randomItem: string = conditionList[getRandomNumber(conditionList.length)]
      setBingoCards(prevValues => [...prevValues ,randomItem])
      conditionList.splice(conditionList.indexOf(randomItem), 1)
    }
  }

  const handleEditClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    setConfigShown(!configShown)
  }

  const handleSaveClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(editedConfig?.split(','))
    conditionList = editedConfig?.split(',') ?? conditionList
    //setConfigShown(false)
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
                <Button className="button" variant="contained" onClick={handleGenerateClicked}>Generate bingo cards</Button>
              </div>
              { /* TODO: Maybe add later
              <div className="button">
                <Button className="button" color="secondary" variant="contained" onClick={handleEditClicked}>{configShown ? 'Hide Config' : 'Edit Config'} </Button>
              </div>
              */}
              {configShown && (
                <>
                  <textarea value={editedConfig || conditionList} rows={15} cols={50} onChange={(e) => setEditedConfig(e.target.value)} />
                  <div className="button">
                    <Button className="button" variant="contained" color="success" onClick={handleSaveClicked}>Save Config</Button>
                  </div>
                </>
              )}
          </>
        ) : (
        <>
          <Grid container spacing={1.5} className='card-description'>
            <Grid item xs={12}>Meaty's TABS Bingo</Grid>
            <Grid item xs={12}>{playerName}'s Bingo</Grid>
          </Grid>
          <Grid container className='bingo-board'>
            {bingoCards.map((c, index) => <Card card={c} key={index}/>)}
          </Grid>
          <div className="button">
            <Button variant="contained" onClick={handleGenerateClicked}>Re-generate</Button>
          </div>
          <div className="button">
            <Button variant="contained" onClick={() => {setBingoCards([])}}>Back</Button>
          </div>

          
          </>
        )}        
        <p className="credits">Created by Amuga</p>
      </header>
    </div>
  );
}

export default App;
