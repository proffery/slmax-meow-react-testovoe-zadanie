import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {LocationType} from '@/api/api-types'
import s from '../card.module.css'
import Link from 'next/link'
import {routes} from '@/constants/routes'
import {getLastNumberFromUrl} from '@/utils/get-last-number-from-url'

type Props = {
    location: LocationType
}

export default function LocationCard(props: Props) {
    const {
        name, id, type, dimension, residents
    } = props.location;

    return (
        <div className={s.card}>
            <div className={s.cardContent}>
                <h2>{name}</h2>
                <div className={s.tagWrapper}>
                    <h3>location Info:</h3>
                    <span className={s.tag}>{name}</span>
                    <span className={s.tag}>{type}</span>
                    <span className={s.tag}>{dimension}</span>
                </div>
                <div className={s.tagWrapper}>
                    <h3>Residents:</h3>
                    {residents.map(resident =>
                        <Link href={routes.characters + '/' + getLastNumberFromUrl(resident)} key={resident} className={s.tag}
                        >{getLastNumberFromUrl(resident)}</Link>
                    )}
                </div>
            </div>
            <CardActions>
                <Button size="small"
                        sx={{
                            fontFamily: 'var(--font-text)',
                            color: 'var(--text-color-secondary)',
                        }}
                        component={Link}
                        href={routes.locations + '/' + id}
                >Learn More</Button>
            </CardActions>
        </div>
    )
}