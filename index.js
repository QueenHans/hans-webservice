const express = require('express');
const app = express();
const port = 3000;

// Define combined endpoint
app.get('/portfolio', (req, res) => {
    const portfolioData = {
        personalInfo: {
            Name: "Hans Heisenber D. Montemar",
            Birthday: "October 31, 2002",
            Gender: "Male",
            ContactNo: "05678009",
            Address: "Middle Nivel Hills, Apas, Cebu City, Philippines",
        },
        skills: [
            { description: "html", level: "Intermediate"},
            { description: "canva", level: "Intermediate"}
        ],
        workExperience: [
            { company: "#projectmanika", designation: "CEO", details: "", year: "2019-2021"},
            { company: "accenture", designation: "canva editor", details: "", year: "2021-2023" },
            { company: "hazbinhotel", designation: "front desk", details: "", year: "2023-2024" }
        ],
        education: [
            { school: "USPF Lahug", year: "2022-present" },
            { school: "Lyceum of Cebu", year: "2019-2021" },
            { school: "Lyceum of Cebu", year: "2013-2017" },
            { school: "Lahug Elementary School", year: "20XX-20XX" }
        ],
        personalReferences: [
            { name: "Marites D. Montemar", relationship: "manager", contactNo: "0923545" },
            { name: "Arceo S. Montemar II", relationship: "employee", contactNo: "097853453" }
        ]
    };
    res.json(portfolioData);
});

app.get('/', (req, res) => {
    res.redirect('/portfolio');
});

// Start the server
app.listen(port, () => {
    console.log(`Web service listening at http://localhost:3000`);
});