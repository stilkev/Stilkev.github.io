# Plantilla de portafolio para GitHub Pages

Plantilla estática hecha con HTML, CSS y JavaScript. No necesita instalar programas ni frameworks.

## Archivos

- `index.html`: contenido, textos, enlaces y tarjetas de proyectos.
- `styles.css`: diseño adaptable y colores centralizados al principio en `:root`.
- `script.js`: menú móvil, animaciones de entrada, filtros de proyectos, año automático y navegación activa.

## 1. Personaliza tu contenido

Abre `index.html` y busca/reemplaza:

- `Tu Nombre` / `TU NOMBRE`: tu nombre profesional.
- `TU-CORREO@EJEMPLO.COM`: tu correo.
- `TU-USUARIO`: tu usuario de GitHub, LinkedIn o ArtStation.
- `TU-REPOSITORIO`: repositorio de cada proyecto.
- `TU-PORTAFOLIO-3D.com`: enlace real de tu trabajo 3D.
- Los textos de perfil, experiencia, proyectos y habilidades.
- Los años y los títulos de cada proyecto.

Los enlaces de ejemplo deben reemplazarse antes de publicar. Si no usas ArtStation, elimina ese enlace o sustitúyelo por la plataforma que uses.

## 2. Añadir proyectos

En `index.html`, dentro de `<div class="project-grid">`, duplica un bloque completo `<article class="project-card reveal" ...> ... </article>`.

Cambia:
- `data-category="unity"` por `qa`, `unity` o `3d` para que funcione el filtro.
- El nombre, descripción, etiquetas, fecha y enlaces.
- La ilustración CSS por una captura real, si lo prefieres.

Para usar una imagen propia, guarda por ejemplo `images/proyecto-01.jpg` dentro del repositorio y reemplaza el contenido visual del enlace de proyecto por:

```html
<img class="project-cover" src="images/proyecto-01.jpg" alt="Captura del proyecto">
```

Añade al final de `styles.css`:

```css
.project-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

Si usas una imagen, conserva las clases `project-image image-purple` (o la variante que prefieras) en el enlace contenedor. Ajusta el texto alternativo para describir la imagen.

## 3. Cambiar los colores

Al principio de `styles.css` encontrarás:

```css
:root {
  --bg: #090b12;
  --surface: #10131e;
  --surface-2: #151927;
  --text: #f3f4fb;
  --muted: #a1a6b9;
  --subtle: #70778d;
  --line: rgba(195, 202, 255, .13);
  --accent: #a78bfa;
  --accent-2: #54e5cf;
  --accent-3: #ff9b71;
}
```

- `--bg`: fondo general.
- `--text`: texto principal.
- `--muted`: texto secundario.
- `--accent`: color de acento principal.
- `--accent-2`: segundo color de acento.
- `--accent-3`: tercer color de acento.
- `.ambient-left` y `.ambient-right`: resplandores laterales; cambian con los colores de acento.

Puedes probar combinaciones como violeta + cian, azul + rosa o naranja + verde menta. Para un aspecto coherente, conserva un fondo oscuro y limita los acentos a dos o tres colores.

## 4. Publicar con GitHub Pages

1. Crea un repositorio en GitHub. Para una dirección del tipo `https://TU-USUARIO.github.io/`, el repositorio debe llamarse exactamente `TU-USUARIO.github.io`.
2. Sube `index.html`, `styles.css`, `script.js` y `README.md` a la raíz del repositorio.
3. En GitHub, abre **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/(root)`, y guarda.
6. Espera a que termine la publicación y abre la dirección que GitHub Pages muestra en esa pantalla.

Si usas un repositorio con otro nombre, la URL será normalmente `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## 5. Consejos antes de publicarlo

- Prueba la página en móvil y escritorio.
- Comprueba que todos los enlaces llevan al destino correcto.
- Usa imágenes optimizadas en JPG, PNG o WebP para que la web cargue rápido.
- Añade texto alternativo descriptivo a las imágenes.
- Si tienes un PDF de tu CV, colócalo en la raíz como `TU-CV.pdf` o cambia el enlace.
- La fuente se carga desde Google Fonts; si prefieres no depender de un servicio externo, elimina los enlaces de Google Fonts del HTML y define fuentes del sistema en el CSS.
