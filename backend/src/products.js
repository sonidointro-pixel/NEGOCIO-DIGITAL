const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const auth = require('./middleware/auth')

// Public: list products
router.get('/', async (req, res) => {
  const products = await prisma.product.findMany({orderBy: {createdAt: 'desc'}})
  res.json(products)
})

// Public: get single
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const product = await prisma.product.findUnique({where: {id}})
  if (!product) return res.status(404).json({error: 'Not found'})
  res.json(product)
})

// Protected: create
router.post('/', auth, async (req, res) => {
  const { name, description, price } = req.body
  const data = { name, description, price: parseFloat(price || 0), ownerId: req.user.id }
  const p = await prisma.product.create({data})
  res.status(201).json(p)
})

// Protected: update
router.put('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id)
  const existing = await prisma.product.findUnique({where: {id}})
  if (!existing) return res.status(404).json({error: 'Not found'})
  if (existing.ownerId !== req.user.id) return res.status(403).json({error: 'Forbidden'})
  const { name, description, price } = req.body
  const p = await prisma.product.update({where: {id}, data: {name, description, price: parseFloat(price || existing.price)}})
  res.json(p)
})

// Protected: delete
router.delete('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id)
  const existing = await prisma.product.findUnique({where: {id}})
  if (!existing) return res.status(404).json({error: 'Not found'})
  if (existing.ownerId !== req.user.id) return res.status(403).json({error: 'Forbidden'})
  await prisma.product.delete({where: {id}})
  res.json({ok: true})
})

module.exports = router
