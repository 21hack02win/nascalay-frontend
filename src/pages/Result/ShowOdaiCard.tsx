import React from 'react'
import { css } from '@emotion/react'
import AvatarIcon from '/@/components/AvatarIcon'
import { User } from '/@/utils/apis'

import { card } from '/@/utils/card'
import { colorToRgb } from '/@/utils/color'

const ShowOdaiCard = () => {
  const user :User = {
    userId: 'aaaaa',
    username: 'aaaaa',
    avatar: {
      type: 0,
      color: '#fff',
    }
  }
  return (
    <div css={[cardContainer, card]}>
      <div css={userStyle}>
        <AvatarIcon avatar={user.avatar} size={72} />
        <p>{user.username}</p>
      </div>
    </div>
  )
}

const cardContainer = css`
  width: 100%;
  display: flex;
  padding: 18px 48px;
  background-color: ${colorToRgb.red};
  font-size: 1.5rem;
`

const userStyle = css`
  flex-shrink: 0;
  text-align: center;
`

export default ShowOdaiCard