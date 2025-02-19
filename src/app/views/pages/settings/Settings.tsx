import { Container, Typography, List, ListItemButton, ListItemIcon, ListItemText, Card, CardContent } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TuneIcon from "@mui/icons-material/Tune";
import DashboardLayout from "../../../DashboardLayout";
import Link from "next/link";

const settingsOptions = [
    { text: "Profile", icon: <AccountCircleIcon />, link: "/dashboard/settings/profile" },
    { text: "Members", icon: <GroupIcon />, link: "/dashboard/settings/members" },
    { text: "Security & Password", icon: <LockIcon />, link: "/dashboard/settings/security" },
    { text: "Email", icon: <EmailIcon />, link: "/dashboard/settings/email" },
    { text: "Notifications", icon: <NotificationsIcon />, link: "/dashboard/settings/notifications" },
    { text: "Preferences", icon: <TuneIcon />, link: "/dashboard/settings/preferences" },
];

export default function Settings() {
    return (
        <DashboardLayout>
            <Container maxWidth="lg">
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Settings
                </Typography>
                <Card>
                    <CardContent>
                        <List>
                            {settingsOptions.map((option, index) => (
                                <Link href={option.link} key={index} passHref>
                                    <ListItemButton component="a">
                                        <ListItemIcon>{option.icon}</ListItemIcon>
                                        <ListItemText primary={option.text} />
                                    </ListItemButton>
                                </Link>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Container>
        </DashboardLayout>
    );
}
