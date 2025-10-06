/**
 * kirianja-1 - TypeScript Implementation
 * A simple Hello World program
 */

function main(): void {
    console.log("Hello, World!");
    console.log("Welcome to kirianja-1");
    
    // Simple calculation
    const numbers: number[] = [1, 2, 3, 4, 5];
    const total: number = numbers.reduce((sum, num) => sum + num, 0);
    console.log(`Sum of numbers: ${total}`);
}

main();
