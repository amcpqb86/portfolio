ARG NODE_VERSION=22.12.0

FROM node:${NODE_VERSION}-slim AS base

ARG PORT=3000

ENV NODE_ENV=production

WORKDIR /src

FROM base AS build

COPY --link package.json package-lock.json .
RUN npm install

COPY --link . .

RUN npm run build
RUN npm prune

FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output

CMD [ "node", ".output/server/index.mjs" ]
