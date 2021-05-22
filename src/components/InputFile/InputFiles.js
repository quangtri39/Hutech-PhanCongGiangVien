import InputFile from "./InputFile";
import "./InputFile.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { checkDuplicates } from "../../FuncHandlefiles/Handlefiles";
import getFilePromise from "../../promise/getFilePromise";
import { useSelector, useDispatch } from "react-redux";
import {
  changePreviousSemester,
  changeThisSemester,
  changeDuplicates,
} from "../../redux/actions";

export default function InputFiles({ setIsCompare }) {
  const previousSemester = useSelector((state) => state.previousSemester);
  const thisSemester = useSelector((state) => state.thisSemester);
  const dispatch = useDispatch();

  const handleOnClickPrevSemester = async (event) => {
    const file = event.target.files[0];
    if (file == null) {
      return;
    }
    const data = await getFilePromise(file);
    dispatch(changePreviousSemester(data));
  };
  const handleOnClickThisSemester = async (event) => {
    const file = event.target.files[0];
    if (file == null) {
      return;
    }
    const data = await getFilePromise(file);
    dispatch(changeThisSemester(data));
  };
  const handleOnClickButton = () => {
    if (previousSemester.length !== 0 && thisSemester.length !== 0) {
      const data = checkDuplicates(previousSemester, thisSemester);
      dispatch(changeDuplicates(data));
      setIsCompare(true);
    } else {
      alert("Yêu cầu chọn 2 file");
    }
  };
  return (
    <Container className="p-0">
      <Row>
        <Col>
          <InputFile
            title="Chọn dữ liệu của học kỳ trước"
            onChange={handleOnClickPrevSemester}
          ></InputFile>
        </Col>
        <Col>
          <InputFile
            title="Chọn dữ liệu của học kỳ này"
            onChange={handleOnClickThisSemester}
          ></InputFile>
        </Col>
        <Col className="mt-auto">
          <Button onClick={handleOnClickButton}>Kiểm tra</Button>
        </Col>
      </Row>
    </Container>
  );
}
