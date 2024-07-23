import {routes} from '@/constants/routes'

export type Page = {
    label: string
    link: string
}

export const pages: Page[] = [
    {
        label: 'CHARACTERS',
        link: routes.characters
    },
    {
        label: 'LOCATIONS',
        link: routes.locations
    }
]