# Tera Guía Español

## Parche v92.04 y 100.02 (x64)

### Proxy Menma's TERA
**Atención**: Si aún usas el **proxy oficial Menma's TERA**, Por ahora **no soporta actualizaciones automáticas de mods**. Siempre que sea posible, acceda aquí para buscar actualizaciones importantes y descargarlas manualmente. Puede descargar aquí la versión de proxy con soporte de actualizaciones automáticas de mods => (https://github.com/tera-private-toolbox/tera-toolbox)

### :star: Compatible con TERA Toolbox para el parche 92.04 y 100.02 (x64)
* Totalmente compatible con la [versión no oficial](https://github.com/tera-private-toolbox/tera-toolbox) de Tera Toolbox para el parche 92 y 100.

### :information_source: Instalación manual
El módulo Tera-Guía y [tera-guide-core](https://github.com/hsdn/tera-guide-core) ya son compatibles con este parche.
Para que las guías funcionen, necesita obtener versiones compatibles de **library** y **tera-guide-core**:
1. Descargue **library** desde **[aquí](https://git.dev.hsdn.org/tera-v92/library/archive/master.zip)** y colóquelo en la carpeta **mods**.
2. Descargue **tera-guide-core** desde **[aquí](https://github.com/hsdn/tera-guide-core/archive/refs/heads/master.zip)** y colóquelo en la carpeta **mods** llamada **"tera-guide-core"**,
    no "tera-guide-core-master".
3. Descargue **tera-guide-spanish** desde **[aquí](https://github.com/Loliconera/tera-guide-spanish/archive/refs/heads/master.zip)** y colóquelo en la carpeta **mods**.
---

## Descripción
Un módulo de guía para TERA traducido al español. Muestra mensajes en la pantalla y dibuja zonas de ataques y mecánicas de jefes (también admite mensajes de texto a voz).

#### Otras traducciones
* [**Inglés (English & русский)** by HSDN](https://github.com/hsdn/tera-guide)
* [**Portugués (Português & Español)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues)

## Dependencias
* **library** - https://github.com/tera-private-toolbox/library (v100.02 / v92.04)
* **tera-guide-core** - https://github.com/hsdn/tera-guide-core (v100.02 / v92.04)

Al usar TeraToolbox, todas las dependencias se instalarán automáticamente.   

## Comandos
Toolbox(/8) | Descripción del comando
--- | ---
**guia** | Módulo on/off
**guia&nbsp;gui** | Mostrar interfaz GUI.
**guia&nbsp;voice**<br>(defecto: desactivado) | Mensajes de texto a voz (TTS).
**guia&nbsp;lNotice**<br>(defecto: desactivado) | Enviar mensajes en el canal **Notice** en lugar de mensajes en pantalla.
**guia&nbsp;gNotice**<br>(defecto: desactivado) | Enviar mensajes en el canal **Party**.
**guia male~female**<br>(defecto: femenino) | Configure el género de voz de voz TTS (si está disponible).
**guia&nbsp;`auto`/`en`/`es`**<br>(default: es) | Establecer idioma de la guía.
**guia&nbsp;`1`~`10`**<br>(defecto: 2) | Configure la velocidad de voz TTS.
**guia&nbsp;spawnObject**<br>(defecto: activado) | Generación de objetos marcadores.
**guia&nbsp;stream**<br>(defecto: desactivado) | Modo Streamer (ocultar todos los mensajes y objetos, se reproducirá la voz TTS).
**guia&nbsp;dungeons** | Lista de todas las dungeons compatibles y sus identificadores.
**guia&nbsp;verbose&nbsp;`id`**<br>(defecto: activado para todos) | Enviar mensajes para la dungeon especificada por `id`.
**guia&nbsp;spawnObject&nbsp;`id`**<br>(defecto: activado para todos) | Generación de objetos marcadores para la dungeon especificada por `id`.
**guia&nbsp;help** | Lista de comandos compatibles.

## Dungeons Soportados

### Parche v100.02 (Menma's TERA x64)
ID | Nombre de la dungeon | Idioma
--- | --- | ---
7011 | Guardian Blightwood | Español
7015 | Guardian Balder's Refuge | Español
9027 | Manaya's Core (Difícil) | Español
9981 | Velik's Sanctuary (Difícil) | Español
9044 | Bahaar's Sanctum | Español
9056 | Timescape (Difícil) | Español
9759 | Forsaken Island (Difícil) | Español
3201 | Gossamer Vault (Difícil) | Español
9920 | Antaroth's Abyss (Difícil) | Español
9982 | Grotto of Lost Souls (Difícil) | Español
9735 | RK-9 Kennel | Español
9739 | Red Refuge | Español
9780 | Velik's Hold (5-Person) | Español
9781 | Velik's Sanctuary | Español
3026 | Corrupted Skynest | Español
3126 | Corrupted Skynest (Difícil) | Español
3036 | Sky Cruiser (Difícil) | Español
3027 | Forbidden Arena [Hagufna] | Español

### Parche v92.04 (Menma's TERA)
ID | Nombre de la dungeon | Idioma
--- | --- | ---
7011 | Guardian Blightwood | Español
7015 | Guardian Balder's Refuge | Español
9027 | Manaya's Core (Difícil) | Español
9981 | Velik's Sanctuary (Difícil) | Español
9044 | Bahaar's Sanctum | Español
9056 | Timescape (Difícil) | Español
9759 | Forsaken Island (Difícil) | Español
3201 | Gossamer Vault (Difícil) | Español
9920 | Antaroth's Abyss (Difícil) | Español
9982 | Grotto of Lost Souls (Difícil) | Español
9735 | RK-9 Kennel | Español
9739 | Red Refuge | Español
9780 | Velik's Hold (5-Person) | Español
9781 | Velik's Sanctuary | Español

## Configuración de Mensajes

* En la pantalla (en la parte inferior) y mensajes de chat, si el parámetro **lNotice** está *activado*, todos los mensajes se enviaran al canal **Notice**. (**Mensajes en Chat Notice**).   
    <img src="https://i.imgur.com/FFZSr5f.png" alt="drawing" width="435"/>
    
* En la pantalla (en la parte superior), si el parámetro **lNotice** está *desactivado*, todos los mensajes se mostraran en la parte superior de la pantalla. (**Mensajes en Pantalla**).   
    <img src="https://i.imgur.com/e4s2iVE.png" alt="drawing" width="435"/>

* Cuando el parámetro **gNotice** está *activado*, todos los mensajes se enviarán al canal **Party**. (**Mensaje en Chat Party**).   
    <img src="https://i.imgur.com/5S4J5S0.png" alt="drawing" width="435"/>

* Cuando el parámetro **stream** está *activado*, todos los mensajes de texto se enviarán solamente al canal de chat **Toolbox(/8)**, pero se reproducirán los mensajes de texto a voz TTS. (**Mensajes en Chat Toolbox**).   
    <img src="https://i.imgur.com/SOUET0X.png" alt="drawing" width="435"/>
  

* Escriba el comando **!guia help** para mostrar una lista completa de todos los comandos soportados y una lista de colores de textos en pantalla.   
    <img src="https://i.imgur.com/E35hNsV.png" alt="drawing" width="435"/>    

* Cuando ingresa a una dungeon el modulo le notificará con un mensaje de bienvenida, donde tambien le mostrara informacion adicional para el uso de comandos.   
    <img src="https://i.imgur.com/CpBgCRe.png" alt="drawing" width="498"/>

* Para desactivar o activar los mensajes de texto a voz TTS, use el comando **!guia voice**.   

* Para cambiar el género de la a voz TTS, use el comando **!guia `male`/`female`**.   

* Para cambiar a otro idioma, use el comando **!guia `auto`/`en`/`es`**.   

## Interfaz GUI

* Escriba el comando **!guia gui** para mostrar una interfaz gráfica del modulo, puede tambien cambiar las configuraciones básicas.   
    <img src="https://i.imgur.com/qBsDz00.png" alt="drawing" width="498"/>

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