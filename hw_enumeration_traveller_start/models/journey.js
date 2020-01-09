const Journey = function(startLocation, endLocation, transport, distance) {
  this.startLocation = startLocation;
  this.endLocation = endLocation;
  this.transport = transport;
  this.distance = distance;
};

// Error is does Jounry is not a constructor when this is omitted
module.exports = Journey;
