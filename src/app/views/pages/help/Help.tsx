import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent, Button, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DashboardLayout from "../../../DashboardLayout";

export default function Help() {
    return (
        <DashboardLayout>
            <Container maxWidth="md">
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Help & Support
                </Typography>

                <Card sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Frequently Asked Questions
                        </Typography>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>How do I reset my password?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You can reset your password by going to the settings page and selecting "Security & Password."
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>How do I contact customer support?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    You can reach out via email at <strong>support@example.com</strong> or use our live chat feature.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Where can I find documentation?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Our official documentation is available at <a href="https://docs.example.com" target="_blank" rel="noopener noreferrer">docs.example.com</a>.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Need More Help?
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            If you need further assistance, feel free to contact our support team.
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Button variant="contained" startIcon={<ContactSupportIcon />}>
                                Contact Support
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </DashboardLayout>
    );
}
