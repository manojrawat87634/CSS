const persons = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        occupation: "Software Engineer"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        occupation: "Graphic Designer"
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        occupation: "Content Writer"
    },
    {
        id: 4,
        name: "Robert Brown",
        email: "robert.brown@example.com",
        occupation: "Marketing Specialist"
    },
    {
        id: 5,
        name: "Emma Davis",
        email: "emma.davis@example.com",
        occupation: "Data Analyst"
    }
];

let currentData = persons[0];

const insertData = () => {
    persons.forEach((element, index) => {
        document.getElementById("btn-root").innerHTML += `
        <option value=${element.id}> ${element.name} </option>
        `;
        document.getElementById("root").innerHTML += `
         <div id="${element.id}" class="person-data" style="display: ${index == 0 ? 'block' : 'none'};">
        <p><strong>Name:</strong> ${element.name}</p>
        <p><strong>Email:</strong> ${element.email}</p>
        <p><strong>Occupation:</strong> ${element.occupation}</p>
    </div>
        `
    });
}




const showData = () => {
    const id = document.getElementById('btn-root').value;
    persons.forEach((element) => {
        document.getElementById(`${element.id}`).style.display = "none";
        if (element.id == id){
            currentData = element;
        }
    });
    console.log(id);
    
    document.getElementById(`${id}`).style.display = "block";
}


const downloadFunc = () => {
    const blob = new Blob([JSON.stringify(currentData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
insertData();
