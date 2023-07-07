import React, { useState } from 'react';
import { StartPage } from './components/StartScreen'
import { BingoBoard } from './components/BingoBoard';
import { tabsConditions } from './gameConditions'
import logo from './logo.svg';
import './App.css';

function App() {
  const [playerName, setPlayerName] = useState<string>('Nameless Scum')
  const [editedConfig, setEditedConfig] = useState<string>()
  const [bingoCards, setBingoCards] = useState<string[]>([])
  const [configShown, setConfigShown] = useState<boolean>(false)
  /*TODO List:
     Implement check for maybe multiple games?
  */
  
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
          <StartPage onInputChanged={handleInputChange} onButtonClicked={handleGenerateClicked} />
        ) : (
          <BingoBoard onButtonClicked={handleGenerateClicked} onBack={() => {setBingoCards([])}} cards={bingoCards} name={playerName} />
        )}
        <p className="credits">Created by Amuga</p>
      </header>
    </div>
  );
}

export default App;
