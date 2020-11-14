import BookImage from '@assets/book.png'
import { Copy } from '@styled-icons/boxicons-regular/'
import { Download } from '@styled-icons/evaicons-solid'
import { Whatsapp, FacebookF, Instagram } from '@styled-icons/fa-brands'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import {
  Container,
  Navbar,
  BookArea,
  Book,
  Social,
  SocialNetworks,
  MessageArea,
  Message,
  Author,
  CopyArea
} from '@styles/index'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>CISCO</title>
      </Head>

      <Navbar>
        <h1>CISCO</h1>
      </Navbar>

      <BookArea>
        <Book>
          <img src={BookImage} />
        </Book>
        <h1>Amor atômico</h1>
        <h2>Francisco Cruz</h2>
        <div className="download">
          <h3>BAIXE AQUI</h3>
          <Download />
        </div>
      </BookArea>

      <Social>
        <h2>Visite minhas redes</h2>
        <SocialNetworks>
          <Link href="https://www.instagram.com/cisco_lil/?hl=pt-br">
            <Whatsapp />
          </Link>
          <Link href="https://www.facebook.com/francisco.aac.3/">
            <FacebookF />
          </Link>

          <Link href="https://www.instagram.com/cisco_lil/?hl=pt-br">
            <Instagram />
          </Link>
        </SocialNetworks>
      </Social>

      <MessageArea>
        <Message>
          “Só se vê bem com o coração. O essencial é invisível aos olhos.”
        </Message>
        <Author>- O pequeno príncipe</Author>
      </MessageArea>

      <CopyArea>
        <h3>Copiar link</h3>
        <div className="svg-background">
          <Copy />
        </div>
      </CopyArea>
    </Container>
  )
}

export default Home
