import { Timestamp } from "firebase/firestore";

export interface iUser {
    uid: string
    name: string
    email: string
    isNew?: boolean
    profilePictureUrl?: string;
    bio?: string;
    interests?: string[];          // User selected interests
    relationshipGoal?: string;     // Main goal
    personalityTraits?: string[]; // Optional traits
    faithGoals?: string[];        // Christian development goals
    allowContactImport?: boolean;  // True if allowed
    createdAt?: Timestamp
}