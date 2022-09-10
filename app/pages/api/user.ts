import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
import bcrypt from 'bcryptjs'

// POST /api/user
// Required fields in body: name, email
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  const hashedPassword = bcrypt.hashSync(req.body.password, 8)  
  const result = await prisma.user.create({
    data: {
      ...req.body,
      password: hashedPassword
    },
  })
  res.json(req.body.email)
}
