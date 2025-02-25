export declare const MathFunctions: {
    /**
     * Calculates the sum of numbers.
     * @param {...number[]} args - Numbers to sum.
     * @returns {number} The sum of the numbers.
     */
    SUM: (...args: number[]) => number;
    /**
     * Calculates the average of numbers.
     * @param {...number[]} args - Numbers to average.
     * @returns {number} The average of the numbers.
     */
    AVERAGE: (...args: number[]) => number;
    /**
     * Rounds a number to a specified number of decimal places.
     * @param {number} value - The number to round.
     * @param {number} [decimals=0] - The number of decimal places.
     * @returns {number} The rounded number.
     */
    ROUND: (value: number, decimals?: number) => number;
    /**
     * Calculates the square root of a number.
     * @param {number} value - The number.
     * @returns {number} The square root.
     */
    SQRT: (value: number) => number;
    /**
     * Raises a number to a specified power.
     * @param {number} base - The base number.
     * @param {number} exponent - The exponent.
     * @returns {number} The result of base^exponent.
     */
    POWER: (base: number, exponent: number) => number;
    /**
     * Calculates the sine of an angle (in radians).
     * @param {number} angle - The angle in radians.
     * @returns {number} The sine of the angle.
     */
    SIN: (angle: number) => number;
    /**
     * Calculates the cosine of an angle (in radians).
     * @param {number} angle - The angle in radians.
     * @returns {number} The cosine of the angle.
     */
    COS: (angle: number) => number;
    /**
     * Calculates the tangent of an angle (in radians).
     * @param {number} angle - The angle in radians.
     * @returns {number} The tangent of the angle.
     */
    TAN: (angle: number) => number;
    /**
     * Calculates the median of a set of numbers.
     * @param {...number[]} args - Numbers to calculate the median.
     * @returns {number} The median.
     */
    MEDIAN: (...args: number[]) => number;
    /**
     * Calculates the standard deviation of a set of numbers.
     * @param {...number[]} args - Numbers to calculate the standard deviation.
     * @returns {number} The standard deviation.
     */
    STDEV: (...args: number[]) => number;
};
export declare const TextFunctions: {
    /**
     * Finds the position of a substring within a string (case-sensitive).
     * @param {string} text - The string to search.
     * @param {string} substring - The substring to find.
     * @param {number} [startPosition=0] - The position to start searching.
     * @returns {number} The position of the substring, or -1 if not found.
     */
    FIND: (text: string, substring: string, startPosition?: number) => number;
    /**
     * Finds the position of a substring within a string (case-insensitive).
     * @param {string} text - The string to search.
     * @param {string} substring - The substring to find.
     * @param {number} [startPosition=0] - The position to start searching.
     * @returns {number} The position of the substring, or -1 if not found.
     */
    SEARCH: (text: string, substring: string, startPosition?: number) => number;
};
export declare const DateTimeFunctions: {
    /**
     * Calculates the number of working days between two dates.
     * @param {Date} startDate - The start date.
     * @param {Date} endDate - The end date.
     * @param {Date[]} [holidays=[]] - An array of holiday dates.
     * @returns {number} The number of working days.
     */
    NETWORKDAYS: (startDate: Date, endDate: Date, holidays?: Date[]) => number;
};
export declare const FinancialFunctions: {
    /**
     * Calculates the present value of an investment.
     * @param {number} rate - The interest rate per period.
     * @param {number} periods - The number of periods.
     * @param {number} payment - The payment per period.
     * @returns {number} The present value.
     */
    PV: (rate: number, periods: number, payment: number) => number;
    /**
     * Calculates the net present value of cash flows.
     * @param {number} rate - The discount rate.
     * @param {...number[]} cashFlows - The cash flows.
     * @returns {number} The net present value.
     */
    NPV: (rate: number, ...cashFlows: number[]) => number;
    /**
     * Calculates the internal rate of return for cash flows.
     * @param {...number[]} cashFlows - The cash flows.
     * @returns {number} The internal rate of return.
     */
    IRR: (...cashFlows: number[]) => number;
    /**
     * Calculates the interest rate per period for an investment.
     * @param {number} periods - The number of periods.
     * @param {number} payment - The payment per period.
     * @param {number} presentValue - The present value.
     * @returns {number} The interest rate.
     */
    RATE: (periods: number, payment: number, presentValue: number) => number;
};
export declare const EngineeringFunctions: {
    /**
     * Converts a number from one unit to another.
     * @param {number} value - The value to convert.
     * @param {string} fromUnit - The unit to convert from.
     * @param {string} toUnit - The unit to convert to.
     * @returns {number} The converted value.
     */
    CONVERT: (value: number, fromUnit: string, toUnit: string) => number;
    /**
     * Converts a binary number to decimal.
     * @param {string} binary - The binary number as a string.
     * @returns {number} The decimal equivalent.
     */
    BIN2DEC: (binary: string) => number;
    /**
     * Converts a hexadecimal number to decimal.
     * @param {string} hex - The hexadecimal number as a string.
     * @returns {number} The decimal equivalent.
     */
    HEX2DEC: (hex: string) => number;
    /**
     * Creates a complex number.
     * @param {number} real - The real part.
     * @param {number} imaginary - The imaginary part.
     * @returns {string} The complex number as a string.
     */
    COMPLEX: (real: number, imaginary: number) => string;
};
//# sourceMappingURL=excelFunctions.d.ts.map