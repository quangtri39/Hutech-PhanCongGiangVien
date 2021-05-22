import { Container } from "react-bootstrap";
import InputFile from "../../InputFile/InputFile";
import { addSemester } from "../../../firebase/firebase";
import getFilePromise from "../../../promise/getFilePromise";

export default function AddNewSemester() {
  function handleChange(event) {
    const file = event.target.files[0];
    if (file == null) {
      return;
    }
    getFilePromise(file).then((data) => {
      addSemester(file.name, data);
      alert(`Lưu file ${file.name} thành công`);
    });
  }
  return (
    <Container>
      <InputFile title="Chọn dữ liệu tải lên" onChange={handleChange} />
    </Container>
  );
}
