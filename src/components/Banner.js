import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'La maison jungle'
    // const currentMonth = new Date().getMonth()
    // const isSpring = currentMonth >= 2 && currentMonth <= 5
    // // console.log(currentMonth)
    // const recommendation = isSpring ? (
    //     <div>C'est le printemps, rempotez</div>
    // ) : (
    //     <div>Ce n'est pas le moment de rempoter</div>
    // )

    return (
        <div className='lmj-banner'>
            {/* <div className="lmj-banner-row"> */}
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>{title}</h1>
            {/* </div> */}
        {/* { recommendation } */}
        </div>
    )
}

export default Banner // syntaxe prévue dans l'ES6, qui vous épargnera d'utiliser les accolades au moment de l'import.