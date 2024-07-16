export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  imageUrl: string | null;
  description: string | null;
  name: string | null;
};
