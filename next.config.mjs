
/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: '/',
            destination: '/characters',
            permanent: true,
        },
        {
            source: '/characters',
            destination: '/characters/page/1',
            permanent: true,
        },
        {
            source: '/characters/page',
            destination: '/characters/page/1',
            permanent: true,
        },
        {
            source: '/episodes',
            destination: '/episodes/page/1',
            permanent: true,
        },
        {
            source: '/episodes/page',
            destination: '/episodes/page/1',
            permanent: true,
        },
        {
            source: '/locations',
            destination: '/locations/page/1',
            permanent: true,
        },
        {
            source: '/locations/page',
            destination: '/locations/page/1',
            permanent: true,
        },
    ]
}

export default nextConfig;
