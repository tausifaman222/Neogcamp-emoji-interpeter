import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🚂": "Locomotive Train",
  "🚄": "High Speed Train",
  "🚅": "Bullet Train ",
  "🛺": "Rickshaw",
  "🚑": "Ambulance",
  "🚌": " Bus ",
  "🚓": "Police Car ",
  "🚕": " Taxi ",
  "🚗": "Classic Car ",
  "🚙": " SUV ",
  "🏍️": " Motorcycle ",
  "🛵": "Scooter",
  "🚲": "Cycle",
  "🚁": "Helicopter",
  "✈️": "Aeroplane",
  "🚀": "Space X Rocket ",
  "🛸": "Aliens Saucer",
  "🚤": "SpeedBoat",
  "🛶": "Canoe",
  "🪂": "Parachute"
};

const emojiList = Object.keys(emojiDictionary);
const emojiStyle = {
  fontSize: "4.5rem",
  padding: "0.5rem",
  cursor: "pointer"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var emoji = event.target.value;
    var showMeaning = emojiDictionary[emoji];
    if (showMeaning === undefined) {
      showMeaning = "Concept Vehicles not in our Garage ! Wait for Launch *";
    }
    if (emoji === "") {
      showMeaning = "";
    }
    setMeaning(`${emoji} ${showMeaning}`);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    meaning = ` ${emoji} ${meaning}`;
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        Want to reach NEOGCAMP ? Choose Your vehicle
        <span role="img" aria-label="finger">
          👇
        </span>
      </h1>
      <input
        // onInput={inputHandler}
        placeholder="Enter your emoji here"
        onChange={emojiInputHandler}
      ></input>
      <h2>{meaning}</h2>
      <h3>
        Vehicles in our Warehouse
        <span role="img" aria-label="rip">
          👇
        </span>
      </h3>
      <div id="emojis">
        {emojiList.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={emojiStyle}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer>
        <div className="learn-more">
          To learn more about , visit
          <span>
            <a
              className="HighlightedLink"
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/watch?v=Ezk2AwqgS9Q&list=PLzvhQUIpvvuj5KPnyPyWsvgyzNkX_ACPA"
            >
              Tanay Sir Neogcamp
            </a>
            .
          </span>
        </div>

        <div className="coded-with">
          Coded-with
          <span role="img" aria-label="love">
            ❤️
          </span>
          by
          <span>
            <a
              className="HighlightedLink"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/tausifaman222"
            >
              Syed Tausif Ahmed
            </a>
          </span>
        </div>

        <div className="link-with">
          Want to Link with me
          <span role="img" aria-label="ripe">
            👆👆
          </span>
        </div>
      </footer>
    </div>
  );
}
