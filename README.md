# workshop-deployer

```
mvn clean package

docker build -f src/main/docker/Dockerfile.jvm -t quay.io/openshiftlabs/mad-workshop-deployer:1.0 . --platform linux/amd64

docker push quay.io/openshiftlabs/mad-workshop-deployer:1.0

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