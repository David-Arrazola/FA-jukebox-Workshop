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
