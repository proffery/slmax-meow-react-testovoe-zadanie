'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {EpisodesResponse} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import s from '../../../pages.module.css'
import PaginationComponent from '@/components/pagination/pagination'
import EpisodesCard from '@/components/cards/episodes-card/episode-card'
import {generateStaticParamsArray} from '@/utils/generate-static-params-array'

type Props = {
    params: {
        pageNumber: string,
    }
}

export const generateStaticParams  = async () => {
    const pageData = await getData<EpisodesResponse>(apiEndpoints.episodesByPage(1),
        {revalidate: 600}
    )
    const pagesCount = pageData?.info.pages
    return generateStaticParamsArray("pageNumber", pagesCount)
}

export default async function EpisodePage({params}:Props) {
    const episodesData = await getData<EpisodesResponse>(apiEndpoints.episodesByPage(+params.pageNumber),
        {revalidate: 600}
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
