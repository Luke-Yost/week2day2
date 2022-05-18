// ANCHOR PACKAGES HERE
//#region 
const packages = [
  {name:'Dinosaur Suit', tears:true, speed:30, slaves:false, ocean:true, consent:true, lost:false},

  {name:'Platform Shoes', tears:true, speed:40, slaves:false, ocean:true, consent:false, lost:false},

  {name:'Funky Tee', tears:false, speed:60, slaves:true, ocean:true, consent:false, lost:false},

  {name:'Spy Speaker', tears:true, speed:20, slaves:'true', ocean:true, consent:true, lost:false},

  {name:'Illegal Firearm Component', tears:false, speed:30, slaves:false, ocean:false, consent:false, lost:false},

  {name:'Gaming Chromebook', tears:false, speed:67, slaves:true, ocean:true, consent:false, lost:false} ,
  
  {name:'Maybe Paraphernalia?', tears:true, speed:20, slaves:true, ocean:true, consent:true, lost:false},
  
  {name:'Portable Charger/Fire Hazard', tears:true, speed:30, slaves:false, ocean:true, consent:true, lost:false},

  {name:'Worlds Cheapest Underwear', tears:true, speed:45, slaves:true, ocean:true, consent:false, lost:false}
]
//#endregion
console.log(packages);

let potentiallyLostPackages = packages 
let lostPackage = null
let employeeStrikes = 0

function drawPackages(){
  let packageCard =''
  potentiallyLostPackages.forEach(item =>{

    packageCard += `
        <div onclick="pick(${item.lost})" class="col-md-4 text-center p-2 rounded border border-3 border-dark">
          <h6>Item: ${item.name}</h6>
          <p>TS: ${item.speed}</p>
        </div>
        `
  })
  
  document.getElementById('items').innerHTML = packageCard
}

function losePackage(){
  let lost = Math.floor(Math.random()*packages.length)

  potentiallyLostPackages[lost].lost = true
  lostPackage = potentiallyLostPackages[lost]

  console.log(lostPackage.name);
  drawPackages()
  drawStrikes()
}

function sortSpeed(speed){
  let speedSorted = potentiallyLostPackages.filter(speed => speed.speed>30)
  potentiallyLostPackages = speedSorted
  drawPackages()
}

function sort(humanSuffering){
let sorted = potentiallyLostPackages.filter(pkg =>pkg[humanSuffering] == lostPackage[humanSuffering])
potentiallyLostPackages = sorted
drawPackages()
}

function pick(chosenItem){ 
  let ohGodOhPlease = potentiallyLostPackages.find(ting => ting.lost == chosenItem);
  
  if(ohGodOhPlease.lost == true){
    console.log('nice pick');
  }
  else{
    console.log(' thats a strike bud. wanna lose your job??'
    );

    strikeCounter()
  }
}

function strikeCounter(){
  employeeStrikes ++
  if(employeeStrikes == 3){
    console.log('youre fired!');
  }
  else{
    console.log('i guess youll keep your job for now');
  }
  drawStrikes()
}

function drawStrikes(){
document.getElementById('strikes').innerText = employeeStrikes.toString()
}

