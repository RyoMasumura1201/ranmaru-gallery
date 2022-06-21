import { Header } from "./components/Header";
import { Gallery } from "./components/gallery";
import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
