import { User } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updated" | "emailVerified"> & {
    createdAt: string;
    updated: string;
    emailVerified: string | null;
}