import React, { useState } from "react"
import styled from "@emotion/styled"
import { sendNetlifyRequest } from "../utils/network"

const ContactPage: React.FC = () => {
  const [email, setEmail] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await sendNetlifyRequest("contact", {
      email,
    })
    console.log("response", response)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  return (
    <PageContainer>
      <form onSubmit={handleSubmit}>
        <input name="email" onChange={handleChange} value={email} />
        <button type="submit">Send Stuff</button>
      </form>
    </PageContainer>
  )
}

const PageContainer = styled("div")({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export default ContactPage
