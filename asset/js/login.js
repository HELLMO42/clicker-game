let myObject = { username: "vinh", password: "1234" };
let data = JSON.stringify(myObject, null, 2); // The last two arguments add pretty-printing (indentation)

fs.readFile('./asset/db/user.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        let jsonData = JSON.parse(data);
        console.log(jsonData);
});

fs.writeFile('./asset/db/user.txt', data, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Data written to file successfully.");
});

fs.readFile('./asset/db/user.txt', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        let jsonData = JSON.parse(data);
        console.log(jsonData);
});
function saveUser(){
    let userObject = { username: document.getElementsByName("username-signup"), email: document.getElementsByName("email"), password: document.getElementsByName("password-signup") };
    let data = JSON.stringify(userObject, null, 2); // The last two arguments add pretty-printing (indentation)
    fs.writeFile('./asset/db/user.txt', data, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Data written to file successfully.");
    });
}