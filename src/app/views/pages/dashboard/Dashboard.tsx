"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../../../../app/utils/auth"; // Import authentication function
import DashboardLayout from "../../../DashboardLayout";
import SetFilteringPreferences from "../../../views/components/dashboard/SetFilteringPreferences";
import ActivityLog from "../../../views/components/dashboard/ActivityLog";
import RecentlyBlocked from "../../../views/components/dashboard/RecentlyBlocked";
import SummaryGraph from "../../../views/components/dashboard/SummaryGraph";
import { Container, Grid, Box } from "@mui/material";

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push("/login"); // Redirect unauthorized users
        }
    }, []);

    return (
        <DashboardLayout>
            <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="stretch">
                    {/* Set Filtering Preferences */}
                    <Grid item xs={12}>
                        <SetFilteringPreferences />
                    </Grid>

                    {/* Activity Log & Recently Blocked - Equal Heights */}
                    <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <ActivityLog />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <RecentlyBlocked />
                        </Box>
                    </Grid>

                    {/* Summary Graph */}
                    <Grid item xs={12}>
                        <SummaryGraph />
                    </Grid>
                </Grid>
            </Container>
        </DashboardLayout>
    );
}
