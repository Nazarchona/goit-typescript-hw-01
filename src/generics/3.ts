function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB }; // Спред-оператор дозволяє коректно об'єднати об'єкти
}

const obj1 = { name: "Alice" };
const obj2 = { age: 30 };

const merged = merge(obj1, obj2); // Результат: { name: "Alice", age: 30 }
