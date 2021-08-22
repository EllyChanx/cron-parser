import { CornRange } from './utils';
import { handleWildcard } from './wildcardParser';
import { handleComma } from './commaParser';
import { handleDash } from './dashParser';
import { validateSixParamsProvided } from './validator';

const parseUnit = (rawStr: string, unit: keyof CornRange): number[] => {
    if (rawStr.includes('*')) {
        return handleWildcard(rawStr, unit)
    } else if (rawStr.includes(',')) {
        return handleComma(rawStr, unit)
    } else if (rawStr.includes('-')) {
        return handleDash(rawStr, unit)
    } else {
        return [Number(rawStr)]
    }
}

const formatter = (minute: string, hour: string, dayOfMonth: string, month: string, dayOfWeek: string, command: string) => `
minute              ${minute}
hour                ${hour}
day of month        ${dayOfMonth}
month               ${month}
day of week         ${dayOfWeek}
command             ${command}
`

export const parser = (cornString: string) => {
    const cornParams: string[] = cornString.split(' ')
    validateSixParamsProvided(cornParams)

    const [minuteStr, hourStr, dayOfMonthStr, monthStr, dayOfWeekStr, command] = cornParams

    const minute = parseUnit(minuteStr, 'minute').join(' ')
    const hour = parseUnit(hourStr, 'hour').join(' ')
    const dayOfMonth = parseUnit(dayOfMonthStr, 'dayOfMonth').join(' ')
    const month = parseUnit(monthStr, 'month').join(' ')
    const dayOfWeek = parseUnit(dayOfWeekStr, 'dayOfWeek').join(' ')

    return formatter(minute, hour, dayOfMonth, month, dayOfWeek, command)
}
