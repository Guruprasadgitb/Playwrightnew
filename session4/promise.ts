
function fetchDataFromDatabase () : Promise<string> {
    console.log("Fecting data from database");

    return new Promise((resolve,reject)=>{
        const data = true;

        setTimeout(() => {
            if (data === true) {
                resolve("Data fetched successfully!");
                
            } else {
                reject("Data not found!");
            }
            
        }, 3000);


    });
    
    
}fetchDataFromDatabase()
.then((result) => { console.log("Sucess: ", result);
})
.catch((error)=> { console.log("Error", error);});
