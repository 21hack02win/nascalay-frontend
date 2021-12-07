import emotionReset from 'emotion-reset'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Global, css } from '@emotion/react'
import './App.css'
import Router from '/@/router/index'
import { addPageEventListener } from '/@/scripts/changePageEvent'

const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // wsEventを監視して画面遷移する
    addPageEventListener(navigate)
  }, [])
  return (
    <div>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smooth: auto;
          }
        `}
      />
      <header>Welcome to React Router!</header>
      <Router />
    </div>
  )
}

export default App
