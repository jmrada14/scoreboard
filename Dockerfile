

# docker build -t nfl_scoreboard -f ./model_services/nfl/scoreboard/Dockerfile .
# docker run -d -rm -p 3000:3000 nfl_scoreboard
FROM node
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