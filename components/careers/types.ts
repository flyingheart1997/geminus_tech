export type CareerDetails = {
    sidebar_links: {
        id: string;
        title: string;
        link: string;
    }[];
    'activities': {
        id: string;
        title?: string;
        description?: string;
        image?: string;
        newslatters: {
            id: string;
            title?: string;
            subtitle?: string;
            description?: string;
            comments: {
                comment: string;
                owner: string;
                designation: string;
            }[]
        }[]
    }[];
    technologies: {
        id: string;
        title: string;
        description: string;
        languages: {
            name?: string;
            image: string;
        }[],
    }[];
    jobs: {
        id: string;
        title: string;
        description: string;
        location: string;
        experience: string;
    }[],
};