export function toNumeralThousandsGroup(value: number | string, decimalCount = 0): string {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }
    return value
        .toFixed(decimalCount)
        .toString()
        .replace(/(\d)(?=(?:\d{3})+(\.|$))/g, '$1,');
}

export function splitNumberGroup(value: string | number): string[] {
    value = toNumeralThousandsGroup(value);
    return value.split(',');
}
