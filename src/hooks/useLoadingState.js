import React, { useState, useEffect, useCallback } from 'react';

export function useLoadingState(initialState = true, minLoadTime = 500) {
  const [isLoading, setIsLoading] = useState(initialState);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const startLoading = useCallback(() => setIsLoading(true), []);

  const stopLoading = useCallback(() => {
    // Ensure loading shows for at least minLoadTime to prevent flicker
    const timeElapsed = Date.now() - startTimeRef.current;
    const remainingTime = Math.max(0, minLoadTime - timeElapsed);

    setTimeout(() => {
      setIsLoading(false);
    }, remainingTime);
  }, [minLoadTime]);

  const startTimeRef = React.useRef(Date.now());

  // Reset timer when loading starts
  useEffect(() => {
    if (isLoading) {
      startTimeRef.current = Date.now();
    }
  }, [isLoading]);

  return {
    isLoading,
    error,
    data,
    setIsLoading, // Direct setter if needed
    startLoading,
    stopLoading,
    setError,
    setData
  };
}

