import TeamMemberCard from "../../Components/TeamMemberCard/TeamMemberCard";

const OurTeam = () => {
  return (
    <div className="App">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <TeamMemberCard name="Satvik Sinha" department="Frontend" />
        <TeamMemberCard name="Nachiket Kotalwar" department="Frontend" />
        <TeamMemberCard name="Anant Jain" department="Frontend" />
        <TeamMemberCard name="Sarthak Tayal" department="Frontend" />
        <TeamMemberCard name="Harsh Neema" department="Frontend" />
        <TeamMemberCard name="Sanyam Garg" />
        <TeamMemberCard name="Dhruv Singh" />
        <TeamMemberCard />
        <TeamMemberCard name="Aditya SSV" />
      </div>
    </div>
  );
};

export default OurTeam;
