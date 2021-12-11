import React from 'react'
import { css } from '@emotion/react'

import { card } from '/@/utils/card'
import { colorToRgb } from '/@/utils/color'

import ColorPallet from '/@/components/ColorPallet.tsx'

const Avatar = () => {
  return (
    <div css={[containerStyle, card]}>
      <ColorPallet />
    </div>
  )
}

const containerStyle = css`
  width: 100%;
  background-color: ${colorToRgb.blue};
  padding: 36px 48px;
  padding-top: 12px;
`

export default Avatar
