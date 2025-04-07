function launchBrowser() {

    let browserName = "chrome";

    if (browserName==="chrome") {
        console.log(`The given ${browserName} will work on windows`);
        
    } else {
        console.log(`The given ${browserName} wont wonk on windows`);          
    }

function runTests() {
    const testType = "sanity";

  switch (testType) {
    case "sanity":
        console.log("The Test type is sanity");
        break;
    case "smoke":
        console.log("The test type is smoke");
        break;
    case "regression":
        console.log("The test type is regression");
        
    default:
        console.log("The test doesnt come under this");
        break;
  }
    
}runTests();
    
}launchBrowser();