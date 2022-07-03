export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate(field) {
    console.log(field);
    if (isNaN(field)) {
      return true;
    } else {
      return false;
    }
  }

  getMessage(name) {
    return name + " is a required field.";
  }
}
