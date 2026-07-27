import { AboutApps } from './AboutApps'
import { AboutContact } from './AboutContact'
import { AboutFAQ } from './AboutFAQ'
import { AboutHero } from './AboutHero'
import { AboutMemories } from './AboutMemories'
import { AboutReview } from './AboutReview'

export const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutMemories />
      <AboutApps />
      <AboutReview />
      <AboutFAQ />
      <AboutContact />
    </>
  )
}
