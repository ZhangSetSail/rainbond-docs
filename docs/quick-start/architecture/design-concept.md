---
title: 设计思想
description: Rainbond设计的由来和理念
---

#### 企业应用云操作系统

<img width="100%" src="https://grstatic.oss-cn-shanghai.aliyuncs.com/images/docs/5.0/architecture/arch1.png" />

对于企业 IT 来说，企业应用是企业 IT 价值的最主要体现，然而，当前不管是开发应用还是使用应用，都需要面对最底层的计算资源（IaaS/虚拟化/物理服务器），导致技术栈很长，需要做很多跟业务不直接相关的工作，比如：开发和运行环境搭建；服务器管理；网络管理；交付流程管理；技术架构支持；基础技术服务提供；技术工具维护等运维和技术工作，而这些工作对所有企业应用是有通用性的，如果把这些工作统一包装并自动化完成，企业专注自身业务，这样就能让企业 IT 的效率大幅度提高。

Rainbond 通过 `以应用为中心` 的方式包装以上重复性工作，并在此上支撑企业应用的开发、架构、交付和运维，这种抽象粒度，即能简化企业应用的管理，又能满足业务的灵活性。在对接底层基础设施时，通过`软件定义`实现和对接，能做到对接各类基础设施。通过以上设计，自然形成了企业应用的操作系统。

#### 无侵入架构

<img width="100%" src="https://grstatic.oss-cn-shanghai.aliyuncs.com/images/docs/5.0/architecture/arch2.png" />

Rainbond 把广泛支撑企业应用作为首要目标，广泛支撑企业应用意味着各种企业应用都能在 Rainbond 上开发、架构、运维，这点也是影响使用体验的关键点，为了实现这个目标，Rainbond 采用`无侵入`架构。`无侵入`架构表现在使用简单，已有应用不需要改动就能支持。

具体从三方面入手：

- 在开发阶段，对接代码仓库，自动识别 [开发语言类型](/docs/use-manual/component-create/creation-process)，不改变开发者习惯，尽量最大可能不修改现有代码，直接编译、构建和运行。

- 在架构阶段，如果已有系统没有分布式架构，Rainbond 提供 Service Mesh 架构，业务模块不改代码就能变成微服务架构。

- 在运维阶段，老的遗留系统很难找到原有开发人员，要迁移到新运行环境比较困难，Rainbond 使用动态生成配置文件和网络关系的方式，迁移和运行遗留系统。运维和治理功能，Rainbond 通过“无侵入”插件的形式提供，根据功能需要选择加载插件。

`无侵入`架构还表现在，对使用者无绑定，开发的应用程序可以脱离 Rainbond 开发和运行。

#### 以应用为中心，连接企业应用和企业计算资源

<img width="100%" src="https://grstatic.oss-cn-shanghai.aliyuncs.com/images/docs/5.0/architecture/arch3.png" />

`以应用为中心`是 Rainbond 的核心设计理念，也是 Rainbond 的抽象思路，强调关注业务，跟业务相关技术概念对外暴露，跟业务不直接相关的技术概念统一包装。通过这种方式抽象，使用者不用过多考虑服务器的问题，也就是`Serverless`架构。

通过`以应用为中心`抽象可以将企业应用和企业计算资源解耦，企业应用的生命周期管理跟计算资源不直接相关，也就是说企业应用的开发可以在任何类型的计算资源上，开发好的企业应用可以直接安装运行在任何类型的计算资源上，还可以随时从一个资源迁移到另一个资源。

计算资源对使用者完全透明，根据使用场景差异对接计算资源，当计算资源对接的是公有资源，就是`公有云`，当计算资源对接的是私有资源，就是`私有云`，当计算资源同时对接公有资源和私有资源，就是`混合云`。

Rainbond 通过解耦实现连接企业应用和企业计算资源，对接的各类企业应用积累形成企业应用市场，对接的各类企业计算资源积累形成企业计算资源市场，应用市场中的应用和资源市场中的资源可以自由组合使用。组合使用的过程，表现为 SaaS 和 PaaS 两种交互界面。SaaS 实现不懂技术的即点即用，PaaS 实现高级的定制开发。
