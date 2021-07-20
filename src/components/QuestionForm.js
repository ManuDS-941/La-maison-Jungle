import { useState } from 'react'

// Formulaire non controler
// function handleSubmit(e) {
//     // preventDefault empeche submit de rafraichir la page
//     e.preventDefault()
//     alert(e.target['my_input'].value)
//}



function QuestionForm(){
    // Déclare l'état initial de inputValue avec la fonction qui correspond pour la modifier, useState donne une valeur par default grace a react
    const [inputValue, setInputValue] = useState("Posez votre question ici")

    // Exemple : Déclare une variable pour généré une erreur si on utilise un "f"
    const isInputError = inputValue.includes('f')

    // La fonction bloque la touche f pour qu'on ne puisse pas l'utiliser
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (

        // Formulaire non controler
        // <form onSubmit={handleSubmit}>
        //     <input type='text' name='my_input' defaultValue='Tapez votre texte' />
        //     <button type='submit'>Entrer</button>
        // </form>

        
        // Formulaire Controler
        <div>

            {/* Message d'erreur en cas d'utilisation d'une "f"  */}
            {isInputError && (
            <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
)}
            <textarea
                value={inputValue}
                // on passe une fonction callback (e) pour sauvegarder dans le local la valeur de input
                // setinputValue permet d'accéder a cette valeur 
                // onChange={(e) => setInputValue(e.target.value)}
                
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
        )
}

export default QuestionForm;