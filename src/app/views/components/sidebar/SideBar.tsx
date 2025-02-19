import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Avatar, Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportIcon from "@mui/icons-material/Assessment";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/Help";
import Link from "next/link";

const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, href: "/" },
    { text: "Spam Reports", icon: <ReportIcon />, href: "/spamReports" },
    { text: "Family Sharing", icon: <FamilyRestroomIcon />, href: "/familySharing" },
    { text: "Activity Log", icon: <HistoryIcon />, href: "/activityLog" },
    { text: "Settings", icon: <SettingsIcon />, href: "/settings" },
    { text: "Help", icon: <HelpOutlineIcon />, href: "/help" },
];

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box", background: "#f9f9f9", borderRight: "1px solid #ddd" },
            }}
        >
            <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar src="/images/profile.jpg" alt="Amanda" />
                <Box>
                    <Typography variant="subtitle2">Amanda</Typography>
                    <Typography variant="caption" color="textSecondary">
                        View profile
                    </Typography>
                </Box>
            </Box>
            <List>
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href} passHref legacyBehavior>
                        <ListItemButton component="a">
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
