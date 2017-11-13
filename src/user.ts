export class User {
  public name: string;
  private _name: string;

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}
