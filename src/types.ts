export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
  spanClass: string;
  aspectClass: string;
}

export interface JournalEntry {
  id: string;
  title: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
  link: string;
}

export interface ExplorationItem {
  id: string;
  title: string;
  image: string;
  rotation: string;
  link: string;
}
