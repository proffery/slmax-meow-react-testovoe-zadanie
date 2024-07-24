'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {apiEndpoints} from '@/api/api-endpoints'
import s from '../../../components/cards/card.module.css'
import Link from 'next/link'
import {routes} from '@/constants/routes'
import {getLastNumberFromUrl} from '@/utils/get-last-number-from-url'
import * as React from 'react'
import {LocationsResponse, LocationType} from '@/api/api-types'
import {generateStaticParamsArray} from '@/utils/generate-static-params-array'

type Props = {
    params: {
        locationId: string,
    }
}

export const generateStaticParams  = async () => {
    const pageData = await getData<LocationsResponse>(apiEndpoints.episodesByPage(1),
        {revalidate: 60}
    )
    const locationsCount = pageData?.info.count
    return generateStaticParamsArray("locationId", locationsCount)
}

export default async function LocationPage({params}:Props) {
    const locationData = await getData<LocationType>(apiEndpoints.locationById(+params.locationId),
        {revalidate: 60}
    )

    return (
        <Page>
          <h1>{locationData?.name}:</h1>
                <h2>Location type:</h2>
                <div className={s.tagWrapper}>
                    <span className={s.tag}>{locationData?.type}</span>
                </div>
                <h2>Dimension:</h2>
                <div className={s.tagWrapper}>
                    <span className={s.tag}>{locationData?.dimension}</span>
                </div>
                <h2>Residents:</h2>
                <div className={s.tagWrapper}>
                    {locationData?.residents.map(resident =>
                        <Link href={routes.characters + '/' + getLastNumberFromUrl(resident)} key={resident} className={s.tag}
                        >{getLastNumberFromUrl(resident)}</Link>
                    )}
                </div>
        </Page>
    )
}
