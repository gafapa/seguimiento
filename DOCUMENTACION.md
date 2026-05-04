# 📚 Planificador Portable

## Guía de Usuario

---

## 🎯 ¿Qué es el Planificador Portable?

Imagina poder ver todo tu curso escolar en un vistazo. Saber exactamente qué día empiezas el tema de ecuaciones, cuándo terminas geometría, y tener la tranquilidad de que todo cabe en el tiempo disponible.

El **Planificador Portable** hace exactamente eso. Es una herramienta pensada para docentes que quieren:

- **Visualizar** su planificación anual en un calendario claro
- **Calcular automáticamente** qué fechas corresponden a cada unidad
- **Ajustar sobre la marcha** cuando cambian los planes
- **Tener en cuenta** festivos y días sin clase

Lo mejor: funciona directamente en tu navegador, sin instalaciones, y tus datos se guardan automáticamente.

---

## 🚀 Primeros pasos

### Crear tu primera asignatura

1. Abre la aplicación en tu navegador
2. Verás la pantalla **"Mis Asignaturas"** con tus planificaciones (vacía si es la primera vez)
3. Haz clic en el botón púrpura **"+ Nueva Asignatura"**

¡Ya está! Se ha creado una asignatura nueva con valores de ejemplo. Ahora vamos a personalizarla.

### Configurar los datos básicos

Al entrar en tu asignatura, verás un panel a la izquierda con la configuración:

| Campo                  | Qué poner                                                |
| ---------------------- | -------------------------------------------------------- |
| **Nombre**             | El nombre de tu asignatura (ej: "Matemáticas 3º ESO")    |
| **Fecha Inicio Curso** | El primer día de clase (ej: 08/09/2025)                  |
| **Modo Planificación** | "Por Unidades" para empezar (lo explicamos más adelante) |

### Configurar tu horario semanal

Aquí indicas cuántas sesiones de esta asignatura tienes cada día de la semana:

```
Lunes:     2 sesiones
Martes:    1 sesión  
Miércoles: 0 sesiones (no tengo clase este día)
Jueves:    2 sesiones
Viernes:   1 sesión
```

El planificador usará esta información para distribuir tu contenido solo en los días que realmente tienes clase.

---

## 📖 Trabajando con Unidades Didácticas

### Añadir unidades

1. En el panel izquierdo, verás la sección **"Unidades Didácticas"**
2. Ya tienes una unidad de ejemplo ("Unidad 1")
3. Para añadir más, pulsa **"+ Añadir Unidad"** en la parte inferior

### Configurar cada unidad

Cada unidad tiene dos campos:

- **Sesiones Base**: El número de clases que necesitas para dar el contenido principal
- **Extra**: Sesiones adicionales para refuerzo, ampliación o imprevistos

**Ejemplo práctico:**
- Tienes 3 horas semanales de Matemáticas
- La Unidad 1 (Números enteros) necesita unas 15 sesiones base
- Añades 3 sesiones extra por si necesitas repasar

El calendario de la derecha se actualiza al instante, mostrándote que la Unidad 1 ocupará aproximadamente 6 semanas.

### El calendario visual

A la derecha de la pantalla verás un calendario con los meses del curso (septiembre a junio). Cada celda del calendario muestra:

- **El número del día**
- **El nombre de la unidad** que toca ese día
- **El color de la unidad** para identificarla visualmente
- **Cuántas sesiones** hay ese día

Si un día tiene varias sesiones y se reparten entre dos unidades, verás un degradado de colores.

---

## 🗓️ Gestión de Festivos

Los festivos son importantes porque afectan a tu planificación. Si tienes un puente en octubre, no querrás que el sistema cuente ese día como lectivo.

### Marcar festivos manualmente

1. Pulsa el botón **"✏️ Festivos"** en la barra superior
2. El botón se pondrá púrpura indicando que estás en modo edición
3. Haz clic en cualquier día del calendario para marcarlo como festivo
4. Haz clic de nuevo para desmarcarlo
5. Cuando termines, pulsa **"✅ Fin Selección"**

Los días festivos aparecerán con un borde discontinuo y la palabra "Festivo".

### Compartir festivos entre asignaturas

¿Tienes 5 asignaturas y no quieres marcar los festivos 5 veces? Usa la función de exportar/importar:

1. En la primera asignatura, marca todos los festivos
2. Pulsa **"⬇️ Festivos"** para descargar un archivo JSON
3. En las demás asignaturas, pulsa **"⬆️ Festivos"** y selecciona ese archivo
4. ¡Todos los festivos se importan automáticamente!

> 💡 **Consejo**: Crea un archivo de festivos al inicio de curso y úsalo en todas tus asignaturas.

---

## 📊 Dos modos de planificación

El Planificador ofrece dos niveles de detalle según tus necesidades.

