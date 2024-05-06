import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin(
    './src/services/i18n/i18n.ts'
);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:
        [
            {
                protocol: 'https',
                hostname: 'img.freepik.com'
            }
        ]
    }
};
 
export default withNextIntl(nextConfig);