'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {Character, CharactersResponse} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import s from '../../../app/pages.module.css'
import s2 from '../../../components/cards/card.module.css'
import Link from 'next/link'
import {routes} from '@/constants/routes'
import {getLastNumberFromUrl} from '@/utils/get-last-number-from-url'
import * as React from 'react'
import CardMedia from '@mui/material/CardMedia'
import {generateStaticParamsArray} from '@/utils/generate-static-params-array'

type Props = {
    params: {
        charId: string,
    }
}

export const generateStaticParams  = async () => {
    const pageData = await getData<CharactersResponse>(apiEndpoints.charactersByPage(1),
        {revalidate: 60}
    )
    const charactersCount = pageData?.info.count
    return generateStaticParamsArray("charId", charactersCount)
}

export default async function CharacterPage({params}:Props) {
    const characterData = await getData<Character>(apiEndpoints.characterById(+params.charId),
        {revalidate: 60}
    )

    return (
        <Page>
          <h1>{characterData?.name}:</h1>
            <CardMedia
                component="img"
                alt={characterData?.name}
                src={characterData?.image}
                sx={{
                    maxWidth: 'var(--max-width)',
                    borderRadius: 'var(--border-radius)',
                }}
            />
            <div className={s.cardsWrapper}>
                <h2>Episodes:</h2>
                <div className={s2.tagWrapper}>
                    {characterData?.episode.map(episod =>
                        <Link href={routes.episodes + '/' + getLastNumberFromUrl(episod)} key={episod} className={s2.tag}
                        >{getLastNumberFromUrl(episod)}</Link>
                    )}
                </div>
                <h2>Status:</h2>
                <div className={s2.tagWrapper}>
                    <span className={s2.tag}>{characterData?.status}</span>
                </div>
                <h2>Gender:</h2>
                <div className={s2.tagWrapper}>
                    <span className={s2.tag}>{characterData?.gender}</span>
                </div>
                <h2>Species:</h2>
                <div className={s2.tagWrapper}>
                    <span className={s2.tag}>{characterData?.species}</span>
                </div>
                {characterData?.type && <>
                    <h2>Type:</h2>
                    <div className={s2.tagWrapper}>
                    <span className={s2.tag}>{characterData.type}</span>
                    </div>
                </>}
                <h2>Origin:</h2>
                <div className={s2.tagWrapper}>
                    {characterData?.origin.url
                        ? <Link className={s2.tag}
                              href={routes.locations + '/' + getLastNumberFromUrl(characterData.origin.url)}
                        >
                            {characterData?.origin.name}</Link>
                        : <span className={s2.tag}>{characterData?.origin.name}</span>}
                </div>
                <h2>Current location:</h2>
                <div className={s2.tagWrapper}>
                    {characterData?.location.url
                        ? <Link className={s2.tag}
                              href={routes.locations + '/' + getLastNumberFromUrl(characterData.location.url)}
                        >
                            {characterData?.location.name}</Link>
                        : <span className={s2.tag}>{characterData?.location.name}</span>}
                </div>
            </div>
        </Page>
    )
}
