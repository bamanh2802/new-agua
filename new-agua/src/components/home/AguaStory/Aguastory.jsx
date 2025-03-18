import React, { useState } from "react";
import PioneerList from "./PioneerList";
import PioneerDetail from "./PioneerDetail";

const AguaStory = () => {
  const [selectedPioneer, setSelectedPioneer] = useState(null);

  return (
    <div className="container my-3">
      {selectedPioneer ? (
        <PioneerDetail pioneer={selectedPioneer} onBack={() => setSelectedPioneer(null)} />
      ) : (
        <PioneerList onSelect={setSelectedPioneer} />
      )}
    </div>
  );
};

export default AguaStory;
