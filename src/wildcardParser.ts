import { CornRange, cronRange } from './utils';

const findIntervals = (start: number, end: number, interval: number): number[] => {
    let values: number[] = [];
    for (let i = 0; i <= end; i += interval) {
        if (!(i < start)) {values.push(i)}
    }
    return values;
}

export const handleWildcard = (value: string, unit: keyof CornRange): number[] => {
    if (value === '*') {
        return Array.from({length: cronRange[unit].total}, (v, k) => k + cronRange[unit].min)
    } else {
        const interval: number = Number(value.replace('*/', ''))
        return findIntervals(cronRange[unit].min, cronRange[unit].max, interval)
    }
}

