import { Container, Grid, Typography, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import DashboardLayout from "../../../DashboardLayout";

const spamReports = [
    { id: 1, website: "malicious-site.com", category: "Phishing", date: "2024-02-18", status: "Blocked" },
    { id: 2, website: "fake-login.net", category: "Credential Theft", date: "2024-02-17", status: "Under Review" },
    { id: 3, website: "scam-alert.xyz", category: "Scam", date: "2024-02-16", status: "Blocked" },
];

export default function SpamReports() {
    return (
        <DashboardLayout>
            <Container maxWidth="lg">
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Spam Reports
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: "bold" }}>Website</TableCell>
                                                <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                                                <TableCell sx={{ fontWeight: "bold" }}>Date Reported</TableCell>
                                                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {spamReports.map((report) => (
                                                <TableRow key={report.id}>
                                                    <TableCell>{report.website}</TableCell>
                                                    <TableCell>{report.category}</TableCell>
                                                    <TableCell>{report.date}</TableCell>
                                                    <TableCell>{report.status}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </DashboardLayout>
    );
}
