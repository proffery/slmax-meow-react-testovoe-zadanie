'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {CharactersResponse} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import CharacterCard from '@/components/cards/character-card/character-card'
import s from './characters-page.module.css'

export default async function CharactersPage() {

    const charactersData = await getData<CharactersResponse>(apiEndpoints.characters(),
        {cache: 'no-store'}
    )
    console.log(charactersData)

    return (
    <Page>
      <h1>Characters:</h1>
        <div className={s.cardsWrapper}>{charactersData?.results.map((char) =>
            <CharacterCard key={char.id} character={char}/>)}
        </div>
    </Page>
  )
}
