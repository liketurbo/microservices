docker build -t liketurbo/microservices-client -f ./packages/web/Dockerfile ./packages/web
docker tag liketurbo/microservices-client liketurbo/microservices-client:$GIT_SHA
docker build -t liketurbo/microservices-server -f ./packages/server/Dockerfile ./packages/server
docker tag liketurbo/microservices-server liketurbo/microservices-server:$GIT_SHA
docker build -t liketurbo/microservices-worker -f ./packages/worker/Dockerfile ./packages/worker
docker tag liketurbo/microservices-worker liketurbo/microservices-worker:$GIT_SHA

docker push liketurbo/microservices-client
docker push liketurbo/microservices-server
docker push liketurbo/microservices-worker
docker push liketurbo/microservices-client:$GIT_SHA
docker push liketurbo/microservices-server:$GIT_SHA
docker push liketurbo/microservices-worker:$GIT_SHA

kubectl apply -f ./packages/k8s

kubectl set image deployments/client-deployment client=liketurbo/microservices-client:$GIT_SHA
kubectl set image deployments/server-deployment server=liketurbo/microservices-server:$GIT_SHA
kubectl set image deployments/worker-deployment worker=liketurbo/microservices-worker:$GIT_SHA