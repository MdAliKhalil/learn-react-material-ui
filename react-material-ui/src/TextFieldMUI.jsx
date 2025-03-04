import Divider from "./Divider";
import TextField from "@mui/material/TextField";

function TextFieldMUI() {
    return (
        <div>
            <form>
                <TextField type="text" variant="standard" color="secondary" size="small" label="Name" placeholder="Enter your name" autoComplete="name"></TextField>
                &nbsp;&nbsp;
                <TextField type="email" variant="standard" color="secondary" size="small" label="Email" placeholder="Enter your email" autoComplete="email"></TextField>
                &nbsp;&nbsp;
                <TextField type="password" variant="standard" color="secondary" size="small" label="Password" placeholder="Enter your password" autoComplete="current-password"></TextField>
            </form>
            <Divider />
        </div>
    );
}

export default TextFieldMUI;