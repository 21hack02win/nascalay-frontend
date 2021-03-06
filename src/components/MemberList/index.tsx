import React, { useEffect } from 'react'
import { css } from '@emotion/react'
import { useAppSelector, useAppDispatch } from '/@/store/hooks'
import { WsRoomNewMemberEventBody } from '/@/utils/apis/generated'
import { card } from '/@/utils/card'
import { colorToRgb } from '/@/utils/color'
import { WsEvent, wsListener } from '/@/websocket'
import Member from './member'
import { setRoomNewMember } from '/@/store/slice/room'

const MemberList = () => {
  const memberList = useAppSelector((state) => state.room.members)
  const dispatch = useAppDispatch()
  const hostId = useAppSelector((state) => state.room.hostId)

  useEffect(() => {
    const joinNewMember = (e: CustomEvent<WsRoomNewMemberEventBody>) => {
      dispatch(setRoomNewMember(e.detail))
    }
    wsListener.addEventListener(
      WsEvent.RoomNewMember,
      joinNewMember as EventListener
    )

    return () => {
      wsListener.removeEventListener(
        WsEvent.RoomNewMember,
        joinNewMember as EventListener
      )
    }
  }, [dispatch])
  return (
    <div css={[containerStyle, card]}>
      <h2 css={titleStyle}>参加者</h2>
      <div css={listStyle}>
        {memberList.map((member) => (
          <Member
            key={member.userId}
            name={member.username}
            avatar={member.avatar}
            isHost={member.userId === hostId}
          />
        ))}
      </div>
    </div>
  )
}

const containerStyle = css`
  width: 100%;
  background-color: ${colorToRgb.white};
  padding: 36px 48px;
  padding-top: 12px;
`

const titleStyle = css`
  font-size: 2rem;
  line-height: 6rem;
`

const listStyle = css`
  background-color: ${colorToRgb.red};
  padding: 40px;
  border: 3px solid ${colorToRgb.black};
  height: calc(100% - 7rem);
  overflow-y: scroll;
  scrollbar-color: #4356ff ${colorToRgb.red};
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colorToRgb.red};
    border: ${colorToRgb.black} solid;
    border-width: 0px 0px 0px 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colorToRgb.blue};
    border: ${colorToRgb.black} solid;
    border-width: 3px 0px 3px 3px;
  }
  & div {
    padding-bottom: 0.75rem;
  }
`

export default MemberList
