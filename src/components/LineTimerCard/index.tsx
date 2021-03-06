import { css, keyframes } from '@emotion/react'
import { mdiTimerSand } from '@mdi/js'
import { Icon } from '@mdi/react'
import React from 'react'
import LineTimer from '../LineTimer'

type Props = {
  isReset?: boolean
  width: string
  maxValueMs: number
  onFinish?: () => void
  hasShadow?: boolean
}

const LineTimerCard = (props: Props) => {
  const rotateKeyframes = keyframes`
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `

  return (
    <div
      css={css`
        width: ${props.width};
        height: 78px;
        display: grid;
        grid-template-columns: 54px 1fr;
        grid-gap: 20px;
        align-items: center;
        padding: 8px 20px;
        border: 3px solid #000000;
        background-color: #ffffff;
        ${props.hasShadow ? 'box-shadow: 8px 8px 0px rgb(0, 0, 0);' : ''}
      `}
    >
      <Icon
        css={css`
          animation: ${rotateKeyframes} 10s ease-out infinite;
        `}
        path={mdiTimerSand}
        size="54px"
      />
      {!props.isReset ? (
        <LineTimer
          width="100%"
          maxValueMs={props.maxValueMs}
          onFinish={props.onFinish}
          height="16px"
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default LineTimerCard
