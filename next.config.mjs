/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['*'],
    },
    webpack: (config, options) => {
        if (options.dev) {
            Object.defineProperty(config, "devtool", {
                get() { return "source-map" },
                set() { }
            });
        }
        return config;
    },
};

export default nextConfig;
