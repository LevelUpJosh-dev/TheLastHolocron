"use strict";

/** Server Modules **/
import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";

/** Custom Modules **/
import { HomeShow } from "./controllers/Home.js";
import { AboutShow } from "./controllers/About.js";
import { PersonalListShow } from "./controllers/PersonalList.js";
import { PersonalShow } from "./controllers/Personal.js";
import { GetSwapiRoot } from "./controllers/Swapi.js";

/** Start Our Server **/
const server = opine();

server.use(staticFiles("public"));

server.get("/", async (request, response) => {
  response.body = await HomeShow();
  response.send();
});

server.get("/about", async (request, response) => {
  response.body = await AboutShow();
  response.send();
});

server.get("/archives/personal", async (request, response) => {
  response.body = await PersonalListShow();
  response.send();
});

server.get("/archives/personal/records", async (request, response) => {
  const query = request.query;
  response.body = await PersonalShow(query);
  response.send();
});

server.get("/swapi", async (request, response) => {
  const swapi = await GetSwapiRoot();
  swapi.json().then((data) => {
    console.log(data);
    response.body = JSON.stringify(data);
    response.send();
  });
});

server.listen(3000);
