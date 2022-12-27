'use strict';
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25' +
  '+_Arrival;bru0943384722;fao93766109;11:45' +
  '+_Delayed_Arrival;hel7439299980;fao93766109;12:05' +
  '+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const locationCode = (location) => location.replace(/[0-9]/g, '').toUpperCase();

const eachFlightRawArr = flights.split('+');

let maxLengthMessage = 0;
const messages = [];
for (const rawFlight of eachFlightRawArr) {
  const [action, locationFrom, locationTo, time] = rawFlight.split(';');

  const actionStr = action.split('_').slice(1).join(' ');
  const locationFromStr = locationCode(locationFrom);
  const locationToStr = locationCode(locationTo);
  const timeStr = time.replace(':', 'h');
  let output = `${actionStr} from \
${locationFromStr} to ${locationToStr} (${timeStr})`;

  if (actionStr.toLowerCase().includes('delay')) output = '🔴 ' + output;

  if (output.length > maxLengthMessage) maxLengthMessage = output.length;
  messages.push(output);
}
for (const msg of messages) {
  console.log(msg.padStart(maxLengthMessage, ' '));
}
