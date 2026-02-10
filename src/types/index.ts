export interface Project {
  siteUrl: string;
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  link: string;
}
