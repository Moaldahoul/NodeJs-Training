class House {
    
    constructor(door, windows, color){

        this.door = door;
        this.windows = windows;
        this.color = color;

    }
    get print_home(){
        console.log("This house has following foundation");
        console.log("Doors", this.door);
        console.log("Windows", this.windows);
        console.log("Color", this.color);    
    }
    
}


const mohamed_house = new House(1, 5, 'yellow');
mohamed_house.print_home;
const gary_house = new House(2, '3', 'red');
const ismail_house = new House(2, 6, 'white');