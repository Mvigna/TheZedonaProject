import React from 'react';
import { ProfileCard } from '../components/ProfileCard';
import type { Profile } from '../types';

interface Props {
  profile: Profile;
  onCharacteristicChange: (index: number, value: number) => void;
  isAuthenticated: boolean;
}

export function Dashboard({ profile, onCharacteristicChange, isAuthenticated }: Props) {
  return (
    <div className="space-y-8">
      <ProfileCard
        profile={profile}
        onCharacteristicChange={onCharacteristicChange}
        isAuthenticated={isAuthenticated}
      />
    </div>
  );
}