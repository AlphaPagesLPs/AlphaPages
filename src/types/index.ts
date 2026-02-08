export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: 'E-commerce' | 'Health' | 'Infoproducts' | 'Real Estate';
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
