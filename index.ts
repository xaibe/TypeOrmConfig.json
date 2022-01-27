import "reflect-metadata";
import { createConnection } from "typeorm";
import { Profile } from "./src/entity/Profile";
import { User } from "./src/entity/User";

createConnection()
  .then(async (connection) => {
    console.log("Inserting a new user into the database...");

    const profile = new Profile();
    profile.gender = "male";
    profile.photo = "me.jpg";
    await connection.manager.save(profile);
    console.log("Saved a new profile with id: " + profile.id);

    const user = new User();
    user.name = "Joe Smith";
    user.profile = profile;
    await connection.manager.save(user);

    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
