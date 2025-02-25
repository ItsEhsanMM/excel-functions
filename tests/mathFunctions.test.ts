import { MathFunctions, TextFunctions, DateTimeFunctions, FinancialFunctions, EngineeringFunctions } from "../src/excelFunctions";

describe("MathFunctions", () => {
    test("SUM should return the sum of numbers", () => {
        expect(MathFunctions.SUM(1, 2, 3)).toBe(6);
        expect(MathFunctions.SUM(-1, -2, -3)).toBe(-6);
        expect(MathFunctions.SUM()).toBe(0);
    });
    
    test("AVERAGE should return the correct average", () => {
        expect(MathFunctions.AVERAGE(1, 2, 3)).toBe(2);
        expect(MathFunctions.AVERAGE(5, 10, 15)).toBe(10);
    });

    test("ROUND should round numbers correctly", () => {
        expect(MathFunctions.ROUND(1.235, 2)).toBe(1.24);
        expect(MathFunctions.ROUND(1.234, 2)).toBe(1.23);
    });
});

describe("TextFunctions", () => {
    test("FIND should return the position of a substring", () => {
        expect(TextFunctions.FIND("hello world", "world")).toBe(6);
        expect(TextFunctions.FIND("hello world", "test")).toBe(-1);
    });

    test("SEARCH should be case-insensitive", () => {
        expect(TextFunctions.SEARCH("Hello World", "world")).toBe(6);
        expect(TextFunctions.SEARCH("Hello World", "hello")).toBe(0);
    });
});

describe("DateTimeFunctions", () => {
    test("NETWORKDAYS should return correct working days count", () => {
        const startDate = new Date("2024-02-19");
        const endDate = new Date("2024-02-23"); // Monday to Friday
        expect(DateTimeFunctions.NETWORKDAYS(startDate, endDate)).toBe(5);
    });
});

describe("FinancialFunctions", () => {
    test("PV should calculate present value correctly", () => {
        expect(FinancialFunctions.PV(0.05, 10, 100)).toBeCloseTo(772.17, 2);
    });

    test("NPV should calculate net present value", () => {
        expect(FinancialFunctions.NPV(0.1, 100, 200, 300)).toBeCloseTo(481.59, 2);
    });
});

describe("EngineeringFunctions", () => {
    test("BIN2DEC should convert binary to decimal", () => {
        expect(EngineeringFunctions.BIN2DEC("1010")).toBe(10);
    });

    test("HEX2DEC should convert hexadecimal to decimal", () => {
        expect(EngineeringFunctions.HEX2DEC("A")).toBe(10);
    });

    test("COMPLEX should return formatted complex numbers", () => {
        expect(EngineeringFunctions.COMPLEX(3, 4)).toBe("3 + 4i");
    });
});
