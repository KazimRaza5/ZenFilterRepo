'use client'
import {Card, CardContent, Typography, Button, FormControlLabel, Switch, Stack, Box} from "@mui/material";
import { useState } from "react";

const SetFilteringPreferences = () => {
    const [blockSites, setBlockSites] = useState(false);
    const [allowTrusted, setAllowTrusted] = useState(false);

    const handleSave = () => {
        console.log("Preferences Saved:", { blockSites, allowTrusted });
    };

    return (
        <Card sx={{ p: 2 }}>
            <Typography variant="h6">Set Filtering Preferences</Typography>
            <CardContent>
                <Stack spacing={2}>
                    <FormControlLabel
                        control={<Switch checked={blockSites} onChange={() => setBlockSites(!blockSites)} />}
                        label="Block Sites - Block all sites not on the list."
                    />
                    <FormControlLabel
                        control={<Switch checked={allowTrusted} onChange={() => setAllowTrusted(!allowTrusted)} />}
                        label="Allow Trusted - Allow only sites on the trusted list."
                    />
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button sx={{ width: "20%", marginY:'10px' }} variant="contained" onClick={handleSave}>
                            Save Preferences
                        </Button>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default SetFilteringPreferences;
