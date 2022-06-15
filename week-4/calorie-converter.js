import { FoodModel } from "./food-model.js";

export class CalorieConverter {
  constructor() {}
  static data = [
    new FoodModel(1007, "egg", 78),
    new FoodModel(1008, "apple", 95),
    new FoodModel(1009, "hamburger", 354),
    new FoodModel(1010, "fries", 400),
    new FoodModel(1011, "banana", 105),
    new FoodModel(1012, "soda", 150),
  ];

  static find(string) {
    return this.data.find((input) => input.name === string);
  }
}

// {FoodModel(1007, "Egg", 78)}, {FoodModel(1008, "Apple", 95)},
