import { CornRange, cronRange } from './utils';

export const validateRange = (value: number, unit: keyof CornRange) => {
    if (value > cronRange[unit].max || value < cronRange[unit].min) {
        throw Error(`Value(s) provided for unit: ${unit} is our of range`)
    }
}

export const handleComma = (value: string, unit: keyof CornRange): number[] => {
    return value.split(',').map(n => {
        validateRange(Number(n), unit)
        return Number(n)
    }).sort((a, b) => a - b)
}

