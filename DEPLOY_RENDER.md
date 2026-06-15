# Render.com Backend Deployment

## Prerequisites
- Account en https://render.com
- GitHub repo con acceso a Render

## Steps

1. Crea PostgreSQL database en Render (free tier disponible):
   - Nombre: `negocio-digital-db`
   - Region: similar a donde desplegarás

2. Copia la URL de conexión (`DATABASE_URL`).

3. Crea un Web Service:
   - Conecta tu repo GitHub: `sonidointro-pixel/NEGOCIO-DIGITAL`
   - Name: `negocio-digital-backend`
   - Environment: Node
   - Build Command: `npm install && npx prisma generate && npx prisma migrate deploy`
   - Start Command: `npm start`
   - Add Environment Variable:
     - `DATABASE_URL`: (Postgres URL de arriba)
     - `JWT_SECRET`: cambiar a algo seguro
     - `NODE_ENV`: production

4. Deploy automático en push a `main`.

## Local (pre-production test)

Para usar Postgres local:
```bash
# Instala PostgreSQL
# Crea base de datos 'negocio_digital'
# Actualiza .env
DATABASE_URL="postgresql://user:password@localhost:5432/negocio_digital"
npx prisma generate
npx prisma migrate deploy
npm start
```