### Modo "Por Unidades" (Simple)

Este es el modo por defecto. Defines cuántas sesiones tiene cada unidad y listo.

**Ideal para:**
- Planificación general a principio de curso
- Asignaturas donde no necesitas desglosar por actividades
- Tener una visión rápida del curso

### Modo "Por Actividades" (Detallado)

En este modo, cada unidad se divide en actividades individuales. Por ejemplo:

```
Unidad 1: Números enteros
├── Actividad 1.1: Introducción (3 sesiones)
├── Actividad 1.2: Operaciones básicas (5 sesiones)
├── Actividad 1.3: Problemas aplicados (4 sesiones)
└── Actividad 1.4: Evaluación (2 sesiones)
```

**Ideal para:**
- Programaciones detalladas
- Cuando necesitas saber exactamente qué día haces cada actividad
- Memorias o documentación oficial

### Cambiar de modo

Puedes cambiar de modo en el desplegable "Modo Planificación":

- **De Unidades a Actividades**: Se crea una única actividad por unidad con todas las sesiones
- **De Actividades a Unidades**: Se suman todas las actividades y se pierden los detalles individuales

> ⚠️ **Cuidado**: Al pasar de Actividades a Unidades, perderás el desglose de actividades.

---

## 🖨️ Imprimir y compartir

### Generar un resumen imprimible

1. Pulsa **"🖨️ Resumen"** en la barra superior
2. Se abre una nueva pestaña con una tabla bien formateada
3. Incluye: nombre de cada unidad/actividad, sesiones (base + extra), y fechas
4. Se lanza automáticamente el diálogo de impresión

Este resumen es perfecto para:
- Incluir en tu programación didáctica
- Entregar a jefatura de estudios
- Tener un documento de referencia en papel

### Exportar tu planificación completa

Desde el Dashboard (pantalla principal), cada asignatura tiene un botón **"⬇️ Exportar JSON"**. Este archivo contiene:

- Toda la configuración de la asignatura
- Todas las unidades y actividades
- Los festivos marcados
- El horario semanal

Puedes usar este archivo para:
- Hacer copias de seguridad
- Compartir con otros profesores
- Pasar la planificación a otro ordenador

### Importar una planificación

1. En el Dashboard, pulsa **"Importar Asignatura"**
2. Selecciona un archivo JSON exportado previamente
3. Si ya existe una asignatura con el mismo nombre, se creará como "Nombre (Copia)"

---

## 🌍 Cambiar el idioma

La aplicación está disponible en:

| Idioma    | Seleccionar |
| --------- | ----------- |
| 🇪🇸 Español | ES          |
| 🌐 Galego  | GL          |
| 🏴 Català  | CA          |
| 🟢 Euskara | EU          |

El selector de idioma está en la esquina superior derecha de la pantalla principal. Tu preferencia se guarda automáticamente.

---

## ❓ Preguntas frecuentes

### ¿Se guardan mis datos?
Sí, automáticamente. Todo se almacena en tu navegador. No necesitas pulsar ningún botón de guardar.

### ¿Qué pasa si uso otro navegador u ordenador?
Los datos están en el navegador que usaste. Para llevarlos a otro sitio, exporta el JSON e impórtalo en el nuevo navegador.

### ¿Puedo usar esto en el móvil?
Sí, aunque la experiencia es mucho mejor en una pantalla grande donde puedes ver el calendario completo.

### ¿Qué significa el aviso "No hay tiempo suficiente"?
Significa que el contenido que has planificado no cabe en los días disponibles hasta junio. Tienes dos opciones:
- Reducir el número de sesiones de alguna unidad
- Aumentar las sesiones semanales en tu horario

### ¿Puedo planificar cursos que empiecen en enero?
Sí, simplemente cambia la fecha de inicio. El calendario ajustará automáticamente qué meses mostrar.

### ¿Se puede usar sin internet?
Sí, una vez abierta la página funciona offline. Solo necesitas internet para abrirla la primera vez.

---

## 🎬 Demostración

Mira cómo funciona la aplicación en esta animación:

![Demo del Planificador](./demo_planificador.webp)

---

## 💡 Consejos para sacarle el máximo partido

1. **Empieza simple**: Usa el modo Unidades al principio. Ya pasarás a Actividades cuando lo necesites.

2. **Añade sesiones extra**: Es mejor planificar con margen que quedarte corto.

3. **Revisa los avisos**: Si aparece un aviso rojo, tu contenido no cabe en el tiempo disponible.

4. **Exporta regularmente**: Haz copias de seguridad de tus planificaciones por si acaso.

5. **Comparte los festivos**: Crea un archivo de festivos común para todo el departamento.

---

*¡Planifica tu curso en minutos, no en horas!* 🎯

---

*Planificador Portable v1.0 - Herramienta para docentes*
