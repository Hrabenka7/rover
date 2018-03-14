// Rover Object Goes Here
var rover = {
  direction: "N",
  position: [0, 0],
  travelLog: [] 
}

// Commands String
var commands = "rffrfflfrff";


// ======================

// TURNING ROVER LEFT
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
      
    case "S":
      rover.direction = "E";
      break;
    
    case "W":
      rover.direction = "S";
      break;
    
    case "E":  
      rover.direction = "N";
      break;
      
    default:
      console.log("There are only four cardinal directions!");
      break;

  } return;
}


// Turning Rover RIGHT
function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
      
    case "S":
      rover.direction = "W";
      break;
    
    case "W":
      rover.direction = "N";
      break;
    
    case "E":  
      rover.direction = "S";
      break;
      
    default:
      console.log("There are only four cardinal directions!");
      break;
  
  } return;   
} 


// Moving Rover
function moveForward (rover) {
  switch(rover.direction){
    case "N":
      rover.travelLog.push(rover.position.slice());
      rover.position[0] = rover.position[0]-1;
      console.log(rover.position);
      break;
          
    case "S":
      rover.travelLog.push(rover.position.slice());
      rover.position[0] = rover.position[0]+1;
      console.log(rover.position);
      break;
    
    case "W":
      rover.travelLog.push(rover.position.slice());
      rover.position[1] = rover.position[1]-1;
      console.log(rover.position);
      break;
    
    case "E":
      rover.travelLog.push(rover.position.slice());  
      rover.position[1] = rover.position[1]+1;
      console.log(rover.position);
      break;
      
    default:
      console.log("Error");
      break;
  
  } return;
}


// Executing commands 
function executeCommand(commands, rover){
  for (var i = 0; i < commands.length; i++){
    switch(commands[i]){
      case "f":
        moveForward(rover);
        break;
      
      case "l":
        turnLeft(rover);
        break;
      
      case "r":
        turnRight(rover);
        break;
      
      default:
        console.log("Invalid input")
        break;
    }
  }console.log(rover.travelLog);
}