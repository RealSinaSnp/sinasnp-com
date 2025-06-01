This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

- Tailwind for styles
- MongoDB for database
- Hostinger as VPS
- deployed on ubuntu
- proxied with Nginx thrugh CloudFlare
- blog page in TS
- CV (main) page mostly in JS changed to TS


Pagackages installed for this project:
```sh
$ npm install next-themes
$ npm install next-auth
$ npm install rate-limiter-flexible # limits admin login attempts

$ npm install react-markdown remark-gfm rehype-highlight highlight.js rehype-raw
$ npm install lucide-react
$ npm install --save @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
$ npm i --save @fortawesome/free-brands-svg-icons
$ npm install @next/third-parties@latest next@latest # for google analytics

$ npx tailwindcss init -p # for version mismatch error in docker
$ npm install @tailwindcss/typography # for version mismatch error in docker
$ npm install -D tailwindcss postcss autoprefixer # for version mismatch error in docker

```


