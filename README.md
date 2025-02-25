# Excel Functions in TypeScript 🚀

A lightweight, fully typed TypeScript library that brings the power of **Excel-like functions** to your JavaScript and TypeScript projects. Whether you're building financial calculators, data analysis tools, or engineering applications, this library has you covered with **mathematical**, **logical**, **text**, **date**, **financial**, and **engineering** functions.

---

## Features ✨

- **Mathematical Functions**: Perform calculations like `SUM`, `AVERAGE`, `ROUND`, `MEDIAN`, and more.
- **Text Functions**: Manipulate strings with `CONCATENATE`, `FIND`, `SEARCH`, and more.
- **Date Functions**: Calculate working days with `NETWORKDAYS`.
- **Financial Functions**: Compute `PV`, `NPV`, `IRR`, and `RATE` for financial analysis.
- **Engineering Functions**: Convert units, binary, hexadecimal, and create complex numbers.
- **Fully Typed**: Built with TypeScript for excellent developer experience and type safety.

---

## Installation 📦

Install the package via **npm**:

```bash
npm install excel-functions-ts
```

Or via yarn:

```bash
yarn add excel-functions-ts
```

---

## Quick Start 🚀

### Importing the Functions
You can import the functions as needed:

```typescript
import {
  MathFunctions,
  TextFunctions,
  DateTimeFunctions,
  FinancialFunctions,
  EngineeringFunctions
} from 'excel-functions-ts';
```

### Examples

#### 1. Mathematical Functions

```typescript
// Sum of numbers
const sum = MathFunctions.SUM(1, 2, 3); // 6

// Average of numbers
const avg = MathFunctions.AVERAGE(1, 2, 3); // 2

// Round a number
const rounded = MathFunctions.ROUND(3.14159, 2); // 3.14

// Calculate the median
const median = MathFunctions.MEDIAN(1, 2, 3, 4, 5); // 3

// Calculate the standard deviation
const stdev = MathFunctions.STDEV(1, 2, 3, 4, 5); // 1.4142
```

#### 2. Text Functions

```typescript
// Find the position of a substring
const position = TextFunctions.FIND("Hello World", "World"); // 6

// Concatenate strings
const combined = TextFunctions.CONCATENATE("Hello", " ", "World"); // "Hello World"
```

#### 3. Date and Time Functions

```typescript
// Calculate working days between two dates
const startDate = new Date(2023, 9, 1);
const endDate = new Date(2023, 9, 31);
const holidays = [new Date(2023, 9, 10)];
const workingDays = DateTimeFunctions.NETWORKDAYS(startDate, endDate, holidays); // 21
```

#### 4. Financial Functions

```typescript
// Calculate the present value of an investment
const pv = FinancialFunctions.PV(0.05, 10, 1000); // 7721.73

// Calculate the net present value of cash flows
const npv = FinancialFunctions.NPV(0.05, -1000, 200, 300, 400); // -62.85

// Calculate the internal rate of return
const irr = FinancialFunctions.IRR(-1000, 200, 300, 400); // 0.12
```

#### 5. Engineering Functions

```typescript
// Convert binary to decimal
const decimal = EngineeringFunctions.BIN2DEC("1010"); // 10

// Convert hexadecimal to decimal
const hexToDec = EngineeringFunctions.HEX2DEC("A"); // 10

// Create a complex number
const complex = EngineeringFunctions.COMPLEX(3, 4); // "3 + 4i"
```

---

## API Documentation 📚

### Mathematical Functions
- `SUM(...args: number[]): number`: Calculates the sum of numbers.
- `AVERAGE(...args: number[]): number`: Calculates the average of numbers.
- `ROUND(value: number, decimals: number = 0): number`: Rounds a number to a specified number of decimal places.
- `MEDIAN(...args: number[]): number`: Calculates the median of a set of numbers.
- `STDEV(...args: number[]): number`: Calculates the standard deviation of a set of numbers.

### Text Functions
- `FIND(text: string, substring: string, startPosition: number = 0): number`: Finds the position of a substring (case-sensitive).
- `CONCATENATE(...args: string[]): string`: Combines multiple strings into one.

### Date and Time Functions
- `NETWORKDAYS(startDate: Date, endDate: Date, holidays: Date[] = []): number`: Calculates the number of working days between two dates.

### Financial Functions
- `PV(rate: number, periods: number, payment: number): number`: Calculates the present value of an investment.
- `NPV(rate: number, ...cashFlows: number[]): number`: Calculates the net present value of cash flows.
- `IRR(...cashFlows: number[]): number`: Calculates the internal rate of return for cash flows.

### Engineering Functions
- `BIN2DEC(binary: string): number`: Converts a binary number to decimal.
- `HEX2DEC(hex: string): number`: Converts a hexadecimal number to decimal.
- `COMPLEX(real: number, imaginary: number): string`: Creates a complex number.

---

## Why Use This Library? 🤔

- **Lightweight**: No dependencies, minimal footprint.
- **Type-Safe**: Built with TypeScript for better developer experience.
- **Excel-Like**: Familiar functions for Excel users.
- **Versatile**: Suitable for financial, engineering, and data analysis applications.

---

## Contributing 🤝

We welcome contributions! If you'd like to add new functions, improve documentation, or fix bugs, please:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

---

## License 📄

This project is licensed under the [MIT License](https://github.com/ItsEhsanMM/excel-functions/blob/main/LICENSE)

---

## Support 💖

If you find this library useful, please consider giving it a ⭐️ on GitHub. Your support helps us improve and maintain the project!

---

Happy coding! 🎉

