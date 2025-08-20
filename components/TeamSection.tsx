import React from 'react';
import './TeamSection.css'; // Importing CSS for styling

const teamMembers = [
  { name: 'Sophia Williams', role: 'Founder & CEO', image: '/images/sophia.jpg' },
  { name: 'Liam Johnson', role: 'Creative Director', image: '/images/liam.jpg' },
  { name: 'Olivia Brown', role: 'Marketing Manager', image: '/images/olivia.jpg' },
  { name: 'Noah Davis', role: 'Lead Designer', image: '/images/noah.jpg' },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;