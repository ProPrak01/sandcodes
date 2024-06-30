import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
const announcementsList = [
  "Aliens spotted in the northern hemisphere. Please remain indoors.",
  "Food supplies will be distributed at designated safe zones.",
  "Emergency evacuation drills will be conducted tomorrow at 10 AM.",
  "New safe zones have been established in the southern regions.",
  "Medical assistance is available at all major hospitals.",
  "Citizens are advised to stay calm and follow official instructions.",
  "Power outages expected in the eastern sectors due to alien activity.",
  "Safe zone locations have been updated. Please check the latest map.",
  "Volunteer groups are being formed to assist with evacuation efforts.",
  "Emergency broadcast systems will be tested at noon daily.",
  "Communication lines with the central command are currently down.",
  "Please report any suspicious activity to your nearest SpaceTec officer.",
  "Water supplies are being rationed. Use water sparingly.",
  "Alien sightings reported near the capital city. Exercise caution.",
  "All schools and public buildings are closed until further notice.",
  "Protective gear will be distributed at community centers.",
  "Evacuation routes are marked with green signs. Follow them closely.",
  "Regular updates will be provided via the SpaceTec official app.",
  "Fuel supplies are limited. Use only for essential travel.",
  "Stay indoors after sunset. Aliens are more active at night.",
  "Checkpoints are set up at all city exits. Be prepared for inspection.",
  "All citizens are required to carry identification at all times.",
  "Medical staff is urgently needed at the temporary hospitals.",
  "Alien-resistant shelters are available for those in high-risk areas.",
  "Noise levels should be kept to a minimum to avoid attracting aliens.",
  "Curfew is in effect from 8 PM to 6 AM. Violators will be fined.",
  "Use of drones is prohibited in affected areas.",
  "Backup generators are being deployed to maintain power supply.",
  "Satellite communications are temporarily unavailable.",
  "SpaceTec is working with international allies for additional support.",
  "Alien detection devices are being distributed to households.",
  "All non-essential services are suspended until further notice.",
  "Temporary housing is available for displaced families.",
  "Be cautious of alien traps disguised as everyday objects.",
  "Public transportation is limited to evacuation routes only.",
  "Personal vehicles must be registered for use in evacuation zones.",
  "Emergency contact numbers have been updated. Check the website.",
  "Alien samples are being studied for potential weaknesses.",
  "Biohazard teams are sanitizing areas with high alien activity.",
  "Emergency broadcasts will override regular programming.",
  "Citizens are encouraged to form neighborhood watch groups.",
  "Alien repellents are available at local stores. Use as directed.",
  "SpaceTec scientists are working on a countermeasure for the invasion.",
  "Financial aid is available for families affected by the crisis.",
  "Public gatherings are prohibited to minimize risk.",
  "Safety drills will be conducted in all major cities this weekend.",
  "Alien-proof barriers are being erected around key facilities.",
  "Essential workers are provided with transport and protective gear.",
  "Alien warning signs are posted in high-risk areas. Stay alert."
];

export default function Announcements() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnnouncement(prevAnnouncement => 
        (prevAnnouncement + 1) % announcementsList.length
      );
    }, 5000); // Change announcement every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="announcements">
      <div className="head-ann">[<span style={{ color: 'black' }}>RECENT ANNOUNCEMENTS</span>]</div>
      <div className="announcement-text">
        {announcementsList.length > 0 && (
          <ReactTyped
            strings={[announcementsList[currentAnnouncement]]}
            typeSpeed={50}
            backSpeed={20}
            loop={false}
          />
        )}
      </div>
    </section>
  );
}
