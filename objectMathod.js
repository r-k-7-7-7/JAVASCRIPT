class RailwayForm{

    submit(){
        alert(this.name + " Form submitted for train number " + this.trainnum);
    }
   
    cancel(){
        document.write(this.name + " Form cancelled for train number " + this.trainnum);
    }

    fill(givenName, trainnum){
        this.name = givenName;
        this.trainnum = trainnum;
    }

}

let Ritesh = new RailwayForm();
Ritesh.fill("Ritesh", 123456);

let Nandu = new RailwayForm();
Nandu.fill("nandu", 789010);

Ritesh.submit();
Nandu.submit();
Nandu.cancel();



const person = {
    fname: "Ritesh",
    lname: "Pandey",
    age : 26,
    city : "faridabad"
}

let text = " ";
for (let x in person){
    text += person[x] + " "; 
}

document.write(text);

