import { cn } from "@/lib/utils";

interface ContainerProviderProps {
    children: React.ReactNode;
    className?: string;
}

export const ContainerProvider = ({ children, className }: ContainerProviderProps) => {
    return (
        <div className={cn('container mx-auto', className)}>
            {children}
        </div>
    )
}