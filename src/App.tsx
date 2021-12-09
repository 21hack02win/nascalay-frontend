import emotionReset from 'emotion-reset'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Global, css } from '@emotion/react'
import './App.css'
import Router from '/@/router/index'
import { useAppDispatch } from '/@/store/hooks'
import { addPageEventListener } from '/@/scripts/changePageEvent'

const App = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    // wsEventを監視して画面遷移する
    // HACK: navigateとdispatchを渡してる実装やばそう
    addPageEventListener(navigate, dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const style = css`
    ${emotionReset}
    *, *::after, *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smooth: auto;
    }
    body {
      background-color: #96a0c0;
      background-image: url(/@/assets/bg.svg);
    }
  `
  return (
    <div>
      <Global styles={style} />
      <header>Welcome to React Router!</header>
      <Router />
    </div>
  )
}

export default App
