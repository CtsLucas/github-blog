import removeMarkdown from 'remove-markdown';

import { User } from '../..';
import { formatDifferenceDate } from '../../../../util/formatDifferenceDate';

import { CardContainer } from './styles';

export interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  user: User;
  html_url: string;
  created_at: string;
  updated_at: string;
  comments: number;
}
interface CardProps {
  issue: Issue;
}

export function Card({ issue }: CardProps) {
  return (
    <CardContainer to={`/post/${issue.number}`}>
      <div className="title">
        <strong>{issue.title}</strong>
        <span>Há {formatDifferenceDate(issue.updated_at)}</span>
      </div>
      <div className="description">
        <p>{removeMarkdown(issue.body)}</p>
      </div>
    </CardContainer>
  );
}
