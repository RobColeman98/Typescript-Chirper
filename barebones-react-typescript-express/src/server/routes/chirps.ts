import * as express from "express";
import { GetChirp, GetChirps, CreateChirp, UpdateChirp, DeleteChirp } from "./chirpstore";

let router = express.Router();

router.get('/', (req,res) => {

  let data = GetChirps();
  const chirps = Object.keys(data).map(key => {
      return { id: key,
          name: data[key].name,
          text: data[key].text,
      }})
      chirps.pop();
  res.json(chirps)
  
  
  });

router.get("/:id?", (req: express.Request, res: express.Response) => {
  let id: string = req.params.id;
  if (id) {
    res.json(GetChirp(id));
  } else {
    res.send(GetChirps());
  }
});

router.post("/", (req:express.Request, res: express.Response) => {
  console.log(req.body)
  CreateChirp(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req:express.Request, res:express.Response) => {
  let id: string = req.params.id;
  let chirp: any = req.body;
  UpdateChirp(id, chirp);
  res.sendStatus(200);
});

router.delete("/:id", (req:express.Request, res:express.Response) => {
  let id: string = req.params.id;
  DeleteChirp(id);
  res.sendStatus(200);
});

export default router