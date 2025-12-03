import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Header_Menu = [
  {
    title: "Home",
    link: " ",
  },
  {
    title: "Technology",
    link: "technology",
  },
  {
    title: "Industry",
    link: "industry",
  },
  {
    title: "Services",
    link: "services",
  },
  {
    title: "Company",
    link: "company",
  },
  {
    title: "Careers",
    link: "careers",
  },
];

export const CompaniesList = [
  {
    src: "/c_antaris.svg",
    // link: "#google",
  },
  {
    src: "/c_watermelon.svg",
    // link: "#microsoft",
  },
  {
    src: "/c_primaryio.svg",
    // link: "#apple",
  },
  {
    src: "/c_oracel.svg",
    // link: "#amazon",
  },
  {
    src: "/c_diamanti.svg",
    // link: "#facebook",
  },
];

export const AboutDetails = [
  {
    id: "01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
  {
    id: "02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
  {
    id: "03",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
  {
    id: "04",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
  {
    id: "05",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    name: "John Doe",
    position: "Co-founder",
  },
];

export const BlogsDetails = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    image: "/blog_1.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    image: "/blog_2.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    image: "/blog_1.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    image: "/blog_2.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    image: "/blog_1.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    image: "/blog_2.svg",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    createdAt: "2 weeks ago",
    viewes: "53K views",
  },
];

export const LatestNews = [
  {
    title: "Sep-Oct’ 25 Edition Company newsletter",
    description: "Key Updates : SONATUS INDIA: DRIVING IMPACT Expanding Expertise& Ownership.The Sonatus India team is strengthening its QA and Devel.",
    image: "/news-latter.svg",
    createdAt: "Nov 08 • 1 month ago",
  },
  {
    title: "Sep-Oct’ 25 Edition Company newsletter",
    description: "Key Updates : SONATUS INDIA: DRIVING IMPACT Expanding Expertise& Ownership.The Sonatus India team is strengthening its QA and Devel.",
    image: "/news-latter.svg",
    createdAt: "Nov 08 • 1 month ago",
  },
  {
    title: "August 2025 Company newsletter",
    description: "Key updates : XSight Labs –QuickHighlights Spotlight: XSight Labs E1 – Next- Gen InfrastructureProcessorThe XSight Labs.",
    image: "/news-latter.svg",
    createdAt: "Sept 09 • 3 months ago",
  },
];

export const TeamsDetails = [
  {
    name: "Deepak Tawri",
    image: "/teams/deepak_tawri.svg",
    designation: "Co - Founder",
  },
  {
    name: "Rahul Soman",
    image: "/teams/rahul_soman.svg",
    designation: "Co - Founder",
  },
  {
    name: "Abhishek Mukherjee ",
    image: "/teams/abhishek_mukherjee.svg",
    designation: "Consulting Architect",
  },
  {
    name: "Omkar Kulkarni",
    image: "/teams/omkar_kulkarni.svg",
    designation: "Director of Engineering ",
  },
  {
    name: "Nitesh Gothe",
    image: "/teams/nitesh_gothe.svg",
    designation: "Lead Product Designer",
  },
  {
    name: "Purushottam Thakar",
    image: "/teams/purushottam_thakar.svg",
    designation: "Senior director engineering and operations",
  }
];

/////////////////////////////////////////////////////////// TECHNOLOGY SECTION ///////////////////////////////////////////////////////////

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
          image: "/overview1.svg",
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
          image: "/overview.svg",
        },
        {
          title: "Comprehensive Protocol Offloads",
          description:
            "Our expertise covers a wide range of protocols across storage, networking, and security domains, which we have successfully offloaded onto SoCs to optimize performance, scalability, and security.",
          image: "/overview.svg",
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
    has_content: false,
    content: {
      Overview: [],
      Landscape: [],
      Insights: [],
      "Case Study": [],
    },
  },
  {
    name: "Software Define Networking",
    image: '/technology/software_define_networking.svg',
    has_content: false,
    content: {
      Overview: [],
      Landscape: [],
      Insights: [],
      "Case Study": [],
    },
  },
  {
    name: "Software Define Vehicle",
    image: '/technology/software_define_vehicle.svg',
    has_content: true,
    content: {
      Overview: [
        {
          title: "Comprehensive Networking Solutions for Modern Environments",
          description:
            "Here, we enable OEMs to transition from hardware-centric vehicles to fully Software-Defined Vehicles (SDVs). We help engineering teams build intelligent, upgradeable, and data-driven automotive ecosystems where features evolve continuously through software. Our expertise ensures that the automakers unlock agility, scalability, and differentiated user experiences long after the vehicle leaves the factory.",
          image: "/overview1.svg",
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
          title: "Application Re Engineering and Modernization",
          description:
            "Singapore-based SRE Product company wanted to convert VM-Based monolithic application into Microservices in kubernetes.",
          details: {
            Challenges: [
              "Understanding application dependencies from dev and make sure they are satisfied in microservices architecture.",
              "Refactored application can take advantage of Kubernetes benefitslike scalability, application orchestration, and security.",
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
    name: "Software Define Satellite",
    image: '/technology/software_define_satellite.svg',
    has_content: false,
    content: {
      Overview: [],
      Landscape: [],
      Insights: [],
      "Case Study": [],
    },
  },
];

/////////////////////////////////////////////////////////// Industrys SECTION ///////////////////////////////////////////////////////////

export const Industrys = [
  {
    name: "Data Centre engineering",
    has_content: false,
    content: {
      Overview: [],
      Specification: [],
    },
  },
  {
    name: "Space Industries",
    has_content: false,
    content: {
      Overview: [],
      Specification: [],
    },
  },
  {
    name: "Cybersecurity",
    has_content: true,
    content: {
      Overview: [
        {
          title: "Securing Digital Environments with Advanced Solutions",
          description:
            "We are dedicated to providing comprehensive cybersecurity solutions that protect digital assets, ensure data integrity, and maintain robust defenses against evolving threats. Our extensive experience spans API and endpoint security, security protocols, and advanced authentication mechanisms, enabling us to deliver cutting-edge solutions tailored to meet the security needs of modern enterprises.",
          image: "/overview.svg",
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
    name: "Automotive industries",
    has_content: false,
    content: {
      Overview: [],
      Specification: [],
    },
  },
  {
    name: "Kubernetes & Cloud Native",
    has_content: true,
    content: {
      Overview: [
        {
          title: "",
          description:
            "In the ever-evolving world of software development, traditional monolithic applications are giving way to more agile, scalable, and resilient architectures. Microservices are at the heart of this transformation. By decomposing applications into smaller, independent services, microservices enable organizations to innovate faster, improve fault tolerance, and streamline development processes. At the forefront of this revolution is Kubernetes, the leading open- source container orchestration platform.Kubernetes automates the deployment, scaling, and management of containerized applications, making it the perfect match for microservices.Together, they form the foundation of modern, cloud- native application development.",
          image: "/overview.svg",
        },
      ],
      Specification: [
        {
          category: "Assessment and Strategy Development",
          details: [
            {
              name: "Assess Your Existing Architecture",
              description:
                "Begin by analyzing your current applications, identifying components that can be refactored into microservices.",
            },
            {
              name: "Define a Migration Strategy",
              description:
                "Develop a comprehensive plan that outlines the migration timeline, identifies potential challenges, and sets clear objectives for the move to Kubernetes.",
            },
          ],
        },
        {
          category: "Containerization of Applications",
          details: [
            {
              name: "Start Small",
              description:
                "Begin with the least complex services to minimize risk and gain experience with containerization.",
            },
            {
              name: "Use Best Practices",
              description:
                "Containerize your services using Docker or similar tools, ensuring each container is stateless, self-contained, and independent of the underlying infrastructure.",
            },
          ],
        },
        {
          category: "Deploying on Kubernetes",
          details: [
            {
              name: "Leverage Kubernetes Resources",
              description:
                "Deploy your containerized services using Kubernetes resources like Deployments, StatefulSets, and Services to manage their lifecycle and inter-service communication.",
            },
            {
              name: "Utilize Kubernetes-Native Features",
              description:
                "Implement ConfigMaps, Secrets, and Persistent Volumes to handle configurations, secure sensitive data, and manage storage.",
            },
          ],
        },
        {
          category: "Testing and Optimization",
          details: [
            {
              name: "Rigorous Testing",
              description:
                "Validate the performance, reliability, and security of your services in the Kubernetes environment. Stress-test your application to ensure it can handle real-world traffic.",
            },
            {
              name: "Continuous Optimization",
              description:
                "Use Kubernetes’ monitoring and scaling features to optimize resource usage, ensuring your application can scale seamlessly with demand.",
            },
          ],
        },
        {
          category: "Monitoring, Maintenance, and Scaling",
          details: [
            {
              name: "Implement Robust Monitoring",
              description:
                "Set up monitoring and logging using tools like Prometheus, Grafana, and the ELK stack to gain insights into your application’s performance and health.",
            },
            {
              name: "Continuous Improvement",
              description:
                "Regularly update your Kubernetes environment and applications to incorporate new features, security patches, and performance improvements.",
            },
          ],
        },
      ],
    },
  },
  {
    name: "Open Stack",
    has_content: false,
    content: {
      Overview: [],
      Specification: [],
    },
  },
  {
    name: "AI & ML",
    has_content: false,
    content: {
      Overview: [],
      Specification: [],
    },
  },
];

export const Services = [
  {
    name: "Product Engineering",
    description: 'Stay ahead with our cutting-edge Product Engineering services. From modernizing legacy applications to seamless cloud migration, we enhance your product’s performance, security, and scalability. Our expertise in DevSecOps, pipeline automation, and Site Reliability Engineering ensures high-quality, reliable, and scalable solutions tailored to your needs.',
    badge: 'ENGINEERING',
    image: '/blog_2.svg',
    content: [
      {
        title: 'Application Modernization',
        description: 'Modernize your legacy systems with cutting-edge technologies to enhance performance, security, and scalability. Our expert team transforms outdated applications into efficient, future-ready solutions, ensuring seamless integration and minimal disruption.',
        tags: ['Legacy System Assessment', 'Performance Optimization', 'Security Enhancements', 'Technology Upgradation']
      },
      {
        title: 'Cloud Migration',
        description: 'Seamlessly transition your on-premises infrastructure to the cloud with minimal downtime and maximum efficiency. We offer comprehensive cloud migration services tailored to your business needs.',
        tags: ['Cloud Readiness Assessment', 'Data Migration', 'Migration Planning', 'Post Migration Support']
      },
      {
        title: 'DevSecOps',
        description: 'Integrate security into your DevOps processes to deliver robust, secure applications faster. Our DevSecOps services ensure security is a shared responsibility integrated into every stage of the development lifecycle.',
        tags: ['Security Integration', 'Automated Security Testing', 'Compliance Management', 'Incident Response']
      },
      {
        title: 'Pipeline Modelling & Automation',
        description: 'Automate your software development pipeline to accelerate delivery and improve consistency. Our services streamline your processes from code commit to deployment.',
        tags: ['CI/CD Implementation', 'Automated Testing', 'Deployment Automation', 'Monitoring & Feedback']
      },
      {
        title: 'Site Reliability Engineering (SRE)',
        description: 'Enhance the reliability and scalability of your systems with our SRE services. We blend software engineering and IT operations to build and run scalable, reliable services.',
        tags: ['Reliability Assessment', 'Scalability Solutions', 'Incident Management', 'Performance Monitoring']
      }
    ]
  },
  {
    name: "Human Centered Design",
    description: 'Stay ahead with our cutting-edge Product Engineering services. From modernizing legacy applications to seamless cloud migration, we enhance your product’s performance, security, and scalability. Our expertise in DevSecOps, pipeline automation, and Site Reliability Engineering ensures high-quality, reliable, and scalable solutions tailored to your needs.',
    badge: 'DESIGN',
    image: '/blog_2.svg',
    content: [
      {
        title: 'Define Strategies',
        description: 'Modernize your legacy systems with cutting-edge technologies to enhance performance, security, and scalability. Our expert team transforms outdated applications into efficient, future-ready solutions, ensuring seamless integration and minimal disruption.',
        tags: ['User Research', 'Competitive Analysis', 'Strategic Roadmap', 'Stakeholder Workshops']
      },
      {
        title: 'Craft MVP (Minimum Viable Product)',
        description: 'Build a functional MVP to validate your product idea quickly and efficiently. We help you launch with essential features to gather user feedback and iterate rapidly.',
        tags: ['Concept Developmentt', 'Rapid Prototyping', 'User Testing', 'Iterative Development']
      },
      {
        title: 'Product Design',
        description: 'Design intuitive, user-friendly products that delight your users and meet business objectives. Our design process is focused on usability, aesthetics, and functionality.',
        tags: ['UI/UX Design', 'Interaction Design', 'Visual Design', 'Usability Testing']
      },
      {
        title: 'Branding',
        description: 'Develop a strong, memorable brand that resonates with your target audience. Our branding services cover everything from logo design to brand messaging.',
        tags: ['Brand Strategy', 'Logo & Identity Design', 'Brand Messaging', 'Brand Guidelines']
      }
    ]
  },
];

export const CompanyDetails = {
  sidebar_links: [
    { id: "beginning", title: "The Beginning", link: "/company#beginning" },
    { id: "founders", title: "Meet Our Founders", link: "/company#founders" },
    { id: "vision", title: "Our Vision", link: "/company#vision" },
    { id: "core", title: "Our Core", link: "/company#core" },
  ],
  "beginning": {
    id: "beginning",
    title: "The Beginning",
    description: `Geminus was born out of a shared mindset. The drive to take on new challenges and to help others build better products, soon grew into a long lasting partnership built on trust, transparency, and mutual respect.

Both founders brought deeply complementary strengths to the table. Their differences became their biggest strength, creating a balance that continues to shape Geminus today.

What defines Geminus isn’t just technology or innovation - it’s the genuine connect. And that great things are built when people believe in each other and what they’re creating. A sense of doing what’s right.`,
    image: "/beginnins.svg"
  },

  founders: {
    id: "founders",
    title: "Meet Our Founders",
    description:
      "At the heart of Geminus is a partnership that mirrors the Gemini spirit... two strong, complementary forces united by trust, respect, and a shared drive to build what lasts.",
    founders: [
      {
        name: "Deepak Tawri",
        description: `Deepak holds an M.Tech in Computer Science from IIT Bombay.
He brings over 25 years of experience working with leading technology companies such as Fujitsu, QLogic, and Veritas.
His go-getter approach brings momentum and drive to every idea. Known for setting trends rather than following them, Deepak continues to turn ideas into opportunities that shape the future.
What truly sets him apart is his deep sense of empathy towards people, ideas, and the work itself that makes him the definition of leading by example.`,
        image: "/engineer_1.png",
        designation: "Co-Founder",
        social: [
          {
            name: "LinkedIn",
            link: ""
          },
          {
            name: "Twitter",
            link: ""
          }
        ]
      },
      {
        name: "Rahul Soman",
        description: `With a MCA degree from prestigious Pune University Rahul is a prime example of technically sound leader. With more than 2 decades of experience from Hughes, QLogic, Marvell and Diamanti to Geminus, he brings both depth and balance to his leadership.
His ability to connect with people, his calm temperament, and his confidence in himself and his team set him apart.
Rahul believes that at the heart of every organization lies a genuine human connection. This ethos is reflected and nurtured across the Geminus team.`,
        image: "/engineer_2.png",
        designation: "Co-Founder",
        social: [
          {
            name: "LinkedIn",
            link: ""
          },
          {
            name: "Twitter",
            link: ""
          }
        ]
      }
    ]
  },

  vision: {
    id: "vision",
    title: "Our Vision For Company",
    description:
      "Enable ideas to grow, evolve and succeed through design, technology, and strategy"
  },

  "core": {
    id: "core",
    title: "Our Core",
    specifications: [
      {
        category: "What you can expect from Geminus",
        details: [
          {
            name: "All In, Always",
            description:
              "We turn ideas into impact — staying hands-on from strategy to success."
          },
          {
            name: "Built on Collaboration",
            description:
              "One team. One goal. Open, agile, and built to get things done, together."
          },
          {
            name: "Excellence in Motion",
            description:
              "Fast. Precise. Consistent. That's how we deliver quality at speed."
          },
          {
            name: "Leadership that Engages",
            description:
              "Present leadership. Clear direction. Real progress."
          }
        ]
      }
    ]
  }
};


export const CareerDetails = {
  sidebar_links: [
    { id: "activity", title: "Life With Us", link: "/careers#life-with-us" },
    { id: "technologies", title: "Programs", link: "/careers/programs" },
    { id: "jobs", title: "Openings", link: "/careers/openings" },
  ],

  activity: {
    id: "we-care",
    title: "We Care",
    description: "We care for your health, learning, stability, and balance. Because thriving people build thriving teams.",
    image: "/beginnins.svg",
    newslatters: [
      {
        id: "diwali-celebration",
        title: "Diwali celebration",
        subtitle: "Games and activities",
        image: "/dewali.svg",
        description: "We celebrated Diwali with a bang, filled with employee-led activities, games, and moments that brought the whole team together in true festive spirit and celebrations that lit up the workplace with energy and laughter.",
        comments: [
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },

        ],
      },
      {
        id: "diwali-celebration-2",
        title: "Diwali celebration",
        subtitle: "Games and activities",
        image: "/news-latter.svg",
        description: "We celebrated Diwali with a bang, filled with employee-led activities, games, and moments that brought the whole team together in true festive spirit and celebrations that lit up the workplace with energy and laughter.",
        comments: [
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },
          {
            comment:
              "The environment here is filled with warmth and a real sense of belonging. There’s always someone ready to guide or help when you need it. It truly feels like a team that has your back. I also feel that I’m contributing to something meaningful here.",
            owner: "Saee Purkar",
            designation: "UX designer",
          },

        ],
      },
    ],
  },

  technologies: {
    id: "learning-programs",
    title: "Learning programs",
    description: "Inhouse Hand-crafted Accelerator Programs",
    languages: [
      { name: "Golang Accelerator Program", image: "/golang.svg" },
      { name: "Embedded Firmware Development Accelerator Program", image: "/embedded-firmware.svg" },
      { name: "Networking Accelerator Program", image: "/networking-accelerator.svg" },
      { name: "Storage Networking Accelerator Program", image: "/storage-networking.svg" },
    ],
  },

  jobs: [
    {
      id: "ux-designer-1",
      title: "UX Designer",
      description: "",
      location: "Pune",
      experience: "3 To 5 Years",
    },
    {
      id: "ux-designer-2",
      title: "UX Designer",
      description: "",
      location: "Pune",
      experience: "3 To 5 Years",
    },
    {
      id: "ux-designer-3",
      title: "UX Designer",
      description: "",
      location: "Pune",
      experience: "3 To 5 Years",
    },
    {
      id: "ux-designer-4",
      title: "UX Designer",
      description: "",
      location: "Pune",
      experience: "3 To 5 Years",
    },
  ],
};
