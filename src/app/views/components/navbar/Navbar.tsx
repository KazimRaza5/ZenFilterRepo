"use client";
import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/Help";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn"); // Clear session data
    router.push("/login"); // Redirect to login
  };

  return (
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left Side - Navigation Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/category" passHref>
              <Button color="inherit">Category</Button>
            </Link>
            <Link href="/report" passHref>
              <Button color="inherit">Report</Button>
            </Link>
            <Link href="/settings" passHref>
              <Button color="inherit">Settings</Button>
            </Link>
            <Link href="/profile" passHref>
              <Button color="inherit">Profile</Button>
            </Link>
          </Box>

          {/* Right Side - Logout & Help */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button variant="outlined" onClick={handleLogout}>Logout</Button>
            <Link href="/help" passHref>
              <IconButton>
                <HelpOutlineIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
