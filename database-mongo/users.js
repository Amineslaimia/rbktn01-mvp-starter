var bcrypt = require('bcrypt');
var Promise = require('bluebird');
const mongoose = require('mongoose');

let userSchema = mongoose.Schema({

        username: String,
        password: String,


});
let hashPassword=(password)  =>{
  const saltRounds = 10;


  bcrypt
  .hash(password, saltRounds).then(hash => {
    console.log(`Hash: ${hash}`);

  })
  .catch(err => console.error(err.message));

}
let User = mongoose.model('users', userSchema);


let save = (user) => {
  return new Promise((resolve,reject)=>{
    var data = new User(user)
    data.save((err,res)=>{
      if(err){
        reject(err)
      }else{
        resolve(res)
      }
    });
  })

}



let finduser = (user)=>{
  username =user.username
  return User.find({username:username})

}


module.exports.save = save;
module.exports.finduser = finduser;




