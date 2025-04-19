import ada1 from "./images/1343896.png";
import ada2 from "./images/wallhaven-o58qkp.png";
import ada3 from "./images/wallhaven-zy6egy.png";
import { ImageSlider } from "./ImageSlider.tsx";

const images = [ada1, ada2, ada3];

function App() {
  return (
    <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
      <ImageSlider imageUrl={images} />
    </div>
  );
}

export default App;
