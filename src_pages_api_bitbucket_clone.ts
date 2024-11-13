import { NextApiRequest, NextApiResponse } from 'next'
import { exec } from 'child_process'
import util from 'util'

const execPromise = util.promisify(exec)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { repoUrl } = req.body

    try {
      const cloneCommand = `git clone https://x-token-auth:${process.env.BITBUCKET_REPO_ACCESS_TOKEN}@${repoUrl}`
      await execPromise(cloneCommand)
      res.status(200).json({ message: 'Repository cloned successfully' })
    } catch (error) {
      console.error('Error cloning repository:', error)
      res.status(500).json({ error: 'Failed to clone repository' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}