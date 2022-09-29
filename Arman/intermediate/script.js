let employees = JSON.parse(employeesJson)

let table_body = document.getElementsByTagName("tbody")[0]

for (let employee of employees){
    table_body.innerHTML += `
    <tr>
    <td>${employee.id}</td>
    <td>${employee.first_name}</td>
    <td>${employee.last_name}</td>
    <td>${employee.email}</td>
    <td>${employee.job_title}</td>
    <td>${employee.salary}</td>
    </tr>
    `
}