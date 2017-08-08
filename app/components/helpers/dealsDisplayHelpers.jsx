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

export function getCities(citiesArr, allCities) {
  // console.log("citiesArr", citiesArr);
  // console.log("allCities", allCities);
  var citiesStr = ""
  for (var i = 0; i < citiesArr.length; i++) {
    if (citiesArr[i] !== null) {
      if (i === 0)
        citiesStr += citiesArr[i]
      else
        citiesStr = citiesStr + "-" + citiesArr[i]
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
  // console.log("dealText", dealText);
  return dealText
}
