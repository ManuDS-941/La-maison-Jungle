
import { useEffect, useState } from 'react'
import '../styles/Footer.css'

function Footer( {cart} ) {
	const [inputValue, setInputValue] = useState('Ecrivez un mail ici')

	// Toutes les techniques de UseEffect

	// useEffect(() => {
	// 	console.log(`1 Cette alerte s'affiche a chaque rendu`)
	// })

	// useEffect(() => {
	// 	console.log(`2 Cette alerte s'affiche au premier rendu`)
	// }, [])

	// useEffect(() => {
	// 	console.log(`3 Cette alerte s'affiche la premiere fois et quand mon panier est mis a jour`)
	// }, [cart])

	// useEffect(() => {
	// 	return () =>
	// 		console.log(`4 Cette alerte s'affiche quand Footer est retiré du DOM`)
	// })

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer