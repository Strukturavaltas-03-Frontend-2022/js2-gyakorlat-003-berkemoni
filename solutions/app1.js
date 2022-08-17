const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const {
  firstName = 'unknown',
  lastName = 'unknown',
  job= 'unknown' 
} = user;

/* Mentsd el külön lastName, firstName és job változókba a fenti objektum
property-jeit destructuring használatával!
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!*/

export {
   firstName,
   lastName,
   job,
 };
