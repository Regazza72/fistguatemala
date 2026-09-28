# FIST S.A. — Landing page

Sitio de **FIST S.A. (Fuerza Integral de Seguridad Total)**, seguridad privada en Ciudad de Guatemala.
Réplica en código propio del prototipo hecho en Lovable (el código original de Lovable está en la rama `original`).

**Stack:** React 19 + TypeScript + Vite + Tailwind CSS 4. Compila a archivos estáticos (HTML/CSS/JS).

## Ramas

| Rama       | Uso                                                  |
| ---------- | ---------------------------------------------------- |
| `original` | Código exportado de Lovable, sin tocar (referencia). |
| `dev`      | Trabajo diario y pruebas.                            |
| `main`     | Versión estable: solo lo que ya funciona.            |

## Comandos

```bash
npm install      # instalar dependencias (una vez)
npm run dev      # servidor local en http://localhost:5173
npm run build    # genera la carpeta dist/ lista para subir
npm run preview  # prueba local del build
```

## Estructura

```
index.html                 título, meta tags, fuente Archivo
src/
  data.ts                  ← textos, teléfonos, servicios, clientes, plazas (editar aquí)
  App.tsx                  todas las secciones de la página
  styles.css               colores y tipografía (variables en :root)
  components/
    CotizacionForm.tsx     formulario de cotización → WhatsApp
    EmpleoSection.tsx      sección y formulario de empleo → WhatsApp
    WhatsAppButton.tsx     botón flotante
  assets/                  logo, fotos y logos de clientes
public/                    favicon, robots.txt
```

## Despliegue en el hosting de Tigo (cPanel / FTP)

1. `npm run build`
2. Subir **el contenido** de la carpeta `dist/` (no la carpeta en sí) a `public_html/`.
3. Listo. Las rutas son relativas, así que también funciona dentro de una subcarpeta.
