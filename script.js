fetch("https://randomuser.me/api/?results=5").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData);
    let tableData="";
    objectData.results.forEach((user) => {
        tableData += `<tr><td>${user.name.first}</td><td>${user.location.city}</td></tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
});