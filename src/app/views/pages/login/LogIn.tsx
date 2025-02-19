"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {authenticateUser, setAuthenticatedUser} from "../../../utils/auth";
import { TextField, Button, Typography, Container, Box, Paper, Link, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (authenticateUser(email, password)) {
            setAuthenticatedUser(email); // Store authenticated user
            router.push("/dashboard"); // Redirect to dashboard
        } else {
            setError("Invalid email or password.");
        }
    };
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "url('/Images/9422w_GradientPainting_PatternImage.jpeg')", // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                p: 2,
            }}
        >
            <Container maxWidth="sm">
                <Paper
                    elevation={6}
                    sx={{
                        borderRadius: 3,
                        backdropFilter: "blur(10px)", // Glassmorphism effect
                        backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Soft shadow
                        p: 4,
                    }}
                >
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", textAlign: "center", color: "#000000" }}>
                        Member Login
                    </Typography>

                    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <TextField
                            placeholder="Email"
                            type="email"
                            fullWidth
                            required
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon color="disabled" />
                                    </InputAdornment>
                                ),
                                sx: { borderRadius: 5, background: "rgba(255, 255, 255, 0.3)" },
                            }}
                        />
                        <TextField
                            placeholder="Password"
                            type="password"
                            fullWidth
                            required
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon color="disabled" />
                                    </InputAdornment>
                                ),
                                sx: { borderRadius: 5, background: "rgba(255, 255, 255, 0.3)" },
                            }}
                        />

                        {error && (
                            <Typography color="error" variant="body2">
                                {error}
                            </Typography>
                        )}

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                py: 1.5,
                                fontSize: "16px",
                                fontWeight: "bold",
                                borderRadius: 1,
                                backgroundColor: "primary.main",
                                "&:hover": { backgroundColor: "#1b1361" },
                            }}
                            onClick={handleLogin}
                        >
                            LOGIN
                        </Button>

                        <Typography variant="body2" sx={{ mt: 2, textAlign: "center", color: "#000000" }}>
                            <Link href="#" sx={{ textDecoration: "none", color: "#000000", fontWeight: "bold" }}>
                                Forgot Password?
                            </Link>
                        </Typography>

                        <Typography variant="body2" sx={{ mt: 2, textAlign: "center", color: "#000000" }}>
                            Don't have an account?{" "}
                            <Link href="/register" sx={{ textDecoration: "none", color: "1976D2", fontWeight: "bold" }}>
                                Sign Up
                            </Link>
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;
