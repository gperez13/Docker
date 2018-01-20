docker container run -d --name nginx nginx
docker container run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=true mysql

docker container ls
docker container top nginx

 docker container inspect mysql    *tons of JSON containing data on how the container was started


 docker container stats             * displays stream of live container performance data





  




