# Tera-Guía

### :information_source: Sobre el soporte del parche 92   
Técnicamente, el módulo Tera-Guía y [tera-guide-core](https://github.com/hsdn/tera-guide-core) ya son compatibles con el parche 92, pero no se han agregado todas las guías antiguas. Puede obtener los archivos de guía necesarios manualmente desde el repositorio de guias [tera-guide-archive](https://github.com/hsdn/tera-guide-archive).   
También necesitará una versión compatible de **library** ([descargar aqui](https://git.dev.hsdn.org/tera-v92/library/archive/master.zip)).

En el futuro, después de que se cierre el servidor oficial de Tera, lanzaremos una versión completa de la guía para el parche 92.

---

# Tera-Guía	[Descargar Aqui](https://github.com/Loliconera/tera-guide-spanish/releases)
Un módulo de guía para TERA traducido al español. Muestra mensajes en la pantalla y dibuja zonas de ataques y mecánicas de jefes (también admite mensajes de texto a voz).

#### Otras traducciones
* [**Inglés (English & русский)** by HSDN](https://github.com/hsdn/tera-guide)
* [**Portugués (Português & Español)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues)

## Dependencias
* **tera-guide-core** - <https://github.com/hsdn/tera-guide-core>

Al usar TeraToolbox, todas las dependencias se instalarán automáticamente.   

## Comandos
Toolbox(/8) | Descripción del comando
--- | ---
**guide** | Módulo on/off
**guide&nbsp;gui** | Mostrar módulo GUI.
**guide&nbsp;voice**<br>(defecto: desactivado) | Mensajes de texto a voz (TTS).
**guide&nbsp;lNotice**<br>(defecto: desactivado) | Enviar mensajes en el canal **Notice** en lugar de mensajes en pantalla.
**guide&nbsp;gNotice**<br>(defecto: desactivado) | Enviar mensajes en el canal **Party**.
**guide male~female**<br>(defecto: femenino) | Configure el género de voz de voz TTS (si está disponible).
**guide&nbsp;`auto`/`en`/`es`**<br>(default: es) | Establecer idioma de la guía.
**guide&nbsp;`1`~`10`**<br>(defecto: 2) | Configure la velocidad de voz TTS.
**guide&nbsp;spawnObject**<br>(defecto: activado) | Generación de objetos marcadores.
**guide&nbsp;stream**<br>(defecto: desactivado) | Modo Streamer (ocultar todos los mensajes y objetos, se reproducirá la voz TTS).
**guide&nbsp;dungeons** | Lista de todas las dungeons compatibles y sus identificadores.
**guide&nbsp;verbose&nbsp;`id`**<br>(defecto: activado para todos) | Enviar mensajes para la dungeon especificada por `id`.
**guide&nbsp;spawnObject&nbsp;`id`**<br>(defecto: activado para todos) | Generación de objetos marcadores para la dungeon especificada por `id`.
**guide&nbsp;help** | Lista de comandos compatibles.

## Dungeons Compatibles
id | Nombre de la dungeon | Idioma
--- | --- | ---
3027 | Forbidden Arena [Hagufna] | Español
3036 | Sky Cruiser (Hard) | Español
3040 | Lumikan's Trial | Español
3042 | Gardan's Trial | Español
3043 | Harnovog's Trial | Español
3046 | Rogash's Trial | Español
3105 | Fusion Laboratory | Español
3108 | Cursed Antaroth's Abyss | Español
3109 | Ice Throne | Español
3126 | Corrupted Skynest (Hard) | Español
3209 | Chaos Ice Throne | Español
7011 | Shadow of the Gutrends (Guardian) | Español
7015 | Escape from Balder's Refuge (Guardian) | Español
9068 | Shadow Sanguinary (Hard) | Español
9920 | Antaroth's Abyss (Hard) | Español

## Configuración de Mensajes

* En la pantalla (en la parte inferior) y mensajes de chat, si el parámetro **lNotice** está *activado*, todos los mensajes se enviaran al canal **Notice**. (**Mensajes en Chat Notice**).   
    <img src="https://i.imgur.com/ZFkQ08X.png" alt="drawing" width="435"/>
    
* En la pantalla (en la parte superior), si el parámetro **lNotice** está *desactivado*, todos los mensajes se mostraran en la parte superior de la pantalla. (**Mensajes en Pantalla**).   
    <img src="https://user-images.githubusercontent.com/69399372/156949265-21535d2f-03e5-46f2-8636-41b25a7c8815.png" alt="drawing" width="435"/>

* Cuando el parámetro **gNotice** está *activado*, todos los mensajes se enviarán al canal **Party**. (**Mensaje en Chat Party**).   
    <img src="https://i.imgur.com/el8E3oN.png" alt="drawing" width="435"/>

* Cuando el Modo Streamer está *activado* (parámetro **stream**), todos los mensajes de texto se enviarán solamente al canal de chat **Toolbox(/8)**, pero se reproducirán los mensajes de texto a voz TTS. (**Mensaje en Chat Toolbox**).   
    <img src="https://i.imgur.com/M3woYlC.png" alt="drawing" width="435"/>
  

* Puede cambiar el color de los mensajes usando los comandos, para cambiarlo tendra que escribir el parámetro **guide help** para mostrar una lista completa de todos los colores soportados o tambien puede usar la interfaz GUI.   
    <img src="https://i.imgur.com/uXc3vdH.png" alt="drawing" width="498"/>

* Cuando ingresa a una mazmorra el modulo le notificará con un mensaje de bienvenida, tambien le notificará que modulos estan activados o desactivados.   
    <img src="https://i.imgur.com/iGBO15l.png" alt="drawing" width="498"/>

* Para desactivar o activar los mensajes de texto a voz TTS, use el comando **guide voice**.   

* Para cambiar el género de la a voz TTS, use el comando **guide male~female**.   

## Módulo GUI

* En el canal de chat **Toolbox(/8)** escriba el siguiente comando **guide gui** para mostrar una interfaz gráfica de usuario del modulo, puede tambien cambiar las configuraciones básicas.   
    <img src="https://i.imgur.com/dJWpFRO.png" alt="drawing" width="498"/>

## Más información

* Wiki para desarrolladores [HSDN](https://github.com/hsdn/tera-guide-core/wiki)
* Para preguntas y sugerencias, comuníquese a través de Discord: **JKQ#5649**

## Créditos
- **[Kasea](https://github.com/Kaseaa)** - Desarrollador original del módulo Tera-Guide
- **[HSDN](https://github.com/HSDN)** - Autor original del módulo en inglés tera-guide HSDN
- **[michengs](https://github.com/michengs)** - Autor del código base para la mayoría de las guías y el núcleo del módulo
- **[ZC](https://github.com/tera-mod)** - Coordenadas proporcionadas para representar las áreas de ataque y la mecánica
- **[Kuroine](https://github.com/Kuroine)** - Autor del código base de la guía DA
- **[Multarix](https://github.com/Multarix)** - Autor de la guía RR y también realizando cambios en la traducción al inglés
- **[Owyn](https://github.com/Owyn)** - Desarrollador de grandes guías para RK-9, AA y GV, cuyo código se utilizó
- **[Loliconera](https://github.com/Loliconera)** - Autor de traducción al español latino
- **[Emilia](https://github.com/emilia-s2)** - Autora de traducción al portugués y guías de guardian
- **[ITunk](https://github.com/GrafNikola)** - Autor de la traducción inicial al ruso