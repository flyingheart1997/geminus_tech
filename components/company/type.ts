export type CompanyDetails = {
    'The beginning': {
        title?: string;
        description?: string;
        image?: string;
    };
    Founders: {
        title: string;
        description: string;
        founders: {
            name?: string;
            description: string;
            image: string;
            social: {
                name?: string;
                link?: string;
            }
        }[],
    }[];
    Vision: {
        title: string;
        description: string;
    },
    'Our Core': {
        title: string;
        specification: {
            category: string;
            details: {
                name?: string;
                description: string;
            }[],
        }[];
    }
};