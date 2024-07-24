'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {Episode} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import s2 from '../../../components/cards/card.module.css'
import Link from 'next/link'
import {routes} from '@/constants/routes'
import {getLastNumberFromUrl} from '@/utils/get-last-number-from-url'
import * as React from 'react'

type Props = {
    params: {
        episodeId: string,
    }
}

export default async function EpisodePage({params}:Props) {
    const episodeData = await getData<Episode>(apiEndpoints.episodeById(+params.episodeId),
        {cache: 'no-store'}
    )

    return (
    <Page>
      <h1>{episodeData?.name}:</h1>
            <h2>Air date:</h2>
            <div className={s2.tagWrapper}>
                <span className={s2.tag}>{episodeData?.air_date}</span>
            </div>
            <h2>Episode & season:</h2>
            <div className={s2.tagWrapper}>
                <span className={s2.tag}>{episodeData?.episode}</span>
            </div>
            <h2>Characters:</h2>
            <div className={s2.tagWrapper}>
                {episodeData?.characters.map(character =>
                    <Link href={routes.characters + '/' + getLastNumberFromUrl(character)} key={character} className={s2.tag}
                    >{getLastNumberFromUrl(character)}</Link>
                )}
            </div>
    </Page>
    )
}
