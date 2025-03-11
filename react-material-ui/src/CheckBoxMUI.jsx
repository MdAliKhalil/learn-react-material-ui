import { useState } from "react";
import Divider from "./Divider";
import { Checkbox, FormControlLabel } from "@mui/material";

function CheckBoxMUI() {
    const [checked, setChecked] = useState(true);

    return (
        <div>
            <FormControlLabel control={
                <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} color="primary"></Checkbox>
            } label="You agree to terms and conditions"
            />
            <Divider />
        </div>
    );
}

export default CheckBoxMUI;