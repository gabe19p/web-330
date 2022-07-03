export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    if (this.field != NaN()) {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    return "${name} must be a float value. You entered ${field}.";
  }
}
