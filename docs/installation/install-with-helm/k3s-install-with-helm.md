---
title: '基于自建 k3s 集群安装'
description: '基于已有的 k3s 集群，使用 helm 从零开始安装 Rainbond'
---

## 安装前提

- 推荐 Helm版本 >= 3.0 根分区磁盘保证50G+

- 确保服务器 `80、443、6060、6443、7070、8443` 端口能够访问

- 确保服务器安装了 NFS 客户端
  - 对接外部存储时，则无需安装

:::caution
注意：Rainbond 默认会使用 containerd 作为容器的运行时，同时 Rainbond 的 rbd-gatway 网关会作为 Ingress controller，所以需要修改 K3s 的启动参数，并卸载已安装的 Traefik 或指定没有安装 Traefik 的节点为 Rainbond的网关节点。
:::

### 安装 containerd

参考 containerd [官方文档](https://github.com/containerd/containerd/blob/main/docs/getting-started.md) 安装。

### 安装 nerdctl

下载地址 [nerdctl](https://github.com/containerd/nerdctl/releases)

### 安装 NFS 客户端

```bash
yum -y install nfs-utils    # Cenots系统
apt-get install nfs-common  # ubuntu系统
```

### 卸载 Traefik

```bash
kubectl delete -f /var/lib/rancher/k3s/server/manifests/traefik.yaml
```

### 修改 K3s 启动参数

```bash
vi /etc/systemd/system/multi-user.target.wants/k3s.service

# 编辑k3s.service文件末尾行
ExecStart=/usr/local/bin/k3s server
# 重新加载配置文件
systemctl daemon-reload
# 重新启动k3s
service k3s restart
```


:::caution
注意：K3s 默认的配置文件路径，Helm无法识别，将 `/etc/rancher/k3s/k3s.yaml` 软连接到 `~/.kube/config`，供 helm 使用。 
:::

```bash
mkdir ~/.kube
ln -s /etc/rancher/k3s/k3s.yaml ~/.kube/config
```

## 安装Rainbond：

- 安装helm

```bash
wget https://pkg.goodrain.com/pkg/helm && chmod +x helm && mv helm /usr/local/bin/
```

- 创建rbd-system 命名空间

```bash
kubectl create namespace rbd-system
```

- 添加chart仓库

```bash
helm repo add rainbond https://openchart.goodrain.com/goodrain/rainbond
```

- 安装rainbond
  - 参考 [values.yaml 详解](../install-with-helm/vaules-config)  了解更多自定义配置项，以及如何为已有 Rainbond 集群变更配置。

```bash
helm install rainbond rainbond/rainbond-cluster -n rbd-system
```

### 验证安装

- 查看pod状态

```bash
kubectl get po -n rbd-system | grep rbd-app-ui
```

- 等待 `rbd-app-ui` pod为 Running 状态即安装成功。
- 安装成功以后，可通过 `$gatewayIngressIPs:7070` 访问 Rainbond 控制台。

### 安装问题排查

- 安装过程中如果长时间未完成，那么请参考文档 [Helm 安装问题排查指南](https://www.rainbond.com/docs/user-operations/deploy/install-troubleshoot/helm-install-troubleshoot/)，进行故障排查。或加入 [微信群](/community/support#微信群)、[钉钉群](/community/support#钉钉群) 寻求帮助。

## 下一步

参考[快速入门](/docs/quick-start/getting-started/)部署你的第一个应用。
