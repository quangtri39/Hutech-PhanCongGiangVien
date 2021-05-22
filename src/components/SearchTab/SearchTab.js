import { Tabs, Tab } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import AllSemester from "./AllSemester/AllSemester";
import AddNewSemester from "./AddNewSemester/AddNewSemester";
import PreviousSemester from "./PreviousSemester/PreviousSemester";

export default function SearchTab() {
  const [key, setKey] = useState("previousSemester");

  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="previousSemester" title="Kết quả kỳ trước">
          <PreviousSemester />
        </Tab>
        <Tab eventKey="addNewSemester" title="Thêm mới">
          <AddNewSemester />
        </Tab>
        <Tab eventKey="allSemester" title="Tất cả học kỳ">
          <AllSemester />
        </Tab>
      </Tabs>
    </Container>
  );
}
