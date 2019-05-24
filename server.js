const { DateTime } = require('luxon')

dt = DateTime.local();

// console.log(dt)
console.log(dt.year)
console.log(dt.month)
console.log(dt.day)
console.log(dt.second)
console.log(dt.weekday)
console.log(dt.offset)
console.log(dt.daysInMonth)
console.log(dt.zoneName)
console.log(dt.toLocaleString())
console.log(dt.toLocaleString(DateTime.DATETIME_MED))
console.log(dt.toISO())
console.log(dt.zoneName)
