// src/collections/Users.ts

import type { CollectionConfig } from 'payload';
import { isAdmin, isAdminOrSelf } from '../access/access';

const isDevEnvironment = process.env.NODE_ENV === 'development';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // Allow authentication based on email and password
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // In development, allow creation and all users are admins by default
    create: isDevEnvironment ? () => true : () => false,
    // Allow read and update access for admins or self in both environments
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    // Only admins can delete in both environments
    delete: isAdmin,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: isDevEnvironment ? ['admin'] : [], // Default to admin only in dev
      access: {
        create: isDevEnvironment ? () => true : () => false, // Allow setting roles only in dev
        update: isAdminOrSelf,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
    },
    // Add any other necessary fields here...
  ],
};

export default Users;
