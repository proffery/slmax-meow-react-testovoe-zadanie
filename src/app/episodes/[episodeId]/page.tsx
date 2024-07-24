'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {Episode, EpisodesResponse} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import s from '../../../components/cards/card.module.css'
import Link from 'next/link'
import {routes} from '@/constants/routes'
import {getLastNumberFromUrl} from '@/utils/get-last-number-from-url'
import * as React from 'react'
import {generateStaticParamsArray} from '@/utils/generate-static-params-array'

type Props = {
    params: {
        episodeId: string,
    }
}

export const generateStaticParams  = async () => {
    const pageData = await getData<EpisodesResponse>(apiEndpoints.episodesByPage(1),
        {revalidate: 60}
    )
    const episodesCount = pageData?.info.count
    return generateStaticParamsArray("episodeId", episodesCount)
}

export default async function EpisodePage({params}:Props) {
    const episodeData = await getData<Episode>(apiEndpoints.episodeById(+params.episodeId),
        {revalidate: 60}
    )

    return (
        <Page>
          <h1>{episodeData?.name}:</h1>
                <h2>Air date:</h2>
                <div className={s.tagWrapper}>
                    <span className={s.tag}>{episodeData?.air_date}</span>
                </div>
                <h2>Episode & season:</h2>
                <div className={s.tagWrapper}>
                    <span className={s.tag}>{episodeData?.episode}</span>
                </div>
                <h2>Characters:</h2>
                <div className={s.tagWrapper}>
                    {episodeData?.characters.map(character =>
                        <Link href={routes.characters + '/' + getLastNumberFromUrl(character)} key={character} className={s.tag}
                        >{getLastNumberFromUrl(character)}</Link>
                    )}
                </div>
        </Page>
    )
}
