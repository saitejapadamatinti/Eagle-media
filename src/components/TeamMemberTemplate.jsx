import React from "react";

const TeamMemberTemplate = ({getData}) => {

  const data = getData(name);


  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <section className="w-full max-h-fit pt-16 lg:px-32 overflow-hidden bg-[#08B3E2] border-b border-orange-100">
        <div><h1></h1></div>
      </section>
    </div>
  );
};

export default TeamMemberTemplate;
