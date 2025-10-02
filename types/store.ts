// types/store.ts
import type { EmailListItem, EmailDetail, EmailFilter } from './email';

/**
 * State shape for the email store
 */
export interface EmailStoreState {
  emails: EmailListItem[];
  selectedEmailId: string | null;
  selectedEmailDetail: EmailDetail | null;
  filter: EmailFilter;
  readEmails: Set<string>;
  favoriteEmails: Set<string>;
}

/**
 * Actions available in the email store
 */
export interface EmailStoreActions {
  fetchEmails: () => Promise<void>;
  fetchEmailDetail: (id: string) => Promise<void>;
  selectEmail: (id: string) => void;
  markAsRead: (id: string) => void;
  toggleFavorite: (id: string) => void;
  setFilter: (filter: EmailFilter) => void;
}