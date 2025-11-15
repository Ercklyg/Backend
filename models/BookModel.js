import pool from '../config/db.js';

export const getBooks = async () => {
    const [rows] = await pool.query("SELECT * FROM tblbook");
    return rows;
}

export const insertBook = async (title, genre, status) => {
    const [result] = await pool.query(
        "INSERT INTO tblbook (Title, Genre, Status) VALUES (?, ?, ?)",
        [title, genre, status]
    );
    return result.insertId;
}

export const updateBook = async (title, genre, status, bookId) => {
    const [result] = await pool.query(
        "UPDATE tblbook SET Title = ?, Genre = ?, Status = ? WHERE Id = ?",
        [title, genre, status, bookId]
    );
    return result.affectedRows;
}

export const deleteBook = async (bookId) => {
    const [result] = await pool.query(
        "DELETE FROM tblbook WHERE Id = ?", [bookId]
    );
    return result.affectedRows;
}