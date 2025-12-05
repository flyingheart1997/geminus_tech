export type ServiceType = {
    name: string;
    description: string | React.ReactNode;
    badge: string;
    image: string;
    content: {
        title: string;
        description: string;
        tags: string[];
    }[];
}