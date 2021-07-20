import { useState } from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css"
import Categories from "./Categories";
// import CareScale from "./CareScale";
import PlantItem from "./PlantItem";

function ShoppingList( { cart, updateCart } ) {
	const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    // const category = plantList.reduce(
    //     // reduce : permet d'accumuler plusieur valeurs en une seule ici dans le tableau planList
    //     (accumul, valeur) => 
    //     // Includes = verifie si le tableau a une valeur vrai donc si category est présent
    //     // concat = récupère chaque valeur de category dès que accumul est verifier et les concatènes en une chaine global de category
    //         accumul.includes(plantList.category) ? accumul : accumul.concat(valeur.category),
    //     // [] : définit toutes les category dans un tableau array
	// 	[],
    //     )
        // console.log(category);
        // console.log(plantList)

        function addToCart( name, price ){
            // find : On verifie si la plant est présente dans card
            const currentPlantSaved = cart.find((plant) => plant.name === name)
            if (currentPlantSaved) {
                // Si elle exsite on filtre toute ces plantes
                const cartFilteredCurrentPlant = cart.filter(
                    (plant) => plant.name !== name
                )
                // On modifie cette carte sans elle et on ajoute + 1 élément
                updateCart([
                    ...cartFilteredCurrentPlant,
                    { name, price, amount: currentPlantSaved.amount + 1 }
                ])
            } else {
                // sinon on ajoute une nouvelle quantité
                updateCart([...cart, { name, price, amount: 1 }])
            }
        }

    return (
        <div className='lmj-shopping-list'>

            <Categories categories={categories}
                        setActiveCategory={setActiveCategory}
                        activeCategory={activeCategory}
            />

            {/* <ul>

                {category.map((cat, index) => (
                    <li key={ `${cat}-${index}` }>{ cat }</li>
                ))}
            </ul> */}
            <ul className="lmj-plant-list">
            {/* map : permet de boucler pour avoir le resultat d'un tableau */}
            {
            // plantList.map((plant) => (
                // <li key={ plant.id } className="lmj-plant-item">
                //     { plant.name } 
                //     {plant.isBestSale ? <span>🔥</span> : null} 
                //     {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                //     <CareScale careType='water' scaleValue={plant.water} />
                //     <CareScale careType='light' scaleValue={plant.light} />

                plantList.map(({id, cover, name, water, light, price, category }) => !activeCategory || activeCategory === category ? (
                    <div key={id}>

                    <PlantItem key={id}
                        price={price} 
                        cover={cover} 
                        name={name} 
                        water={water} 
                        light={light} 
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                    //{ /* On peut ecrire aussi comme ça : */ }
                    //{/* { plant.name } {plant.isBestSale && <span>🔥</span> } */}
                // </li>
            ) : null
            )}
            
            </ul>
        </div>
    )
}

export default ShoppingList;