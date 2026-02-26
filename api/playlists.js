import express from "express";
import { getAllPlaylists } from "#db/queries/playlists";

const playlistRouter = express.Router();
export default playlistRouter;

playlistRouter.get("/", async (req, res) => {
  try {
    const playlists = await getAllPlaylists();

    res.send(playlists);
  } catch (e) {
    console.error(e);
  }
});
