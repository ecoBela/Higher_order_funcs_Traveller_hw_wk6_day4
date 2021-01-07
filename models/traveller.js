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

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
