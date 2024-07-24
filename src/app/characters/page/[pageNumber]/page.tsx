'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {CharactersResponse} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import CharacterCard from '@/components/cards/character-card/character-card'
import s from '../../../pages.module.css'
import PaginationComponent from '@/components/pagination/pagination'

type Props = {
    params: {
        pageNumber: string,
    }
}

export default async function CharactersPage({params}:Props) {
    const charactersData = await getData<CharactersResponse>(apiEndpoints.charactersByPage(+params.pageNumber),
        {cache: 'no-store'}
    )
    const results = charactersData?.results
    const pageInfo = charactersData?.info

    return (
    <Page>
      <h1>Characters:</h1>
        <div className={s.cardsWrapper}>{results?.map((char) =>
            <CharacterCard key={char.id} character={char}/>)}
        </div>
        <PaginationComponent count={pageInfo?.pages} page={+params.pageNumber} type={'Characters'} />
    </Page>
  )
}
