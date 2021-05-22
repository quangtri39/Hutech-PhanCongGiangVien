import MaterialTable, { MTableToolbar } from "material-table";
import { ExportButtonXLSX } from "../ExportButton/ExportButtonXLSX";
export default function Table({ title, data }) {
  const hidenAttr = {
    cellStyle: {
      display: "none",
    },
    headerStyle: {
      display: "none",
    },
    filterCellStyle: {
      display: "none",
    },
  };
  const widthCollum = (size) => {
    return {
      cellStyle: {
        width: size,
        maxWidth: size,
      },
      headerStyle: {
        width: size,
        maxWidth: size,
      },
    };
  };
  const columns = [
    { title: "MSSV", field: "MSSV" },
    {
      title: "firstName",
      field: "firstName",
      ...widthCollum(200),
    },
    { title: "lastName", field: "lastName" },
    { title: "birthday", field: "birthday", ...hidenAttr },
    { title: "class", field: "class" },
    { title: "subjectCode", field: "subjectCode", ...hidenAttr },
    { title: "group", field: "group", ...hidenAttr },
    {
      title: "subjectTitle",
      field: "subjectTitle",
      ...widthCollum(500),
    },
    { title: "STC", field: "STC", ...hidenAttr },
    { title: "classGroup", field: "classGroup", ...hidenAttr },
    { title: "teacher", field: "teacher" },
  ];
  return (
    <div className="pt-3">
      <MaterialTable
        title={title}
        data={data}
        columns={columns}
        components={{
          Toolbar: (props) => (
            <div style={{ backgroundColor: "white" }}>
              <MTableToolbar {...props} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginRight: "20px",
                }}
              >
                <ExportButtonXLSX csvData={data} fileName="Báo cáo file" />
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
}

// function ToolbarOverriding() {
//   return (
//     <MaterialTable
//       title="Toolbar Overriding Preview"
//       columns={[
//         { title: 'Name', field: 'name' },
//         { title: 'Surname', field: 'surname' },
//         { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//         {
//           title: 'Birth Place',
//           field: 'birthCity',
//           lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//         },
//       ]}
//       data={[
//         { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//         { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//       ]}
//       components={{
//         Toolbar: props => (
//           <div>
//             <MTableToolbar {...props} />
//             <div style={{padding: '0px 10px'}}>
//               <Chip label="Chip 1" color="secondary" style={{marginRight: 5}}/>
//               <Chip label="Chip 2" color="secondary" style={{marginRight: 5}}/>
//               <Chip label="Chip 3" color="secondary" style={{marginRight: 5}}/>
//               <Chip label="Chip 4" color="secondary" style={{marginRight: 5}}/>
//               <Chip label="Chip 5" color="secondary" style={{marginRight: 5}}/>
//             </div>
//           </div>
//         ),
//       }}
//     />
//   )
// }
