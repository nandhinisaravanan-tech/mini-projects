const form = document.querySelector("#exceptionForm");
const table = document.querySelector("#exceptionTable");

const filterIssue = document.querySelector("#filterIssue");
const filterStatus = document.querySelector("#filterStatus");

const openCount = document.querySelector("#openCount");
const resolvedCount = document.querySelector("#resolvedCount");


function updateCounts(){
    const rows = table.querySelectorAll("tr");
    let open = 0;
    let resolved = 0;

    rows.forEach(row=>{
        const status = row.querySelector(".status").textContent;
        if(status === "Open") open++;
        if(status === "Resolved") resolved++;
    });

    openCount.textContent = open;
    resolvedCount.textContent = resolved;
}



form.addEventListener("submit", function(e){

    e.preventDefault();

    const deliveryId = document.querySelector("#deliveryId").value;
    const customerName = document.querySelector("#customerName").value;
    const issueType = document.querySelector("#issueType").value;

    const priorityRadio = document.querySelector('input[name="priority"]:checked');

    if(!deliveryId || !customerName || !issueType || !priorityRadio){
        alert("Please fill all required fields");
        return;
    }

    const priority = priorityRadio.value;

    const tr = document.createElement("tr");

    let priorityClass = "";

    if(priority === "High") priorityClass = "priority-high";
    if(priority === "Medium") priorityClass = "priority-medium";
    if(priority === "Low") priorityClass = "priority-low";

    tr.innerHTML = `
        <td>${deliveryId}</td>
        <td>${customerName}</td>
        <td class="issue">${issueType}</td>
        <td class="${priorityClass}">${priority}</td>
        <td class="status status-open">Open</td>
        <td>
            <button class="resolve-btn">Resolve</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    table.appendChild(tr);

    form.reset();

    updateCounts();

});



table.addEventListener("click", function(e){

    if(e.target.classList.contains("resolve-btn")){

        const row = e.target.closest("tr");

        const statusCell = row.querySelector(".status");

        statusCell.textContent = "Resolved";
        statusCell.classList.remove("status-open");
        statusCell.classList.add("status-resolved");

        row.classList.add("resolved-row");

        e.target.disabled = true;

        updateCounts();
    }



    if(e.target.classList.contains("delete-btn")){

        const confirmDelete = confirm("Delete this record?");

        if(confirmDelete){

            const row = e.target.closest("tr");

            row.remove();

            updateCounts();

        }
    }

});



filterIssue.addEventListener("change", applyFilters);
filterStatus.addEventListener("change", applyFilters);


function applyFilters(){

    const issueValue = filterIssue.value;
    const statusValue = filterStatus.value;

    const rows = table.querySelectorAll("tr");

    rows.forEach(row=>{
        const issue = row.querySelector(".issue").textContent;
        const status = row.querySelector(".status").textContent;

        const issueMatch = issueValue === "All" || issue === issueValue;
        const statusMatch = statusValue === "All" || status === statusValue;

        if(issueMatch && statusMatch){
            row.style.display = "";
        } else{
            row.style.display = "none";
        }

    });

}