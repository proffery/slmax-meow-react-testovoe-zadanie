import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Character} from '@/api/api-types'
import s from './character-card.module.css'
import Link from 'next/link'
import {routes} from '@/constants/routes'
import {getLastNumberFromUrl} from '@/utils/get-last-number-from-url'

type Props = {
    character: Character
}

export default function CharacterCard(props: Props) {
    const {
        image, name, gender, status, species,
        id,location, origin, type
    } = props.character;

    return (
        <div className={s.card}>
            <CardMedia
                component="img"
                alt={name}
                src={image}
                sx={{
                    borderRadius: 'var(--border-radius) var(--border-radius) 0 0',
                }}
            />
            <div className={s.cardContent}>
            <h2>{name}</h2>
                <h3>INFO:</h3>
                <div className={s.tagWrapper}>
                    <span className={s.tag}>{status}</span>
                    <span className={s.tag}>{gender}</span>
                    <span className={s.tag}>{species}</span>
                    {type && <span className={s.tag}>{type}</span>}
                    <Link className={s.tag}
                          href={routes.locations + '/' + getLastNumberFromUrl(origin.url)}
                    >{origin.name}</Link>
                </div>
                <h3>location:</h3>
                <Link className={s.tag}
                      href={routes.locations + '/' + getLastNumberFromUrl(location.url)}
                >{location.name}</Link>
            </div>
            <CardActions>
                <Button size="small"
                        sx={{fontFamily: 'var(--font-text)'}}
                        component={Link}
                        href={routes.characters + '/' + id}
                >Learn More</Button>
            </CardActions>
        </div>
    )
}