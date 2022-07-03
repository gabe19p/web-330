export class FloatMax {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  validate() {
    if (this.field < parseFloat(max)) {
      return true;
    } else {
      return false;
    }
  }

  getMessage() {
    return "${name} must be less than ${max}. You entered ${field}.";
  }
}
