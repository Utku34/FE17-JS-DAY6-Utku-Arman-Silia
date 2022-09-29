let employee = JSON.parse(employees);
console.table(employee);

document.getElementById("employee-table").innerHTML = `<thead>
<tr>
    <th scope="col">Unique ID</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">E-Mail</th>
    <th scope="col">Job Title</th>
    <th scope="col">Salary</th>
</tr>
</thead>`;

for (let val of employee) {
    document.getElementById("employee-table").innerHTML += `<tbody>
    <tr>
        <td>${val.UniqueID}</td>
        <td>${val.FirstName}</td>
        <td>${val.LastName}</td>
        <td>${val.EmailAddress}</td>
        <td>${val.JobTitle}</td>
        <td>${val.Salary}</td>
    </tr>


</tbody>`
}