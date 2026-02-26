import db from "#db/client";

export async function createPlaylistTrack(playlistId, trackId) {
  const sql = `
    INSERT INTO playlists_tracks (playlist_id, track_id)
    VALUES ($1, $2)
    RETURNING *
  `;
  const newPlayTrack = (await db.query(sql, [playlistId, trackId])).rows;

  return newPlayTrack[0];
}
