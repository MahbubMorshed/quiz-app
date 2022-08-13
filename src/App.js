import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" element={<Settings />}></Route>
            <Route path="/questions" element={<Questions />}></Route>
            <Route path="/score" element={<FinalScreen />}></Route>
          </Routes>
        </Box>
      </Container>
    </div>
  );
}

export default App;
