'use client'

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation'
import {routes} from '@/constants/routes'
import {ChangeEvent} from 'react'

type Props = {
    count?: number;
    page?: number;
    boundaryCount?: number
    siblingCount?: number
    type: 'Characters' | 'Episodes' | 'Locations'
}

export default function PaginationComponent({boundaryCount = 2, siblingCount = 1, count, page, type}:Props) {
    const router = useRouter()

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        type === 'Characters' && router.push(routes.charactersPage + '/' + value.toString())
        type === 'Episodes' && router.push(routes.episodesPage + '/' + value.toString())
        type === 'Locations' && router.push(routes.locationsPage + '/' + value.toString())
    }

    return <Stack spacing={2}>
        <Pagination
            count={count}
            boundaryCount={boundaryCount}
            siblingCount={siblingCount}
            page={page}
            variant={'outlined'}
            shape={'rounded'}
            onChange={handleChange}
            sx={{
                button: {color: 'var(--text-color-primary)'},
                div: {color: 'var(--text-color-primary)'},
                '.Mui-selected': {
                        border: '1px solid var(--border-color)',
                        opacity: .7,
                },
            }}
    />
    </Stack>
}