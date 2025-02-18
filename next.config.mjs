/** @type {import('next').NextConfig} */
// const path = require('path')
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const nextConfig = {
  // output: 'export',
  images: {
    domains: ["images.pexels.com", "127.0.0.1", "swiperjs.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import './base.scss';`,
  },
};

export default nextConfig;
