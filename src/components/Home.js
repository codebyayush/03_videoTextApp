import React, { useState } from "react";
import Draggable from "react-draggable";

const Home = () => {
  const [textBoxes, setTextBoxes] = useState([]);
  const [selectedBox, setSelectedBox] = useState(null);

  const addTextBox = () => {
    const newTextBox = {
      id: Date.now(),
      text: "Sample Text",
      x: 50,
      y: 50,
      width: 250,
      height: 50,
      fontSize: 36,
      color: "#00000",
      stroke: "#00000"
    };
    setTextBoxes([...textBoxes, newTextBox]);
  };

  const updateTextBox = (id, key, value) => {
    setTextBoxes(
      textBoxes.map((box) => (box.id === id ? { ...box, [key]: value } : box))
    );
  };

  const deleteTextBox = (id) => {
    setTextBoxes(textBoxes.filter((box) => box.id !== id));

    if (selectedBox === id) {
      setSelectedBox(null);
    }
  };

  const onDragStop = ( data, id) => {
    updateTextBox(id, "x", data.x);
    updateTextBox(id, "y", data.y);
  };

  return (
    <div className="flex justify-evenly h-screen p-4 gap-10 bg-blue-100">
      {/* video */}
      <section className="w-3/4 p-4">
        <div className="relative w-full h-full shadow-2xl">
          <video
            src="/short.mp4"
            controls
            className="w-full rounded-xl h-full object-cover"
          ></video>
          {textBoxes.map((box) => (
            <Draggable
              key={box.id}
              defaultPosition={{ x: box.x, y: box.y }}
              onStop={(e, data) => onDragStop(e, data, box.id)}
              bounds="parent"
            >
              <div
                key={box.id}
                style={{
                  top: `${box.y}px`,
                  left: `${box.x}px`,
                  width: `${box.width}px`,
                  height: `${box.height}px`,
                  fontSize: `${box.fontSize}px`,
                  color: box.color,
                  borderColor: box.stroke,
                  borderWidth: 2,
                }}
                className="absolute bg-transparent border cursor-move"
                onMouseOver={() => setSelectedBox(box.id)}
              >
                {selectedBox === box.id ? (
                  <input
                    type="text"
                    className="w-full h-full bg-transparent border-none focus:outline-none"
                    value={box.text}
                    onChange={(e) =>
                      updateTextBox(box.id, "text", e.target.value)
                    }
                  />
                ) : (
                  box.text
                )}
                {selectedBox === box.id && (
                  <button
                    className="absolute top-14 text-base rounded-md right-0 text-white bg-red-500 hover:bg-red-700 p-1"
                    onClick={() => deleteTextBox(box.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </Draggable>
          ))}
        </div>
      </section>

      {/* configuration */}
      <section className="w-1/4 p-4 bg-white shadow-xl rounded-md border border-neutral-300 ">
        <div className="m-4">
          <button
            onClick={addTextBox}
            className="w-full p-2 rounded-md font-medium bg-teal-600 hover:bg-neutral-500 text-white hover:duration-300"
          >
            Add Text
          </button>
        </div>
        {selectedBox && (
          <div className="space-y-4">
            <div>
              <label>Position X:</label>
              <input
                type="number"
                className="border p-2 w-full"
                value={textBoxes.find((box) => box.id === selectedBox).x}
                onChange={(e) =>
                  updateTextBox(selectedBox, "x", e.target.value)
                }
              />
            </div>
            <div>
              <label>Position Y:</label>
              <input
                type="number"
                className="border p-2 w-full"
                value={textBoxes.find((box) => box.id === selectedBox).y}
                onChange={(e) =>
                  updateTextBox(selectedBox, "y", e.target.value)
                }
              />
            </div>
            <div>
              <label>Width:</label>
              <input
                type="number"
                className="border p-2 w-full"
                value={textBoxes.find((box) => box.id === selectedBox).width}
                onChange={(e) =>
                  updateTextBox(selectedBox, "width", e.target.value)
                }
              />
            </div>
            <div>
              <label>Height:</label>
              <input
                type="number"
                className="border p-2 w-full"
                value={textBoxes.find((box) => box.id === selectedBox).height}
                onChange={(e) =>
                  updateTextBox(selectedBox, "height", e.target.value)
                }
              />
            </div>
            <div>
              <label>Font Size:</label>
              <input
                type="number"
                className="border p-2 w-full"
                value={textBoxes.find((box) => box.id === selectedBox).fontSize}
                onChange={(e) =>
                  updateTextBox(selectedBox, "fontSize", e.target.value)
                }
              />
            </div>
            <div>
              <label>Fill Color:</label>
              <input
                type="color"
                className="border p-2 w-full"
                value={textBoxes.find((box) => box.id === selectedBox).color}
                onChange={(e) =>
                  updateTextBox(selectedBox, "color", e.target.value)
                }
              />
            </div>
            <div>
              <label>Stroke Color:</label>
              <input
                type="color"
                className="border p-2 w-full"
                value={textBoxes.find(box => box.id === selectedBox).stroke}
                onChange={(e) =>
                  updateTextBox(selectedBox, 'stroke', e.target.value)
                }
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
