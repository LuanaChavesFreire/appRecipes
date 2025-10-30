import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
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
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const user = await prisma.users.findFirst({
      where: {
        email: String(email),
      }
    });
    
    if (!user || user.password !== password) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const token = jwt.sign(
      {id_user: user.id},
      process.env.access_token_secret
    )
    
    return res.status(200).json({ token });
  }
  
  catch (err) {
    return res.status(500).json({ error: 'Server error' });
<<<<<<< HEAD
<<<<<<< HEAD
=======
  }
});

app.post('/recipe', tokenAuthenticator, async (req, res) => {
  try {
    console.log(prisma.recipe)
    await prisma.recipe.create({
      data: {
        tittle: req.body.tittle,
        ingredients: req.body.ingredients,
        preparing: req.body.preparing,
        duration: req.body.duration,
        users: {connect: {id: req.id_user}}
      }
    });
    return res.status(201).send('recipe created');
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
>>>>>>> fcd168d (feat: login logic is done)
  }
    
});

<<<<<<< HEAD
=======
function tokenAuthenticator(req, res, next) {
  // I'll storage the access token this way couse the authorization header will come in a format off ( bearer TOKEN), so doing it just the token will be taken
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);
  
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.access_token_secret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}



>>>>>>> fcd168d (feat: login logic is done)
=======
  }   
});

app.post('/recipe', async (req, res) => {
  try{
    console.log(prisma.recipe)
    await prisma.recipe.create({
      data: {
        tittle: req.body.tittle,
        ingredients: req.body.ingredients,
        preparing: req.body.preparing,
        duration: req.body.duration,
        id_user: req.body.id_user
      }
    });
    return res.status(201).send('recipe created');
  }
  catch(err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});



>>>>>>> c9031d4 (feat: post recipe route seted)
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});