export function checkDuplicates(originalFile, fileAdded) {
  const diction = ChangeArrayToDictionary(originalFile);
  const fileAddedLength = fileAdded.length;
  const resultDuplicates = [];
  for (let i = 0; i < fileAddedLength; i++) {
    let mssv = fileAdded[i]["MSSV"];
    if (diction[mssv] != null) {
      let array = fileAdded[i];
      resultDuplicates.push(array);
    }
  }
  return resultDuplicates;
}

export function ChangeArrayToDictionary(arrayFile) {
  let dictionary = {};
  let fileLength = arrayFile.length;
  for (let i = 0; i < fileLength; i++) {
    let sv = Object.values(arrayFile[i]);
    dictionary[sv[0]] = {
      MSSV: sv[0],
      firstName: sv[1],
      lastName: sv[2],
      birthday: sv[3],
      class: sv[4],
      subjectCode: sv[5],
      group: sv[6],
      subjectTitle: sv[7],
      STC: sv[8],
      classGroup: sv[9],
      teacher: sv[10],
    };
  }
  return dictionary;
}
