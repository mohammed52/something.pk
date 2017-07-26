export function getRestaurant(restaurantId, allRestaurants) {
  // console.log("restaurantId", restaurantId);
  // console.log("allRestaurants", allRestaurants);
  var retRestaurant = null
  for (var i = 0; i < allRestaurants.length; i++) {
    if (restaurantId === allRestaurants[i]._id) {
      retRestaurant = allRestaurants[i]
      break
    }
  }
  // console.log("retRestaurant", retRestaurant);

  return retRestaurant
}

export function getCities(citiesIdArr, allCities) {
  // console.log("citiesIdArr", citiesIdArr);
  // console.log("allCities", allCities);
  var citiesStr = ""
  for (var i = 0; i < citiesIdArr.length; i++) {
    if (citiesIdArr[i] !== null) {
      for (var j = 0; j < allCities.length; j++) {
        if (allCities[j]._id == citiesIdArr[i]) {
          if (citiesStr === "") {

            citiesStr += allCities[j].name
          } else
            citiesStr = "-" + allCities[j].name

          break
        }
      }
    }
  }
  // console.log("citiesStr", citiesStr);
  return citiesStr
}

export function getCardDeals(cardDeals, bank) {
  // console.log("cardDeals", cardDeals);
  // console.log("bank", bank);
  var dealText = ""
  if (cardDeals.length === bank.cards.length) {
    for (var i = 0; i < cardDeals.length; i++) {
      if (dealText == "") {
        dealText = bank.cards[i] + ": " + cardDeals[i]
      } else {
        dealText += "\n" + bank.cards[i] + ": " + cardDeals[i]
      }
    }
  }
  console.log("dealText", dealText);
  return dealText
}
