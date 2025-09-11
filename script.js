// Header data (time slots)
const headers = [
  "DAY", "8:50-9:40<br>L1", "9:40-10:30<br>L2",
  "10:40-11:30<br>L3", "11:30-12:20<br>L4",
  "12:20-1:10<br>LUNCH",
  "1:10-2:00<br>L5", "2:00-2:50<br>L6",
  "2:50-3:40<br>L7", "3:40-4:30<br>L8"
];

// Timetable data
const timetableData = {
  Mon: [
    "DBMS-BCS501-(YB)", "DAA-BCS503-(PS)",
    "CSE(DS)-A || QA/LR (Harshit Sharma)", "",
    "LUNCH",
    "OOSD-BCS054-(VK)",
    "DSA Training- Ms. Priyanka Gpta", "DSA Training- Ms. Priyanka Gpta",
    "CSE(DS)-A || SS (Dr. Abrity Thakur)"
  ],
  Tue: [
    "DSA Training- Ms. Priyanka Gpta", "DSA Training- Ms. Priyanka Gpta",
    "DAA-BCS503-(PS)", "DAA-BCS503-(PS)",
    "LUNCH",
    "DBMS-BCS501-(YB)", "DA-BCDSS01-(MS)",
    "OOSD-BCS054-(VK)", ""
  ],
  Wed: [
    "DA-BCDS501-(MS)", "OOSD-BCS054-(VK)",
    "Domain Training: DSAIML-LT305 / Cloud-LT-307 / Networking & Cyber Security-LT308", "",
    "LUNCH",
    "DAA-BCS503-(PS)", "DBMS-BCS501-(YB)",
    "DA Lab-BCD551-(MS)||(VK)", "AOSC-BCS056-(Shreya)"
  ],
  Thu: [
    "DBMS-BCS501-(YB)", "DAA Lab-BCS553-(SL)||(DD)",
    "CSE(DS)-A || VA(LD)", "",
    "LUNCH",
    "AOSC-BCS056-(Shreya)",
    "FSD Training Ms. Divya Raj", "FSD Training Ms. Divya Raj",
    "DAA Lab-BCS553-(SL)||(DD)"
  ],
  Fri: [
    "AOSC-BCS056-(Shreya)", "DA-BCDS501-(MS)",
    "FSD Training Mr. Divya Raj", "",
    "LUNCH",
    "DA-BCDS501-(MS)", "DAA-BCS503-(PS)",
    "DBMS Lab-BCS551-(YB)||(DD)", "DBMS Lab-BCS551-(YB)||(DD)"
  ]
};

// Generate timetable dynamically
const table = document.getElementById("timetable");

// Create header row
let headerRow = "<tr>";
headers.forEach(h => {
  if (h.includes("LUNCH")) {
    headerRow += `<th class="lunch">${h}</th>`;
  } else {
    headerRow += `<th>${h}</th>`;
  }
});
headerRow += "</tr>";
table.innerHTML += headerRow;

// Create data rows
Object.keys(timetableData).forEach(day => {
  let row = `<tr><td>${day}</td>`;
  timetableData[day].forEach((val, idx) => {
    if (val === "LUNCH") {
      row += `<td class="lunch" rowspan="5">${val}</td>`;
    } else if (val === "") {
      row += `<td></td>`;
    } else {
      row += `<td>${val}</td>`;
    }
  });
  row += "</tr>";
  table.innerHTML += row;
});
