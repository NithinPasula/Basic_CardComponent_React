import { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    {
      title: "Nithin",
      description: "A wanderlust traveller",
      intrestsItem: {
        intrests: ["Travel", "Food", "Music"],
      },
    },
  ]);

  return (
    <div className="container">
      {/* Mapping over cards array and rendering BusinessCards for each card */}
      {cards.map((card, index) => (
        <BusinessCards
          key={index}
          title={card.title}
          description={card.description}
          intrestsItem={card.intrestsItem.intrests} // Corrected prop name
        />
      ))}
    </div>
  );
}

// BusinessCards component is now outside of App component
function BusinessCards(props) {
  const linkedinUrl = "https://www.linkedin.com/in/pasula-nithin/";
  const githubUrl = "https://github.com/NithinPasula";
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <h4>Interests</h4>
      <ul className="interests-list">
        {props.intrestsItem.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <div className="button-container">
        <a
          href={githubUrl}
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={linkedinUrl}
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;
