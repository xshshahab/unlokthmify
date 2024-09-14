import React, { useMemo } from "react";
import cards from "../../data/cardsData";
import darkComponents from "../../data/darkData";

const BgShowcase = () => {
  const memoizedCards = useMemo(() => {
    return cards.map((Card, index) => <Card key={index} />);
  }, [cards]);

  const memoizedDarkComponents = useMemo(() => {
    return darkComponents.map((Dark, index) => <Dark key={index} />);
  }, [darkComponents]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="container grid w-full grid-cols-1 gap-2 px-8 py-5 mx-auto md:grid-cols-3 lg:grid-cols-4">
        {memoizedCards}
        {memoizedDarkComponents}
      </div>
    </div>
  );
};

export default BgShowcase;
