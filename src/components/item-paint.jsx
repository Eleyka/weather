import React from 'react';


const ItemPaint = ({sensations}) => (
  <div>
    {sensations.map(e=><button type="button" className="btn btn-sun prop-buttons">{e.nameSensation}</button>)}
  </div>
);

export default ItemPaint;