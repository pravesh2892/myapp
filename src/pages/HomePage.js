import React from 'react'
import Header from '../Component/common/Header/Index'
import HeroSection from '../Component/HeroSection/Index'
import ProductShowCase from '../Component/ProductShowCase/Index'
import FeelSpecial from '../Component/FeelSpecial'
import BrandsLove from '../Component/BrandsLove'
import CredExperience from '../Component/CredExperience/Index'
import MobileScroll from '../Component/MoblieScroll'
import WindowPeek from '../Component/WindowPeek/Index'
import CredScurity from '../Component/CredScurity'
import CredStory from '../Component/CredStory/Index'
import AppRating from '../Component/AppRating/Index'


const HomePage = () => {
  return (
    <div>
     <Header />
     <HeroSection />
     <ProductShowCase />
     <FeelSpecial />
     <BrandsLove />
     <CredExperience />
     <MobileScroll />
     <div className='non-mobile'>
     <WindowPeek />
     </div>
     <CredScurity />
     <CredStory />
     <AppRating />


    </div>
  )
}

export default HomePage
