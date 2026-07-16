export class Line {
  code: string;
  lineNumber: number;

  constructor(code: string, lineNumber: number) {
    this.code = code;
    this.lineNumber = lineNumber;
  }

  toString(): string {
    return this.code;
  }
}