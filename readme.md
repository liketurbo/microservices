# Microservices

## Project structure (Microservices)

- k8s - kubernetes
- web - frontend code
- server - backend code
- worker - service

## Docker

### Linux namespaces

- Mount(mnt)
- Process ID (pid)
- Network (net)
- Inter-process communications (ipc)
- UTS
- User ID (user)

## Kubernetes

### Storage

- Volume
- Persistent volume (cluster range)

### Resource

- `request` container guaranteed to get
- `limit` up to value (restriction)

> - cpu defined in `m (millicores, 1 / 1000 core)`
> - memory defined in bytes `1Mi = 1024Ki` `1M = 1000K`

### Object

- Pod
- Deployment
- Service
- Volume
- Namespace
