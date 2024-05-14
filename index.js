const express = require('express');
const app = express();
const port = 3000;

// Define combined endpoint
app.get('/portfolio', (req, res) => {
    const portfolioData = {
        personalInfo: {
            Name: "",
            Birthday: "",
            Gender: "",
            ContactNo: "",
            Address: "",
        },
        skills: [
            { description: "UI/UX Designer", level: ""},
            { description: "HTML&CSS", level: "Intermediate"}
        ],
        workExperience: [
            { company: "DesignLab Solution", designation: "UI/UX Designer", details: "Designed user interfaces and interactions for various digital products, focusing on usability and accessibility. Created wireframes, mockups, and interactive prototypes to communicate design ideas. Conducted usability testing and gathered feedback to refine designs.", year: "2019-2021"},
            { company: "PixelPerfect Designs", designation: "Junior UI Designer", details: "Assisted in the design and development of user interfaces for web and mobile applications. Worked closely with senior designers to translate concepts into visually appealing designs. Participated in brainstorming sessions and design critiques to improve design quality.", year: "2021-2023" },
            { company: "ACCENTURE", designation: "TIG PRINT", details: "KAKAPOY.", year: "2023-2024" }
        ],
        education: [
            { school: "University of Southern Philippines Foundation Lahug", year: "2022-present" },
            { school: "University of Southern Philippines Foundation Lahug", year: "2019-2021" },
            { school: "University of Southern Philippines Foundation Lahug", year: "2013-2017" },
            { school: "IGLC Montessori School Inc", year: "20XX-20XX" },
            { school: "UC", year: "2020-2021" }
        ],
        personalReferences: [
            { name: "alice", relationship: "Supervisor at DesignLab Solutions", contactNo: "0923-456-7890" },
            { name: "Kim Hanbin", relationship: "Senior UI Designer at PixelPerfect Designs", contactNo: "0955-123-4567" }
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