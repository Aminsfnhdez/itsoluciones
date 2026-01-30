# 📘 Guía de Mantenimiento - IT Soluciones

Esta guía te ayudará a actualizar el contenido de la landing page de IT Soluciones sin necesidad de conocimientos avanzados de programación.

---

## 📋 Tabla de Contenidos

1. [Actualizar Información de Contacto](#actualizar-información-de-contacto)
2. [Modificar Servicios](#modificar-servicios)
3. [Actualizar Lista de Clientes](#actualizar-lista-de-clientes)
4. [Cambiar Horarios de Atención](#cambiar-horarios-de-atención)
5. [Actualizar Zona de Cobertura](#actualizar-zona-de-cobertura)
6. [Modificar Estadísticas (Sección "Sobre Nosotros")](#modificar-estadísticas-sección-sobre-nosotros)
7. [Actualizar SEO y Meta Tags](#actualizar-seo-y-meta-tags)
8. [Desplegar Cambios](#desplegar-cambios)

---

## 1. Actualizar Información de Contacto

### 📍 Ubicación
**Archivo:** `src/environments/environment.ts`

### ✏️ Qué modificar

```typescript
export const environment = {
  production: false,
  emailJsServiceId: 'YOUR_SERVICE_ID',
  emailJsTemplateId: 'YOUR_TEMPLATE_ID',
  emailJsPublicKey: 'YOUR_PUBLIC_KEY',
  
  // ⬇️ EDITAR AQUÍ
  whatsappNumber: '57xxxxxxxxxx',        // Número de WhatsApp (sin espacios ni símbolos)
  contactEmail: 'yourmail@domain.com',  // Email de contacto
  contactPhone: 'xxxxxxxxxx'             // Teléfono para mostrar (sin +57)
};
```

### 🔄 También actualizar en:
- **Schema.org (SEO):** `src/index.html` (líneas 17-18)
- **Robots.txt:** `src/robots.txt` (si cambia el dominio)

---

## 2. Modificar Servicios

### 📍 Ubicación
**Archivo:** `src/app/features/services/services-section/services-section.ts`

### ✏️ Agregar un nuevo servicio

```typescript
services = [
  // ... servicios existentes ...
  
  // ⬇️ AGREGAR NUEVO SERVICIO AQUÍ
  {
    icon: 'Shield',  // Icono de Lucide (ver: https://lucide.dev/icons)
    title: 'Seguridad Informática',
    description: 'Protección contra virus, malware y configuración de antivirus'
  }
];
```

### 🗑️ Eliminar un servicio
Simplemente borra el bloque completo del servicio que deseas remover.

### 📝 Modificar un servicio existente
Edita los campos `title` y `description` del servicio que quieras cambiar.

### 🔄 También actualizar en:
- **Schema.org:** `src/index.html` (sección `hasOfferCatalog`)

---

## 3. Actualizar Lista de Clientes

### 📍 Ubicación
**Archivo:** `src/app/features/clients/clients.ts`

### ✏️ Agregar un nuevo cliente

```typescript
clients = [
  // ... clientes existentes ...
  
  // ⬇️ AGREGAR NUEVO CLIENTE AQUÍ
  { name: 'Nombre del Cliente', icon: '🏢' }
];
```

### 🗑️ Eliminar un cliente
Borra la línea completa del cliente que deseas remover.

### 💡 Tip
Puedes usar emojis como íconos temporales. Para logos reales, necesitarás agregar imágenes en la carpeta `public/`.

---

## 4. Cambiar Horarios de Atención

### 📍 Ubicación
**Archivo:** `src/index.html` (Schema.org JSON-LD)

### ✏️ Modificar horarios

Busca la sección `openingHoursSpecification` (alrededor de la línea 45):

```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",   // ⬅️ Hora de apertura (formato 24h)
    "closes": "18:00"   // ⬅️ Hora de cierre (formato 24h)
  },
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Saturday",
    "opens": "08:00",
    "closes": "18:00"
  }
]
```

### 🔄 También actualizar en:
- **Footer:** `src/app/layout/footer/footer.html` (línea 23)

---

## 5. Actualizar Zona de Cobertura

### 📍 Ubicación
**Archivo:** `src/app/features/coverage/coverage.html`

### ✏️ Agregar/Modificar ciudades

```html
<ul class="text-slate-400 space-y-2">
  <li>✅ Apartadó (Sede Principal)</li>
  <li>✅ Carepa</li>
  <li>✅ Chigorodó</li>
  <li>✅ Turbo</li>
  <!-- ⬇️ AGREGAR NUEVAS CIUDADES AQUÍ -->
  <li>✅ Necoclí</li>
</ul>
```

---

## 6. Modificar Estadísticas (Sección "Sobre Nosotros")

### 📍 Ubicación
**Archivo:** `src/app/features/about/about.ts`

### ✏️ Actualizar estadísticas

```typescript
stats = [
  { value: '500+', label: 'Clientes Satisfechos' },  // ⬅️ Editar valor
  { value: '4+', label: 'Años de Experiencia' },     // ⬅️ Editar valor
  { value: '1200+', label: 'Equipos Reparados' },    // ⬅️ Editar valor
  { value: '98%', label: 'Tasa de Éxito' }           // ⬅️ Editar valor
];
```

---

## 7. Actualizar SEO y Meta Tags

### 📍 Ubicación Principal
**Archivo:** `src/app/app.ts`

### ✏️ Modificar meta tags por defecto

```typescript
this.metaService.updateMetaTags({
  title: 'IT Soluciones - Soporte Técnico y Tecnología en Urabá',  // ⬅️ Título
  description: 'Soluciones tecnológicas profesionales...',          // ⬅️ Descripción
  image: 'assets/og-image.jpg',  // ⬅️ Imagen para redes sociales
  url: 'https://itsoluciones.co'  // ⬅️ URL del sitio
});
```

### 📍 Schema.org (Datos Estructurados)
**Archivo:** `src/index.html`

Actualiza los siguientes campos si cambian:
- `name`: Nombre del negocio
- `description`: Descripción del negocio
- `telephone`: Teléfono
- `email`: Email
- `address`: Dirección completa
- `foundingDate`: Año de fundación

---

## 8. Desplegar Cambios

### 🔧 Desarrollo Local
Para ver los cambios en tu computadora:
```bash
ng serve
```
Abre `http://localhost:4200` en tu navegador.

### 🚀 Desplegar a Producción

#### Opción 1: Vercel (Automático)
1. Haz commit de tus cambios:
   ```bash
   git add .
   git commit -m "Actualizar [descripción del cambio]"
   git push
   ```
2. Vercel desplegará automáticamente los cambios.

#### Opción 2: Build Manual
```bash
ng build --configuration production
```
Los archivos estarán en `dist/it-soluciones/browser/`

---

## 📝 Checklist de Actualización

Antes de desplegar cambios importantes, verifica:

- [ ] Los cambios se ven correctamente en desarrollo (`ng serve`)
- [ ] La información de contacto está actualizada en todos los lugares
- [ ] El Schema.org JSON-LD está actualizado (si aplica)
- [ ] El sitemap.xml tiene la fecha correcta (`<lastmod>`)
- [ ] No hay errores en la consola del navegador
- [ ] La página se ve bien en móvil y escritorio

---

## 🆘 Solución de Problemas

### El servidor de desarrollo no inicia
```bash
# Reinstalar dependencias
npm install
ng serve
```

### Los cambios no se reflejan
1. Detén el servidor (Ctrl+C)
2. Borra la caché: `rm -rf .angular/cache`
3. Reinicia: `ng serve`

### Error de compilación
- Verifica que no hayas borrado comas (`,`) o llaves (`{}`, `[]`)
- Asegúrate de que las comillas estén balanceadas (`"..."`)

---

## 📞 Contacto para Soporte Técnico

Si necesitas ayuda con cambios más complejos, contacta al desarrollador del proyecto.

**Última actualización:** 30 de enero de 2026
