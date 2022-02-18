const express = require('express');
const fs = require('fs');
const {v4: uuid4} = require('uuid');
const path = require('path');
const DATABASE = require('./db/db.json');


const PORT = 3001;
const app = express();

// Middlewear
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Base url handling & showing landing page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
});


// /notes url handling & showing notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});


// Return db.json data at /api/Notes
app.get("/api/notes", (req, res) => {
    return res.json(DATABASE);
})


// Add notes to the database
app.post("/api/notes", (req, res) => {
    console.log(req.method);

    const {title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid4()
        }
        const response = {
            status: "Success",
            body: newNote,
        }
        console.log(response);
        res.status(201).json(response);
        fs.readFile("./db/db.json", (err, data) => {
            if (err) {
                console.error(err);
            } else {
                arr = JSON.parse(data);
                arr.push(response.body);
                fs.writeFile("./db/db.json", JSON.stringify(arr), err => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("CHANGED FILE CONTENT");
                    }
                })
            }
        })
    } else {
        res.status(500).json("Error posting your note");
    }
    console.log("POSTING TO API/NOTES")
})

// Set up the server on port 3001
app.listen(PORT, () => {
    console.log(`Starting server on http://localhost:${PORT}`);
});