import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";

const blockedWebsites = [
    { id: 1, img: "/Images/Telegram.png", date: "2023-10-12", category: "Social Media" },
    { id: 2, img: "/Images/Geo.png", date: "2023-10-10", category: "News" },
    { id: 3, img: "/Images/HBO.png", date: "2023-10-09", category: "Entertainment" },
    { id: 4, img: "/Images/Temu.png", date: "2023-10-08", category: "E-commerce" },
];

const RecentlyBlocked = () => {
    return (
        <Card sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
                Manage Blocked Websites/Apps
            </Typography>
            <Grid container spacing={2}>
                {blockedWebsites.map((item) => (
                    <Grid item xs={6} md={3} key={item.id}>
                        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardMedia component="img" height="140" image={item.img} alt="Blocked Site" />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="subtitle2">Recently Blocked</Typography>
                                <Typography variant="caption" color="textSecondary">
                                    Blocked on: {item.date}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                    Category: {item.category}
                                </Typography>
                            </CardContent>
                            <Button variant="contained" color="primary" size="small" sx={{ m: 1 }}>
                                Download
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Card>
    );
};

export default RecentlyBlocked;
