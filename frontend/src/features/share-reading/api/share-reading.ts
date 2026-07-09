import { getBackendUrl } from '@/shared/config/api';
import type { CreateSharePayload, SharedReading } from '../model/types';

export async function createShare(payload: CreateSharePayload): Promise<{ id: string }> {
  const response = await fetch('/api/shares', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    const message =
      typeof body.message === 'string'
        ? body.message
        : 'Unable to create a share link. Please try again later.';
    throw new Error(message);
  }

  return response.json();
}

export async function getShare(shareId: string): Promise<SharedReading> {
  const response = await fetch(`/api/shares/${shareId}`);

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    const message =
      typeof body.message === 'string' ? body.message : 'Share not found.';
    throw new Error(message);
  }

  return response.json();
}

export async function getShareServer(shareId: string): Promise<SharedReading | null> {
  const response = await fetch(`${getBackendUrl()}/api/shares/${shareId}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error('Failed to load share');
  }

  return response.json();
}
