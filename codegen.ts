import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'libs/shared/src/lib/graphql/schema.graphql',
  documents: [
    'apps/buddy-frontend/src/app/features/dashboard/directives/*.graphql',
    'apps/buddy-frontend/src/app/features/dashboard/dashboard.graphql',
  ],
  generates: {
    'libs/data-access/src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        scalars: { ID: 'string' },
      },
    },
  },
};

export default config;
