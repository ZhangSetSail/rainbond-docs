---
title: 基于 Kubernetes 安装 Rainbond
descrition: 该章节文档介绍基于已有的 k8s 集群，使用 helm 安装 Rainbond
keywords:
- 基于 Kubernetes 安装 Rainbond 集群
---

本文将指引你在已有的 Kubernetes 集群中快速安装一套可用的 Rainbond 环境，支持自建集群、托管集群等。你可以根据自己的需求选择最适合你的安装方式。高可用部署请参考文档[高可用集群安装](/docs/installation/ha-deployment/)。

## 基于已有 Kubernetes 集群安装

### [基于自建 Kubernetes 集群安装](/docs/installation/install-with-helm/other/install-from-kubernetes)

了解在自建的 Kubernetes 集群中，如何使用 Helm 快速部署 Rainbond 环境。这种安装方式支持高可用部署。

### [基于自建 k3s 集群安装](/docs/installation/install-with-helm/other/k3s-install-with-helm/)

了解在已有的 K3s 集群中，如何使用 Helm 快速部署 Rainbond 环境。这种安装方式支持高可用部署。

### [基于 MiniKube 安装](/docs/installation/install-with-helm/other/install-from-minikube/)

了解如何在 MiniKube 中使用 Helm 快速部署 Rainbond 环境。

### [基于 Rancher 安装](/docs/installation/install-with-helm/other/install-from-rancher/)

了解在 Rancher 图形化界面中，如何使用应用商店快速部署 Rainbond 环境。

## 在托管 Kubernetes 上安装

### [基于阿里云 ACK 集群安装](/docs/installation/install-with-helm/cloud/ack-install-with-helm/)

了解在阿里云 ACK 集群中，部署 Rainbond 的最佳实践，以及各类云服务资源的建议。这种安装方式支持高可用部署。

### [基于华为云 CCE 集群安装](/docs/installation/install-with-helm/cloud/cce-install-with-helm/)

了解在华为云 CCE 集群中，部署 Rainbond 的最佳实践，以及各类云服务资源的建议。这种安装方式支持高可用部署。
