function onDisplay (strFirstName, strLastName, numAge=0, address = undefined){
    console.log(strFirstName);
    console.log(strLastName);
    console.log(numAge);
    console.log(address); 

};


//onDisplay("Jueeli", "Sawant", 24); // output: Jueeli; Sawant; 24; undefined

//onDisplay("Jueeli", "Sawant"); // output: Jueeli; Sawant; 0; undefined

//onDisplay("Jueeli"); // output: Jueeli; undefined; 0; undefined

//onDisplay("Jueeli", "Sawant", 24, "Mulund"); // output: Jueeli; Sawant; 24; Mulund

onDisplay("Jueeli", "Sawant", 24, "Mulund"); // output: Jueeli; Sawant; 24


function onDisplay1 (strFirstName, strLastName, numAge=0){
    console.log(strFirstName);
    console.log(strLastName);
    console.log(numAge);
    // Exception Thrown
    console.log(address); //address is not defined

};
onDisplay1("Jueeli", "Sawant", 24, "Mulund"); // output: Jueeli; Sawant; 24; Uncaught ReferenceError