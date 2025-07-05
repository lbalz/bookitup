import db from '../config/db.js';

export const createBooking = async (req, res) => {
    const { name, email, phone, title, message } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO bookings (name, email, phone, title, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, email, phone, title, message]
        );

        res.status(201).json({
            message: 'Buchung gespeichert',
            booking: result.rows[0]
        });
    } catch (error) {
        console.error('Fehler bei Buchung:', error);
        res.status(500).json({ message: 'Fehler beim Speichern der Buchung'});
    }
};