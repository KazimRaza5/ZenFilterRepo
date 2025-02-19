import { Container, Grid, Typography, Card, CardContent, Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Box } from "@mui/material";
import DashboardLayout from "../../../DashboardLayout";

const familyMembers = [
    { id: 1, name: "John Doe", role: "Parent", avatar: "/images/avatar1.jpg" },
    { id: 2, name: "Jane Doe", role: "Guardian", avatar: "/images/avatar2.jpg" },
    { id: 3, name: "Alex Doe", role: "Child", avatar: "/images/avatar3.jpg" },
];

export default function FamilySharing() {
    return (
        <DashboardLayout>
            <Container maxWidth="lg">
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Family Sharing
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                                    <Typography variant="h6">Manage Family Members</Typography>
                                    <Button variant="contained" color="primary">+ Add Member</Button>
                                </Box>
                                <List>
                                    {familyMembers.map((member) => (
                                        <ListItem key={member.id} sx={{ borderBottom: "1px solid #eee" }}>
                                            <ListItemAvatar>
                                                <Avatar src={member.avatar} alt={member.name} />
                                            </ListItemAvatar>
                                            <ListItemText primary={member.name} secondary={member.role} />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </DashboardLayout>
    );
}
