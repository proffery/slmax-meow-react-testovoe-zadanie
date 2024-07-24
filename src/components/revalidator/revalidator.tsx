'use client'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation';

export const Revalidator = () => {
    const router = useRouter();

    const handleRevalidate = () => {
        router.refresh()
    }

    return <Button onClick={handleRevalidate}>Revalidate</Button>
}