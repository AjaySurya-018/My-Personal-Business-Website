export interface Event {
  type: 'youtube' | 'video' | 'image';
  url: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
}