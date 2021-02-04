FROM node:14

WORKDIR /workspace
COPY . .
ENV NODE_ENV production
RUN yarn install --ignore-optional

EXPOSE 8000
CMD [ "npm", "start" ]