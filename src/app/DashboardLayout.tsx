import { Box } from "@mui/material";
import Navbar from "../app/views/components/navbar/Navbar";
import Sidebar from "../app/views/components/sidebar/SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1 }}>
                <Navbar />
                <Box sx={{ p: 3 }}>{children}</Box>
            </Box>
        </Box>
    );
};

export default DashboardLayout;
