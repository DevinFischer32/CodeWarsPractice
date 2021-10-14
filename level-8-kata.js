//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}
// Switch Case way
function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
    default:
  }
}
