# NEGOCIO DIGITAL

Plataforma de negocio digital completa con backend (Node + Express + Prisma + Postgres) y frontend (Vite + React).

## Stack

- **Backend**: Node.js, Express, Prisma ORM, SQLite (desarrollo) / PostgreSQL (producción)
- **Frontend**: Vite, React
- **Auth**: JWT (register/login)
- **Database**: Prisma migrations, SQLite (local) / Postgres (producción)
- **CI/CD**: GitHub Actions (tests + build)
- **Deployment**: Render (backend) + Vercel (frontend)

## Features

✅ Registro e inicio de sesión (JWT)  
✅ CRUD de productos (público lista, protegido para crear/editar/borrar)  
✅ Proxy de desarrollo (frontend → backend)  
✅ Tests básicos (backend)  
✅ CI con GitHub Actions  

## Desarrollo local

### Backend

```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend se sirve en `http://localhost:5173` con proxy a `http://localhost:3000`.

## Despliegue

- **Backend**: Ver [DEPLOY_RENDER.md](DEPLOY_RENDER.md)
- **Frontend**: Ver [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md)

## Estructura

```
.
├── backend/
│   ├── prisma/schema.prisma        (DB models)
│   ├── src/
│   │   ├── auth.js                 (register/login)
│   │   ├── products.js             (CRUD endpoints)
│   │   └── middleware/auth.js      (JWT middleware)
│   ├── index.js                    (Express app)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx                 (main component)
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── docs/
│   ├── MEMORIA.md
│   ├── NOTAS.md
│   └── ROADMAP.md
└── .github/workflows/ci.yml        (GitHub Actions)
```

## API Endpoints

### Public
- `GET /status` - Health check
- `GET /api/hello` - Hello message
- `GET /products` - Listar productos

### Auth
- `POST /auth/register` - Registrarse
- `POST /auth/login` - Iniciar sesión

### Products (autenticado)
- `POST /products` - Crear producto
- `PUT /products/:id` - Editar producto
- `DELETE /products/:id` - Borrar producto

## Siguientes pasos

- [ ] Panel de administración (frontend)
- [ ] Categorías de productos
- [ ] Carrito de compra
- [ ] Integración de pagos (Stripe/PayPal)
- [ ] Email notifications
- [ ] Analítica
- [ ] Mobile app
