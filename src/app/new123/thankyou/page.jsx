import ArabicFooter from '@/components/arabicHostpital/ArabicFooter'
import ArabicHero from '@/components/arabicHostpital/ArabicHero'
import ArabicNavbar from '@/components/arabicHostpital/ArabicNavbar'
import ArabicThankYou from '@/components/arabicHostpital/ArabicThankYou'
import React from 'react'

const page = () => {
  return (
    <div>
        <ArabicNavbar/>
        <ArabicHero/>
        <ArabicThankYou/>
        <ArabicFooter/>
        
        
        </div>
  )
}

export default page