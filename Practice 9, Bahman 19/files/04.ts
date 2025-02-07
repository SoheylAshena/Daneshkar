export function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const userNames = pluck(users, "name");
console.log(userNames);

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 750 },
];

const productPrices = pluck(products, "price");
console.log(productPrices);

export function pluckWithoutUndefined<T, K extends keyof T>(
  array: T[],
  key: K
): Exclude<T[K], undefined>[] {
  return array
    .map((item) => item[key])
    .filter((value) => value !== undefined) as Exclude<T[K], undefined>[];
}

const usersWithOptionalAge = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: undefined },
  { id: 3, name: "Charlie", age: 35 },
];

const userAges = pluckWithoutUndefined(usersWithOptionalAge, "age");
console.log(userAges);
