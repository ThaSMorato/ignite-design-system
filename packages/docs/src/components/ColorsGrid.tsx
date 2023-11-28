import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

const getColorByContrast = (color: string) => {
  return getContrast(color, '#fff') < 3.5 ? '#000' : '#fff'
}

export const ColorsGrid = () => {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getColorByContrast(color),
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
