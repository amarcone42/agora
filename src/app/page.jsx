'use client'
import { useRouter } from "next/navigation";
import Button from "@mui/material-next/Button";
import { Link, Typography } from "@mui/material";

export default function Login() {
    const router = useRouter()
    return (
      <main>
        <h1>Login</h1>
        <Link href="/home"><Button variant="filled">Accedi</Button></Link>
      </main>
    )
}
