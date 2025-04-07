function student() {

    let mark = 95;

    switch (true) {
        case mark>90:
            console.log("Its an O grade");
            break;
        case mark>80:
            console.log("Its an A Grade");
            break;
        case mark>70:
            console.log("Its an B grade");
            break;
        case mark>60:
            console.log("Its an C grade");
            break;
        default:
            console.log("Its a E grade ");
            break;
    }
    
}student();