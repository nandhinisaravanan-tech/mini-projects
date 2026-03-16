# GreyAtom Logistics - Delivery Exception Management Dashboard

## 📌 Project Overview
The Delivery Exception Management Dashboard is a lightweight, single-page web application designed for the internal operations team at GreyAtom Logistics. It provides a simple and efficient interface to log, track, filter, and resolve daily delivery failures (exceptions) without the need for complex software.

## 🚀 Features
* **Log New Issues:** A comprehensive form to record delivery exceptions, including Delivery ID, Customer Name, Issue Type, Priority, and Notes.
* **Form Validation:** Ensures all mandatory fields are filled before submission.
* **Real-Time Dashboard:** Newly reported exceptions populate the table instantly using DOM manipulation.
* **Live Statistics:** Dynamically tracks and displays the total count of "Open" and "Resolved" issues.
* **Row Actions:** * **Resolve:** Marks an open issue as resolved, updates its visual status, and disables further edits.
  * **Delete:** Removes an issue from the dashboard (includes a confirmation safeguard).
* **Dynamic Filtering:** Instantly filter the table data by "Issue Type" and/or "Status" to find specific records quickly.
* **Responsive Design:** The layout adapts seamlessly to smaller screens and mobile devices.

## 🛠️ Technologies Used
This project is built purely with foundational web technologies. No external libraries, frameworks, or backend APIs are used.
* **HTML5:** Semantic structuring of the dashboard and forms.
* **CSS3:** Custom styling, Flexbox layout, and responsive media queries.
* **Vanilla JavaScript:** DOM manipulation, event delegation, filtering logic, and state management.