import '../styles/PlantItem.css'
import CareScale from './CareScale'

function handleClick(plantName) {
    // console.log('✨ Ceci est un clic ✨')
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix `)
}

// function handleClick(e) {
//     console.log('✨ Ceci est mon event :', e)
// }

function PlantItem({ name, cover, price, light, water }) {
	return (
    <li className='lmj-plant-item' onClick={() => handleClick}>
        <span className='lmj-plant-item-price'>{price}€</span>
        <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
        {name}
        <div>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </div>
    </li>
    )
    
}
    

export default PlantItem;