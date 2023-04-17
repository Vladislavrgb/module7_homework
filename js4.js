let powerInput = 0;

function Electrodevice(){
  this.location = "Моя квартира";
  this.condition = false;
}

Electrodevice.prototype.powerOn = function (power) {
  if (this.condition == false){
    powerInput += power; 
    this.condition = true;
  }
}  

Electrodevice.prototype.powerOff = function (power) {
  if (this.condition == true){
    powerInput -= power; 
    this.condition = false;
  } 
}

function homeAppliances (type,model,color,room){
  this.type = type;
  this.model = model;
  this.color = color;
  this.room = room;
}

function computerElectronics (type,model,color,room){
  this.type = type;
  this.model = model;
  this.color = color;
  this.room = room;
}

homeAppliances.prototype = new Electrodevice();
computerElectronics.prototype = new Electrodevice();

const hoover = new homeAppliances ("Пылесос","LG hoover RS","Серый","Гостинная");
const lamp = new homeAppliances ("Лампа","LampUltra3000","Белый","Спальня");
const pc = new computerElectronics ("Компьютер","GamingGT2000","Чёрный","Спальня");
console.log(hoover,lamp,pc);

pc.powerOn(450); 
console.log(`Подключили пк к сети ${powerInput}`);
lamp.powerOn(100); 
console.log(`Подключили Лампу к сети ${powerInput}`);
hoover.powerOn(600); 
console.log(`Подключили пылесос к сети ${powerInput}`);
lamp.powerOn(100); 
console.log(`Проверка на повторное включение лампы ${powerInput}`);
lamp.powerOff(100);
console.log(`Лампу выключили ${powerInput}`);