import React from 'react'
import 'sass/main.scss';
import classNames from 'classnames';

interface Props {
    // style
    style?: string;
    // content
    children: string;
}

function Content({ style, children }: Props): React.ReactElement {
    return (
        <div className={classNames('Content', style)}>{children}</div>
    )
}

Content.defaultProps = {
    style: ''
};

export default Content