import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
    const numOfIceCreams = useSelector((state) => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    const [value,setValue] = useState(1)
  return (
    <div>
      <h2>Number of IceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value)) } />
      <button onClick={() => dispatch(restocked(value))}>Restock Icecream</button>
    </div>
  );
};
