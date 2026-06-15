# Memoria del proyecto — NEGOCIO DIGITAL

Fecha de creación: 2026-06-15
Última actualización: 2026-06-15

## Propósito
Plataforma SaaS de negocio digital completa con backend y frontend, lista para producción.

## Estado actual
✅ Estructura y Git completados
✅ Backend (Node + Express + Prisma + SQLite/Postgres)
✅ Frontend (Vite + React con proxy)
✅ Autenticación (JWT register/login)
✅ CRUD de productos (público para listar, protegido para crear/editar/borrar)
✅ CI/CD (GitHub Actions)
✅ Tests básicos (backend)
✅ Documentación de despliegue (Render + Vercel)

## Stack técnico final
- **Backend**: Node.js 18+, Express, Prisma ORM, SQLite (dev) / PostgreSQL (prod)
- **Frontend**: Vite, React 18, proxy de desarrollo
- **Auth**: JWT con refresh en futuro
- **DB**: Prisma migrations automáticas
- **CI**: GitHub Actions (tests + build)
- **Deployment**: Render.com (backend) + Vercel (frontend)

## Decisiones importantes
1. **SQLite** para desarrollo rápido (sin dependencias externas)
2. **PostgreSQL** para producción (escalable)
3. **JWT** por simplicidad (sustitución fácil por Auth0/Supabase si se necesita)
4. **Render + Vercel** por gratuidad inicial y escalado automático

## Repositorio
- GitHub: https://github.com/sonidointro-pixel/NEGOCIO-DIGITAL
- Rama principal: `main`
- Deploy automático: pushes a `main` triggean CI y redeploy

## Siguiente fase (post-MVP)
- [ ] Panel administrativo (CRUD UI mejorado)
- [ ] Integración de pagos (Stripe)
- [ ] Notificaciones por email
- [ ] Analítica avanzada
- [ ] Mobile app (React Native)
- [ ] Caché y optimización (Redis)

## Notas técnicas
- Cambiar `JWT_SECRET` en producción (Render env var)
- Usar variables de entorno para URLs de API (Vercel)
- Prisma migrations automáticas en deploy (`prisma migrate deploy`)
- Tests en CI ejecutan antes de build

## Contacto / Responsable
- Desarrollador: GitHub Copilot

## Historial rápido
- 2026-06-15 01:00: Estructura inicial
- 2026-06-15 01:30: Backend + Frontend scaffold
- 2026-06-15 02:00: Autenticación + CRUD + proxy
- 2026-06-15 02:30: Despliegue (Render + Vercel) completado


