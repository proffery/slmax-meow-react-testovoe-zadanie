'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {EpisodesResponse} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import s from '../../../pages.module.css'
import PaginationComponent from '@/components/pagination/pagination'
import EpisodesCard from '@/components/cards/episodes-card/episode-card'

type Props = {
    params: {
        pageNumber: string,
    }
}

export default async function CharactersPage({params}:Props) {
    const episodesData = await getData<EpisodesResponse>(apiEndpoints.episodesByPage(+params.pageNumber),
        {cache: 'no-store'}
    )
    const results = episodesData?.results
    const pageInfo = episodesData?.info

    return (
    <Page>
      <h1>Episodes:</h1>
        <div className={s.cardsWrapper}>{results?.map((episode) =>
            <EpisodesCard key={episode.id} episode={episode}/>)}
        </div>
        <PaginationComponent count={pageInfo?.pages} page={+params.pageNumber} type={'Episodes'} />
    </Page>
  )
}
