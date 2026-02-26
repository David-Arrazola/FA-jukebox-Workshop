import db from "#db/client";

export async function createTrack(name, durationMs) {
  try {
    const sql = `
    INSERT INTO tracks (name, duration_ms)
    VALUES ($1, $2)
    RETURNING *
  `;
    const newTrack = (await db.query(sql, [name, durationMs])).rows;
    return newTrack[0];
  } catch (e) {
    console.error(e);
  }
}
