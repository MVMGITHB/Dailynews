import React from "react";
import ArabicHero from "./ArabicHero";
import ArabicForm from "./ArabicForm";
import ArabicFooter from "./ArabicFooter";
import ArabicThankYou from "./ArabicThankYou";
import ArabicNavbar from "./ArabicNavbar";

const ArabicMain = ({ slug }) => {
  return (
    <div>
      <ArabicNavbar />
      <ArabicHero />
      <ArabicForm page={slug} />
      <ArabicFooter />
    </div>
  );
};

export default ArabicMain;
