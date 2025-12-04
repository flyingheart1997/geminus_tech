export const Technologys = [
    {
        name: "Cloud Engineering",
        image: '/technology/cloud_engineering.svg',
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "In today's rapidly evolving technological landscape, cloud computing is the backbone of innovation and scalability. Our cloud engineering services are designed to help businesses seamlessly transition to the cloud, optimize their infrastructure, and harness the full potential of cloud technologies.",
                    image: "/technology/cloud_engineering_overview.svg",
                },
            ],
            Landscape: [
                {
                    category: "Cloud Architecture Design",
                    details: [
                        {
                            name: "",
                            description:
                                "We specialize in designing robust, scalable, and secure cloud architectures tailored to your business needs. Our solutions are built to ensure high availability, disaster recovery, and seamless integration with your existing systems.",
                        },
                    ],
                    icon: "/cloud.svg",
                },
                {
                    category: "Cloud Migration",
                    details: [
                        {
                            name: "",
                            description:
                                "Transitioning to the cloud can be complex, but with our expertise, it becomes a smooth and efficient process. We handle everything from strategy and planning to execution and validation, ensuring minimal disruption to your operations.",
                        },
                    ],
                    icon: "/cloud.svg",
                },
                {
                    category: "Infrastructure as Code (IaC)",
                    details: [
                        {
                            name: "",
                            description:
                                "Embrace automation with our Infrastructure as Code services. We use tools like Terraform, CloudFormation, and Ansible to manage your infrastructure, enabling consistent, repeatable deployments that reduce human error and accelerate development cycles.",
                        },
                    ],
                    icon: "/cloud.svg",
                },
                {
                    category: "Cloud-Native Application Development",
                    details: [
                        {
                            name: "",
                            description:
                                "Unlock the full potential of the cloud with our cloud-native application development services. We build applications that are designed to take advantage of cloud environments, leveraging microservices, containerization, and serverless architectures.",
                        },
                    ],
                    icon: "/cloud.svg",
                },
                {
                    category: "Security and Compliance",
                    details: [
                        {
                            name: "",
                            description:
                                "Security is at the core of our cloud engineering services. We implement best practices in cloud security, ensuring your data is protected and your environment is compliant with industry standards and regulations.",
                        },
                    ],
                    icon: "/cloud.svg",
                },
                {
                    category: "Cost Optimization",
                    details: [
                        {
                            name: "",
                            description:
                                "Maximize your return on investment with our cost optimization services. We analyze your cloud usage and implement strategies to reduce costs while maintaining performance and scalability.",
                        },
                    ],
                    icon: "/cloud.svg",
                },
                {
                    category: "Cloud DevOps",
                    details: [
                        {
                            name: "",
                            description:
                                "Integrate development and operations seamlessly with our Cloud DevOps services. We help you establish CI/CD pipelines, automate testing and deployment, and ensure your applications are continuously delivered and monitored.",
                        },
                    ],
                    icon: "/cloud.svg",
                },
            ],
            Insights: [
                {
                    title: "Storage Virtualization",
                    description:
                        "Improve storage efficiency and utilization by abstracting physical storage across multiple devices into a single, manageable resource.",
                },
                {
                    title: "Infrastructure as a Service (IaaS):",
                    description:
                        "We deliver scalable IaaS solutions, providing on-demand servers, storage, and networking to deploy and manage applications efficiently while reducing infrastructure costs.",
                },
                {
                    title: "Containerization",
                    description:
                        "We use containerization to package applications with all dependencies, ensuring consistency, faster deployment, and easy scaling.",
                },
            ],
            "Case Study": [
                {
                    title: "Application Re Engineering and Modernization",
                    description:
                        "Singapore-based SRE Product company wanted to convert VM-Based monolithic application into Microservices in kubernetes",
                    details: {
                        Challenges: [
                            "Understanding application dependencies from dev and make sure they are satisfied in microservices architecture",
                            "Refactored application can take advantage of Kubernetes benefitslike scalability,application orchestration, and security",
                            "Application is targeted towards banks and financial industry, all the security compliances required had to be implemented in kubernetes environment.",
                        ],
                        Outcome: [
                            "Application and dependencies were packaged so that it could be deployed in air-gapped environment without having to install bigger tool-set.",
                            "Application deployment and scaling were made easier by this migration.",
                        ],
                        Benefits: [
                            "Customer is able to offer their solutions Saas hosted on kubernetes cloud.",
                        ],
                        "Expertise Used": [
                            "Application modernization",
                            "Kubernetes Adoption",
                            "DevOps and SRE Support",
                        ],
                    },
                },
            ],
        },
    },
    {
        name: "SOC Embedded",
        image: "/technology/soc_embedded.svg",
        has_content: true,
        content: {
            Overview: [
                {
                    title: "Comprehensive SoC Development with Integrated Security",
                    description:
                        "We specialize in the design and development of high-performance System on Chip (SoC) solutions and embedded systems. Our extensive experience spans both SmartNIC (Smart Network Interface Card) technology and storage SoCs, enabling us to deliver robust, secure, and high-performing solutions for data centers, cloud environments, and enterprise networks.",
                    image: "/technology/overview.svg",
                },
                {
                    title: "Comprehensive Protocol Offloads",
                    description:
                        "Our expertise covers a wide range of protocols across storage, networking, and security domains, which we have successfully offloaded onto SoCs to optimize performance, scalability, and security.",
                    image: "/technology/overview.svg",
                },
            ],
            Landscape: [
                {
                    category: "Storage Networking Protocol Offloads",
                    details: [
                        {
                            name: "FCoE (Fibre Channel over Ethernet)",
                            description:
                                "Our SoCs support FCoE offloading, enabling Fibre Channel protocols to operate over Ethernet networks, simplifying network infrastructure while maintaining high performance.",
                        },
                        {
                            name: "NVMe over TCP (Non-Volatile Memory Express over TCP)",
                            description:
                                "Offloading NVMe over TCP to SoCs enhances the performance of storage networks, enabling high-speed data transfers over standard IP networks while reducing the load on the host CPU.",
                        },
                        {
                            name: "iSCSI (Internet Small Computer Systems Interface)",
                            description:
                                "Offloading iSCSI improves the efficiency of block-level storage data transfers over IP networks, ensuring low latency and high throughput.",
                        },
                    ],
                    icon: "/storage.svg",
                },
                {
                    category: "Networking Protocol Offloads",
                    details: [
                        {
                            name: "TCP (Transmission Control Protocol)",
                            description:
                                "Offloading TCP to SoCs reduces the complexity of networking tasks, freeing up CPU resources and improving overall network performance.",
                        },
                        {
                            name: "RDMA (Remote Direct Memory Access)",
                            description:
                                "Offloading RDMA enables direct memory access between computers in a network, reducing latency and CPU usage.",
                        },
                        {
                            name: "iWARP (Internet Wide Area RDMA Protocol)",
                            description:
                                "Offloading iWARP enhances RDMA performance over standard Ethernet networks, crucial for high-performance computing environments.",
                        },
                        {
                            name: "RoCEv1/v2 (RDMA over Converged Ethernet)",
                            description:
                                "Our expertise in RoCE offloading facilitates high-throughput, low-latency networking over Ethernet, essential for data centers and HPC environments.",
                        },
                    ],
                    icon: "/network.svg",
                },
                {
                    category: "Security Protocol Offloads",
                    details: [
                        {
                            name: "IPSec (Internet Protocol Security)",
                            description:
                                "By offloading IPSec, we enhance secure communication across IP networks, providing high-performance encryption and authentication with minimal impact on system resources.",
                        },
                        {
                            name: "SSL/TLS (Secure Sockets Layer/Transport Layer Security)",
                            description:
                                "Offloading SSL/TLS tasks ensures secure and efficient handling of encrypted traffic, crucial for secure web communications and data integrity.",
                        },
                    ],
                    icon: "/security.svg",
                },
                {
                    category: "SmartNIC",
                    details: [
                        {
                            name: "",
                            description:
                                "In addition to our development capabilities, we offer complete end-to-end maintenance services for SmartNICs, fully outsourced to us by leading companies until the end of life (EOL). This comprehensive service includes everything from initial development and integration to long-term support, ensuring that our clients' SmartNIC solutions remain reliable, secure, and up-to-date throughout their lifecycle.",
                        },
                    ],
                    icon: "/security.svg",
                },
                {
                    category: "DPDK Support for High-Performance Networking",
                    details: [
                        {
                            name: "",
                            description:
                                "Our team excels in integrating and optimizing Data Plane Development Kit (DPDK) support for SoCs. DPDK accelerates packet processing, enhancing the performance of network-intensive applications. Combined with our security offloads, this makes our SoCs ideal for secure, high-speed networking environments.",
                        },
                    ],
                    icon: "/security.svg",
                },
                {
                    category: "Storage Solutions with Integrated Security",
                    details: [
                        {
                            name: "",
                            description:
                                "Beyond networking, our expertise extends to the storage domain, where we have successfully offloaded distributed volume management tasks onto SoCs. Our solutions not only optimize storage management but also incorporate advanced security features, ensuring secure data access and transmission.",
                        },
                    ],
                    icon: "/storage.svg",
                },
            ],
            Insights: [
                {
                    title: "Bridging Networking, Storage, and Security",
                    description:
                        "Our unique capability lies in the seamless integration of networking, storage, and security functionalities within our SoCs. This holistic approach allows us to deliver solutions that are not only high-performing but also secure and scalable. Whether it’s accelerating data transfer across networks, optimizing storage management, or securing communications, our SoC and embedded systems expertise provides comprehensive solutions tailored to your specific needs.",
                },
            ],
            "Case Study": [
                {
                    title: "Application Re Engineering and Modernization",
                    description:
                        "Singapore-based SRE Product company wanted to convert VM-Based monolithic application into Microservices in kubernetes",
                    details: {
                        Challenges: [
                            "Understanding application dependencies from dev and make sure they are satisfied in microservices architecture",
                            "Refactored application can take advantage of Kubernetes benefitslike scalability,application orchestration, and security",
                            "Application is targeted towards banks and financial industry, all the security compliances required had to be implemented in kubernetes environment.",
                        ],
                        Outcome: [
                            "Application and dependencies were packaged so that it could be deployed in air-gapped environment without having to install bigger tool-set.",
                            "Application deployment and scaling were made easier by this migration.",
                        ],
                        Benefits: [
                            "Customer is able to offer their solutions Saas hosted on kubernetes cloud.",
                        ],
                        "Expertise Used": [
                            "Application modernization",
                            "Kubernetes Adoption",
                            "DevOps and SRE Support",
                        ],
                    },
                },
            ],
        },
    },
    {
        name: "Storage Virtualization",
        image: '/technology/stroage_virtualization.svg',
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We deliver storage virtualization platforms engineered for speed, resilience, and scalability. Our expertise spans SPDK-accelerated I/O engines, NVMe/NVMe-oF pipelines, advanced snapshotting, and disaster-recovery workflows. We design architectures that reduce latency, optimize throughput, and provide flexible, software-defined storage layers for mission-critical workloads. With capabilities in kernel-bypass, user-space drivers, and intelligent data services, we enable organizations to modernize their storage stack with reliable performance.",
                    image: "/technology/stroage_virtualization_overview.svg",
                },
            ],
            Landscape: [
                {
                    category: "Resource Abstraction",
                    details: [
                        {
                            name: "",
                            description: "We specialize in creating virtualized storage layers that abstract physical disks into programmable, scalable resource pools. Our systems support thin provisioning, dynamic volume management, multi-tenant isolation, and automated tiering for organizations to simplify management and achieve maximum hardware utilization.",
                        }
                    ],
                    icon: "/storage.svg",
                },
                {
                    category: "SPDK-Accelerated Storage Engines",
                    details: [
                        {
                            name: "",
                            description: "We build high-performance storage engines using SPDK and DPDK, enabling kernel-bypass, lock-free queues, and microsecond-level I/O latency. Our expertise allows integration of SPDK block devices, caching modules, and custom extensions to support high-throughput and compute-efficient data pipelines.",
                        }
                    ],
                    icon: "/storage.svg",
                },
                {
                    category: "Snapshots, Backup & Data Protection",
                    details: [
                        {
                            name: "",
                            description: "We design robust snapshot and backup services that ensure data durability without performance compromise. Our solutions support copy-on-write snapshots, delta-based replication, deduplication-aware backups, and policy-driven retention for fast recovery and operational continuity.",
                        }
                    ],
                    icon: "/storage.svg",
                },
                {
                    category: "NVMe & NVMe-oF Offload Architectures",
                    details: [
                        {
                            name: "",
                            description: "We deliver storage fabrics built on NVMe and NVMe-over-Fabrics (NVMe-o-TCP, NVMe-RDMA), enabling ultra-low latency communication between hosts and storage clusters. Our engineering optimizes queue depths, transport mapping, and offload operations for distributed high-performance environments.",
                        }
                    ],
                    icon: "/storage.svg",
                },
                {
                    category: "iSCSI (Internet Small Computer Systems Interface)",
                    details: [
                        {
                            name: "",
                            description: "Offloading iSCSI improves the efficiency of block-level storage data transfers over IP networks, ensuring low latency and high throughput.",
                        }
                    ],
                    icon: "/storage.svg",
                },
                {
                    category: "FC AND FCOE",
                    details: [
                        {
                            name: "",
                            description: "We support offloading storage traffic, enabling Fibre Channels and fibre channels over Ethernet networks, simplifying network infrastructure while maintaining high performance.",
                        }
                    ],
                    icon: "/storage.svg",
                },
            ],
            Insights: [
                {
                    title: "Intelligent, Zero-Trust Storage Fabric Optimization",
                    description:
                        "We build storage platforms that automatically tune performance based on real-time data. By combining SPDK acceleration with NVMe-oF transport insights, our systems adjust I/O paths, queue depths, and data flows to maintain consistent low latency. Built-in security and isolation ensure the fabric stays resilient, predictable, and ready for next-generation workloads.",
                },
            ],
            "Case Study": [
                {
                    title: "iSCSI, FCoE, NVMe Offload Development",
                    description:
                        "A company wanted a high-performance storage protocol stack built for their proprietary platforms",
                    details: {
                        Challenges: [
                            "Building on proprietary VLIW (non–cache coherent, i/d-cache sensitive) and ARM platforms.",
                            "Implementing Target-mode NVMe and Initiator-mode NVMe-over-TCP.",
                            "Enabling complete Initiator & Target implementations for iSCSI and FCP.",
                            "Delivering DCBX and QoS integration for unified CNA traffic management.",
                            "Integrating iSCSI solutions with high-end storage hardware from multiple vendors.",
                        ],
                        Outcome: [
                            "Reduced latency and improved throughput across storage workloads.",
                            "Vendor-ready protocol implementations with seamless interoperability.",
                            "Higher reliability and predictable performance under mixed storage traffic.",
                        ],
                        Benefits: [
                            "Customer is able to offer their solutions Saas hosted on kubernetes cloud.",
                        ],
                        "Expertise Used": [
                            "Embedded systems development on VLIW & ARM platforms",
                            "Storage protocol engineering",
                            "DCBX & QoS configuration for converged networks",
                            "Vendor-side integration and validation workflows",
                        ],
                    },
                },
            ],
        },
    },
    {
        name: "Software Define Networking",
        image: '/technology/software_define_networking.svg',
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We deliver next-gen networking solutions engineered for low latency, high throughput, and efficient compute utilization. Our expertise spans SmartNIC-based acceleration, TOE/iSCSI offload, software-defined networking, and high-speed DPDK pipelines. We design network architectures that push data directly through optimized user-space paths, reduce CPU overhead, and enable predictable performance under demanding workloads. With deep knowledge in kernel bypass, programmable NICs, and virtualized switching, we help organizations modernize their entire networking stack.",
                    image: "/technology/software_define_networking_overview.svg",
                },
            ],
            Landscape: [
                {
                    category: "Smart NIC Acceleration",
                    details: [
                        {
                            name: "",
                            description: "We specialize in integrating SmartNICs that offload encryption, packet filtering, virtual switching, and storage protocols. Our implementations reduce CPU load, increase throughput, and enable hardware-accelerated pipelines for cloud, storage, and virtualization environments.",
                        }
                    ],
                    icon: "/software_define_networking_icon.svg",
                },
                {
                    category: "TOE & iSCSI Offload",
                    details: [
                        {
                            name: "",
                            description: "We deliver offload engines that move TCP/IP and iSCSI processing from the host CPU to dedicated hardware. This improves throughput, lowers latency, and ensures consistent performance for storage-heavy workloads and high-density virtualized systems.",
                        }
                    ],
                    icon: "/software_define_networking_icon.svg",
                },
                {
                    category: "OVS & Software-Defined Networking",
                    details: [
                        {
                            name: "",
                            description: "We deploy Open vSwitch and SDN controllers to enable programmable, policy-driven network virtualization. Our expertise includes flow-based routing, overlay networks, QoS enforcement, and scalable network segmentation for multi-tenant environments.",
                        }
                    ],
                    icon: "/software_define_networking_icon.svg",
                },
                {
                    category: "RoCEv1/v2 (RDMA over Converged Ethernet)",
                    details: [
                        {
                            name: "",
                            description: "Our expertise in RoCE offloading facilitates high-throughput, low-latency networking over Ethernet, essential for data centers and HPC environments.",
                        }
                    ],
                    icon: "/software_define_networking_icon.svg",
                },
                {
                    category: "Kubernetes Networking and Service Discovery",
                    details: [
                        {
                            name: "Container Network Interfaces (CNIs)",
                            description: "We design and implement custom CNIs to ensure seamless network connectivity and performance for containerized applications.",
                        },
                        {
                            name: "Service Mesh Integration:",
                            description: "Utilizing technologies such as ISTIO, we manage micro services communication, service discovery, and observability within Kubernetes clusters, enhancing application resilience and security.",
                        }
                    ],
                    icon: "/software_define_networking_icon.svg",
                },
            ],
            Insights: [
                {
                    title: "Networking Expertise That Scales With You",
                    description:
                        "We bring broad expertise across traditional networking, SDN technologies, SmartNICs, and advanced SoC-based architectures, delivering high-performance, secure, and future-ready solutions. With deep capabilities in protocol offload, infrastructure optimization, and integrated security features like encryption and threat protection, we ensure your network is both fast and resilient. Our solutions are built to scale with your business needs, and we support you through the entire lifecycle from initial design to ongoing operations and long-term maintenance.",
                },
            ],
            "Case Study": [
                {
                    title: "Kubernetes Networking",
                    description:
                        "A company wanted a custom CNI that delivered high-performance, secure, and fully observable networking for Kubernetes clusters",
                    details: {
                        Challenges: [
                            "Build L2 + Overlay CNIs with SR-IOV, QoS, and pod-level PCIe VF assignment.",
                            "Maintain full IP visibility and admin-controlled configuration.",
                            "Integrate with Istio, internal/external load balancers, and kubeDNS/CoreDNS.",
                            "Support multi-cluster and external service discovery with network-policy enforcement.",
                        ],
                        Outcome: [
                            "Zero noisy-neighbour issues and predictable pod-level performance.",
                            "High-throughput, low-latency networking powered by SR-IOV.",
                            "Simplified operations with centralized IP and DNS control.",
                            "Better scalability and reliability across multi-cluster environments.",
                            "Stronger security and traffic governance through network policies.",
                        ],
                        Benefits: [
                            "Customer is able to offer their solutions Saas hosted on kubernetes cloud.",
                        ],
                        "Expertise Used": [
                            "CNI engineering",
                            "Kubernetes Adoption",
                            "SR-IOV",
                            "DNS integration",
                            "Service mesh integration",
                            "Multi-cluster discovery",
                            "Network policy frameworks and enforcement",
                        ],
                    },
                },
            ],
        },
    },
    {
        name: "Software Define Vehicle",
        image: '/technology/software_define_vehicle.svg',
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "Here, we enable OEMs to transition from hardware-centric vehicles to fully Software-Defined Vehicles (SDVs). We help engineering teams build intelligent, upgradeable, and data-driven automotive ecosystems where features evolve continuously through software. Our expertise ensures that the automakers unlock agility, scalability, and differentiated user experiences long after the vehicle leaves the factory.",
                    image: "/technology/software_define_vehicle_overview.svg",
                },
            ],
            Landscape: [
                {
                    category: "Hardware + Software Synergy",
                    details: [
                        {
                            name: "",
                            description:
                                "We build systems where embedded hardware and intelligent software work as one Our teams bridge the gap between mechanical components and advanced software capabilities ensuring seamless data flow, safety, and performance.",
                        },
                    ],
                    icon: "/advance_hardware.svg",
                },
                {
                    category: "Advanced Driver Assistance Systems (ADAS)",
                    details: [
                        {
                            name: "",
                            description:
                                "We work on systems that interpret complex sensor data and improve features like automated braking, lane assistance, and collision avoidance, helping OEMs improve safety confidence.",
                        }
                    ],
                    icon: "/advance_hardware.svg",
                },
                {
                    category: "Powertrain & Battery Management (EVs)",
                    details: [
                        {
                            name: "",
                            description:
                                "Our software expertise supports EV customers in optimizing battery health, driving range, charging cycles, and predictive diagnostics.",
                        }
                    ],
                    icon: "/advance_hardware.svg",
                },
                {
                    category: "Vehicle-to-Everything (V2X)",
                    details: [
                        {
                            name: "",
                            description:
                                "We help integrate communication systems that allow vehicles to connect with other cars, infrastructure, and cloud platforms, enabling safer and more predictable mobility.",
                        }
                    ],
                    icon: "/advance_hardware.svg",
                },
                {
                    category: "Infotainment Systems",
                    details: [
                        {
                            name: "",
                            description:
                                "We support modern infotainment development—apps, UI flows, OTA updates, voice interfaces, and real-time navigation powered by modular architectures.",
                        }
                    ],
                    icon: "/advance_hardware.svg",
                },
                {
                    category: "Connectivity & IoT",
                    details: [
                        {
                            name: "",
                            description:
                                "We design and test connected vehicle systems that enable real-time vehicle telemetry, predictive maintenance, and personalized cabin experiences.",
                        }
                    ],
                    icon: "/advance_hardware.svg",
                },
                {
                    category: "Control Systems & Safety",
                    details: [
                        {
                            name: "",
                            description:
                                "Our teams help OEMs build reliable braking, steering, and stability systems, combining hardware precision with intelligent software logic.",
                        }
                    ],
                    icon: "/advance_hardware.svg",
                },
                {
                    category: "Cybersecurity",
                    details: [
                        {
                            name: "",
                            description:
                                "We bring deep experience in securing automotive software stacks—threat detection, encryption, secure OTA, and compliance with ISO 21434.",
                        }
                    ],
                    icon: "/advance_hardware.svg",
                }
            ],
            Insights: [
                {
                    title: "Storage Virtualization",
                    description:
                        "We help OEMs use data as the core engine of intelligent vehicle behavior. From decision-making models to personalized experiences, we ensure data pipelines are accurate, governed, and production-ready.",
                },
                {
                    title: "Upgrades and Updates",
                    description:
                        "We enable OTA processes that deliver new features and performance improvements without dealership visits. We help manufacturers build adaptive systems that change based on driving patterns, environment, and user preferences.",
                },
                {
                    title: "Data analytics",
                    description:
                        "We turn vehicle data into actionable intelligence for engineering, product, and business teams. Our solutions help OEMs monitor fleet health, optimize performance, improve ML models, and deliver smarter features.",
                },
                {
                    title: "User Experience  and Decision-Making Algorithms",
                    description:
                        "Our focus is on creating tailored in-car experiences driven by real-time user data. For that, our teams in develop and validate algorithms that power ADAS and autonomous functions.",
                },
            ],
            "Case Study": [
                {
                    title: "In-vehicle software Development",
                    description: "",
                    details: {
                        Challenges: [
                            "Ensuring reliable communication between ECUs, CCU, and external systems.",
                            "Managing policy-based networking and controlled traffic.",
                            "Providing scalable, centralized NVMe storage accessible to all ECUs.",
                            "Enabling secure, fail-safe OTA updates.",
                            "Meeting FuSa and vendor compliance requirements.",
                            "Running high-fidelity testing and simulations.",
                        ],
                        Outcome: [
                            "Unified communication layer across vehicle systems.",
                            "High-throughput data access via centralized storage.",
                            "Automated, compliant OTA workflows.",
                            "Validated system behavior through simulation and testing.",
                        ],
                        Benefits: [
                            "Higher reliability and performance.",
                            "Reduced integration complexity.",
                            "Faster development and safer deployments.",
                            "Improved vehicle uptime and data accessibility.",
                        ],
                        "Expertise Used": [
                            "In-vehicle networking & V2X",
                            "Central compute and ECU integration",
                            "OTA pipeline engineering",
                            "NVMe storage orchestration",
                            "FuSa collaboration & compliance",
                            "Simulation-based validation",
                        ],
                    },
                },
            ],
        },
    },
    {
        name: "Software Define Satellite",
        image: '/technology/software_define_satellite.svg',
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We deliver mission-grade software systems that power the complete satellite lifecycle covering upstream design, onboard intelligence, and downstream ground operations. With deep expertise in real-time systems, AI/ML, virtualized payloads, and interoperable control planes, we help organizations build flexible, upgradeable, and autonomous satellite architectures. Our software-defined approach ensures rapid mission iteration, dynamic reconfiguration, and seamless multi-vendor integration across ground and space segments.",
                    image: "/technology/software_define_satellite_overview.svg",
                },
            ],
            Landscape: [
                {
                    category: "Upstream",
                    details: [
                        {
                            name: "",
                            description:
                                "We specialize in upstream engineering that models mission orbits, ground visibility, and system-level constraints before launch. Using advanced simulation tools, we enable trajectory optimization, coverage analysis, and ADCS requirement definition. Our expertise extends to digital twins, virtual payload testing, and end-to-end data flow.",
                        }
                    ],
                    icon: "/software_define_satellite_icon.svg",
                },
                {
                    category: "On-board",
                    details: [
                        {
                            name: "",
                            description:
                                "We deliver onboard systems including OBC flight software, multi-payload orchestration, and AI/ML-driven autonomy layers. Our frameworks support deterministic scheduling, fault-tolerant execution, and software-defined tele-commands/telemetry. We build onboard intelligence for event detection, selective data capture, real-time inference, and OTA-based feature evolution.",
                        }
                    ],
                    icon: "/software_define_satellite_icon.svg",
                },
                {
                    category: "Downstream",
                    details: [
                        {
                            name: "",
                            description:
                                "We build downstream control systems that interface with multi-vendor ground stations, unify TT&C workflows, and manage telemetry pipelines. Our solutions include data ingestion, storage, visualization, and health monitoring dashboards optimized for real-time decision-making. With expertise in scalable cloud architectures, API-driven operations, and automated scheduling, we ensure complete mission control from acquisition to downlink.",
                        }
                    ],
                    icon: "/software_define_satellite_icon.svg",
                }
            ],
            Insights: [
                {
                    title: "Adaptive Software-Defined Payloads",
                    description:
                        "We enable payload capabilities to evolve through software for dynamic tasking, reconfigurable processing chains, compression profiles, and experiment deployment without hardware changes. This increases mission flexibility and reduces development cycles.",
                },
                {
                    title: "AI/ML for Autonomous Space Operations",
                    description:
                        "We leverage AI/ML models for onboard inference, anomaly detection, orbit-aware scheduling, and intelligent downlink selection. Our ML pipelines improve data prioritization, reduce ground dependency, and enhance overall mission efficiency.",
                },
                {
                    title: "Ground Systems & Multi-Vendor Integration",
                    description:
                        "Our control plane architecture ensures seamless integration across global ground-station networks, using open APIs, standardized telemetry schemas, and protocol-agnostic communication. ",
                },
            ],
            "Case Study": [
                {
                    title: "Software defined space - Mission Design, Simulate & Operate",
                    description: "Cloud-native satellite Saas platform for end-to-end satellite mission design, simulation, and operations.",
                    details: {
                        Challenges: [
                            "Satellite design, testing, and operations are siloed across disconnected tools",
                            "Long development and testing cycles increase cost and delay mission readiness",
                            "Limited collaboration across teams and partners slows innovation",
                        ],
                        Outcome: [
                            "Cloud-native SaaS platform unifying design, simulation, and operations",
                            "Faster prototyping and mission planning with integrated workflows.",
                            "Seamless collaboration and interoperability with ground & space assets",
                        ],
                        Benefits: [
                            "Reduced time-to-orbit and engineering overhead",
                            "Lower mission costs with scalable, on-demand platform",
                            "End-to-end visibility and automation across the satellite lifecycle to different stakeholders",
                        ],
                        "Expertise Used": [
                            "Cloud native architectures",
                            "Micro-services",
                            "Data Integration",
                            "Containerization & Orchestration",
                        ],
                    },
                },
            ],
        },
    },
    {
        name: "AI & ML",
        image: '/technology/ai_ml.svg',
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We deliver AI and ML platforms engineered for real-world performance, accuracy, and scalability. Our expertise spans data engineering, model training, MLOps, LLM integration, and real-time inference pipelines. From predictive analytics to autonomous decision engines and AI-driven automation, we build high-performance systems.",
                    image: "/technology/aiml_overview.svg",
                },
            ],
            Landscape: [
                {
                    category: "AI Platform Engineering",
                    details: [
                        {
                            name: "",
                            description:
                                "We specialize in building AI platforms that support data ingestion, feature engineering, model training, validation, and automated deployment. We design systems that deliver reproducibility, rapid experimentation, and efficient lifecycle management. ",
                        }
                    ],
                    icon: "/aiml_icon.svg",
                },
                {
                    category: "OLLM & NLP Systems",
                    details: [
                        {
                            name: "",
                            description:
                                "We develop and fine-tune LLMs for industry-specific tasks such as document intelligence, conversational automation, semantic search, and code analysis. Our expertise includes prompt engineering, retrieval-augmented generation (RAG), tokenizer optimization, and low-latency inference using quantization and model distillation.",
                        }
                    ],
                    icon: "/aiml_icon.svg",
                },
                {
                    category: "AI-Powered Data Intelligence Systems",
                    details: [
                        {
                            name: "",
                            description:
                                "We deliver ML systems that identify trends, anomalies, and correlations across large datasets. Our solutions use time-series models, clustering algorithms, and gradient-boosting frameworks  for organizations to make faster, data-backed decisions.",
                        }
                    ],
                    icon: "/aiml_icon.svg",
                },
                {
                    category: "MLOps & Scalable Inference Infrastructure",
                    details: [
                        {
                            name: "",
                            description:
                                "We implement automated pipelines covering CI/CD for models, monitoring, A/B testing, drift detection, and scalable serving layers. Our solutions support low-latency inference at scale across cloud and edge environments.",
                        }
                    ],
                    icon: "/aiml_icon.svg",
                }
            ],
            Insights: [
                {
                    title: "AI That Accelerates Decisions",
                    description:
                        "We build AI systems that streamline complex analysis and turn data into clear, actionable insights faster. By combining advanced models with real-time processing, our platforms reduce manual effort, automate routine decision steps, and deliver immediate recommendations. This enables teams to work more efficiently, respond quicker, and operate with higher confidence and productivity across their workflows.",
                },
            ],
            "Case Study": [
                {
                    title: "AI-Powered API Pen Testing",
                    description: "A company wanted an API security testing system that adapts in real time and finds vulnerabilities traditional scanners and manual systems miss.",
                    details: {
                        Challenges: [
                            "Traditional Tools Fail",
                            "Static Payloads → Miss context-specific vulnerabilities.",
                            "No Adaptation → Can’t bypass API defenses (e.g., WAFs).",
                            "Blind to Business Logic → Zero-day exploits undetected",
                        ],
                        Outcome: [
                            "AI/ML-Driven Approach",
                            "LLM (GPT-4/CodeLlama) → Generate tailored payloads (SQLi, JWT tampering).",
                            "Reinforcement Learning → Adapt attacks based on API responses.",
                            "Anomaly Detection → Flag data leaks/errors (Isolation Forest).",
                        ],
                        Benefits: [
                            "More Vulnerabilities detected vs. traditional tools.",
                            "Fewer False Positives via context-aware testing.",
                            " Real-Time Adaptation to counter API defenses.",
                        ],
                        "Expertise Used": [
                            "Anomaly detection using ML models",
                            "Micro-services",
                            "Data Integration",
                            "AI/ML engineering for LLM-based payload generation",
                        ],
                    },
                },
            ],
        },
    },
];