let browser = prompt("Enter name of your browser");

if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else if (browser == "Edge") {
  alert("You've got the Edge!");
} else {
  alert("We hope that this page looks ok!");
}
