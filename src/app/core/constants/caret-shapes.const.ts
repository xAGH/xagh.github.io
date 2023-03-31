export const CaretShapes = {
  BAR: 'bar',
  BLOCK: 'block',
  UNDERLINE: 'underline',
} as const

export type CaretShapes = typeof CaretShapes[keyof typeof CaretShapes];
