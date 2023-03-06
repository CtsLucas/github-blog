import {
  InvalidEvent,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from 'axios';

import { api } from '../../lib/axios';

import { Issue } from './components/Card';
import { User } from './components/Profile';

export interface Issues {
  total_count: number;
  incomplete_results: boolean;
  items: Issue[];
}

export function useHome() {
  const [user, setUser] = useState<User>({} as User);
  const [issues, setIssues] = useState<Issues>({} as Issues);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredIssues = useMemo(
    () =>
      issues?.items?.filter((issue) =>
        issue.title.toLowerCase().includes(deferredSearchTerm.toLowerCase())
      ),
    [issues, deferredSearchTerm]
  );

  const fetchGitHubData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [{ data: userData }, { data: issuesData }] = await axios.all([
        api.get(`/users/${import.meta.env.VITE_API_GITHUB_USER}`),
        api.get(
          `/search/issues?q=+label:published+repo:${
            import.meta.env.VITE_API_GITHUB_USER
          }/${import.meta.env.VITE_API_GITHUB_REPO}`
        ),
      ]);

      setUser(userData);
      setIssues(issuesData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGitHubData();
  }, [fetchGitHubData]);

  const handleChangeSearchTerm = useCallback(
    (event: InvalidEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  return {
    user,
    issues,
    searchTerm,
    filteredIssues,
    isLoading,
    handleChangeSearchTerm,
  };
}
