export type ServiceType = {
    name: string;
    description: string;
    badge: string;
    image: string;
    content: {
        title: string;
        description: string;
        tags: string[];
    }[];
}