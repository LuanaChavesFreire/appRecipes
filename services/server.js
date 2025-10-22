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
  try{
    const { email, password } = req.query;
    if(!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const user = await prisma.users.findFirst({
      where: {
        email: String(email),
      }
    });

    if(!user || user.password !== password) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  }

  catch(err) {
    return res.status(500).json({ error: 'Server error' });
  }
    
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });