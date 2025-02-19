import { Container, Grid, Typography, Card, CardContent, Button, List, ListItem, ListItemText, Box } from "@mui/material";
import DashboardLayout from "../../../DashboardLayout";

const activityLogs = [
    { id: 1, date: "Oct 18, 2023", description: "Visited GitHub - Reviewed repository activities." },
    { id: 2, date: "Oct 17, 2023", description: "Accessed Slack - Sent messages in dev channel." },
    { id: 3, date: "Oct 16, 2023", description: "Browsed Trello - Updated project board." },
];

export default function ActivityLog() {
    return (
        <DashboardLayout>
            <Container maxWidth="lg">
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    View Activity Log
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <List>
                                    {activityLogs.map((log) => (
                                        <ListItem key={log.id} sx={{ borderBottom: "1px solid #eee" }}>
                                            <ListItemText
                                                primary={<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>{log.date}</Typography>}
                                                secondary={log.description}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mt: 2 }}>
                                    <Button variant="contained" color="primary">Block</Button>
                                    <Button variant="outlined">Reinstate</Button>
                                    <Button variant="outlined">Label</Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </DashboardLayout>
    );
}
