'use client'
import { useRouter } from "next/navigation";
import Button from "@mui/material-next/Button";
import { Link, Typography } from "@mui/material";

import LoginFormDialog from '../components/session/SessionDialog'
import {RegisterFormDialog} from '../components/session/SessionDialog'

export default function Login() {
  const router = useRouter()
  return (
    <main id="login-page">
      <div id="company-section">
        <img id="company-logo" src="agora-hires-logo.svg" alt="Agorà logo" />
      </div>
      <div id="account-section">
        <h1 className="xxl-text">La voce di tutti</h1>
        <h2>Iscriviti ora</h2>
        <Link href="./"><Button variant="filledTonal">Iscriviti con Google</Button></Link>
        <Link href="./"><Button variant="filledTonal">Iscriviti con Apple</Button></Link>
        <RegisterFormDialog/>
        <hr />
        <h2>Hai già un account?</h2>
        <LoginFormDialog/>
      </div>
    </main>
  )
}
