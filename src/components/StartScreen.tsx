import  { FC, useState } from 'react';
import { TextField, Button } from '@mui/material';


interface Page {
    onInputChanged: (e: React.ChangeEvent<HTMLInputElement>) => void
    onButtonClicked: (e: React.MouseEvent<HTMLButtonElement>) => void
  }

export const StartPage: FC <Page>= ({onInputChanged, onButtonClicked}) => {
    const [configShown, setConfigShown] = useState<boolean>(false)
    const [editedConfig, setEditedConfig] = useState<string>()
    return (
        <>
            <p>Meaty's TABS Bingo</p>
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
