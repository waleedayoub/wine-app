FROM node:14.17.6

WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
ENV NODE_ENV dev 
ENV NEXT_TELEMETRY_DISABLED 1


RUN npm install
COPY . .
RUN npm run build
# RUN npx prisma migrate dev

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs
# USER nextjs
RUN npx prisma generate

EXPOSE 3000

ENV PORT 3000

CMD ["npx", "prisma", "migrate","dev","&&", "npm", "run","dev"]

