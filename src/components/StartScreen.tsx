import  { FC, useState } from 'react';
import { TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';


interface Page {
    onInputChanged: (e: React.ChangeEvent<HTMLInputElement>) => void
    onButtonClicked: (e: React.MouseEvent<HTMLButtonElement>) => void
    onRadioClicked: (e: React.ChangeEvent<HTMLInputElement>) => void
  }

export const StartPage: FC <Page>= ({onInputChanged, onButtonClicked, onRadioClicked}) => {
    const [configShown, setConfigShown] = useState<boolean>(false)
    const [editedConfig, setEditedConfig] = useState<string>()
    return (
        <>
            <p>Bingo Generator</p>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Bingo Type</FormLabel>
                <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue="tabs"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="tabs" control={<Radio onChange={onRadioClicked} />} label="They Are Billions" />
                    <FormControlLabel value="horror" control={<Radio onChange={onRadioClicked} />} label="Generic Indie Horror" />
                </RadioGroup>
            </FormControl>
            <TextField type='text' placeholder='John Souls' variant='filled' label="Player Name" onChange={onInputChanged} />
            <div className="button">
                <Button className="button" variant="contained" onClick={onButtonClicked}>Generate bingo cards</Button>
            </div>
            { /* TODO: Maybe add later
            <div className="button">
                <Button className="button" color="secondary" variant="contained" onClick={handleEditClicked}>{configShown ? 'Hide Config' : 'Edit Config'} </Button>
            </div>
            */}
            {/*configShown && (
                <>
                <textarea value={editedConfig || conditionList} rows={15} cols={50} onChange={(e) => setEditedConfig(e.target.value)} />
                <div className="button">
                    <Button className="button" variant="contained" color="success" onClick={handleSaveClicked}>Save Config</Button>
                </div>
                </>
            )*/}
        </>
    )
    
}
