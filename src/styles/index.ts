import styled from 'styled-components'

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 200px 1fr;
  grid-template-rows: 120px auto 320px 50px auto;

  grid-template-areas:
    'nav nav nav'
    '. . .'
    'message book .'
    '. . .'
    '. social .';

  width: 100vw;
  height: 100vh;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px 20px 60px 20px 320px 20px auto 20px auto;

    grid-template-areas:
      'nav'
      '.'
      'message'
      '.'
      'book'
      '.'
      'social'
      '.'
      'copy';
  }
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  grid-area: nav;
  background-color: ${(props) => props.theme.colors.primary};

  h1 {
    color: #fff;
    font-size: 50px;
    font-family: 'Italiana', serif;
  }
`

export const MessageArea = styled.section`
  display: flex;
  justify-self: right;
  flex-direction: column;
  max-width: 390px;
  grid-area: message;
  margin-right: 120px;
  margin-left: 20px;

  @media (max-width: 800px) {
    margin: 0px 20px;
    max-width: 100%;
  }
`

export const Message = styled.p`
  font-size: 30px;
  font-style: italic;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: justify;

  @media (max-width: 800px) {
    font-size: 18px;
    text-align: center;
  }
`

export const Author = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-style: italic;
  font-weight: 500px;
  text-align: right;
  font-size: 22px;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`

export const BookArea = styled.section`
  display: flex;
  justify-self: center;
  flex-direction: column;
  align-items: center;
  grid-area: book;
  width: 200px;
  background-color: #fff;
  margin-bottom: 50px;
  height: 320px;
  h1 {
    font-size: 20px;
    font-family: 'Ubuntu' sans-serif;
    font-weight: 500;

    margin-top: 4px;
    margin-bottom: 4px;
  }

  h2 {
    font-size: 12px;
    margin-bottom: 24px;

    color: ${(props) => props.theme.colors.secundary};
  }

  div.download {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    h3 {
      font-size: 12px;
      color: ${(props) => props.theme.colors.primary};
      cursor: pointer;

      margin-bottom: 10px;
    }

    svg {
      width: 24px;
      height: 24px;

      color: ${(props) => props.theme.colors.primary};
    }
  }
`

export const Book = styled.div`
  display: flex;

  justify-self: center;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 185px;
  background-color: ${(props) => props.theme.colors.secundary};

  img {
    width: 96px;
    height: 155px;
  }
`

export const Social = styled.section`
  grid-area: social;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 200px;
  h2 {
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary};

    margin-bottom: 24px;

    @media (max-width: 800px) {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }
`

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;

  padding: 13px 0px;
  width: 100%;
  border-radius: 4px;

  svg {
    color: ${(props) => props.theme.colors.primary};
    width: 24px;
    height: 24px;
    cursor: pointer;

    @media (max-width: 800px) {
      width: 16px;
      height: 16px;
    }
  }
`

export const CopyArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 5%;
  right: 5%;

  cursor: pointer;

  h3 {
    font-size: 20px;
    margin-bottom: 14px;
  }

  div.svg-background {
    padding: 12px;
    background-color: ${(props) => props.theme.colors.primary};

    border-radius: 50%;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #fff;
  }

  @media (max-width: 800px) {
    position: relative;
    grid-area: copy;
    justify-self: center;
    bottom: auto;
    right: auto;
    margin-bottom: 10px;
    h3 {
      font-size: 14px;
      margin-bottom: 6px;
    }

    div.svg-background {
      padding: 6px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`
