const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(journeyObject => {
    return journeyObject.startLocation;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function() {
  const endLocations = this.journeys.map(journeyObject => {
    return journeyObject.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function(transport) {
  const journeys = this.journeys.filter(journeyObject => {
    return journeyObject.transport === transport;
  });
  return journeys;
};

Traveller.prototype.getJourneysByMinDistance = function(minDistance) {
  const journeys = this.journeys.filter(journeyObject => {
    return journeyObject.distance > minDistance;
  });
  return journeys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function() {
  let sum = this.journeys.reduce((runningTotalStartsAtZero, journeyObject) => {
    return runningTotalStartsAtZero + journeyObject.distance;
  }, 0);
  // This zero makes the first iteration 0
  // the runningTotalStartsAtZero is 0 on the first iteration which is ESSENTIAL!
  // Or else it coerces things into a string and goes WIERD!
  return sum;
};

Traveller.prototype.getUniqueModesOfTransport = function() {
  uniqueTransportArray = []
  const transportArray = this.journey.map(journeyObject => {
    journeyObject.transport;
  });
  if (function({
    for
  }))
};

// Traveller.prototype.getUniqueModesOfTransport = function() {
// const uniqueTransportArray = this.journeys.filter(journeyObject => {
//   return journeyObject.transport !=== this.journeys.forEach() => {
//     return this.journeys.transport
//   }
//   });
// return uniqueTransportArray
//
// //

Traveller.prototype.getUniqueModesOfTransport = function() {

}

// ["train", "car", "plane", "boat"]

// numbers.forEach((number) => {
//   const multiplied = number * 2;
//   result.push(multiplied);
// });
// return result

module.exports = Traveller;
