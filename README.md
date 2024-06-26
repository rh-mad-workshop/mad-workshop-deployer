# workshop-deployer

```
mvn clean package

podman build -f src/main/docker/Dockerfile.jvm -t quay.io/openshiftlabs/mad-workshop-deployer:latest . --platform linux/amd64

podman push quay.io/openshiftlabs/mad-workshop-deployer:latest

```

Or

```
quarkus build --no-test

podman push quay.io/openshiftlabs/mad-workshop-deployer:latest
```


Environment variables needed to run this locally. These are default values. 

```
export NAMESPACE=workshop-deployer
export ALLOWED_MODULES_COUNT=2
export BOOKBAG_NAMESPACE=bookbag
export OPENSHIFT_DOMAIN=apps.cluster-7bnj8.sandbox919.opentlc.com
export USER_PASSWORD=openshift
export ARGO_NAMESPACE_PREFIX=globex-gitops
export TEST_USER=user1
export QUARKUS_KUBERNETES_CLIENT_TRUST_CERTS=true
```