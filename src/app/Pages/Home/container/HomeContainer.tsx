import React from 'react'
import Header from '../component/Header/page'
import Resizable from '../component/CardSlider/page'
import PremiumMember from '../component/MemberSlider/page'
import PackageCard from '../component/Package/page'

const HomeContainer = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        {/* Card Slider */}
        <Resizable />
        {/* Member Slider */}
        <PremiumMember/>
        {/* Package Card */}
        <PackageCard/>
      </section>
    </div>
  )
}

export default HomeContainer
