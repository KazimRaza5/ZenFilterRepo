"use client";
import { useState } from "react";
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Chip,
    Box,
} from "@mui/material";
import DashboardLayout from "../../../DashboardLayout";

const reportsData = [
    { id: 1, website: "malicious-site.com", reason: "Phishing", status: "Pending" },
    { id: 2, website: "spam-links.net", reason: "Spam Content", status: "Reviewed" },
    { id: 3, website: "unsafe-site.org", reason: "Malware", status: "Resolved" },
    { id: 4, website: "clickbait-ads.com", reason: "Clickbait", status: "Pending" },
];

export default function Report() {
    const [search, setSearch] = useState("");

    const filteredReports = reportsData.filter((report) =>
        report.website.toLowerCase().includes(search.toLowerCase())
    );

    const getStatusChip = (status: string) => {
        switch (status) {
            case "Pending":
                return <Chip label="Pending" color="warning" />;
            case "Reviewed":
                return <Chip label="Reviewed" color="info" />;
            case "Resolved":
                return <Chip label="Resolved" color="success" />;
            default:
                return <Chip label="Unknown" />;
        }
    };

    return (
        <DashboardLayout>
            <Container maxWidth="md">
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Spam Reports
                </Typography>

                {/* Search Bar */}
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Search by Website"
                        variant="outlined"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Box>

                {/* Reports Table */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Website</strong></TableCell>
                                <TableCell><strong>Reason</strong></TableCell>
                                <TableCell><strong>Status</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredReports.map((report) => (
                                <TableRow key={report.id}>
                                    <TableCell>{report.website}</TableCell>
                                    <TableCell>{report.reason}</TableCell>
                                    <TableCell>{getStatusChip(report.status)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </DashboardLayout>
    );
}
