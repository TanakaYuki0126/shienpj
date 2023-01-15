import Head from 'next/head'
import Image from 'next/image'

import { Heading, Container } from '@chakra-ui/react'
export default function Home() {
  return (
    <>
      <Container maxW="container.lg" bg="#f3f3f3">
        <Heading>大阪大学軽音楽部ROCK支援金プロジェクト</Heading>
      </Container>
    </>
  )
}
