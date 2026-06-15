# Vercel Frontend Deployment

## Prerequisites
- Account en https://vercel.com
- GitHub repo con acceso a Vercel

## Steps

1. Conecta tu repo en Vercel:
   - Ve a https://vercel.com/new
   - Import GitHub project: `sonidointro-pixel/NEGOCIO-DIGITAL`
   - Framework Preset: Vite
   - Root Directory: `frontend`

2. Project Settings → Environment Variables:
   - `VITE_API_URL`: URL del backend (ej: `https://negocio-digital-backend.onrender.com`)
   - (Vercel automáticamente setea NODE_ENV=production)

3. Deploy automático en push a `main`.

## Testing pre-deploy

Asegúrate que frontend construye sin errores:
```bash
cd frontend
npm install
npm run build
npm run preview
```

## Conectar frontend al backend remoto

En `frontend/src/App.jsx`, actualiza la URL de fetch:
```javascript
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
fetch(`${apiUrl}/api/hello`)...
```

O en un archivo `.env.production`:
```
VITE_API_URL=https://your-backend-url.onrender.com
```
