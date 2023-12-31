import { NextPageWithLayout } from '@/shared/@types'
import { CharacterPage } from '@/views/character-view'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import React from 'react'

export const getStaticPaths = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  const data = await response.json()

  const paths = data.results.map((character: any) => {
    return {
      params: { id: character.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await response.json()

  return {
    props: {
      character: data,
    },
  }
}

const Character: NextPageWithLayout = ({ character = null }: any) => (
  <div>
    <Head>
      <title>Create Next App</title>
      <meta name='description' content='Generated by create next app' />
    </Head>
    <CharacterPage character={character} />
  </div>
)

export default Character
