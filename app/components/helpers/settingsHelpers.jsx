export function bankIsEnabledInSettings(bank, settings) {
  const id = bank.id
  for (var i = 0; i < settings.length; i++) {
    if (settings[i].bank.id === id && settings[i].bankEnabled === true) {
      return true
    }
  }

  return false
}

export function cardEnabledInSettings(cardNameToTest, bank, settings) {
  const id = bank.id
  for (var i = 0; i < settings.length; i++) {
    if (settings[i].bank.id === id) {
      const cardsSettings = settings[i].cardsSettings

      for (var j = 0; j < cardsSettings.length; j++) {
        if (cardsSettings[j].cardName === cardNameToTest && cardsSettings[j].enabled === true) {
          return true
        }
      }
    }
  }

  return false
}
