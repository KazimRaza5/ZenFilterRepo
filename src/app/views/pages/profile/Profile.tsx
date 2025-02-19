"use client";
import { Container, Typography, Avatar, TextField, Button, Card, CardContent, Box, Stack } from "@mui/material";
import DashboardLayout from "../../../DashboardLayout";
import { useState } from "react";

export default function Profile() {
    const [profile, setProfile] = useState({
        name: "Amanda Smith",
        email: "amanda@example.com",
        bio: "Cybersecurity Enthusiast & Web Developer",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log("Profile Updated:", profile);
    };

    return (
        <DashboardLayout>
            <Container maxWidth="sm">
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Profile Settings
                </Typography>
                <Card>
                    <CardContent>
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", mb: 2 }}>
                            <Avatar sx={{ width: 80, height: 80, mb: 1 }} src="/images/profile.jpg" alt={profile.name} />
                            <Typography variant="h6">{profile.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {profile.email}
                            </Typography>
                        </Box>

                        <Stack spacing={2}>
                            <TextField fullWidth label="Name" name="name" value={profile.name} onChange={handleChange} />
                            <TextField fullWidth label="Email" name="email" value={profile.email} onChange={handleChange} />
                            <TextField fullWidth label="Bio" name="bio" value={profile.bio} onChange={handleChange} multiline rows={2} />

                            <Button variant="contained" onClick={handleSave} sx={{ alignSelf: "center", width: "50%" }}>
                                Save Changes
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </DashboardLayout>
    );
}
