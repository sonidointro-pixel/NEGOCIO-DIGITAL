# NEGOCIO DIGITAL - Guía de Despliegue Completa

## 🚀 Despliegue Express en 5 minutos

### Paso 1: Preparar Backend (Render.com)

1. Ve a https://render.com y regístrate
2. Crea un PostgreSQL database (free tier):
   - Nombre: `negocio-digital`
   - Region: `Frankfurt` (o tu región)
   - Nota la `DATABASE_URL` (parece: `postgresql://user:pass@host:5432/db`)

3. Crea un Web Service:
   - Conecta GitHub: `https://github.com/sonidointro-pixel/NEGOCIO-DIGITAL`
   - Name: `negocio-digital-backend`
   - Environment: `Node`
   - Build Command:
     ```
     npm install && npx prisma generate && npx prisma migrate deploy
     ```
   - Start Command:
     ```
     npm start
     ```
   - Environment Variables:
     ```
     DATABASE_URL = [tu postgresql URL]
     JWT_SECRET = [genera una contraseña segura]
     NODE_ENV = production
     ```

4. Deploy → Render automáticamente deployará en cada push a `main`

5. Anota la URL del backend (ej: `https://negocio-digital-backend.onrender.com`)

### Paso 2: Preparar Frontend (Vercel)

1. Ve a https://vercel.com y regístrate con GitHub
2. Importa proyecto:
   - Click "Add New..." → "Project"
   - Selecciona `sonidointro-pixel/NEGOCIO-DIGITAL`
   - Framework: `Vite`
   - Root Directory: `frontend`
   - Environment Variables:
     ```
     VITE_API_URL = https://negocio-digital-backend.onrender.com
     ```

3. Deploy automático en cada push a `main`

4. Anota la URL de Vercel (ej: `https://negocio-digital.vercel.app`)

### Paso 3: Configurar Frontend para producción

Edita `frontend/src/App.jsx` y usa la variable de entorno:

```javascript
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

useEffect(() => {
  fetch(`${apiUrl}/api/hello`)
    .then(r => r.json())
    .then(d => setMsg(d.message))
    .catch(() => setMsg('Error conectando al backend'))
}, [])
```

### Paso 4: Testing

1. **Local** (sin cambios):
   ```bash
   cd backend && npm run dev &
   cd ../frontend && npm run dev
   ```

2. **Render** (espera a que se despliegue):
   - Ve a tu URL de Render
   - Deberías ver `/status` → `{status: ok}`

3. **Vercel** (espera a que se despliegue):
   - Ve a tu URL de Vercel
   - Deberías ver el mensaje del backend

### Troubleshooting

- **Backend no inicia**: Verifica que `DATABASE_URL` sea válida en Render
- **Frontend no conecta**: Verifica que `VITE_API_URL` esté en Vercel y sea correcta
- **Prisma error**: Asegúrate que el Build Command en Render incluya `npx prisma migrate deploy`

### Monitoreo

- **Render**: Dashboard → Logs
- **Vercel**: Deployments → Logs

---

¡Listo! Tu app está en producción. 🎉
