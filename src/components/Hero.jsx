import HeroImg from "../assets/HeroBG.svg"


function Hero(props){
    return(
        <div className="hero-container">
           
        <img src={HeroImg} className="HeroImg h-112 md:bg-fixed" />
        
        {/* <button className="custom-button hero hidden lg:block"> Learn more</button> */}
        </div>
      
    )
}
export default Hero;