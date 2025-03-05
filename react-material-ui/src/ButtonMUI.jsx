import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Divider from "./Divider";

function ButtonMUI() {
    const deleteHandler = () => {
        alert('File has been deleted!');
    }

    const sendHandler = () => {
        alert('File has been sent!');
    }

    return (
        <div>
            <ButtonGroup>
                <IconButton aria-label="delete" title="Delete file" color="warning" onClick={deleteHandler}><DeleteIcon /></IconButton>
                <IconButton aria-label="send" title="Send file" color="primary" onClick={sendHandler}><SendIcon /></IconButton>
            </ButtonGroup>
            <br />
            <ButtonGroup variant="contained" disableElevation>
                <Button color="warning" startIcon={<DeleteIcon />} onClick={deleteHandler}>Delete</Button>
                <Button color="primary" endIcon={<SendIcon />} onClick={sendHandler}>Send</Button>
            </ButtonGroup>
            <Divider />
        </div>
    );
}

export default ButtonMUI;