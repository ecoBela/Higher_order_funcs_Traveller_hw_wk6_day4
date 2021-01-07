const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(journeys) {
  const journeyStart = this.journeys.map((journey) =>{
    return journey.startLocation;
  });
  return journeyStart;
};

Traveller.prototype.getJourneyEndLocations = function (journeys) {
  const journeyEnd = this.journeys.map((journey)=>{
    return journey.endLocation;
  });
  return journeyEnd;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyByTransport = this.journeys.filter((journey)=>{
    return journey.transport === transport;
  });
  return journeyByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const byMinDistance = this.journeys.filter((journey)=>{
    return journey.distance > minDistance;
  });
  return byMinDistance;

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
