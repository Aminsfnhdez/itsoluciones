# IT Soluciones - Landing Page

Landing page profesional para **IT Soluciones**, empresa líder en soporte técnico y soluciones tecnológicas en Apartadó y la región de Urabá.

Este proyecto fue desarrollado utilizando tecnologías modernas para garantizar rendimiento, escalabilidad y una excelente experiencia de usuario.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Angular 21](https://angular.dev/)
- **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Iconos:** [Lucide Angular](https://lucide.dev/guide/packages/lucide-angular)
- **Arquitectura:** Standalone Components
- **Lenguaje:** TypeScript (Strict Mode)
- **Formularios:** Angular Reactive Forms
- **Integraciones:** WhatsApp API, EmailJS (preparado)

## 🚀 Características Principales

- **Diseño Responsive:** Totalmente adaptado a móviles, tablets y escritorio.
- **Navegación Fluida:** Header sticky con menú móvil y scroll suave a secciones.
- **Modo Oscuro:** Interfaz moderna con tema oscuro y acentos neón (Cyan/Blue).
- **Secciones:**
  - **Héroe:** Presentación de alto impacto con llamadas a la acción.
  - **Servicios:** Catálogo detallado de servicios con iconos ilustrativos.
  - **Modalidades:** Diferenciación clara entre servicio a domicilio y remoto.
  - **Nosotros:** Estadísticas y trayectoria de la empresa.
  - **Clientes:** Sección de prueba social y aliados.
  - **Cobertura:** Visualización de áreas de servicio (Presencial/Remoto).
  - **Contacto:** Formulario con validaciones y botón directo a WhatsApp.
- **SEO Ready:** Servicio de Meta Tags configurado para compartir en redes sociales.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular y escalable:

```
src/app/
├── core/               # Lógica de negocio singleton
│   ├── models/         # Interfaces y tipos (Contact, Service)
│   └── services/       # Servicios globales (Meta, WhatsApp, Contact)
├── features/           # Componentes funcionales por sección
│   ├── about/
│   ├── clients/
│   ├── contact/
│   ├── coverage/
│   ├── cta/
│   ├── hero/
│   └── services/
├── layout/             # Componentes estructurales
│   ├── footer/
│   ├── header/
│   └── navbar/
└── shared/             # Componentes reutilizables
    ├── components/
    │   ├── button/
    │   ├── card/
    │   ├── input/
    │   └── section-title/
```

## ⚙️ Configuración y Ejecución

### 1. Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Aminsfnhdez/itsoluciones.git
cd it-soluciones

# Instalar dependencias
npm install
```

### 2. Variables de Entorno
Para que el formulario de contacto y los enlaces funcionen correctamente, debes configurar las variables en `src/environments/environment.ts` (y `environment.prod.ts` para producción).

```typescript
export const environment = {
  production: false,
  // Configuración de EmailJS (https://www.emailjs.com/)
  emailJsServiceId: 'TU_SERVICE_ID',
  emailJsTemplateId: 'TU_TEMPLATE_ID',
  emailJsPublicKey: 'TU_PUBLIC_KEY',
  
  // Información de Contacto
  whatsappNumber: '573000000000', // Sin símbolos ni espacios
  contactEmail: 'info@tudominio.com',
  contactPhone: '300 000 0000'
};
```

### 3. Desarrollo Local
Inicia el servidor de desarrollo con recarga automática:
```bash
ng serve
```
Navega a `http://localhost:4200/`.

### 4. Build de Producción
Genera los archivos optimizados para despliegue:
```bash
ng build --configuration production
```
Los archivos se generarán en la carpeta `dist/it-soluciones`.

## 🚀 Despliegue

### Vercel (Recomendado)
Este proyecto está optimizado para desplegarse en Vercel sin configuración adicional.
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta `vercel` en la raíz del proyecto.
3. Sigue las instrucciones en consola.

O conecta tu repositorio de GitHub directamente en el dashboard de Vercel.

### Netlify / Otros
Para cualquier hosting estático:
1. Ejecuta el comando de build.
2. Sube el contenido de la carpeta `dist/it-soluciones/browser` (asegúrate de configurar las reglas de reescritura SPA si es necesario).

## 📱 Contacto y Soporte

**IT Soluciones** - "Solución de Sistemas a tu Alcance"
- **Ubicación:** Apartadó, Antioquia
- **Email:** itsinformaticos@gmail.com
- **Teléfono:** +57 321 786 5558

---
Desarrollado con ❤️ para IT Soluciones.
