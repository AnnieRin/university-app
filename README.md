Mongo install[Macos]:

brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community

---University App API Endpoints---

tart the University App server by running node app.js in the terminal.

---Students---

[Create a Student]
Method: POST
URL: http://localhost:3000/students
Body:
{
"name": "Ani Tkhelidze"
}
If Created response in postman should look like this:
{
"name": "Ani Tkhelidze",
"subjects": [],
"\_id": "6569fa710299783191c00e6c",
"\_\_v": 0
}

[Add a Student to a Subject]
Method: PUT
URL: http://localhost:3000/students/{studentId}/subjects/{subjectId}
EXAMPLE:
REQUEST -> http://localhost:3000/students/6569fa710299783191c00e6c/subjects/6569fad30299783191c00e6e
UTPUT ->
{
"\_id": "6569fa710299783191c00e6c",
"name": "Ani Tkhelidze",
"subjects": [
"6569fad30299783191c00e6e"
],
"\_\_v": 1
}

[Get Student's Subject List]
Method: GET
URL: http://localhost:3000/students/{studentId}/subjects
EXAMPLE:
REQUEST -> http://localhost:3000/students/6569fa710299783191c00e6c/subjects
RESPONSE ->
[
{
"\_id": "6569fad30299783191c00e6e",
"name": "Mathematics",
"students": [],
"\_\_v": 0
}
]

---Subjects---

[Create a Subject]
Method: POST
URL: http://localhost:3000/subjects
Body:
{
"name": "Mathematics"
}
If Created response in postman should look like this:
{
"name": "Mathematics",
"students": [],
"\_id": "6569fad30299783191c00e6e",
"\_\_v": 0
}

[Find Subject by Lecturer and Student IDs]
Method: GET
URL: http://localhost:3000/subjects/lecturer/{lecturerId}/student/{studentId}

---Lecturers---

[Create a Lecturer]
Method: POST
URL: http://localhost:3000/lecturers
Body:
{
"name": "Dr. Tutberidze"
}
If Created response in postman should look like this:
{
"name": "Dr. Tutberidze",
"subjects": [],
"\_id": "6569fb4e0299783191c00e70",
"\_\_v": 0
}

[Add a Subject to a Lecturer]
Method: PUT
URL: http://localhost:3000/lecturers/{lecturerId}/subjects/{subjectId}

[Get Lecturer's Subject List]
Method: GET
URL: http://localhost:3000/lecturers/{lecturerId}/subjects
