import { useState } from 'react';

const useGitHubAPI = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (userName) => {
    setLoading(true);

    try {
      const userResponse = await fetch(`https://api.github.com/users/${userName}`);
      const reposResponse = await fetch(`https://api.github.com/users/${userName}/repos`);

      if (userResponse.ok && reposResponse.ok) {
        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setUserData({ user: userData, repos: reposData });
        setError('');
      } else {
        setError('Error getting user information or repository list. Try again.');
        setUserData(null);
      }
    } catch (err) {
      setError('Error getting user information or repository list. Try again.');
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return { userData, loading, error, fetchData };
};

export { useGitHubAPI };
