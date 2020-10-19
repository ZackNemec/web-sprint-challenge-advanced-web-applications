import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {axiosAuth} from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
axiosAuth()
.get('/api/colors')
.then(res => {
console.log(res.data);
setColorList(res.data)
setUpdate(false)
})
  }, [update])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} fix={setUpdate}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
