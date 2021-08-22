import { CornRange, cronRange } from './utils';

export const validateRange = (value: number, unit: keyof CornRange) => {
    if (value > cronRange[unit].max || value < cronRange[unit].min) {
        throw Error(`Value(s) provided for unit: ${unit} is our of range`)
    }
}

export const validateStartBeforeEnd = (start: number, end: number, unit: keyof CornRange) => {
    if (end < start) throw Error(`Range provided for unit: ${unit} is the wrong way around`)
}

export const validateSixParamsProvided = (params: string[]) => {
    if (params.length < 6) throw Error('Cron parser requires at least 6 arguments')
}