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
