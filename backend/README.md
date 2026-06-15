Backend (Node + Express)

Setup local:

1. Copia el ejemplo de entorno y edita si lo necesitas:

```bash
cd backend
cp .env.example .env
```

2. Instala dependencias:

```bash
npm install
```

3. Genera el cliente Prisma y ejecuta migración (SQLite por defecto):

```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Ejecuta la app:

```bash
npm run dev
```

Endpoints clave:
- `POST /auth/register` {email,password,name}
- `POST /auth/login` {email,password}
- `GET /products`
- `POST /products` (autenticado)

