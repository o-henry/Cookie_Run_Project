import React from 'react';

interface Props {
    content: React.ReactNode;
}

function ResvTemplate({ content }: Props): React.ReactElement {
    return (
        <div>
            {content}
        </div>
    );
};

export default ResvTemplate;
