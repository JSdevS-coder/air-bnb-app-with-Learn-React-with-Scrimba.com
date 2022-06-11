import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'

function App() {
	return (
		<div className='App'>
			<header>
				<Navbar />
				<Hero />
			</header>
			<Main />
		</div>
	)
}

export default App
