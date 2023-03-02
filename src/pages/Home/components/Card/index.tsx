import { formatDifferenceDate } from '../../../../util/formatDifferenceDate';

import { CardContainer } from './styles';

export interface Issue {
  id: number;
  title: string;
  body: string;
  user: {
    login: string;
  };
  url: string;
  created_at: string;
  updated_at: string;
  coments: number;
}
interface CardProps {
  issue: Issue;
}

export function Card({ issue }: CardProps) {
  return (
    <CardContainer>
      <div className="title">
        <strong>{issue.title}</strong>
        <span>Há {formatDifferenceDate(issue.updated_at)}</span>
      </div>
      <div className="description">
        <p>{issue.body}</p>
      </div>
    </CardContainer>
  );
}
