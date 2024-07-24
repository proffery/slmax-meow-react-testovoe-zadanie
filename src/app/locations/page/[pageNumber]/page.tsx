'use server'
import {Page} from '@/components/page/page'
import {getData} from '@/utils/get-data'
import {LocationsResponse} from '@/api/api-types'
import {apiEndpoints} from '@/api/api-endpoints'
import s from '../../../pages.module.css'
import PaginationComponent from '@/components/pagination/pagination'
import LocationCard from '@/components/cards/location-card/location-card'

type Props = {
    params: {
        pageNumber: string,
    }
}

export default async function CharactersPage({params}:Props) {
    const locationsData = await getData<LocationsResponse>(apiEndpoints.locationsByPage(+params.pageNumber),
        {cache: 'no-store'}
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
