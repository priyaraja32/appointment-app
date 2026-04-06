 Appointment Scheduling Application

 Project Overview

The Appointment Scheduling Application is a responsive web application built using **HTML, CSS, and JavaScript**. It allows users to schedule, view, edit, and manage appointments efficiently through a calendar interface and dashboard.

This project was developed based on a Figma design and follows a clean, modern UI without using any frameworks or libraries.
 Features
 Appointment Booking
- Users can create appointments using a popup modal form.
- Required fields include:
  - Patient Name
  - Doctor Name
  - Hospital Name
  - Specialty
  - Date & Time
  - Reason
  - Calendar View
- Displays appointments based on selected date.
- Monthly view with proper alignment (Sunday to Saturday).
- Uses a **42-cell grid** to maintain consistent layout.

 Dashboard Management
- Displays all appointments in a table format.
- Includes:
  - Patient details
  - Doctor details
  - Date & Time
  - Hospital & Specialty

 Edit & Delete
- Edit appointment details.
- Delete appointments with confirmation.

Search & Filter
- Search by:
  - Patient Name
  - Doctor Name
- Filter by:
  - Date range (From & To)

 Responsive Design
- Works across:
  - Mobile
  - Tablet
  - Desktop

 Technologies Used

- HTML5 – Structure
- CSS3 – Styling (Flexbox & Grid)
- JavaScript  – Logic & functionality
- LocalStorage – Data persistence

How It Works
Calendar Logic
- The calendar is generated dynamically using JavaScript.
- It calculates:
  - First day of the month
  - Total number of days
- A fixed 42 cells (6 rows × 7 columns) grid is used to maintain alignment.
- Appointments are mapped to corresponding dates.
  
 Data Storage
- All appointments are stored in localStorage as an array of objects.
- Example structure:

example:
{
  "id": 123456,
  "patient": "John",
  "doctor": "Dr. Smith",
  "date": "2026-04-10",
  "time": "10:30"
}
