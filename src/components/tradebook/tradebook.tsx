import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import Lists from "./lists";
import React from "react";
import {
  ShiftsList,
  Shiftsobject,
  ListvalueProps,
  Tradebookprops,
} from "../../interface";
import { Nav, NavItem, NavLink } from "react-bootstrap";

const dummylist = [
  {
    ShiftId: 23322,
    shiftstart: new Date(),
    shiftend: new Date(new Date().getTime() + 3600000),
    storename: "Jasons",
  },
  {
    ShiftId: 231312321,
    shiftstart: new Date(),
    shiftend: new Date(new Date().getTime() + 3600000),
    storename: "wellness",
  },
  {
    ShiftId: 56456456,
    shiftstart: new Date(),
    shiftend: new Date(new Date().getTime() + 5400000),
    storename: "Jasons",
  },
  {
    ShiftId: 5433,
    shiftstart: new Date(),
    shiftend: new Date(new Date().getTime() + 7200000),
    storename: "wellness",
  },
];
const Tradebook = (propslist: Tradebookprops): JSX.Element => {
  //const [listvar, setListValues] = useState<Tradebookprops>;
  const handleSelect = (eventKey: any) => {
    propslist.setlistValueProps(
      dummylist as Shiftsobject[],
      eventKey as string
    );
    alert(`eventKey is set to ` + eventKey);
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Nav
          fill-variant="pills"
          activeKey="1"
          onSelect={handleSelect}
          defaultActiveKey="offer"
          fill
        >
          <NavItem>
            <NavLink eventKey="1">OFFER UP</NavLink>
          </NavItem>
        </Nav>
        <Tabs onSelect={handleSelect}>
          <Tab eventKey="offer" title="OFFER UP" id="offer">
            <Lists listobject={dummylist} type={"offer"} />
          </Tab>
          <Tab eventKey="takeup" title="TAKE UP SHIFTS" id="takeup">
            <Lists listobject={dummylist} type={"takeup"} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Tradebook;
