import { Routes } from 'react-router'
import { Route } from 'react-router-dom'

import Top from '/@/pages/Top'
import Lobby from '/@/pages/Lobby'
import Theme from '/@/pages/Theme'
import Draw from '/@/pages/Draw'
import Answer from '/@/pages/Answer'
import Result from '/@/pages/Result'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/draw" element={<Draw />} />
      <Route path="/answer" element={<Answer />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  )
}

export default Router
