'use client'
import { useRouter } from "next/navigation";
import Button from "@mui/material-next/Button";
import { Link, Typography } from "@mui/material";

export default function Login() {
  const router = useRouter()
  return (
    <main id="login-page">
      <div id="company-section">
        <img id="company-logo" src="agora-hires-logo.svg" alt="Agorà logo" />
      </div>
      <div id="account-section">
        <h1 class="xxl-text">La voce di tutti</h1>
        <h2>Iscriviti ora</h2>
        <Link href="/home"><Button variant="filledTonal">Iscriviti con Google</Button></Link>
        <Link href="/home"><Button variant="filledTonal">Iscriviti con Apple</Button></Link>
        <Link href="/home"><Button variant="filled">Crea account</Button></Link>
        <hr />
        <h2>Hai già un account?</h2>
        <Link href="/home"><Button variant="outlined">Accedi</Button></Link>
      </div>
    </main>
  )
}
