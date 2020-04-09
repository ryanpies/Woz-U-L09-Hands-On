let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        let myObj = JSON.parse(this.responseText);
        document.getElementById("einstein").innerHTML = myObj.name;
        document.getElementById("dob").innerHTML = myObj.dob;
    }
};

    
newRequest.open("GET", "einstein.json", true);
newRequest.send();

document.getElementById("myButton").addEventListener("click", function(){
    let newRequest = new XMLHttpRequest();
    newRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myObj = JSON.parse(this.responseText);
            document.getElementById("stage").innerHTML = myObj.bio;
        }
    };


    newRequest.open("GET", "einstein.json", true);
    newRequest.send();
});

