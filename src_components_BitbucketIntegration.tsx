import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function BitbucketIntegration() {
  const [repoUrl, setRepoUrl] = useState('')

  const handleCloneRepo = async () => {
    try {
      const response = await fetch('/api/bitbucket/clone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ repoUrl }),
      })

      if (response.ok) {
        alert('Repository cloned successfully!')
      } else {
        alert('Failed to clone repository')
      }
    } catch (error) {
      console.error('Error cloning repository:', error)
      alert('An error occurred while cloning the repository')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bitbucket Integration</CardTitle>
        <CardDescription>Clone and manage your Bitbucket repositories</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter Bitbucket repository URL"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
          />
          <Button onClick={handleCloneRepo}>Clone Repository</Button>
        </div>
      </CardContent>
    </Card>
  )
}