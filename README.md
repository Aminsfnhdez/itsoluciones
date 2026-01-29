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

## ⚙️ Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Aminsfnhdez/itsoluciones.git
   cd it-soluciones
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo:**
   ```bash
   ng serve
   ```
   Navega a `http://localhost:4200/`.

4. **Construir para producción:**
   ```bash
   ng build --configuration production
   ```
   Los archivos generados estarán en la carpeta `dist/it-soluciones`.

## 📱 Contacto y Soporte

**IT Soluciones** - "Solución de Sistemas a tu Alcance"
- **Ubicación:** Apartadó, Antioquia
- **Email:** itsinformaticos@gmail.com
- **Teléfono:** +57 321 786 5558

---
Desarrollado con ❤️ para IT Soluciones.
