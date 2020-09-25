# Tera-Guía
Un módulo de guía para TERA traducido al español. Muestra notificaciones en la pantalla y dibuja zonas de ataques y mecánicas de jefes (también admite notificaciones de texto a voz).

&#x1F534; **Se han publicado actualizaciones críticas. ¡Por favor actualice!**

Versión original del módulo HSDN (English and Russian translation): https://github.com/hsdn/tera-guide

## Dependencies
* **Library** - https://github.com/tera-toolbox-mods/library   
  Extraiga a su directorio **mods**. No lo instale como ~~library-master~~, asegúrese de que se llame **library**.   


## Comandos
Toolbox(/8) | Descripción del comando
--- | ---
**guide** | Módulo on/off
**guide&nbsp;gui** | Mostrar módulo GUI
**guide&nbsp;voice**<br>(defecto: encendido) | Avisos de texto a voz (TTS), la velocidad del habla se establece mediante un comando **guide `1`~`10`**
**guide&nbsp;lNotice**<br>(defecto: apagado) | Envíe avisos al canal de chat "Notice" en lugar de mensajes en pantalla
**guide&nbsp;gNotice**<br>(defecto: apagado) | Enviar avisos al canal de chat del grupo (será visible para todos los miembros del grupo)
**guide&nbsp;`1`~`10`**<br>(defecto: 2) | Establecer la velocidad de voz TTS
**guide&nbsp;spawnObject**<br>(defecto: encendido) | Generarador de objetos marcadores
**guide&nbsp;stream**<br>(defecto: apagado) | Modo Streamer (ocultar todos los avisos y objetos, se reproducirá voz TTS)
**guide&nbsp;dungeons** | Lista de todas las mazmorras compatibles y sus identificadores
**guide&nbsp;verbose&nbsp;`id`**<br>(defecto: encendido para todos) | Enviar avisos para la mazmorra especificada por `id`
**guide&nbsp;spawnObject&nbsp;`id`**<br>(defecto: encendido para todos) | Generarador de objetos marcadores para la mazmorra especificada por `id`
**guide&nbsp;help** | Lista de comandos compatibles

## Mazmorras Compatibles
id | Nombre de la mazmorra | Idioma
--- | --- | ---
9781 | Velik's Sanctuary | Español
9739 | Red Refuge | Español
9735 | RK-9 Kennel | Español
3034 | Rampaging RK-9 Kennel | Español
9920 | Antaroth's Abyss (Hard) | Español
9982 | Grotto of Lost Souls (Hard) | Español
9053 | Kezzel's Gorge | Español
9044 | Bahaar's Sanctum | Español
3201 | Gossamer Vault (Hard) | Español
3023 | Akalath Quarantine | Español
3020 | Sea of Honor | Español
3026 | Corrupted Skynest | Español
3126 | Corrupted Skynest (Hard) | Español
3102 | Draakon Arena | Español
3202 | Draakon Arena (Hard) | Español
3027 | Forbidden Arena [Hagufna] | Español
3103 | Forbidden Arena [Undying Warlord] | Español
3203 | Forbidden Arena [Nightmare Undying Warlord] | Español

## Configuración de Avisos

* En la pantalla (en la parte inferior) y avisos de chat, si el parámetro **lNotice** está *activado*. Avisos seran visibles solo para usted.   
  ![](https://i.imgur.com/PGRm9Hx.png)   

* Cuando el parámetro **gNotice** está *activado*, también se enviarán avisos a todos los miembros del grupo.   

* El mensaje en la parte superior de la pantalla, si el parámetro **lNotice** está *desactivado* (por defecto). Avisos seran visibles solo para usted.   
  ![](https://i.imgur.com/eVmuWjG.png)   
  Puede configurar el color para este tipo de avisos usando los comandos o tambien puede usar la interfaz GUI (también cambia de color en el chat de Toolbox).   
  ![](https://i.imgur.com/ABCRTsV.png)   

* Cuando el Modo Streamer está *activado* (parámetro **stream**), todos los avisos de texto SÓLO se envían al canal de chat de Toolbox(/8), pero se reproducirán los avisos de texto a voz TTS.

* Para desactivar o activar los avisos de texto a voz TTS, use el comando **guide voice**.

## Módulo GUI

* En el canal de chat de Toolbox(/8) escriba el siguiente parámetro **guide GUI** para mostrar una interfaz gráfica de usuario del modulo, puede tambien cambiar la configuración básica de manera mas sencilla.   
  ![](https://i.imgur.com/kfysB9t.png)   

## Desarrollo y Depuración
Lee mas en https://github.com/hsdn/tera-guide/wiki

## Créditos
- **[Kasea](https://github.com/tera-toolbox-mods)** - Desarrollador original del módulo Tera-Guide
- **[michengs](https://github.com/michengs)** - Autor del código base para la mayoría de las guías y el núcleo del módulo
- **[ZC](https://github.com/tera-mod)** - Coordenadas proporcionadas para representar las áreas de ataque y la mecánica
- **[Kuroine](https://github.com/Kuroine)** - Autor del código base de la guía DA
- **[Multarix](https://github.com/Multarix)** - Autor de la guía RR y también realizando cambios en la traducción al inglés
- **[Owyn](https://github.com/Owyn)** - Desarrollador de grandes guías para RK-9, AA y GV, cuyo código se utilizó
- **[ITunk](https://github.com/GrafNikola)** - Autor de la traducción inicial al ruso
- **[HSDN ](https://github.com/HSDN)** - Autor de la traducción al ruso y desarrollador original del módulo tera-guide HSDN