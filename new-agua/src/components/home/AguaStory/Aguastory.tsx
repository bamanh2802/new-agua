'use client'

import React, { useState } from "react";
import PioneerList from "./PioneerList";
import PioneerDetail from "./PioneerDetail";


interface Detail {
  title: string;
  content: string;
}

interface Pioneer {
  id: number;
  name: string;
  role: string;
  image: string;
  background: string;
  details: Detail[];
}

const AguaStory: React.FC = () => {
  const [selectedPioneer, setSelectedPioneer] = useState<Pioneer | null>(null);

  return (
    <div style={{
      marginTop: '100px',
      marginBottom: '200px'
    }} className="container">
      {selectedPioneer ? (
        <PioneerDetail pioneer={selectedPioneer} onBack={() => setSelectedPioneer(null)} />
      ) : (
        <PioneerList onSelect={setSelectedPioneer} />
      )}
    </div>
  );
};

export default AguaStory;