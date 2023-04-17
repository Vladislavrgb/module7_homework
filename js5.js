let powerInput = 0;

class Electrodevice {
  constructor (type) {
    this.type = type;
    this.location = "Моя квартира";
    this.condition = false;
  }
  powerOn(power){
    if (this.condition == false){
      powerInput += power; 
      this.condition = true;
    }
  }  
  powerOff(power){
    if (this.condition == true){
      powerInput -= power; 
      this.condition = false;
    }
  }  
}
class homeAppliances extends Electrodevice {
  constructor (type,model,color,room) {
    super (type)
    this.model = model;
    this.color = color;
    this.room = room;
  }
}

class computerElectronics extends Electrodevice {
  constructor (type,model,color,room) {
    super (type)
    this.model = model;
    this.color = color;
    this.room = room;
  }
}
let hoover = new homeAppliances ("Пылесос","LG hoover RS","Серый","Гостинная");
const lamp = new homeAppliances ("Лампа","LampUltra3000","Белый","Спальня");
const pc = new computerElectronics ("Компьютер","GamingGT2000","Чёрный","Спальня");

hoover.powerOn(600);

console.log(hoover,lamp,pc,powerInput);