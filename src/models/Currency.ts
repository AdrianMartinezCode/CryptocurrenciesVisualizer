export class Currency {
  readonly name: string;
  readonly value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}
