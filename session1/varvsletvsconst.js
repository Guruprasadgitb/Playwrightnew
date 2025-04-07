const browserVersion = "chrome";

function getBrowserVersion() {

    let browserchrome;
    let browseredge;

    if (browserVersion.startsWith("chrome")) {
        browserchrome = 1344.4545;
        console.log(browserchrome);

    }else if (browserVersion.startsWith("edge")) {
        browseredge = 334544.4545;
        console.log(browseredge);
    } else {
        console.log("Its not a windows browser");        
    }

}getBrowserVersion();