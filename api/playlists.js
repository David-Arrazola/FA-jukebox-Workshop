import express from "express";
import { getAllPlaylists, getTracksInPlaylist } from "#db/queries/playlists";
import { createPlaylistTrack } from "#db/queries/playlists_tracks";

const playlistRouter = express.Router();
export default playlistRouter;

playlistRouter.get("/:id/tracks", async (req, res) => {
  const { id } = req.params;
  const tracksInPlaylist = await getTracksInPlaylist(id);

  res.send(tracksInPlaylist);
});

playlistRouter.get("/", async (req, res) => {
  try {
    const playlists = await getAllPlaylists();

    res.send(playlists);
  } catch (e) {
    console.error(e);
  }
});

playlistRouter.post("/:id/tracks", async (req, res) => {
  if (!req.body) return res.status(400).send("Request body is required.");

  const playlistId = Number(req.params.id);
  const { trackId } = req.body;

  if (!trackId) return res.status(400).send("TrackId is needed");

  const addedTrack = await createPlaylistTrack(playlistId, trackId);

  res.status(201).send(addedTrack);
});
