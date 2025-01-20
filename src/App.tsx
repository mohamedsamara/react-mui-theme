import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">React MUI Theme</Typography>
    </Box>
  );
};

export default App;
