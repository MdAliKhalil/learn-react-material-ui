import Divider from "./Divider";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Dashboard from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import QuizIcon from '@mui/icons-material/Quiz';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import SettingsIcon from '@mui/icons-material/Settings';

function ListMappingMUI() {
    const listtabs = [
        {
            icon: <Dashboard />,
            text: "Dashboard"
        },
        {
            icon: <MonetizationOnIcon />,
            text: "Rewarded Quiz"
        },
        {
            icon: <QuizIcon />,
            text: "Free Quiz"
        },
        {
            icon: <LeaderboardIcon />,
            text: "Leaderboard"
        },
        {
            icon: <SwapCallsIcon />,
            text: "Referrals"
        },
        {
            icon: <SettingsIcon />,
            text: "Settings"
        }
    ]

    return (
        <div>
            <List>
                {
                    listtabs.map((list, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{list.icon}</ListItemIcon>
                                <ListItemText primary={list.text}></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
            <Divider />
        </div>
    );
}

export default ListMappingMUI;