import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import api from "@/api/axios"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
const [loading, setLoading] = useState(false)


   

const handleSubmit = async (e) => {
  e.preventDefault()

  if (password !== confirmPassword) {
    toast.error("Passwords do not match!")
    return
  }

  setLoading(true)

  try {
    const response = await api.post("/users/register", {
      name,
      email,
      password,
    })

    toast.success(response.data.message || "Registration successful!")

    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
        "Registration failed. Please try again."
    )
  } finally {
    setLoading(false)
  }
}


  return (
    <div className="flex items-center justify-center p-6 sm:py-16">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register to your account</CardTitle>
          <CardDescription>
            Create a new TalentLink account
          </CardDescription>
          <CardAction />
        </CardHeader>

        <CardContent>
          <form id="register-form" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <Button
            type="submit"
            form="register-form"
            className="w-full"
          >
            Register
          </Button>

          <Button variant="outline" className="w-full" type="button">
            Continue with Google
          </Button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline font-medium"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

