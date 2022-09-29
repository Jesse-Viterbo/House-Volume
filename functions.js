function sampleLoops(parameter1, parameter2) {
    let innerloopcount = 0;
    let outerloopcount = 0;
    /*List the two parameters passed to the function as arguments*/
    alert("Sample parameters: " + parameter1 + " " + parameter2)
    for(let x = 0;x < 3;x++){
        for(let y = 0;y < 3;y++){
            /*Prints y=1 through y=2 and corresponding x (Example: Outer loop #1, inner loop #1,2,3...)*/
            innerloopcount++;
            alert(innerloopcount + " Inner loop  y: " + y + " x: " + x);
        }
        /*Prints x=1 through x=2*/
        outerloopcount++;
        alert(outerloopcount + " Outer loop Test  x: " + x);
    }
}