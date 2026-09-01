import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <>
      <h1>SDD-Demo</h1>
      <p className="intro">
        A simple React + TypeScript site built with OpenSpec's structured
        workflow: Understand → Spec → Tasks → Implement → Review. See{' '}
        <code>openspec/changes/add-counter-widget</code> for the spec behind
        the widget below.
      </p>
      <Counter />
    </>
  )
}

export default App
