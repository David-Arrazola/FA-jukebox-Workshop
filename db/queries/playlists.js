import db from "#db/client";

export async function createPlaylist(name, descript) {
  try {
    const sql = `
        INSERT INTO playlists (name, description)
        VALUES($1, $2)
        RETURNING *;
        `;
    const newPlaylist = (await db.query(sql, [name, descript])).rows;

    return newPlaylist[0];
  } catch (e) {
    console.error(e);
  }
}

export async function getAllPlaylists() {
  try {
    const sql = `SELECT * FROM playlists`;
    const playlists = (await db.query(sql)).rows;

    return playlists;
  } catch (e) {
    console.error(e);
  }
}

export async function getTracksInPlaylist(id) {
  try {
    const sql = `
      SELECT *, 
        (SELECT json_agg(tracks) FROM playlists_tracks 
        JOIN tracks ON playlists_tracks.track_id = tracks.id
        WHERE playlists_tracks.playlist_id = $1) AS tracks
      FROM playlists WHERE id = $1
    `;
    const tracksInPlaylist = await db.query(sql, [id]);

    return tracksInPlaylist;
  } catch (e) {
    console.error(e);
  }
}
