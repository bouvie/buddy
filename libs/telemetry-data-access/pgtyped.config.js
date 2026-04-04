/** @type {import('@pgtyped/cli').IConfig} */
module.exports = {
  // ── Transformation SQL → TypeScript ────────────────────────────────────────
  transforms: [
    {
      mode: 'sql',
      include: 'src/lib/queries/**/*.sql',
      // Fichiers générés co-localisés dans __generated__/ — non commités
      emitTemplate: '{{dir}}/__generated__/{{name}}.queries.ts',
    },
  ],

  srcDir: './',

  // ── Connexion DB (variables d'environnement avec fallback dev) ─────────────
  // La DB doit être UP avant de lancer pgtyped (Docker assure ça).
  db: {
    host:     process.env['DB_HOST']     || 'localhost',
    port:     parseInt(process.env['DB_PORT'] || '5432', 10),
    dbName:   process.env['DB_NAME']     || 'buddy',
    user:     process.env['DB_USER']     || 'buddy',
    password: process.env['DB_PASSWORD'] || 'buddy_dev',
  },
};
