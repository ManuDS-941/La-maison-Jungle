import "../styles/Cart.css"
// import { useState } from 'react'
import { useState, useEffect } from 'react'
// import { plantList } from "../datas/plantList"
// import PlantItem from "./PlantItem"

function Cart({ cart, updateCart }) {
    // Exemple d'une utilisation simple pour l'affichage
    // const monsteraPrice = 8
    // const ivyPrice = 10
    // const flowerPrice = 15
    // return (
    //     <div className="lmj-cart">
    //         <h2>Panier</h2>
    //         <ul>
    //             <li>Monstera : {monsteraPrice}€</li>
    //             <li>Lierre : {ivyPrice}€</li>
    //             <li>Fleurs : {flowerPrice}€</li>
    //         </ul>
    //         Total : {monsteraPrice + ivyPrice + flowerPrice}€
    //     </div>
    // )

    // const monsteraPrice = 8
    
    // Fonction qui permet de mettre a jour le state et de partir avec une valeur initial de 0
    // useState enregistre en local les valeurs de cart = valeur actuel et updateCart = fonction nombre d'ajout de cart au clic
    // const [cart, updateCart] = useState(0)

    // On déclare une variable pour masquer/montrer le panier
    const [isOpen, setIsOpen] = useState(true)
    // const items = Object.keys(cart)
	// const total = items.reduce(
	// 	(acc, item) => acc + cart[item].amount * cart[item].price,
	// 	0
	// )
    const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
    )
    // console.log(cart)
    // console.log(total);

    // Fonction utile grace a react pour afficher une action/effet une fois que le rendu du composant est fini sans spécialement exécuter le return du composant et il a accès a tout les éléments du state
    // Paramètre 1 : effet a exécuté ici l'alerte et Paramère 2 : [total] condition qui dit qu'il s'affiche que lorsque total change
    useEffect(() => {
        // alert(`J'aurai ${total}€ à payer 💸`)
        // Modifie le titre de l'onglet
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            {/* Si on clic sur le bouton isOpen redevient false et ferme */}
            <button className='lmj-cart-toggle-button' 
                    onClick={() => setIsOpen(false)}>Fermer</button>
                    
			{cart.length > 0 ? (
            <div>
                <h2>Panier</h2>
                {/* <ul> */}
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price} € x {amount}
							</div>
						))}
					{/* </ul> */}

            {/* Permet d'ajouter un élément a chaque fois */}
            {/* <div>
                Monstera : {monsteraPrice} € <br />
                <button onClick={() => updateCart(cart + 1)}>
                Ajouter
                </button>
            </div> */}

                <h3>Total : {total}€</h3>
                <button className="lmj-cart-button-delete" onClick={() => updateCart([])}>Vider le panier</button>
            </div>
            ) : (
                    <div>Votre panier est vide</div>
            )}
        </div>
            
    ) : (
        <div className='lmj-cart-closed'>
            {/* Si on clic sur le bouton isOpen devient true et et s'ouvre */}
            <button className='lmj-cart-toggle-button' 
                    onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
        </div>
    )
    
}

export default Cart