export class FloatMin {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  validate() {
    if (this.field > parseFloat(min)) {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    return "${name} must be more than ${min}. You entered ${field}.";
  }
}
