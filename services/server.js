import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const app = express();
app.use(express.json());
app.use(cors())

app.post('/users', async (req, res) => {
  try {
    await prisma.users.create({
      data: {
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password
      }
    });

    return res.status(201).send('User created');
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.get('/users', async (req, res) => {
    const users = await prisma.users.findMany();
    res.json(users).status(200);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });