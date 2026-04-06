document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  let data = JSON.parse(localStorage.getItem("appointments")) || [];

  data.push({
    id: Date.now(),
    patient: patient.value,
    doctor: doctor.value,
    hospital: hospital.value,
    specialty: specialty.value,
    date: date.value,
    time: time.value,
    reason: reason.value
  });

  localStorage.setItem("appointments", JSON.stringify(data));

  alert("Saved!");
  location.reload();
});