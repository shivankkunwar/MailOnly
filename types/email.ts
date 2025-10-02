export interface EmailFrom {
    name : string;
    email: string;
}

export interface EmailListItem {
    id: string,
    from: EmailFrom,
    date: number,
    subject: string,
    short_description: string,
}

export interface EmailDetail extends EmailListItem {
    body: string;
}

export interface EmailListResponse {
    list: EmailListItem[];
    total?: number;
}

export interface EmailWithState extends EmailListItem {
    isRead: boolean;
    isFavorite: boolean;
}


export type EmailFilter = "all" | 'read' | 'unread' | 'favourites';

export type EmailViewMode = 'list' | 'split' | 'full';

export interface ApiState<T> {
    data: T| null;
    loading: boolean;
    error: string | null;
}

export type EmailId = EmailListItem['id'];
