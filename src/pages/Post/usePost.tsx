import { useCallback, useEffect, useState } from 'react';

import { api } from '../../lib/axios';

import { Issue } from '../Home/components/Card';

interface usePostProps {
  issueId?: string;
}

export function usePost({ issueId }: usePostProps) {
  const [issue, setIssue] = useState<Issue>({} as Issue);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPostData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data: issueData } = await api.get(
        `/repos/${import.meta.env.VITE_API_GITHUB_USER}/${
          import.meta.env.VITE_API_GITHUB_REPO
        }/issues/${issueId}`
      );
      setIssue(issueData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPostData();
  }, []);

  return {
    issue,
    isLoading,
  };
}
