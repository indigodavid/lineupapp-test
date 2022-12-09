
import { useState } from 'react';
import { Circle, Layer, Rect, Stage } from 'react-konva';
import './App.css';

function App() {
  const [content, setContent] = useState([]);

  const addCircle = () => {
    const circle = <Circle x={350} y={250} radius={50} stroke="black" fill="transparent" />
    setContent((content) => [
      ...content,
      circle,
    ]);
  };

  const addRectangle = () => {
    const rectangle = <Rect x={350} y={250} width={100} height={100} stroke="black" fill="transparent" />
    setContent((content) => [
      ...content,
      rectangle,
    ]);
  }

  return (
    <div className="App">
      {/* Panel to add circle and rectangle */}
      <aside id="tool-panel">
        <button type="button" onClick={addCircle}>Add Circle</button>
        <button type="button" onClick={addRectangle}>Add Rectangle</button>
      </aside>
      {/* Canvas for drawing */}
      <main>
        <Stage width={800} height={600}>
          <Layer>
            {content}
          </Layer>
        </Stage>
      </main>
    </div>
  );
}

export default App;
