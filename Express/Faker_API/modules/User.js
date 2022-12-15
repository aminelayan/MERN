class User{
    constructor(_id,firstName,lastName,email,phoneNumber,password){
        this._id=_id
        this.firstName = firstName;
        this.lastName = lastName;
        this.email=email;
        this.password = password;
        this.phoneNumber= phoneNumber;

    }
}
module.exports=User;