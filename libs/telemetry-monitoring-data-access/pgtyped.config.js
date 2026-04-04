/** @type {import('@pgtyped/cli').IConfig} */
module.exports = {
  transforms: [
    {
      mode: 'sql',
      include: 'src/lib/queries/**/*.sql',
      emitTemplate: '{{dir}}/__generated__/{{name}}.queries.ts',
    },
  ],

  srcDir: './',

  db: {
    host:     process.env['DB_HOST']     || 'localhost',
    port:     parseInt(process.env['DB_PORT'] || '5432', 10),
    dbName:   process.env['DB_NAME']     || 'buddy',
    user:     process.env['DB_USER']     || 'buddy',
    password: process.env['DB_PASSWORD'] || 'buddy_dev',
  },
};
