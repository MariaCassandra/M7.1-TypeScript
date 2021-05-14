class Rocket {
    rocketId: string;
    thrusters: Thruster[] = new Array();

    constructor(rocketId: string) {
        this.rocketId = rocketId;
    }
    addThruster(thruster: Thruster): void {
        this.thrusters.push(thruster);
      }
}