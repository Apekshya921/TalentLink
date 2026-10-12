import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import React from 'react'

const PostJob = () => {
    const handleSubmit = (e) => {
  e.preventDefault()
  toast.success("Job posted successfully")
    e.target.reset()
}
    return (
        
        <div className="min-h-screen bg-gray-100 px-4 py-10 flex justify-center">
    <Card className="w-full max-w-4xl h-fit">
      <CardHeader>
        <CardTitle>
            <p className="text-3xl font-semibold ">Post a Job</p>
            
        </CardTitle>
        <CardDescription>
Find the right talent for your team.
        </CardDescription>
        
      </CardHeader>
      <CardContent>
<form id="post-job-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Frontend Developer"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Company Name *</Label>
               
              </div>
              <Input type="text" required placeholder="google"/>
            </div>


             <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Location</Label>
               
              </div>
              <Input type="text" required placeholder="Kathmandu,Nepal"/>
            </div>

             <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="type">Job Type</Label>
               
              </div>
              <Input type="text" required placeholder="Full-time"/>
            </div>

             <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Salary Min</Label>
               
              </div>
              <Input type="text" required placeholder="30000"/>
            </div>

             <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Salary Max</Label>
               
              </div>
              <Input type="text" required placeholder="50000"/>
            </div>

             <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Job Description</Label>
               
              </div>
              <textarea
  required
  placeholder="Describe the role and responsibilities..."
  className="min-h-32 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
/>
            </div>
             <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Requirement</Label>
               
              </div>
              <Input type="text" required placeholder="Skills, qualifications and experience..."/>
            </div>
             <div className="grid gap-2">
              <select
  defaultValue=""
  required
  className="h-10 w-full rounded-md border bg-transparent px-3 text-sm "
>
  <option value="" disabled>Select job type</option>
  <option value="full-time">Full-time</option>
  <option value="part-time">Part-time</option>
  <option value="internship">Internship</option>
  <option value="contract">Contract</option>
  <option value="remote">Remote</option>
</select>
            </div>
 <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Application Deadline</Label>
               
              </div>
              <Input type="date" required placeholder="Select a Date"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
       <Button
  type="submit"
  form="post-job-form"
  className="w-full"
>
  Publish Job
</Button>
        
      </CardFooter>
    </Card>
    </div>
  )
}


export default PostJob
