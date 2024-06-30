import React, { useState } from 'react';
import './SurvivalGuide.css';

function SurvivalGuide() {
  const tips = [
    { title: "Keep Dogs Around", description: "Always keep dogs around you as they scare the aliens." },
    { title: "Wear Reflective Clothing", description: "Wear reflective clothing to confuse alien sensors." },
    { title: "Carry a Flashlight", description: "Carry a flashlight at all times; aliens are afraid of light." },
    { title: "Supply of Canned Beans", description: "Keep a supply of canned beans; aliens are allergic to them." },
    { title: "Learn Alien Language", description: "Learn basic alien language to negotiate if captured." },
    { title: "Stay in Groups", description: "Stay in groups; aliens target individuals." },
    { title: "Use Mirrors", description: "Use mirrors to reflect alien laser beams." },
    { title: "Make Loud Noises", description: "Make loud noises; aliens have sensitive hearing." },
    { title: "Carry Vinegar", description: "Keep a bottle of vinegar; its smell repels aliens." },
    { title: "Stay Indoors at Night", description: "Stay indoors during alien hunting hours (8 PM to 6 AM)." },
    { title: "Use Aluminum Foil", description: "Use aluminum foil to block alien mind control signals." },
    { title: "Have Water Balloon Fights", description: "Have a water balloon fight; aliens hate water." },
    { title: "Hide in Basements", description: "Hide in basements; aliens avoid underground spaces." },
    { title: "Wear Sunglasses", description: "Wear sunglasses to protect your eyes from alien flashes." },
    { title: "Draw Chalk Circles", description: "Draw chalk circles around your home for protection." },
    { title: "Learn Alien Dance Moves", description: "Learn and practice alien dance moves to blend in." },
    { title: "Stay Near Tall Trees", description: "Stay near tall trees; aliens can't climb well." },
    { title: "Use Spicy Food", description: "Use spicy food to keep aliens away." },
    { title: "Paint Bright Colors", description: "Paint your doors and windows with bright colors; aliens avoid them." },
    { title: "Install Wind Chimes", description: "Install wind chimes; their sound disrupts alien communication." },
  ];

  const [selectedTip, setSelectedTip] = useState(null);

  return (
    <>
      <h2>Alien Survival Guide</h2>
      <div className="survival-guide-container">
        <section className="survival-guide-tips">
          <ul>
            {tips.map((tip, index) => (
              <li key={index} onClick={() => setSelectedTip(tip)}>
                {tip.title}
              </li>
            ))}
          </ul>
        </section>
        <section className="survival-guide-description">
          {selectedTip ? (
            <>
              <h3>{selectedTip.title}</h3>
              <p>{selectedTip.description}</p>
            </>
          ) : (
            <p>Click on a tip to see the description.</p>
          )}
        </section>
      </div>
    </>
  );
}

export default SurvivalGuide;
