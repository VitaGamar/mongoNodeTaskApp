const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius } = require('../src/math');

test('Should calculate total with tip', () => {
   const total = calculateTip(10, .30);

    expect(total).toBe(13)
});

test('Should calculate total with default tip', () => {
    const total = calculateTip(10);

    expect(total).toBe(12.5)
});

test('Should convert 32 F to 0 C', () => {
    const celsius = fahrenheitToCelsius(32);
    expect(celsius).toBe(0)
});

test("Should convert 0 C to 32 F", ()=> {
    const farenheit = celsiusToFahrenheit(0);
    expect(farenheit).toBe(32)
});
// 2. Create "Should convert 32 F to 0 C"
// 3. Create "Should convert 0 C to 32 F"
// 4. Run the Jest to test your work!
