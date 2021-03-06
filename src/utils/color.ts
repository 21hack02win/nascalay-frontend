export type ColorType = 'yellow' | 'red' | 'blue' | 'white' | 'black'

export const colorToRgb: Record<
  ColorType,
  `rgb(${number}, ${number}, ${number})`
> = {
  yellow: 'rgb(246, 223, 147)',
  red: 'rgb(242, 154, 140)',
  blue: 'rgb(160, 167, 233)',
  white: 'rgb(246, 246, 246)',
  black: 'rgb(14, 14, 14)',
}
