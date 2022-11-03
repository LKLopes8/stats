function clrScreen() {
    document.getElementById("display").value = "";
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    document.getElementById("range").value = "";
    document.getElementById("mean").value = "";
    document.getElementById("median").value = "";
    document.getElementById("mode").value = ""; 
    document.getElementById("squaredDiff").value = "";
    document.getElementById("variance").value = "";
    document.getElementById("std").value = "";
    window.location.href="#input";
}

function show(val) {
    document.getElementById("display").value += val;  
}

function statsCalc() {
    window.location.href="#output";
    var displaynums = document.getElementById("display").value;
    values = displaynums.split(/,/);
    
    for(i=0;i<values.length;i++) {
         values[i] = parseInt(values[i]);
     }

    min = Math.min(values[0],values[1],values[2]);
    max = Math.max(values[0],values[1],values[2]);
    mean = calcMean(values);
    median = calcMedian(values);
    mode = calcMode(values);
    variance = calcVariance(values);
    std = calcStd(values);
    range = calcRange(values);
    squaredDiff = calcSquareDiff(values);
    
    
    document.getElementById("min").value = min;
    document.getElementById("max").value = max;
    document.getElementById("range").value = range;
    document.getElementById("mean").value = mean;
    document.getElementById("median").value = median;
    document.getElementById("mode").value = mode;
    document.getElementById("squaredDiff").value = squaredDiff;
    document.getElementById("variance").value = variance;
    document.getElementById("std").value = std;
}

function calcMean(values){
    sum = (values[0] + values[1] + values[2]);
    avg = (sum / 3);
    return avg.toFixed(2);
}

function calcMedian(values){
    values.sort(function(a,b){return a-b});
    return values[1];
}

function calcMode(values){
    if(values[0] == values[1] || values[0] == values[2] )
        return values[0];
    else if(values[1] == values[2])
        return values[1];
    else
        return "No Mode";
}

function calcSquareDiff(values) {
    avg = calcMean(values);
    num1 = values[0] - avg;
    num2 = values[1] - avg;
    num3 = values[2] - avg;
    squared = (Math.pow(num1, 2)) + (Math.pow(num2, 2)) + (Math.pow(num3, 2));
    return squared.toFixed(2);
}

function calcVariance(values){
    sqrDiff = calcSquareDiff(values);
    varN = (sqrDiff / 3);
    return varN.toFixed(2);
}

function calcStd(values){
    varc = calcVariance(values);
    stdN = Math.sqrt(varc);
    return stdN.toFixed(2);
}

function calcRange(values) {
    low = Math.min(values[0],values[1],values[2]);
    high = Math.max(values[0],values[1],values[2]);
    return (high - low);
}