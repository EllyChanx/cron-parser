import { CornRange } from './utils';
import { validateRange } from './validator';

export const handleComma = (value: string, unit: keyof CornRange): number[] => {
    return value.split(',').map(n => {
        validateRange(Number(n), unit)
        return Number(n)
    }).sort((a, b) => a - b)
}

