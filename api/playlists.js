import db from "#db/client";

export default async function createPlaylists(name, descript) {
  try {
    const sql = `
            INSERT INTO playlists (name, description)
            VALUES($1, $2);
        `;
    await db.query(sql, [name, descript]);
  } catch (e) {
    console.error(e);
  }
}
