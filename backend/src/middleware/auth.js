const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const auth = async (req, res, next) => {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({error: 'No token'})
  const token = header.split(' ')[1]
  try {
    const secret = process.env.JWT_SECRET || 'change_this_secret'
    const payload = jwt.verify(token, secret)
    const user = await prisma.user.findUnique({where: {id: payload.userId}})
    if (!user) return res.status(401).json({error: 'Invalid token'})
    req.user = { id: user.id, email: user.email }
    next()
  } catch (err) {
    return res.status(401).json({error: 'Unauthorized'})
  }
}

module.exports = auth
