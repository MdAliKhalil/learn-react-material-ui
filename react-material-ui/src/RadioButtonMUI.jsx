import { useState } from "react";
import Divider from "./Divider";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import TransgenderIcon from '@mui/icons-material/Transgender';

function RadioButtonMUI() {
    const [gender, setGender] = useState('');

    return (
        <div>
            <h3>Select Your Gender</h3>
            <RadioGroup name="gender" value={gender} onChange={(event) => setGender(event.target.value)}>
                <FormControlLabel control={<Radio />} label={<span>Male <ManIcon fontSize="small" /> </span>} value="Male" />
                <FormControlLabel control={<Radio />} label={<span>Female <WomanIcon fontSize="small" /></span>} value="Female" />
                <FormControlLabel control={<Radio />} label={<span>Other <TransgenderIcon fontSize="small" /></span>} value="Other" />
            </RadioGroup>
            {gender !== '' ? <h4>Selected Gender: <i style={{ textDecoration: 'underline' }}>{gender}</i></h4> : null}
            <Divider />
        </div>
    );
}

export default RadioButtonMUI;