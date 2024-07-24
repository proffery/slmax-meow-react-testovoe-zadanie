'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {CharactersResponse} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import CharacterCard from '@/components/cards/character-card/character-card'
import s from '../../../pages.module.css'
import PaginationComponent from '@/components/pagination/pagination'
import {generateStaticParamsArray} from '@/utils/generate-static-params-array'

type Props = {
    params: {
        pageNumber: string,
    }
}

export const generateStaticParams  = async () => {
    const pageData = await getData<CharactersResponse>(apiEndpoints.charactersByPage(1),
        {revalidate: 60}
    )
    const pagesCount = pageData?.info.pages
    return generateStaticParamsArray("pageNumber", pagesCount)
}

export default async function CharactersPage({params}:Props) {
    const charactersData = await getData<CharactersResponse>(apiEndpoints.charactersByPage(+params.pageNumber),
        {revalidate: 60}
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
