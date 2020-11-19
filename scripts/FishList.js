import { mostHolyFish } from './FishDataProvider.js '
import { soldierFish } from './FishDataProvider.js '
import { nonHolyFish } from './FishDataProvider.js '
import { Fish } from './Fish.js'

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const losers = nonHolyFish()

    for (const fishObject of holyFish) {
        //console.log("one fish!", fishObject)
        const fishHTML = Fish(fishObject)
            // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML



    }


    for (const fishObject of soldiers) {
        //console.log("one fish!", fishObject)
        const fishHTML = Fish(fishObject)
            // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML



    }

    for (const fishObject of losers) {
        //console.log("one fish!", fishObject)
        const fishHTML = Fish(fishObject)
            // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML



    }
}