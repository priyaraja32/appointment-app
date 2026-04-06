let data = JSON.parse(localStorage.getItem("appointments")) || [];

const table = document.getElementById("tableBody");

// Initial Render
function render(list) {
  table.innerHTML = "";

  if (list.length === 0) {
    table.innerHTML = `<tr><td colspan="7">No Data Found</td></tr>`;
    return;
  }

  list.forEach(a => {
    table.innerHTML += `
      <tr>
        <td class="link">${a.patient}</td>
        <td class="link">${a.doctor}</td>
        <td>${a.hospital}</td>
        <td>${a.specialty}</td>
        <td>${a.date}</td>
        <td class="link">${a.time}</td>
        <td>

          <!-- Edit -->
          <span class="action-btn edit" onclick="edit(${a.id})">
            <svg viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75l11-11.03-3.75-3.75L3 17.25zm17.71-10.04a1.003 1.003 0 000-1.42l-2.5-2.5a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.99-1.66z"/>
            </svg>
          </span>

          <!-- Delete -->
          <span class="action-btn delete" onclick="del(${a.id})">
            <svg viewBox="0 0 24 24">
              <path d="M6 7h12v14H6zM9 4h6l1 2H8l1-2z"/>
            </svg>
          </span>

        </td>
      </tr>
    `;
  });
}

render(data);
// Delete Function
function del(id) {
  if (!confirm("Delete this appointment?")) return;

  data = data.filter(a => a.id !== id);
  localStorage.setItem("appointments", JSON.stringify(data));
  render(data);
}

// Edit Function
function edit(id) {
  let a = data.find(x => x.id === id);

  let newPatient = prompt("Edit Patient Name", a.patient);
  if (newPatient) a.patient = newPatient;

  localStorage.setItem("appointments", JSON.stringify(data));
  render(data);
}

// Filter Function
function applyFilter() {

  let patientVal = document.getElementById("searchPatient").value.toLowerCase();
  let doctorVal = document.getElementById("searchDoctor").value.toLowerCase();
  let from = document.getElementById("fromDate").value;
  let to = document.getElementById("toDate").value;

  let filtered = data.filter(a => {

    let matchPatient = a.patient.toLowerCase().includes(patientVal);
    let matchDoctor = a.doctor.toLowerCase().includes(doctorVal);

    let matchDate = true;

    // Only FROM date
    if (from && !to) {
      matchDate = a.date >= from;
    }

    // Only TO date
    else if (!from && to) {
      matchDate = a.date <= to;
    }

    // BOTH dates
    else if (from && to) {
      matchDate = a.date >= from && a.date <= to;
    }

    return matchPatient && matchDoctor && matchDate;
  });

  render(filtered);
}

// Event Listeners for Filters
document.getElementById("searchPatient").addEventListener("input", applyFilter);
document.getElementById("searchDoctor").addEventListener("input", applyFilter);
document.getElementById("fromDate").addEventListener("change", applyFilter);
document.getElementById("toDate").addEventListener("change", applyFilter);