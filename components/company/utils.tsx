import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Fragment } from "react/jsx-runtime";

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
        description: (
            <Fragment>
                Geminus was born out of a shared mindset. The drive to take on new challenges and to help others build better products, soon grew into a long lasting partnership built on trust, transparency, and mutual respect.
                <br />
                <br />
                Both founders brought deeply complementary strengths to the table. Their differences became their biggest strength, creating a balance that continues to shape Geminus today.
                <br />
                <br />
                What defines Geminus isn’t just technology or innovation - it’s the genuine connect. And that great things are built when people believe in each other and what they’re creating. A sense of doing what’s right.
            </Fragment>
        ),
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
                description: `Deepak ia a co-founder with the vision to provide cost effective, high quality services to emerging technology companies building innovative products. Deepak carries 23 years of experience in developing enterprise storage products and solutions. He played leadership role in Qlogic(Netxen) to develop FCoE stack in CNA embedded system. Before that he worked in Veritas, Mountain View. An IIT Bombay postgraduate, Deepak is inventor of 14 issued patents in the area of Storage Virtualization/Replication/Distributed Systems.`,
                image: "/teams/deepak_tawri.svg",
                designation: "Co-Founder",
                social: [
                    {
                        name: "LinkedIn",
                        icon: <LinkedInLogoIcon />,
                        link: ""
                    }
                ]
            },
            {
                name: "Rahul Soman",
                description: `Rahul Soman is co-founder and brings along 21 years of rich experience in development of networking stacks in embedded/host systems . He played leadership role in Netxen/Qlogic, to develop TOE (TCP/IP Offload) stack along with IPV6, ARP, ICMP, NDS protocols as enabler for iSCSI & iSER products in P3+ based CNA card along with end to end HW/FW T10 DIF based protection integrated. Before Qlogic, he worked as software engineer in Huges Technologies. Rahul had been visiting Industry faculty as well as alumni at Pune University.`,
                image: "/teams/rahul_soman.svg",
                designation: "Co-Founder",
                social: [
                    {
                        name: "LinkedIn",
                        icon: <LinkedInLogoIcon />,
                        link: ""
                    }
                ]
            },
            {
                name: "Abhishek Mukherjee ",
                image: "/teams/abhishek_mukherjee.svg",
                designation: "Consulting Architect",
                description: `Abhishek Mukherjee has 21 years of rich experience in development of networking stacks in embedded/host systems as enabler of Storage protocols.Prior to taking charge of Cloudensembler, he has worked in different capacities in Marvell/QLogic/Netxen, and implemented TCP and higher layer (iSCSI, RDMA) offload technologies for Intelligent CnA NIC products.  He had to deliver embellishments to the core product platforms like ipv6 support, T10 DIF and Multi-tenancy. Before Qlogic, he worked  in Hughes Software Systems.`,
                social: [
                    {
                        name: "LinkedIn",
                        icon: <LinkedInLogoIcon />,
                        link: ""
                    }
                ]
            },
            {
                name: "Omkar Kulkarni",
                image: "/teams/omkar_kulkarni.svg",
                designation: "Director of Engineering ",
                description: 'Omkar Kulkarni (M. Tech. IITB) has 14 years of experience in development and management of embedded firmware and Linux kernel drivers for network stacks and offloaded storage networking protocols. Prior to joining Startup Partner he worked n various capacities at Marvell/QLogic and worked on NIC, iSCSI, FCoE offload firmware, host libraries for iSCSI Target offload solutions for intelligent NIC and CNA products. In Marvell he was responsible for Nvme/TCP firmware and Nvme/TCP Linux driver development and productization.',
                social: [
                    {
                        name: "LinkedIn",
                        icon: <LinkedInLogoIcon />,
                        link: ""
                    }
                ]
            },
            {
                name: "Nitesh Gothe",
                image: "/teams/nitesh_gothe.svg",
                designation: "Lead Product Designer",
                description: 'Nitesh Gothe is a product strategist and UX designer with 5+ years of experience in building mission-critical tools across space-tech, geo-intelligence, and logistics. He leads product direction, design strategy, and execution for complex B2B platforms. As the Founder of Design It Well, he helps startups shape product strategy, craft MVPs, and scale with systems thinking. his experience includes Dassault Systems. He holds a Postgraduate Diploma in Product Design & Innovation from ATLAS SkillTech University ',
                social: [
                    {
                        name: "LinkedIn",
                        icon: <LinkedInLogoIcon />,
                        link: ""
                    }
                ]
            },
            {
                name: "Purushottam Thakar",
                image: "/teams/purushottam_thakar.svg",
                designation: "Senior director engineering and operations",
                description: 'Purushottam Thakar is a seasoned engineering leader with 21 years of experience across GS Labs| GAVS, Nvidia, Azingo, and Aftek, where he has built, scaled, and mentored high-performing teams. He brings expertise across Networking, SD-WAN, SASE, Multi-Cloud systems, Virtual Switching, Wi-Fi, Security Gateways, Embedded Systems, GPU QA, Automation Frameworks, and AIOps-driven platforms. His leadership spans engineering, QA, DevOps, NetOps, SecOps, product support, and release management. He holds a B.E. from Shivaji University.',
                social: [
                    {
                        name: "LinkedIn",
                        icon: <LinkedInLogoIcon />,
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