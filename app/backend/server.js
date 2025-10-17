import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
    await prisma.users.create({
        data: {
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        }
    })

    res.send('User created')
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });