import React from "react";

const CtaButton = ({name}) => {
  return (
    <button className="bg-[#004291] hover:bg-[#004291]/90 hover:shadow hover:shadow-[#004291] text-lg text-slate-50 rounded-3xl px-4 py-2 w-fit transition-all duration-300">
      {name}
    </button>
  );
};

export default CtaButton;
