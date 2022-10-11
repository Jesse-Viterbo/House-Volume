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



/*Assignment 3: Chapter 9 Problem 6
    Called from Button-> OnClick 
    Get Width, Depth, Height, Sweep from input boxes
*/
function doInputOutput() {
    let width = Number(document.getElementById('width').value);
    let depth = Number(document.getElementById('depth').value);
    let height = Number(document.getElementById('height').value);
    let sweep = Number(document.getElementById('sweep').value);

    let houseVol = (houseVolume(width, depth, height, sweep)).toFixed(2);
    //alert("result: " + houseVol);
    
    document.getElementById('formResults').innerHTML = houseVol + " ft<sup>3</sup>";
}
// Calculate House Volume
function houseVolume(width, depth, height, sweep) {
    let livingVol = livingVolume(width, depth, height);
    let roofVol = roofVolume(width, depth, sweep);

    let houseVol = livingVol + roofVol;
        //alert("houseVol: " + houseVol);

    return houseVol;
}
// Calculate Living Volume
function livingVolume(width, depth, height) {
    let livingVol = width * depth * height;
        //alert("livingVol: " + livingVol);

    return livingVol;
}
// Calculate Roof Volume
function roofVolume(width, depth, sweep) {
    let triArea = triangleArea(sweep, sweep, depth) * width;

    let roofVol = triArea * width;
        //alert("roofVol: " + roofVol);

    return roofVol;
}
// Calculate Triangle Area
function triangleArea(a, a, c) {
    let s = ((a + a + c)/2);
        //alert("s a b c: " + s + " " + a + " " + b + " " + c);
    let triArea = Math.sqrt(s * (s-a) * (s-a) * (s-c));
        //alert("triArea: " + triArea);

    return triArea;
}   