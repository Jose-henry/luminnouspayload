// src/access/access.ts

import { Access, FieldAccess, AccessResult } from 'payload';

// Check if the current user is an admin
export const isAdmin: FieldAccess = ({ req: { user } }) => {
    return user?.roles?.includes('admin') ?? false;
  };
  
  // Check if the current user is an admin or the user themselves
  export const isAdminOrSelf: FieldAccess = ({ req: { user }, id }) => {
    return user?.roles?.includes('admin') || user?.id === id;
  };
// Field-level access to ensure only admins can create or update certain fields
export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
  return user?.roles?.includes('admin') ? true : false;
};
