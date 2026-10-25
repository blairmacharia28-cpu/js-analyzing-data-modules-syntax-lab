function combineUsers (...args) {
  let combinedObject = {
    users: []
  };

for (let arr of args) {
  combinedObject.users = [...combinedObject.users, ...arr];
}

const today = new Date();
combinedObject.merge_date = Date.today(22).toString("M/d/yyyy");
return combinedObject;


}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};