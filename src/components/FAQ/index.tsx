import React, { ReactNode } from 'react';
import Details from '@theme/Details';

export interface FAQProps {
  id: string;
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function FAQ({
  id,
  question,
  children,
  defaultOpen = false,
}: FAQProps): React.JSX.Element {
  const summaryHeader = (
    <summary style={{ cursor: 'pointer' }}>
      <a href={`#${id}`} style={{ textDecoration: 'none' }}>
        {question}
      </a>
    </summary>
  );

  return (
    <Details
      id={id}
      open={defaultOpen}
      summary={summaryHeader}
    >
      {children}
    </Details>
  );
}
