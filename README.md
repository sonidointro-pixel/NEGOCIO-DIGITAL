# NEGOCIO DIGITAL

Proyecto inicial "NEGOCIO DIGITAL".

Estructura creada:
- backend/
- frontend/
- docs/
- scripts/
- tests/

Scaffold actual:
- backend: Node + Express, endpoint `GET /status` y `GET /api/hello`.
- frontend: Vite + React minimal, solicita `/api/hello`.

Comandos rápidos:

- Backend:
```bash
cd backend
npm install
npm start
npm test
```

- Frontend:
```bash
cd frontend
npm install
npm run dev
```

CI: GitHub Actions ejecuta tests backend y build frontend en pushes a `main`.

Siguientes pasos sugeridos:
- Añadir autenticación y base de datos.
- Implementar CRUD y panel admin.
