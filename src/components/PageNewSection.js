import React, { useState } from "react";
import HowDoesItWork from "./HowDoesItWork";
import WalletEntries from "./WalletEntries";
import InputAPrice from "./InputAPrice";
import ReceivedPrice from "./RecievedPrice";

const PageNewSection = ({ sectionRef, pageSectionRef }) => {
  const [value, setValue] = useState(100);

  return (
    <div ref={pageSectionRef}>
      <HowDoesItWork pageSectionRef={pageSectionRef} />
      <WalletEntries sectionRef={sectionRef} />
      <InputAPrice sectionRef={sectionRef} value={value} setValue={setValue} />
      <ReceivedPrice value={value} />
    </div>
  );
};

export default PageNewSection;
