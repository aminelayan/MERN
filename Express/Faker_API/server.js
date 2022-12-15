const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const User = require("./modules/User");
const Company = require("./modules/Company");
const Address = require("./modules/Address");
const { json } = require("express");
// we can create a function to return a random / fake "Product"
const createUser = () => {
    return new User(
        faker.datatype.uuid(),
        faker.name.firstName(),
        faker.name.lastName(),
        faker.internet.email(),
        faker.phone.number(),
        faker.internet.password(),
    )};
const createCompany=()=>{
    return new Company(
        faker.datatype.uuid(),
        faker.company.name(),
        createAddress(),
        // 
    )
}
const createAddress=()=>{
    return new Address(
        faker.address.streetAddress(),
        faker.address.city(),
        faker.address.state(),
        faker.address.zipCode(),
        faker.address.country(),
    )

}
   const users=createUser();
   console.log(users)
   const companies=createCompany();
   console.log(companies)
   const addresses=createAddress();
   console.log(addresses)
   const tanas= {users,companies}

    app.get("/api/users/new", (req, res) => {
        res.json( users );
    });

    app.get("/api/users/company", (req, res) => { 
        res.json(tanas);
    });

    app.get("/api/company/new", (req, res) => { 
        res.json(companies);
    });
    app.get("/api/address/new", (req, res) => {
        res.json(addresses);
    });
    app.listen( port, () => console.log(`Listening on port: ${port}`) );
