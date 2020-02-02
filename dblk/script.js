document.querySelector("#sig-submit").onclick = (event) => {
    event.preventDefault();
    let name = document.querySelector("#sig-name").value;
    let pass = document.querySelector("#sig-pass").value;
    let email = document.querySelector("#sig-email").value;
    let birthday = document.querySelector("#sig-birthday").value;
    let sex = document.querySelectorAll(".sex");
    sex.forEach(elem => {
        if(elem.checked){
            // console.log(elem.value);
           sex = elem.value;
        }
    });
    let user = {
        "name" : name,
        "pass" : pass,
        "email" : email,
        "birthday" : birthday,
        "sex" : sex,
    };

    ajax('POST','core/signup.php', sign , user);

    function sign(result){
        if(result == 2){
            alert("inpus empty");
        }
        else if(result == 1){
            alert("good job");
        }
        else{
            alert("error");
        }
        console.log(result);
    }
}

document.querySelector("#login-send").onclick = (event) => {
    event.preventDefault();
    let pass = document.querySelector("#login-pass").value;
    let email = document.querySelector("#login-email").value;
    let user = {
        "email" : email,
        "pass" : pass,
    };

    ajax('POST','core/login.php', login , user);

    function login(result){
        if(result == 0){
            alert("user no finden");
        }
        else if(result == 2){
            alert("inpus empty");
        }
        else{
            alert("is yours lk");
            result = JSON.parse(result);
            var d = new Date();
            d.setTime(d.getTime() + (60*1000));
            var expires = `expires = ${d.toUTCString()}`;
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = "cabinet.php";
        }
        console.log(result);
    }
}