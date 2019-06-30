import React, { useState, memo } from 'react';
import { Notification, Delete } from 'rbx';

interface Query5PostProcessingProps {
  progress: number;
  cycles: number;
}

export const Query5PostProcessing = memo(
  ({ progress, cycles }: Query5PostProcessingProps) => {
    const [isHidden, setIsHidden] = useState(false);

    const handleClick = () => setIsHidden(!isHidden);

    const isInactive = progress === 0 && cycles === 0;
    const isFinished = progress === cycles;

    if (isInactive || isHidden || isFinished) {
      return null;
    }

    console.log(progress, cycles);

    return (
      <Notification className="sticky">
        <Delete as="button" onClick={handleClick} />
        {progress} / {cycles} <br />
        Currently post-processing Mine Details... please stand by.
      </Notification>
    );
  },
);
