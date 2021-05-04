class Rocket {
    private maxPower: number;
    private currentPower: number = 0;
  
    constructor(public code: string, public drives: number[]) {
      this.maxPower = this.calculatePower();
    }
  
    private calculatePower(): number {
      return this.drives.reduce((prev, cur) => {
        return prev + cur;
      }, 0);
    }
  
    public getPrintData(): string {
      return `${this.code}: ${this.drives} => Potencia actual ${this.currentPower}`;
    }
  
    public throttle(): string {
      this.currentPower += 10;
  
      if (this.currentPower > this.maxPower) {
        this.currentPower = this.maxPower;
      }
      return `Increment +10 = ${this.currentPower} current power`;
    }
    public brake(): string {
      this.currentPower -= 10;
      if (this.currentPower < 0) {
        this.currentPower = 0;
      }
  
      return `Decrement -10 = ${this.currentPower} current power`;
    }
  }
