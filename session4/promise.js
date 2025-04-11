function fetchDataFromDatabase() {
    console.log("Fecting data from database");
    return new Promise(function (resolve, reject) {
        var data = true;
        setTimeout(function () {
            if (data === true) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data not found!");
            }
        }, 3000);
    });
}
fetchDataFromDatabase()
    .then(function (result) {
    console.log("Sucess: ", result);
})
    .catch(function (error) { console.log("Error", error); });
