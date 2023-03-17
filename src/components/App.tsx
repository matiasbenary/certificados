import { Route, Routes } from 'react-router-dom'
import Message from './Message'

function App() {
  return (
    <div className="bg-white">
      <div className="h-screen">
        <Routes>
          <Route path="/:code" element={<Message />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
