import { CornRange } from './utils';
import { validateRange } from './commaParser';

const validateStartBeforeEnd = (start: number, end: number, unit: keyof CornRange) => {
    if (end < start) throw Error(`Range provided for unit: ${unit} is the wrong way around`)
}

export const handleDash = (value: string, unit: keyof CornRange): number[] => {
    const [start, end] = value.split('-').map(n => {
        validateRange(Number(n), unit)
        return Number(n)
    })
    validateStartBeforeEnd(start, end, unit)
    return Array.from(Array(end - start + 1), (_, i) => i + start)
}

