# CS - P5 Digital Academy - Package Manager - JS

## Node.js - NPM

npm es el manager de paquetes de Node.js. Es el sistema de gestión de dependencias para proyectos de Node.js.

### ¿Qué hace exactamente?
- Gestiona dependencias: Instala y actualiza paquetes de JavaScript
- Gestiona dependencias de Node.js: Maneja dependencias como npm, node, yarn, pnpm
- Gestiona dependencias de otros proyectos: Instala dependencias de otros proyectos en el mismo proyecto

### Ejemplos de uso
```
# Instalar una dependencia
npm install package-name

# Actualizar dependencias
npm update package-name

# Ver dependencias instaladas
npm list package-name

# Ver dependencias de un proyecto
npm list package-name
```

### Ejercicio recomendado
Iniciar package.json

```
npm init
```

Part 1 - Sass
Instalar dependencia de Sass a nivel de proyecto

```
npm install -D sass
```

Configurar los scripts de Sass en package.json

```
"sass": "sass ./src/sass/styles.scss ./src/css/styles.css",
"sass-w": "sass --watch ./src/sass/styles.scss ./src/css/styles.css"
```

Probar creando y añadiendo estilo al archivo de sass `styles.scss`
Ejecutar sass

```
npm run sass
or using watch mode
npm run sass-w
```