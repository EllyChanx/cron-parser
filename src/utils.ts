interface Range {
  min: number;
  max: number;
  total: number
}

export interface CornRange {
  minute: Range
  hour: Range
  dayOfMonth: Range
  month: Range
  dayOfWeek: Range
}

export const cronRange: CornRange = {
  minute: {
    min: 0,
    max: 59,
    total: 60
  },
  hour: {
    min: 0,
    max: 23,
    total: 24
  },
  dayOfMonth: {
    min: 1,
    max: 31,
    total: 31
  },
  month: {
    min: 1,
    max: 12,
    total: 12
  },
  dayOfWeek: {
    min: 0,
    max: 7,
    total: 7
  },
};

