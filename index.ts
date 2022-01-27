import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./src/entity/Photo";
import { Profile } from "./src/entity/Profile";
import { User } from "./src/entity/User";

createConnection()
  .then(async (connection) => {
    console.log("Inserting a new user into the database...");

    const profile = new Profile();
    profile.gender = "male";
    await connection.manager.save(profile);
    console.log("Saved a new profile with id: " + profile.id);

    const user = new User();
    user.name = "Joe Smith";
    user.profile = profile;
    await connection.manager.save(user);

    const photo1 = new Photo();
    photo1.url = "me.jpg";
    photo1.profile = profile;
    await connection.manager.save(photo1);

    const photo2 = new Photo();
    photo2.url = "me-and-bears.jpg";
    photo2.profile = profile;
    await connection.manager.save(photo2);

    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
