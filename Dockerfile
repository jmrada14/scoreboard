

# docker build -t ncaa_scoreboard -f ./model_services/ncaa/scoreboard/Dockerfile .
# docker run -d -rm -p 3000:3000 ncaa_scoreboard
FROM node:16
WORKDIR /usr/scoreboard
COPY ./model_services/ncaa/scoreboard/package.json .
COPY ./model_services/ncaa/scoreboard/package-lock.json .
RUN npm install
RUN npm install react-scripts@3.4.0 -g
COPY ./model_services/ncaa/scoreboard/src /usr/scoreboard/src/
COPY ./model_services/ncaa/scoreboard/public /usr/scoreboard/public/
EXPOSE 3000
ENV CI=true
ENV ENVIRONMENT="${ENVIRONMENT}"
CMD ["npm", "start"]