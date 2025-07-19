### Create a New k3d Cluster

```bash
k3d cluster create
```

**Options:**

- `-a` : Set the number of server/agent nodes (amount)
- `--no-lb` : Disable the load balancer

---

### Get the Kubeconfig for the Cluster

```bash
k3d kubeconfig get k3s-default
```

---

### Set the kubectl Context

```bash
kubectl config use-context k3d-k3s-default
```

---

### Stop the k3d Cluster

```bash
k3d cluster stop
```

---

### Start the k3d Cluster

```bash
k3d cluster start
```

---

### Delete the k3d Cluster

```bash
k3d cluster delete
```

---

### Create a Deployment in Kubernetes

```bash
$ kubectl create deployment hashgenerator-dep --image=jakousa/dwk-app1
  deployment.apps/hashgenerator-dep created
```

This command creates a deployment named `hashgenerator-dep` using the Docker image `jakousa/dwk-app1`. Deployments manage the desired state for your application, ensuring the specified number of pods are running and updated as needed.
