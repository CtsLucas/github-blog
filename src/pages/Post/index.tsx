import { useParams } from 'react-router-dom';

import { usePost } from './usePost';

import { PostContent } from './components/PostContent';
import { PostHeader } from './components/PostHeader/intex';

import { PostContainer } from './styles';
import { Loader } from '../../components/Loader';

export function Post() {
  const { id: issueId } = useParams();
  const { issue, isLoading } = usePost({ issueId });

  return (
    <PostContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PostHeader issue={issue} />
          <PostContent content={issue.body} />
        </>
      )}
    </PostContainer>
  );
}
