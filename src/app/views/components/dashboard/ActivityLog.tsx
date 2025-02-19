import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

const activityLogs = [
    { date: "Oct 18, 2023", activity: "Visited GitHub\nReviewed repository activities." },
    { date: "Oct 17, 2023", activity: "Accessed Slack\nSent messages in dev channel." },
    { date: "Oct 16, 2023", activity: "Browsed Trello\nUpdated project board." },
];

const ActivityLog = () => {
    return (
        <Card sx={{ p: 2 }}>
            <Typography variant="h6">View Activity Log</Typography>
            <Stack spacing={2} mt={2}>
                {activityLogs.map((log, index) => (
                    <Card key={index} variant="outlined">
                        <CardContent>
                            <Typography variant="subtitle2">{log.date}</Typography>
                            <Typography variant="body2" color="textSecondary">{log.activity}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
            <Stack direction="row" spacing={2} mt={2}>
                <Button variant="contained">Block</Button>
                <Button variant="outlined">Reinstate</Button>
                <Button variant="outlined">Label</Button>
            </Stack>
        </Card>
    );
};

export default ActivityLog;
