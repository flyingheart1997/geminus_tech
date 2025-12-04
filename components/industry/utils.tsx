export const Industrys = [
    {
        name: "Data Centre Engineering",
        image: '/industry/data_center_engineering.svg',
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We provide end-to-end data center solutions designed for performance, reliability, and flexibility. Our systems integrate advanced compute, storage, networking, and HPC technologies to support modern enterprise workloads, virtualization, and cloud-native applications. Leveraging software-defined architectures, hardware offload technologies, and high-speed interconnects, we optimize efficiency, reduce latency, and ensure business continuity. Our solutions also include backup, disaster recovery, and intelligent automation to maintain robust operations at scale.",
                    image: "/industry/data_center_overview.svg",
                },
            ],
            Specification: [
                {
                    category: "Storage",
                    details: [
                        {
                            name: "Storage Virtualization & SPDK Applications",
                            description:
                                "A unified storage layer that enables virtualization, high-speed SPDK-based applications, and efficient resource utilization. Supports snapshots, backup workflows, and disaster recovery solutions while integrating NVMe and NVMe-o-TCP offload for ultra-low latency and high throughput.",
                        },
                        {
                            name: "Snapshots, Backup & DR Solutions",
                            description:
                                "We Manage automated snapshots, data backup, and disaster recovery workflows. Ensures data integrity, rapid recovery, and business continuity across primary and secondary storage systems.",
                        },
                    ],
                },
                {
                    category: "High-Performance Computing (HPC)",
                    details: [
                        {
                            name: "RDMA Suite & Applications",
                            description:
                                "Our softwares support RDMA technologies including RoCE V1/V2 and iWARP for high-speed, low-latency interconnects. Enables HPC applications to leverage fast memory access, remote direct data transfers, and optimized cluster performance.",
                        }
                    ],
                },
                {
                    category: "Networks",
                    details: [
                        {
                            name: "Smart NICs & Offload Technologies",
                            description:
                                "We provide integrated Smart NICs, TOE, and iSCSI offload to reduce CPU load and improve network efficiency. Enables high-performance packet processing for data-intensive workloads.",
                        },
                        {
                            name: "SDN, OVS & DPDK Applications",
                            description:
                                "We focus on implementation of software-defined networking with Open vSwitch and DPDK frameworks. Provides programmable, low-latency networking for flexible data center operations and accelerated applications.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Space Industries",
        image: '/industry/space_industries.svg',
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We build mission-grade software for upstream to downstream, the full satellite lifecycle, from onboard systems to ground-station control. Our resilient, real-time stack uses AI/ML, software-defined operations, and interoperable control to enable faster missions, greater autonomy, and seamless multi-vendor integration.",
                    image: "/industry/space_industries_overview.svg",
                },
            ],
            Specification: [
                {
                    category: "Flight Software",
                    details: [
                        {
                            name: "Onboard Control & Execution Framework",
                            description:
                                "Our OBC flight software provides deterministic control over satellite subsystems, enabling real-time command execution, fault-tolerant operations, and resilient state management. Built on lightweight RTOS frameworks, it supports high-reliability actuation, sensor routing, and power-safe mode transitions. Modular architecture ensures easy integration with ADCS, EPS, TT&C, and payload controllers.",
                        },
                        {
                            name: "Payload orchestration and application",
                            description:
                                "A unified payload software layer that manages multi-payload coordination, task scheduling, and real-time data acquisition. It optimizes resources based on orbit and power constraints while ensuring conflict-free execution. The system also handles sensor control, data formatting, compression, and onboard pre-processing reducing downlink load and enabling upgradable payload applications.",
                        },
                        {
                            name: "On-Board Scheduler & AI/ML Edge Controller",
                            description:
                                "A combined autonomy layer that manages time-tagged commands, subsystem availability, and mission operations while using AI/ML for onboard inference and event detection. It enables autonomous task prioritization, anomaly response, and optimized execution based on power and visibility. Edge intelligence reduces ground dependence through real-time analysis, selective data capture, and in-orbit decision-making.",
                        },
                        {
                            name: "Software-Defined Tele commands & Telemetry",
                            description:
                                "We build a flexible software-defined communication framework that supports dynamic command routing, configurable telemetry packets, and standardized data across diverse ground stations. It enables OTA updates, evolving telemetry schemas, and seamless multi-vendor interoperability ensuring reliable TT&C operations and a scalable architecture for mission growth.",
                        },
                    ],
                },
                {
                    category: "Mission Modeling & Simulation",
                    details: [
                        {
                            name: "Orbital & Coverage Modeling",
                            description:
                                "A combined modeling suite covering orbital design, trajectory optimization, pass prediction, and mission access windows. It evaluates launch profiles, station-keeping needs, ground visibility, and coverage maps to maximize mission yield. The system integrates link-budget considerations and target access analysis for precise communications and payload operations.",
                        },
                        {
                            name: "Power, Thermal & ADCS Simulation",
                            description:
                                "A unified simulation layer that models spacecraft power generation, consumption cycles, and thermal behavior alongside attitude dynamics and control requirements. It helps define ADCS specifications by analyzing disturbance torques, pointing accuracy, heat distribution, and subsystem load behavior. Ensures all components stay within safe operational envelopes across mission phases.",
                        },
                        {
                            name: "End-to-End Data Flow & System Architecture Modeling",
                            description:
                                "We Model the complete lifecycle of mission data from payload generation to onboard buffering, routing, compression, and downlink scheduling. Identifies bottlenecks across subsystems and evaluates redundancy strategies to ensure reliability. Supports design decisions for onboard vs. ground processing, enhancing mission efficiency and operational robustness.",
                        }
                    ],
                },
                {
                    category: "Control Plane",
                    details: [
                        {
                            name: "Control Plane Interfacing Multi-Vendor Ground Stations",
                            description:
                                "We build a universal control plane that connects spacecraft operations to different ground-station vendors via standardized APIs and protocols. Enables seamless tasking, visibility planning, and downlink scheduling across global GS networks.",
                        },
                        {
                            name: "Telemetry Storage Management",
                            description:
                                "We provide a unified system that securely stores real-time and historical telemetry while offering intuitive dashboards for subsystem health, trends, and anomalies. It ensures reliable data retention, fast retrieval, and clear visual insights to support quick operational decisions.",
                        },
                        {
                            name: "Telemetry Visualization",
                            description:
                                "We provide Interactive dashboards that visualize subsystem status, trends, anomalies, and historical mission behavior. Built for real-time decision-making, with custom layers for flight events, payload activity, and ADCS performance.",
                        },
                        {
                            name: "TT&C, Tasking & Schedule Management",
                            description:
                                "Our solutions are a complete TT&C layer handling uplink command queues, downlink scheduling, tasking workflows, and mission timelines. Ensures safe sequencing, conflict resolution, and automated command verification for mission operations.",
                        }
                    ],
                },
            ],
        },
    },
    {
        name: "Cybersecurity",
        image: "/industry/cybersecurity.svg",
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We are dedicated to providing comprehensive cybersecurity solutions that protect digital assets, ensure data integrity, and maintain robust defenses against evolving threats. Our extensive experience spans API and endpoint security, security protocols, and advanced authentication mechanisms, enabling us to deliver cutting-edge solutions tailored to meet the security needs of modern enterprises.",
                    image: "/industry/cybersecurity_overview.svg",
                },
            ],
            Specification: [
                {
                    category: "API and Endpoint Security",
                    details: [
                        {
                            name: "API Security",
                            description:
                                "We specialize in securing APIs through comprehensive strategies that include threat detection, access control, and vulnerability management. Our solutions ensure that your APIs are protected from unauthorized access, data breaches, and other security threats.",
                        },
                        {
                            name: "Endpoint Security",
                            description:
                                "Our endpoint security solutions safeguard devices and endpoints against a range of threats, including malware, phishing attacks, and data leaks. We implement advanced protection measures to ensure the integrity and security of all devices connected to your network.",
                        },
                    ],
                },
                {
                    category: "Security Protocols",
                    details: [
                        {
                            name: "IPSec (Internet Protocol Security)",
                            description:
                                "We implement IPSec to secure IP communications by authenticating and encrypting each IP packet in a communication session. Our expertise ensures robust protection for network traffic, safeguarding data in transit.",
                        },
                        {
                            name: "SSL/TLS (Secure Sockets Layer/Transport Layer Security)",
                            description:
                                "Our solutions leverage SSL/TLS protocols to establish secure connections over the internet, ensuring data confidentiality and integrity between clients and servers.",
                        },
                        {
                            name: "Secure MQTT (Message Queuing Telemetry Transport)",
                            description:
                                "We utilize secure MQTT protocols to provide a lightweight and secure messaging solution for IoT devices and applications, protecting data during transmission and maintaining secure communication channels.",
                        },
                    ],
                },
                {
                    category: "Authentication and Authorization:",
                    details: [
                        {
                            name: "OAuth (Open Authorization)",
                            description:
                                "We implement OAuth protocols to provide secure authorization for accessing resources. Our expertise ensures that your applications and services can securely delegate access without compromising user credentials.",
                        },
                        {
                            name: "SSO (Single Sign-On)",
                            description:
                                "Our SSO solutions streamline user authentication by allowing users to access multiple applications with a single set of credentials. This enhances user experience and reduces the risk of credential-related security issues.",
                        },
                        {
                            name: "Keycloak",
                            description:
                                "We have extensive experience with Keycloak for identity and access management. Keycloak provides robust features for authentication, authorization, and user management, integrating seamlessly with various applications and services.",
                        },
                        {
                            name: "Secure JWT Tokens (JSON Web Tokens)",
                            description:
                                "Our solutions utilize secure JWT tokens for authentication and authorization, ensuring that tokens are generated, managed, and validated in a secure manner to protect user sessions and data.",
                        },
                        {
                            name: "Vault",
                            description:
                                "We implement HashiCorp Vault for secure secrets management, ensuring that sensitive information such as passwords, API keys, and encryption keys are stored and accessed securely.",
                        },
                        {
                            name: "Integration with Google and Microsoft Auth Services",
                            description:
                                "We have extensive experience integrating SaaS applications with Google and Microsoft authentication services. This includes both authorization and authentication processes, ensuring seamless and secure access management for your applications.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Automotive Industries",
        image: "/industry/automotive.svg",
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "WWe help OEMs transition from hardware-centric vehicles to fully Software-Defined Vehicles (SDVs). Our expertise enables automakers to build intelligent, upgradeable, and connected ecosystems where features evolve continuously through software. By integrating embedded systems, cloud connectivity, and advanced data pipelines, we empower teams to deliver agility, scalability, and differentiated user experiences long after vehicles leave the factory. Our SDV engineering approach ensures seamless hardware–software synergy, real-time intelligence, and future-proof vehicle platform",
                    image: "/industry/automotive_overview.svg",
                },
            ],
            Specification: [
                {
                    category: "Hardware–Software Synergy",
                    details: [
                        {
                            name: "Seamless Integration",
                            description:
                                "We specialize in building systems where embedded hardware and intelligent software operate cohesively. Our teams bridge mechanical components with high-performance compute units, ensuring seamless data flow, safety compliance, and reliable real-time behavior across the vehicle domain.",
                        },
                        {
                            name: "Advanced Driver Assistance Systems (ADAS)",
                            description:
                                "We develop software that interprets complex sensor streams to power safety features like automated braking, lane assistance, and collision avoidance. Our sensor fusion and perception models enable OEMs to enhance driver confidence and accelerate ADAS feature roadmaps.",
                        },
                    ],
                },
                {
                    category: "Vehicle-to-Everything",
                    details: [
                        {
                            name: "EV Powertrain & Battery Intelligence",
                            description:
                                "Our software expertise helps EV manufacturers improve battery health, charging cycles, and range estimation. We build algorithms for predictive diagnostics, thermal management, and power optimization ensuring efficient, safe, and long-lasting EV performance.",
                        },
                        {
                            name: "V2X Connectivity",
                            description:
                                "OWe integrate V2V/V2I/V2C communication systems enabling vehicles to interact with surrounding infrastructure and cloud platforms. This enhances situational awareness, traffic coordination, and safer mobility experiences.",
                        },
                        {
                            name: "Infotainment & In-Car Experience",
                            description:
                                `Apps, Navigation, UX & OTA
                
                We support modern infotainment development including modular apps, user interfaces, voice systems, real-time navigation, and seamless OTA updates. Our teams build flexible infotainment architectures tailored for evolving digital experiences.
                `,
                        },
                    ],
                },
                {
                    category: "OTA Upgrades & Software Lifecycle Management",
                    details: [
                        {
                            name: "Connected Vehicle Systems",
                            description:
                                "We design and test connected vehicle platforms supporting real-time telemetry, remote diagnostics, and intelligent maintenance. Our solutions help OEMs reduce downtime, improve service strategies, and enable personalized cabin experiences.",
                        },
                        {
                            name: "Control Systems & Functional Safety",
                            description:
                                "We help OEMs build reliable control systems combining hardware precision with intelligent software logic. Our work ensures consistent performance across braking, steering, and stability systems while meeting stringent safety standards.",
                        },
                        {
                            name: "Automotive Cybersecurity",
                            description:
                                `We secure the entire automotive software stack using encryption, secure OTA, intrusion detection, and vulnerability mitigation. Our solutions ensure compliance with global automotive cybersecurity standards, including ISO 21434.`,
                        },
                        {
                            name: "Data Management & Intelligence",
                            description:
                                `We enable OEMs to treat data as a core engine for intelligent vehicle behavior. Our teams build governed, production-ready data pipelines that power decision-making, fleet monitoring, ML model improvements, and intelligent in-car features.`,
                        },
                        {
                            name: "Adaptive Software Upgrades",
                            description:
                                `We design OTA update systems that deliver new capabilities without dealer visits. Vehicles adapt automatically based on driving patterns, user preferences, and environmental conditions—ensuring continuous enhancement of performance and experience.`,
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Kubernetes & Cloud Native",
        image: "/industry/kubernetes.svg",
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We specialize in modernizing legacy systems into cloud-native applications using Kubernetes and microservices. From assessment and microservices planning to containerization, deployment, and optimization, we help businesses shift to agile, scalable, and cost-efficient architectures that run faster, scale seamlessly, and stay resilient.",
                    image: "/industry/kubernetes_overview.svg",
                },
            ],
            Specification: [
                {
                    category: "The Evolution of Application Architecture",
                    details: [
                        {
                            name: "Shift from Monoliths",
                            description:
                                "We analyze your existing systems, identify boundaries, and help you decompose monolithic applications into independent, scalable micro services aligned to business capabilities.",
                        },
                        {
                            name: "Micro services ",
                            description:
                                "Our micro services architecture enables faster development, safer deployments, and improved fault isolation across your platform.",
                        },
                        {
                            name: "Kubernetes as the Enabler",
                            description:
                                "We architect and deploy micro services on Kubernetes, leveraging its automation, resilience, and orchestration capabilities.",
                        },
                        {
                            name: "Cloud-Native Ecosystem",
                            description:
                                "We integrate service meshes, API gateways, observability stacks, and CI/CD pipelines to create a complete cloud-native ecosystem tailored to your product.",
                        },
                    ],
                },
                {
                    category: "From Virtual Machines to Kubernetes",
                    details: [
                        {
                            name: "Reduced Infrastructure Waste, increased speed",
                            description:
                                "We eliminate VM-heavy inefficiencies and help you shift to lightweight, high-density container workloads, reducing cloud spend significantly. Our Kubernetes-driven architecture cuts deployment cycles from minutes to seconds, enabling real-time scaling.",
                        },
                        {
                            name: "Multi-Cloud Flexibility",
                            description:
                                "We automate OS patching, scaling, rollouts, and failovers to drastically reduce operational burden. We ensure your workloads are portable across AWS, GCP, Azure, or hybrid environments—without vendor lock-in.",
                        },
                        {
                            name: "Kubernetes benefits ",
                            description:
                                "We containerize your applications to ensure consistent performance anywhere they run. We leverage Kubernetes automation to ensure your services continuously run, restart, and recover without manual intervention. Our team sets up RBAC, policies, secrets management, and secure pipelines aligned with best practices.",
                        },
                    ],
                },
                {
                    category: "Benefits",
                    details: [
                        {
                            name: "Efficiency, reliability and rapid scaling",
                            description:
                                "We reduce infrastructure cost by running more workloads per node without compromising performance. Your application automatically adapts to traffic spikes and global demand without manual intervention. Our rollout strategies guarantee safer releases and zero-downtime upgrades.",
                        },
                        {
                            name: "Developer Velocity",
                            description:
                                "We give your teams consistent environments, automated testing pipelines, and faster deployment feedback cycles. We deliver Kubernetes manifests, Helm charts, and GitOps automation that make every environment reproducible and auditable.",
                        },
                        {
                            name: "Operational Resilience",
                            description:
                                "We set up multi-cluster and hybrid-cloud strategies that support enterprise-grade uptime. We implement encryption, network isolation, secure secrets, and policy-driven access across the stack.",
                        },
                        {
                            name: "Testing & Optimization",
                            description:
                                "We test real-world load scenarios, stress conditions, and resilience patterns. We set up robust delivery pipelines using ArgoCD or Flux for automated, traceable deployments.",
                        },
                        {
                            name: "Deployment",
                            description:
                                "We architect and deploy your services using Deployments, StatefulSets, Ingress, Autoscaling, and robust networking rules. We implement service mesh (Istio/Linkerd), API gateways, zero-trust security, and mTLS for secure service communication.",
                        },
                        {
                            name: "Monitoring & Maintenance ",
                            description:
                                "We implement Prometheus, Grafana, Loki, Jaeger and build real-time dashboards for performance, logs, and traces. We optimize workloads using autoscaling, spot instances, and advanced scheduling for reduced cloud cost.",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Full Stack",
        image: "/industry/full_stack.svg",
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We deliver full-stack application development leveraging the latest front-end frameworks, robust back-end services, and scalable data management solutions. Our approach combines responsive, cross-platform UI design, cloud-native architectures, microservices, and event-driven systems to build high-performance, reliable applications. By integrating modern databases, serverless solutions, and advanced analytics, we ensure seamless user experiences and data-driven functionality for enterprise and consumer applications alike.",
                    image: "/industry/full_stack_overview.svg",
                },
            ],
            Specification: [
                {
                    category: "Front-End Technologies",
                    details: [
                        {
                            name: "Modern Frameworks",
                            description:
                                "We specialize in building responsive and dynamic user interfaces using React, Angular, and Next.js, ensuring maintainable and scalable front-end architectures.",
                        },
                        {
                            name: "UI Development",
                            description:
                                "Our expertise lies in HTML5, CSS3, and JavaScript (ES6+), creating visually appealing, cross-platform, and fully responsive web applications.",
                        },
                        {
                            name: "State Management",
                            description:
                                "We implement advanced state management solutions like Redux, Zustand, Vuex, and Context API to handle complex application states seamlessly and deliver smooth user experiences.",
                        },
                        {
                            name: "UI Integration",
                            description:
                                "We integrate design systems and UI libraries to deliver consistent, reusable, and scalable front-end components tailored for modern applications.",
                        },
                    ],
                },
                {
                    category: "Back end technologies",
                    details: [
                        {
                            name: "High-Performance Scalable Services",
                            description:
                                "We specialize in developing robust back-end services using Node.js, Java (Spring Boot), Python (Django/Flask), and Go, delivering high-speed, reliable, and scalable solutions for modern applications.",
                        },
                        {
                            name: "Microservices & Cloud-Native",
                            description:
                                "Our expertise lies in building RESTful and GraphQL APIs with containerization (Docker) and orchestration (Kubernetes), enabling flexible, cloud-native, and easily deployable back-end architectures.",
                        },
                        {
                            name: "Event-Driven Systems",
                            description:
                                "We implement messaging and event-driven architectures using Kafka and RabbitMQ, ensuring high-throughput, real-time processing for dynamic, data-intensive applications.",
                        }
                    ],
                },
                {
                    category: "Databases",
                    details: [
                        {
                            name: "Relational & NoSQL Databases",
                            description:
                                "We specialize in designing and managing relational and NoSQL databases, including MySQL, PostgreSQL, and MongoDB, to handle structured and semi-structured data efficiently.",
                        },
                        {
                            name: "Cloud-Native Databases",
                            description:
                                "Our expertise includes leveraging serverless cloud databases like DynamoDB and Firestore to provide scalable, resilient, and high-performance data solutions for modern applications.",
                        },
                        {
                            name: "Data Warehousing",
                            description:
                                "We deliver scalable data warehousing solutions, enabling efficient storage, analytics, and insights from large datasets to support informed, data-driven decision-making.",
                        }
                    ],
                },
            ],
        },
    },
    {
        name: "AI & ML",
        image: "/industry/ai_ml.svg",
        has_content: true,
        content: {
            Overview: [
                {
                    title: "",
                    description:
                        "We specialize in building AI and ML solutions that transform data into actionable intelligence. Leveraging advanced algorithms, computer vision, natural language processing, and predictive analytics, our solutions empower organizations to automate complex workflows, detect patterns, and gain deep insights. We combine domain expertise with state-of-the-art AI/ML frameworks and cloud-based AI services to deliver scalable, high-performance, and secure applications tailored to mission-critical requirements.",
                    image: "/industry/ai_ml_overview.svg",
                },
            ],
            Specification: [
                {
                    category: "AI in marketing",
                    details: [
                        {
                            name: "Data Collection & Processing",
                            description:
                                "We specialize in AI systems that collect and process marketing data from internal sources and competitors. Using NLP pipelines and web scraping frameworks, the system efficiently extracts relevant information for analysis.",
                        },
                        {
                            name: "Analytics & Insights",
                            description:
                                "For actionable business intelligence we  apply predictive analytics to identify trends, customer sentiment, and competitor strategies. Integration with cloud databases and visualization tools enables actionable insights for informed decision-making.",
                        }
                    ],
                },
                {
                    category: "AI in security",
                    details: [
                        {
                            name: "Code & API Vulnerability Analysis",
                            description:
                                "For automated detection of security risks, We provide in AI solutions that analyze codebases and API endpoints to detect vulnerabilities. Using static/dynamic code analysis, ML-based anomaly detection, and pattern recognition with Python, TensorFlow, and custom rule-based engines, the system identifies potential security issues and code weaknesses efficiently.",
                        },
                        {
                            name: "Actionable Recommendations & Continuous Monitoring",
                            description:
                                "Our platforms provide actionable insights for fixing code, enhancing security, and enforcing best practices. Integration with CI/CD pipelines (Jenkins, GitHub Actions) ensures continuous monitoring, automated remediation suggestions, and compliance with security standards.",
                        }
                    ],
                },
            ],
        },
    },
];