import Divider from "./Divider";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Dashboard from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import QuizIcon from '@mui/icons-material/Quiz';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import SettingsIcon from '@mui/icons-material/Settings';

function ListMUI() {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><Dashboard /></ListItemIcon>
                        <ListItemText primary="Dashboard"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
                        <ListItemText primary="Rewarded Quiz"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><QuizIcon /></ListItemIcon>
                        <ListItemText primary="Free Quiz"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><LeaderboardIcon /></ListItemIcon>
                        <ListItemText primary="Leaderboard"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><SwapCallsIcon /></ListItemIcon>
                        <ListItemText primary="Referrals"></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary="Settings"></ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </div>
    );
}

export default ListMUI;