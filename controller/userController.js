
const db = require('../db.js');

class UserController {
    async createUser(req, res) {
        try {
            if (!req.body || !req.body.name || !req.body.surname) {
                return res.status(400).json({ error: `Missing name or surname in request body` });
            }

            const { name, surname } = req.body;

            const newPerson = await db.query(`INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING id, name, surname`, [name, surname]);

            res.status(201).json(newPerson.rows[0]); 
        } catch (error) {
            console.error(`Error while creating user: ${error}`);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getUsers(req, res) {
        const users =  await db.query(`SELECT * FROM person`);
        res.json((users).rows)

    }

    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person where id = $1`, [id])
        res.json(user.rows[0])

    }

    async updateUser(req, res) {
        const {id, name, surname}=req.body
        const user = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *', [name, surname, id])

        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM person where id = $1`, [id])
        res.json(user.rows[0])

    }
}

module.exports = new UserController()
