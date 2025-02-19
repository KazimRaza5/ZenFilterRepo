"use client";
import { useState } from "react";
import {
    Container,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    Box,
    TextField,
    IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DashboardLayout from "../../../DashboardLayout";

const initialCategories = [
    { id: 1, name: "Phishing", description: "Websites attempting to steal sensitive information." },
    { id: 2, name: "Spam", description: "Unwanted promotional content or misleading ads." },
    { id: 3, name: "Malware", description: "Websites containing malicious software." },
];

export default function Category() {
    const [categories, setCategories] = useState(initialCategories);
    const [newCategory, setNewCategory] = useState({ name: "", description: "" });

    const handleAddCategory = () => {
        if (newCategory.name && newCategory.description) {
            setCategories([...categories, { id: Date.now(), ...newCategory }]);
            setNewCategory({ name: "", description: "" });
        }
    };

    const handleDeleteCategory = (id: number) => {
        setCategories(categories.filter((category) => category.id !== id));
    };

    return (
        <DashboardLayout>
            <Container maxWidth="md">
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                    Categories
                </Typography>

                {/* Add New Category */}
                <Box sx={{ mb: 3, display: "flex", gap: 2 }}>
                    <TextField
                        label="Category Name"
                        variant="outlined"
                        value={newCategory.name}
                        onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                        fullWidth
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        value={newCategory.description}
                        onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                        fullWidth
                    />
                    <Button variant="contained" startIcon={<AddIcon />} onClick={handleAddCategory}>
                        Add
                    </Button>
                </Box>

                {/* Category List */}
                <Grid container spacing={3}>
                    {categories.map((category) => (
                        <Grid item xs={12} md={6} key={category.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{category.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {category.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDeleteCategory(category.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </DashboardLayout>
    );
}
