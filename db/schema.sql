CREATE TABLE playlists(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL 
);

CREATE TABLE tracks(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    duration_ms INT NOT NULL
); 

CREATE TABLE playlists_tracks(
    PRIMARY KEY (playlists_id, tracks_id)
    playlist_id INT NOT NULL REFERENCES playlists(id) ON DELETE CASCADE,
    track_id INT NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
);
--* "PRIMARY KEY (playlists_id, tracks_id)" = id tuple identifies the entry row. 
--* Per PRIMARY KEY rules, each entry is UNIQUE. Cant repeat.
