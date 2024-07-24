
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
            source: '/episodes',
            destination: '/episodes/page/1',
            permanent: true,
        },
        ]
}

export default nextConfig;
