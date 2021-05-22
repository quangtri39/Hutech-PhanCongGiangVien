import { useEffect, useState } from "react";
import { useSemester } from "../../../hook/useSemester";
import Table from "../../Table/Table";

export default function PreviousSemester() {
  const [semesters, loading] = useSemester();
  const [lastSemester, setLastSemester] = useState([]);
  useEffect(() => {
    if (semesters.length === 0) {
      return;
    }
    setLastSemester(semesters[semesters.length - 1]);
  }, [semesters]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (semesters.length === 0) {
    return <div>Chưa có file nào</div>;
  }
  return (
    <Table
      title={`${lastSemester.name} (${lastSemester.date})`}
      data={lastSemester.data}
    />
  );
}
