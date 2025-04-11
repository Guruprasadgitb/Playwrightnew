const { version } = require("os");

let browser = "chrome";

function checkBrowserVersion(browsername) {

    setTimeout(() => {
        if (browsername.startsWith(browser)) {
            const version = "24353.354.3.5";
            console.log(version);   
        }
        
    }, 2000);

    const msg = `checking the browser version`;
    console.log(msg);

    
    
    
}checkBrowserVersion("chrome")