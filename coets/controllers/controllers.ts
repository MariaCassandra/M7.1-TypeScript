//let rocketsArray = new Array();

let rockets: Rocket[] = [];

function addRocket1(event: any): void {
  rockets.push(new Rocket('32WESSDS', [10, 30, 80]));
  event.target.disabled = true;
}

function addRocket2(event: any): void {
  rockets.push(new Rocket('LDSFJA32', [30, 40, 50, 50, 30, 10]));
  event.target.disabled = true;
}

function printRocket(rocket: Rocket): void {
  const root = document.getElementById('rockets');
  if (root) {
    const child = document.createElement('div');
    const content = document.createTextNode(rocket.getPrintData());
    child.appendChild(content);
    root.appendChild(child);
  }
}

function throttleRocket(index: number) {
  if (index >= 0 && index < rockets.length) {
    rockets[index].throttle();
    printRocketInfo(index);
  }
}

function brakeRocket(index: number) {
  if (index >= 0 && index < rockets.length) {
    rockets[index].brake();
    printRocketInfo(index);
  }
}

function printRocketInfo(index?: number): void {
  if (index !== undefined) {
    if (index >= 0 && index < rockets.length) {
      printRocket(rockets[index]);
    }
  } else {
    rockets.forEach((rocket) => printRocket(rocket));
  }
}
