# Microservices 🌌

## Project structure (Microservices)

- k8s - kubernetes
- web - frontend code
- server - backend code
- worker - service

## Docker 🐳

![Docker containers vs VM](https://qph.fs.quoracdn.net/main-qimg-fd65ceaa71fb44ea78134bd58dcba49d.webp)

> - Images
> - Registries `(push|pull)`
> - Containers

### Commands

`docker stop container_name && docker rm container_name` - stop and remove container
`docker tag tag_name new_tag_name` - adding tag to image (images can have multiple tags)

### Flags

> - `-d` - detached from console, which means it will run in background
> - `-p` - port mapping e.g. `-p HOST_PORT:GUEST_PORT`
> - `-i` - opens STDIN
> - `-t` - allocates a pseudo terminal (TTY)

### Tips & Tricks 🤩

> `COPY` vs `ADD`

`COPY` takes in a src and destination. It only lets you copy in a local file or directory from your host (the machine building the Docker image) into the Docker image itself.

`ADD` lets you do that too, but it also supports 2 other sources. First, you can use a URL instead of a local file / directory. Secondly, you can extract a tar file from the source directly into the destination.

### Linux namespace kinds

- Mount(mnt)
- Process ID (pid)
- Network (net)
- Inter-process communications (ipc)
- UTS (hostname and domain name)
- User ID (user)

### Linux control groups

> no comments 😎

## Kubernetes

> Cluster
>
> - Control Plane node (master)
> - Worker node(s)

### Storage

- Volume
- Persistent volume (cluster range)

### Resource

- `request` container guaranteed to get
- `limit` up to value (restriction)

> - cpu defined in `m (millicores, 1 / 1000 core)`
> - memory defined in bytes `1Mi = 1024Ki` `1M = 1000K`

### Objects

- Pods
- Deployments
- Services
- Volumes
- Namespaces
- Secrets
