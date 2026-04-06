let currentDate = new Date();

function loadCalendar() {
  const grid = document.getElementById("calendarGrid");
  grid.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  document.getElementById("monthYear").innerText =
    currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  let data = JSON.parse(localStorage.getItem("appointments")) || [];

  let totalCells = 42;

  for (let i = 0; i < totalCells; i++) {
    let dayBox = document.createElement("div");
    dayBox.className = "day";

    let dayNum = i - firstDay + 1;

    if (dayNum > 0 && dayNum <= totalDays) {
      let dateStr = `${year}-${String(month + 1).padStart(2,"0")}-${String(dayNum).padStart(2,"0")}`;

      dayBox.innerHTML = `<div class="day-number">${dayNum}</div>`;

      data.forEach(a => {
        if (a.date === dateStr) {
          let ev = document.createElement("div");
          ev.className = "event";
          ev.innerText = `${a.patient} (${a.time})`;
          dayBox.appendChild(ev);
        }
      });
    }

    grid.appendChild(dayBox);
  }
}

function prevMonth(){
  currentDate.setMonth(currentDate.getMonth()-1);
  loadCalendar();
}

function nextMonth(){
  currentDate.setMonth(currentDate.getMonth()+1);
  loadCalendar();
}

loadCalendar();