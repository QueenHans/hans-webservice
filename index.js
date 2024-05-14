const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Define combined endpoint
app.get('/portfolio', (req, res) => {
    const portfolioData = {
        personalInfo: {
            Name: "Hans",
            Birthday: "2001",
            Gender: "male",
            ContactNo: "05678009",
            Address: "Apas",
        },
        skills: [
            { description: "html", level: "Intermediate"},
            { description: "java", level: "Intermediate"}
        ],
        workExperience: [
            { company: "#projectmanika", designation: "CEO", details: "", year: "2019-2021"},
            { company: "accenture", designation: "canva editor", details: "", year: "2021-2023" },
            { company: "hazbinhotel", designation: "ceo", details: "", year: "2023-2024" }
        ],
        education: [
            { school: "USPF Lahug", year: "2022-present" },
            { school: "Lyceum of Cebu", year: "2019-2021" },
            { school: "Lyceum of Cebu", year: "2013-2017" },
            { school: "Maria Montessori", year: "20XX-20XX" },
            { school: "Colegio de la Inmaculada Concepcion", year: "20XX-20XX" }
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
