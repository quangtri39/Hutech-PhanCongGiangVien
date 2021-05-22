import { useSemester } from "../../../hook/useSemester";
import Table from "../../Table/Table";

export default function AllSemester() {
  const [semesters, loading] = useSemester();
  if (loading) {
    return <div>Loading ...</div>;
  }
  return semesters.map((semester, index) => {
    return (
      <Table
        key={index}
        title={`${semester.name} (${semester.date})`}
        data={semester.data}
      />
    );
  });
}
