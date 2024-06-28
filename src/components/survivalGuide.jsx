import React from 'react';
import './SurvivalGuide.css';

const SurvivalGuide = () => {
  return (
    <div className="survival-guide">
      <h2>Survival Guide</h2>
      <div className="guide-content">
        <p>Welcome to Planet Hackunia! Here are some tips to survive:</p>
        <ul>
          <li>Stay indoors during alien attacks.</li>
          <li>Keep your communication devices charged.</li>
          <li>Follow SpaceTec's instructions carefully.</li>
          <li>Help others in need whenever possible.</li>
        </ul>
      </div>
    </div>
  );
};

export default SurvivalGuide;
