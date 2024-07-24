import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {Episode} from '@/api/api-types'
import s from '../card.module.css'
import Link from 'next/link'
import {routes} from '@/constants/routes'
import {getLastNumberFromUrl} from '@/utils/get-last-number-from-url'

type Props = {
    episode: Episode
}

export default function EpisodesCard(props: Props) {
    const {
        name, id, episode, air_date, characters
    } = props.episode;

    return (
        <div className={s.card}>
            <div className={s.cardContent}>
                <h2>{name}</h2>
                <div className={s.tagWrapper}>
                <h3>Episode Info:</h3>
                    <span className={s.tag}>{name}</span>
                    <span className={s.tag}>{air_date}</span>
                    <span className={s.tag}>{episode}</span>
                </div>
                <div className={s.tagWrapper}>
                    <h3>Characters:</h3>
                        {characters.map(character =>
                            <Link href={routes.characters + '/' + getLastNumberFromUrl(character)} key={character} className={s.tag}
                            >{getLastNumberFromUrl(character)}</Link>
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
                        href={routes.episodes + '/' + id}
                >Learn More</Button>
            </CardActions>
        </div>
    )
}