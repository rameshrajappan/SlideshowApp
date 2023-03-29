import React, { useState } from 'react';

function Slides({ slides }) {
  let [index, setIndex] = useState(0);
  let selectedElement = slides[index];
  const onNext = () => {
    setIndex(index +1);
  }
  const onPrevious = () => {
    setIndex(index-1);
  }
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={() => { setIndex(0); }} disabled={slides.length===0|index===0}>Restart</button>
        <button data-testid="button-prev" className="small" onClick={onPrevious} disabled={slides.length===0|index===0}>Prev</button>
        <button data-testid="button-next" className="small" onClick={onNext} disabled={slides.length===0|index>=(slides.length-1)}>Next</button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{selectedElement?.title}</h1>
        <p data-testid="text">{selectedElement?.text}</p>
      </div>
    </div>
  );

}

export default Slides;
