// @eslint-disable no-param-reassign
import React from 'react';

/**
 * @desc
 * Reference: https://medium.com/trabe/keep-two-refs-in-sync-using-a-custom-react-hook-c47c61e43e8f
 */

export default function useSyncedRef<T>(ref: any) {
  // create a new ref
  const innerRef = React.useRef<T>(undefined as any);

  // keep both refs in sync
  React.useEffect(() => {
    if (!ref) return;

    // handle callback refs
    if (typeof ref === 'function') {
      ref(innerRef.current);
    }
    // handle object refs
    else {
      // eslint-disable-next-line no-param-reassign
      ref.current = innerRef.current;
    }
  }, [innerRef.current]);

  // return the new ref
  return innerRef as React.MutableRefObject<T>;
}
