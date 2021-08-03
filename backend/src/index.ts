import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Labels } from "./Entities/Labels";
import {Tasks} from "./Entities/Tasks";
import {Trackings} from "./Entities/Trackings";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "graphqlcrud",
    //Insert your own mysql localhost username/password
    username: "root",
    password: "123456",
    logging: true,
    synchronize: true,
    entities: [Tasks, Labels, Trackings] //Needed for every table
  });

  const app = express();
  app.use(cors());
  //version of @types/express in package.json pinned to 4.17.0
  //https://stackoverflow.com/a/59186658
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true //interface for testing API
    })
  );

  app.listen(3001, () => {
    console.log("BACKEND IS RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
