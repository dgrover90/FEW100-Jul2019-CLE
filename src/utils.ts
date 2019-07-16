export function isEven(n: number): boolean {
    return n % 2 === 0;
}

export const PI = 3.1415;

export function _logIt(x: string) {
    console.log(x);
}

export function formatName(first: string, last: string, mi?: string): string {
    let fullName = `${last}, ${first}`;
    if (mi !== undefined) {
        fullName += ` ${mi}.`;
    }
    return fullName;
}
// ? is optional for that input to the function