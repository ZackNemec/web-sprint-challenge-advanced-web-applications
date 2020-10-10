import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {axiosAuth} from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
axiosAuth()
.get('/api/colors')
.then(res => {
console.log(res.data);
setColorList(res.data)
})
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
