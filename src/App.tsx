import React, { useState } from "react";
import "./App.css";
import Lists from "./components/tradebook/lists";
import Tradebook from "./components/tradebook/tradebook";
import { Shiftsobject, Tradebookprops } from "./interface";

function App() {
  /*const [lister, setdummy] = useState<Shiftsobject[]>();
  const [type, settype] = useState<string>();
  const t: string = "";
  const l: Shiftsobject[] = [];
  const s = { listobject: l, type: t };*/
  return (
    <div>
      <Tradebook
        setlistValueProps={function (
          listobject: Shiftsobject[],
          type: string
        ) {}}
      />
    </div>
  );
}

export default App;
