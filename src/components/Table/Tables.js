import Table from "./Table";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function Tables({ isCompare }) {
  const previousSemester = useSelector((state) => state.previousSemester);
  const thisSemester = useSelector((state) => state.thisSemester);

  const duplicates = useSelector((state) => state.duplicates);

  const titleDuplicates =
    duplicates.length !== 0
      ? "Những cột bị trùng"
      : "Những cột bị trùng (Không có cột nào)";
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {previousSemester.length !== 0 ? (
              <Table title="Dữ liệu của học kỳ trước" data={previousSemester} />
            ) : null}
          </Col>
          <Col>
            {thisSemester.length !== 0 ? (
              <Table title="Dữ liệu của học kỳ này" data={thisSemester} />
            ) : null}
          </Col>
        </Row>
      </Container>
      <Container>
        {isCompare ? <Table title={titleDuplicates} data={duplicates} /> : null}
      </Container>
    </>
  );
}
