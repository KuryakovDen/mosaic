// tslint:disable:naming-convention
export enum TimeParts {
    hours,
    minutes,
    seconds
}

export enum TimeFormats {
    HHmmss = 'HH:mm:ss',
    HHmm = 'HH:mm'
}

export const TIMEFORMAT_PLACEHOLDERS: { [timeFormat: string]: string } = {
    [TimeFormats.HHmmss]: '  :  :  ',
    [TimeFormats.HHmm]: '  :  '
};

export const DEFAULT_TIME_FORMAT: TimeFormats = TimeFormats.HHmm;

export const HOURS_MINUTES_SECONDS_REGEXP =
    new RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]|[0-9]):([0-5][0-9]|[0-9])?$/);
export const HOURS_MINUTES_REGEXP = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]|[0-9])?$/;
export const HOURS_ONLY_REGEXP = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):?$/;

export const SECONDS_PER_MINUTE: number = 59;
export const MINUTES_PER_HOUR: number = 59;
export const HOURS_PER_DAY: number = 23;
