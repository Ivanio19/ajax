function ajax(method, url, functionName, dataArray){
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(requestData(dataArray));

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            functionName(this.response);
            // console.log(functionName(this.response));
        }
    }
}

function requestData(dataArr){
    let answer = "";
    for(let key in dataArr){
        answer += `${key}=${dataArr[key]}&`;
    };
    console.log(answer);
    return answer;
}