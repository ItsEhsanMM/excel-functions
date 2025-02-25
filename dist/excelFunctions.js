/**
 * Checks if a value is numeric.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is numeric, false otherwise.
 */
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
// Mathematical and Trigonometric Functions
export const MathFunctions = {
    /**
     * Calculates the sum of numbers.
     * @param {...number[]} args - Numbers to sum.
     * @returns {number} The sum of the numbers.
     */
    SUM: (...args) => {
        return args.reduce((acc, val) => acc + (isNumeric(val) ? Number(val) : 0, 0));
    },
    /**
     * Calculates the average of numbers.
     * @param {...number[]} args - Numbers to average.
     * @returns {number} The average of the numbers.
     */
    AVERAGE: (...args) => {
        const sum = MathFunctions.SUM(...args);
        return sum / args.length;
    },
    /**
     * Rounds a number to a specified number of decimal places.
     * @param {number} value - The number to round.
     * @param {number} [decimals=0] - The number of decimal places.
     * @returns {number} The rounded number.
     */
    ROUND: (value, decimals = 0) => {
        const factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    },
    /**
     * Calculates the square root of a number.
     * @param {number} value - The number.
     * @returns {number} The square root.
     */
    SQRT: (value) => {
        return Math.sqrt(value);
    },
    /**
     * Raises a number to a specified power.
     * @param {number} base - The base number.
     * @param {number} exponent - The exponent.
     * @returns {number} The result of base^exponent.
     */
    POWER: (base, exponent) => {
        return Math.pow(base, exponent);
    },
    /**
     * Calculates the sine of an angle (in radians).
     * @param {number} angle - The angle in radians.
     * @returns {number} The sine of the angle.
     */
    SIN: (angle) => {
        return Math.sin(angle);
    },
    /**
     * Calculates the cosine of an angle (in radians).
     * @param {number} angle - The angle in radians.
     * @returns {number} The cosine of the angle.
     */
    COS: (angle) => {
        return Math.cos(angle);
    },
    /**
     * Calculates the tangent of an angle (in radians).
     * @param {number} angle - The angle in radians.
     * @returns {number} The tangent of the angle.
     */
    TAN: (angle) => {
        return Math.tan(angle);
    },
    /**
     * Calculates the median of a set of numbers.
     * @param {...number[]} args - Numbers to calculate the median.
     * @returns {number} The median.
     */
    MEDIAN: (...args) => {
        const sorted = args.sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },
    /**
     * Calculates the standard deviation of a set of numbers.
     * @param {...number[]} args - Numbers to calculate the standard deviation.
     * @returns {number} The standard deviation.
     */
    STDEV: (...args) => {
        const avg = MathFunctions.AVERAGE(...args);
        const variance = args.reduce((acc, val) => acc + Math.pow(val - avg, 2), 0) / args.length;
        return Math.sqrt(variance);
    },
};
// Text Functions
export const TextFunctions = {
    /**
     * Finds the position of a substring within a string (case-sensitive).
     * @param {string} text - The string to search.
     * @param {string} substring - The substring to find.
     * @param {number} [startPosition=0] - The position to start searching.
     * @returns {number} The position of the substring, or -1 if not found.
     */
    FIND: (text, substring, startPosition = 0) => {
        return text.indexOf(substring, startPosition);
    },
    /**
     * Finds the position of a substring within a string (case-insensitive).
     * @param {string} text - The string to search.
     * @param {string} substring - The substring to find.
     * @param {number} [startPosition=0] - The position to start searching.
     * @returns {number} The position of the substring, or -1 if not found.
     */
    SEARCH: (text, substring, startPosition = 0) => {
        return text.toLowerCase().indexOf(substring.toLowerCase(), startPosition);
    },
};
// Date and Time Functions
export const DateTimeFunctions = {
    /**
     * Calculates the number of working days between two dates.
     * @param {Date} startDate - The start date.
     * @param {Date} endDate - The end date.
     * @param {Date[]} [holidays=[]] - An array of holiday dates.
     * @returns {number} The number of working days.
     */
    NETWORKDAYS: (startDate, endDate, holidays = []) => {
        let count = 0;
        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6 && !holidays.some(holiday => holiday.getTime() === currentDate.getTime())) {
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return count;
    },
};
// Financial Functions
export const FinancialFunctions = {
    /**
     * Calculates the present value of an investment.
     * @param {number} rate - The interest rate per period.
     * @param {number} periods - The number of periods.
     * @param {number} payment - The payment per period.
     * @returns {number} The present value.
     */
    PV: (rate, periods, payment) => {
        return payment * ((1 - Math.pow(1 + rate, -periods)) / rate);
    },
    /**
     * Calculates the net present value of cash flows.
     * @param {number} rate - The discount rate.
     * @param {...number[]} cashFlows - The cash flows.
     * @returns {number} The net present value.
     */
    NPV: (rate, ...cashFlows) => {
        return cashFlows.reduce((acc, val, index) => acc + val / Math.pow(1 + rate, index + 1), 0);
    },
    /**
     * Calculates the internal rate of return for cash flows.
     * @param {...number[]} cashFlows - The cash flows.
     * @returns {number} The internal rate of return.
     */
    IRR: (...cashFlows) => {
        const tolerance = 0.0001;
        let guess = 0.1;
        let result = guess;
        for (let i = 0; i < 100; i++) {
            const npv = FinancialFunctions.NPV(result, ...cashFlows);
            if (Math.abs(npv) < tolerance)
                break;
            result = result - npv / FinancialFunctions.NPV(result + 0.01, ...cashFlows);
        }
        return result;
    },
    /**
     * Calculates the interest rate per period for an investment.
     * @param {number} periods - The number of periods.
     * @param {number} payment - The payment per period.
     * @param {number} presentValue - The present value.
     * @returns {number} The interest rate.
     */
    RATE: (periods, payment, presentValue) => {
        return (payment / presentValue) * (1 - Math.pow(1 + payment / presentValue, -periods));
    },
};
// Engineering Functions
export const EngineeringFunctions = {
    /**
     * Converts a number from one unit to another.
     * @param {number} value - The value to convert.
     * @param {string} fromUnit - The unit to convert from.
     * @param {string} toUnit - The unit to convert to.
     * @returns {number} The converted value.
     */
    CONVERT: (value, fromUnit, toUnit) => {
        // Example: Convert inches to centimeters
        if (fromUnit === "in" && toUnit === "cm")
            return value * 2.54;
        // Add more conversions as needed
        throw new Error("Unsupported conversion");
    },
    /**
     * Converts a binary number to decimal.
     * @param {string} binary - The binary number as a string.
     * @returns {number} The decimal equivalent.
     */
    BIN2DEC: (binary) => {
        return parseInt(binary, 2);
    },
    /**
     * Converts a hexadecimal number to decimal.
     * @param {string} hex - The hexadecimal number as a string.
     * @returns {number} The decimal equivalent.
     */
    HEX2DEC: (hex) => {
        return parseInt(hex, 16);
    },
    /**
     * Creates a complex number.
     * @param {number} real - The real part.
     * @param {number} imaginary - The imaginary part.
     * @returns {string} The complex number as a string.
     */
    COMPLEX: (real, imaginary) => {
        return `${real} + ${imaginary}i`;
    },
};
//# sourceMappingURL=excelFunctions.js.map