import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import "./App.css";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Header />
      <Box mt="10">
        <Gallery />
      </Box>
    </div>
  );
}

export default App;
