// types/composables.ts
import { Ref } from 'vue';
import type { EmailListItem, EmailDetail, ApiState } from './email';

/**
 * Return type of useEmails composable
 */
export interface UseEmailsReturn {
  emails: Readonly<Ref<EmailListItem[]>>;
  loading: Readonly<Ref<boolean>>;
  error: Readonly<Ref<string | null>>;
  fetchEmails: () => Promise<void>;
  refresh: () => Promise<void>;
}

/**
 * Return type of useEmailDetail composable
 */
export interface UseEmailDetailReturn {
  email: Readonly<Ref<EmailDetail | null>>;
  loading: Readonly<Ref<boolean>>;
  error: Readonly<Ref<string | null>>;
  fetchEmail: (id: string) => Promise<void>;
}