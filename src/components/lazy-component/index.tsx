import React, { Suspense } from 'react';
import Loading from '@/components/loading';
export default function LazyComponent(props: any) {
    const { component: SelfComponent } = props;
    return (
        <Suspense fallback={<Loading />}>
            <SelfComponent />
        </Suspense>
    );
}
