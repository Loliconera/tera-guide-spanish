# Tera-Guía
Un módulo de guía para TERA traducido al español. Muestra mensajes en la pantalla y dibuja zonas de ataques y mecánicas de jefes (también admite mensajes de texto a voz).   

&#x1F534; **Se han publicado actualizaciones críticas. ¡Por favor actualice!**

* English version of the module (Traducción en inglés): https://github.com/hsdn/tera-guide
* Versão em português do módulo (Traducción al portugués): https://github.com/emilia-s2/Guia-DG-Portugues

## Dependencias
* **tera-guide-core** - https://github.com/hsdn/tera-guide-core

Al usar TeraToolbox, todas las dependencias se instalarán automáticamente.   

## Comandos
Toolbox(/8) | Descripción del comando
--- | ---
**guide** | Módulo on/off
**guide&nbsp;gui** | Mostrar módulo GUI
**guide&nbsp;voice**<br>(defecto: activado) | Mensajes de texto a voz (TTS), la velocidad de la voz se establece mediante un comando **guide `1`~`10`**
**guide&nbsp;lNotice**<br>(defecto: desactivado) | Envíe mensajes al canal de chat **Take Notice** en lugar de mensajes en pantalla
**guide&nbsp;gNotice**<br>(defecto: desactivado) | Envíe mensajes al canal **Party Chat** (será visible para todos los miembros de la party)
**guide&nbsp;`1`~`10`**<br>(defecto: 2) | Ajusta la velocidad  de voz TTS
**guide&nbsp;spawnObject**<br>(defecto: activado) | Generación de objetos
**guide&nbsp;stream**<br>(defecto: desactivado) | Modo Streamer (oculta todos los mensajes y objetos, se reproducirá la voz TTS)
**guide&nbsp;dungeons** | Lista de todas las mazmorras compatibles y sus identificadores
**guide&nbsp;verbose&nbsp;`id`**<br>(defecto: activado para todos) | Enviar mensajes para la mazmorra especificada por `id`
**guide&nbsp;spawnObject&nbsp;`id`**<br>(defecto: activado para todos) | Generación de objetos para la mazmorra especificada por `id`
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

## Configuración de Mensajes

* En la pantalla (en la parte inferior) y mensajes de chat, si el parámetro **lNotice** está *activado*, todos los mensajes se enviaran al canal **Take Notice** (los mensajes seran visibles solo para usted).   
  ![](https://i.imgur.com/PGRm9Hx.png)   

* Cuando el parámetro **gNotice** está *activado*, todos los mensajes se enviarán al canal **Party Chat** (todos los mensajes serán visibles para todos los miembros de la party).   

* En la pantalla (en la parte superior), si el parámetro **lNotice** está *desactivado*, todos los mensajes se mostraran en la parte superior de la pantalla (los mensajes seran visibles solo para usted).   
  ![](https://i.imgur.com/eVmuWjG.png)   
  Puede cambiar el color de los mensajes usando los comandos, para cambiarlo tendra que escribir el parámetro **guide help** para mostrar una lista completa de todos los colores soportados o tambien puede usar la interfaz GUI.   
  ![](https://i.imgur.com/uXc3vdH.png)   

* Cuando el Modo Streamer está *activado* (parámetro **stream**), todos los mensajes de texto se enviarán solamente al canal de chat **Toolbox(/8)**, pero se reproducirán los mensajes de texto a voz TTS.
  ![](https://i.imgur.com/NLIt4yq.png)   

* Cuando ingresa a una mazmorra el modulo Tera-Guía le notificará con un mensaje de bienvenida, tambien le notificará que modulos estan activados o desactivados  .
  ![](https://i.imgur.com/D1mz39y.png)   

* Para desactivar o activar los mensajes de texto a voz TTS, use el comando **guide voice**.

## Módulo GUI

* En el canal de chat de **Toolbox(/8)** escriba el siguiente comando **guide gui** para mostrar una interfaz gráfica de usuario del modulo, puede tambien cambiar las configuraciones básicas.   
  ![](https://i.imgur.com/vZKjJei.png)   

## Desarrollo y Depuración
Lee mas en https://github.com/hsdn/tera-guide/wiki

## Créditos
- **[Kasea](https://github.com/tera-toolbox-mods)** - Desarrollador original del módulo Tera-Guide
- **[HSDN ](https://github.com/HSDN)** - Autor original del módulo en inglés tera-guide HSDN
- **[michengs](https://github.com/michengs)** - Autor del código base para la mayoría de las guías y el núcleo del módulo
- **[ZC](https://github.com/tera-mod)** - Coordenadas proporcionadas para representar las áreas de ataque y la mecánica
- **[Kuroine](https://github.com/Kuroine)** - Autor del código base de la guía DA
- **[Multarix](https://github.com/Multarix)** - Autor de la guía RR y también realizando cambios en la traducción al inglés
- **[Owyn](https://github.com/Owyn)** - Desarrollador de grandes guías para RK-9, AA y GV, cuyo código se utilizó
- **[ITunk](https://github.com/GrafNikola)** - Autor de la traducción inicial al ruso
- **[Emilia](https://github.com/emilia-s2)** - Autor de la traducción al portugués