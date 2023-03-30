export const DatetimeFormats = {
  FULL: 'dd/MM/yyyy \'a\'t hh:mm:ss a', // 29/03/2023 at 09:03:54 AM
  SHORT_DATE: 'MMM dd, yyyy', //Mar 29, 2023
  SHORT_DATETIME: 'MMM dd, yyyy \'a\'t hh:mm:ss a', //Mar 29, 2023 at 09:03:54 AM
  LONG_DATE: 'EEEE, MMMM dd, yyyy', // Monday, March 29, 2023
  LONG_DATETIME: 'EEEE, MMMM dd, yyyy \'a\'t hh:mm:ss a', // Monday, March 29, 2023  at 09:03:54 AM
  SHORT_TIME: 'hh:mm a', // 9:03 AM
  MEDIUM_TIME: 'hh:mm:ss a', // 9:03:01 AM
} as const

export type DatetimeFormats = typeof DatetimeFormats[keyof typeof DatetimeFormats];
