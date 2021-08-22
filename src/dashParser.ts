import { CornRange } from './utils';
import { validateRange, validateStartBeforeEnd } from './validator';

export const handleDash = (value: string, unit: keyof CornRange): number[] => {
    const [start, end] = value.split('-').map(n => {
        validateRange(Number(n), unit)
        return Number(n)
    })
    validateStartBeforeEnd(start, end, unit)
    return Array.from(Array(end - start + 1), (_, i) => i + start)
}

