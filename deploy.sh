docker build -t liketurbo/microservices-web:latest -f ./packages/web/Dockerfile ./packages/web
docker tag liketurbo/microservices-web:latest liketurbo/microservices-web:$GIT_SHA
docker build -t liketurbo/microservices-server:latest -f ./packages/server/Dockerfile ./packages/server
docker tag liketurbo/microservices-server:latest liketurbo/microservices-server:$GIT_SHA
docker build -t liketurbo/microservices-worker:latest -f ./packages/worker/Dockerfile ./packages/worker
docker tag liketurbo/microservices-worker:latest liketurbo/microservices-worker:$GIT_SHA

docker push liketurbo/microservices-web:latest
docker push liketurbo/microservices-server:latest
docker push liketurbo/microservices-worker:latest
docker push liketurbo/microservices-web:$GIT_SHA
docker push liketurbo/microservices-server:$GIT_SHA
docker push liketurbo/microservices-worker:$GIT_SHA

kubectl apply -f ./packages/k8s

kubectl set image deployments/web-deployment web=liketurbo/microservices-web:$GIT_SHA
kubectl set image deployments/server-deployment server=liketurbo/microservices-server:$GIT_SHA
kubectl set image deployments/worker-deployment worker=liketurbo/microservices-worker:$GIT_SHA