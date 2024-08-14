import HeroChild from "./HeroChild"
function Hero({heroData}) {
  return (
    <div>
      This is my Hero Component
      <HeroChild someData={heroData} />
    </div>
  )
}

export default Hero
