import CodeEditor from '../components/CodeEditor'
import './App.css'

function App() {
  return (
    <>

      <h1>What the B@G?</h1>
      <div className="card">
        <img src="../public/image.png" width="30%" />
        <p>
          We need your help with this project!
        </p>
        <CodeEditor/>
      </div>
    </>
  )
}

export default App
