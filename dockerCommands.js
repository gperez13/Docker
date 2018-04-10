docker container run -d --name nginx nginx
docker container run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=true mysql

docker container ls
docker container top nginx        * process listing 

 docker container inspect mysql    *tons of JSON containing data on how the container was started


 docker container stats             * displays stream of live container performance data


 docker rm c3f02 7336e45315 -f    



 **** Accessing the Shell ****



docker run -it --name proxy nginx bash
root@**********:/# ls -al
total 72
drwxr-xr-x   1 root root 4096 Jan 20 00:23 .
drwxr-xr-x   1 root root 4096 Jan 20 00:23 ..
-rwxr-xr-x   1 root root    0 Jan 20 00:23 .dockerenv
drwxr-xr-x   2 root root 4096 Dec 10 00:00 bin
drwxr-xr-x   2 root root 4096 Nov 19 15:25 boot
drwxr-xr-x   5 root root  360 Jan 20 00:23 dev
drwxr-xr-x   1 root root 4096 Jan 20 00:23 etc
drwxr-xr-x   2 root root 4096 Nov 19 15:25 home
drwxr-xr-x   1 root root 4096 Dec 10 00:00 lib
drwxr-xr-x   2 root root 4096 Dec 10 00:00 lib64
drwxr-xr-x   2 root root 4096 Dec 10 00:00 media
drwxr-xr-x   2 root root 4096 Dec 10 00:00 mnt
drwxr-xr-x   2 root root 4096 Dec 10 00:00 opt
dr-xr-xr-x 182 root root    0 Jan 20 00:23 proc
drwx------   2 root root 4096 Dec 10 00:00 root
drwxr-xr-x   4 root root 4096 Dec 10 00:00 run
drwxr-xr-x   2 root root 4096 Dec 10 00:00 sbin
drwxr-xr-x   2 root root 4096 Dec 10 00:00 srv
dr-xr-xr-x  13 root root    0 Jan 20 00:23 sys
drwxrwxrwt   1 root root 4096 Dec 26 18:16 tmp
drwxr-xr-x   1 root root 4096 Dec 10 00:00 usr
drwxr-xr-x   1 root root 4096 Dec 10 00:00 var
root@************:/# exit
exit







docker container run -it --name ubuntu ubuntu
	
	# apt-get update
	# apt-get install -y curl
	# curl google.com
	# exit 



**** rerunning our ubuntu container will contain curl since we installed it, however new ubuntu containers will not. The software is not as exhaustive as a ubuntu virtual machine, but we can add onto it using the apt command ****


docker container start




docker container start -ai ubuntu
	
	# curl google.com 
	# exit



docker container exec       **** runs additional process in a running container


docker container exec --help

docker container exec -it mysql(name of container) bash











