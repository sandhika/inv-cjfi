export type Category = {
  id: number;
  name: string;
  description:string;

  createdAt:string;
  updatedAt:string;

  products  :  Product[];

};



export type Product = {
    id: number;
    name: string;
    description:string;
    qty: number;
    price:number;
    image:string;
    category_id:number;
    createdAt:string;
    updatedAt:string;
    category:Category;
  };
  
