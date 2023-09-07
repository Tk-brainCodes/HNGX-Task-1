function updateDataAttributes () {
  const newDate = new Date()
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const currentDay = daysOfWeek[newDate.getUTCDay()]
  const currentUTC = newDate.toUTCString()

  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `Current Day of the Week: ${currentDay}`
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC Time: ${currentUTC}`
}

window.onload = updateDataAttributes
