import { db } from "@/lib/db";

export interface Property {
  id: string;
  title: string;
  type: "daily-rental" | "airbnb" | "hostel";
  location: string;
  price: number;
}

export const propertiesService = {
  async getAll(): Promise<Property[]> {
    // Core property fetch wrapper
    return db.properties.findMany();
  },
  
  async getById(id: string): Promise<Property | null> {
    return db.properties.findUnique({ where: { id } });
  },
};
