COPY /Y ./Dockerfile ./dist/Dockerfile
# COPY /Y ./nginx.conf ./dist/nginx.conf
docker build -t clientui ./dist
docker tag clientui:lastest host:port/clientui:lastest
# docker push host:port/clientui:lastest