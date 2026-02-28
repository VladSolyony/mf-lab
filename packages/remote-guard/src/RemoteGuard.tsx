import { ErrorBoundary } from "@mf-lab/error-boundary";
import { type ComponentProps, type FC, type PropsWithChildren, Suspense } from "react";

type RemoteGuardProps = PropsWithChildren<{
    suspenseProps?: Omit<ComponentProps<typeof Suspense>, 'children'>;
    errorBoundaryProps?: Omit<ComponentProps<typeof ErrorBoundary>, 'children'>;
}>;

export const RemoteGuard: FC<RemoteGuardProps> = ({
    children,
    suspenseProps = {},
    errorBoundaryProps = {},
}) => {
    return (
        <Suspense {...suspenseProps}>
            <ErrorBoundary {...errorBoundaryProps}>
                {children}
            </ErrorBoundary>
        </Suspense>
    );
};
