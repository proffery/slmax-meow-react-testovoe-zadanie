'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {LocationsResponse} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import s from '../../../pages.module.css'
import PaginationComponent from '@/components/pagination/pagination'
import LocationCard from '@/components/cards/location-card/location-card'
import {generateStaticParamsArray} from '@/utils/generate-static-params-array'

type Props = {
    params: {
        pageNumber: string,
    }
}

export const generateStaticParams  = async () => {
    const pageData = await getData<LocationsResponse>(apiEndpoints.locationsByPage(1),
        {revalidate: 60}
    )
    const pagesCount = pageData?.info.pages
    return generateStaticParamsArray("pageNumber", pagesCount)
}

export default async function LocationsPage({params}:Props) {
    const locationsData = await getData<LocationsResponse>(apiEndpoints.locationsByPage(+params.pageNumber),
        {revalidate: 60}
    )
    const results = locationsData?.results
    const pageInfo = locationsData?.info

    return (
    <Page>
      <h1>Locations:</h1>
        <div className={s.cardsWrapper}>{results?.map((location) =>
            <LocationCard key={location.id} location={location}/>)}
        </div>
        <PaginationComponent count={pageInfo?.pages} page={+params.pageNumber} type={'Locations'} />
    </Page>
  )
}
