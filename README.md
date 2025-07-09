<a href="https://github.com/Loliconera/tera-guide-spanish/archive/refs/heads/master.zip" target="_blank"><button><span title="Descargar Guía"><img src="https://github.com/Loliconera/tera-guide-spanish/assets/69399372/78776a88-b545-47af-b8ba-294a46138c33"  alt="drawing" width="150" /></button></a>

# Tera Guía Español

## Parche v92.04 y v100.02 (x64)

### :star: Compatible con TERA Toolbox para el parche 92.04 y 100.02 (x64)

- Totalmente compatible con [TERA Toolbox para el parche 92 y 100](https://github.com/tera-private-toolbox/tera-toolbox).
  Instalación automática desde la pestaña **Obtener más Mod**.

### :information_source: Instalación manual

El módulo Tera-Guía y [tera-guide-core](https://github.com/hsdn/tera-guide-core) ya son compatibles con este parche.
Para que las guías funcionen, necesita obtener versiones compatibles de **library** y **tera-guide-core**:

1. Descargue **library** desde **[aquí](https://github.com/tera-private-toolbox/library/archive/refs/heads/master.zip)** y colóquelo en la carpeta **mods**.
2. Descargue **tera-guide-core** desde **[aquí](https://github.com/hsdn/tera-guide-core/archive/refs/heads/master.zip)** y colóquelo en la carpeta **mods** llamada **"tera-guide-core"**,
   no "tera-guide-core-master".

---

## Descripción

Un módulo de guía para TERA traducido al español. Muestra mensajes en la pantalla y dibuja zonas de ataques y mecánicas de jefes (también admite mensajes de texto a voz). Idiomas disponibles en Español y Ingles (detecta automáticamente).

### Otras traducciones

- [**Inglés (English & русский)** by HSDN](https://github.com/hsdn/tera-guide)
- [**Portugués (Português & Español)** by Emilia](https://github.com/emilia-s2/Guia-DG-Portugues)

## Dependencias

- **library** - <https://github.com/tera-private-toolbox/library>
- **tera-guide-core** - <https://github.com/hsdn/tera-guide-core>

Al usar TeraToolbox, todas las dependencias se instalarán automáticamente.

## Comandos

| Toolbox(/8)                                                           | Descripción del comando                                                          |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **guia**                                                              | Módulo on/off                                                                    |
| **guia&nbsp;gui**                                                     | Mostrar interfaz GUI.                                                            |
| **guia&nbsp;voice**<br>(defecto: desactivado)                         | Mensajes de texto a voz (TTS).                                                   |
| **guia&nbsp;lNotice**<br>(defecto: desactivado)                       | Enviar mensajes en el canal **Notice** en lugar de mensajes en pantalla.         |
| **guia&nbsp;gNotice**<br>(defecto: desactivado)                       | Enviar mensajes en el canal **Party**.                                           |
| **guia male~female**<br>(defecto: femenino)                           | Configure el género de voz de voz TTS (si está disponible).                      |
| **guia&nbsp;`auto`/`en`/`es`**<br>(default: es)                       | Establecer idioma de la guía.                                                    |
| **guia&nbsp;`1`~`10`**<br>(defecto: 2)                                | Configure la velocidad de voz TTS.                                               |
| **guia&nbsp;spawnObject**<br>(defecto: activado)                      | Generación de objetos marcadores.                                                |
| **guia&nbsp;stream**<br>(defecto: desactivado)                        | Modo Streamer (ocultar todos los mensajes y objetos, se reproducirá la voz TTS). |
| **guia&nbsp;dungeons**                                                | Lista de todas las dungeons compatibles y sus identificadores.                   |
| **guia&nbsp;verbose&nbsp;`id`**<br>(defecto: activado para todos)     | Enviar mensajes para la dungeon especificada por `id`.                           |
| **guia&nbsp;spawnObject&nbsp;`id`**<br>(defecto: activado para todos) | Generación de objetos marcadores para la dungeon especificada por `id`.          |
| **guia&nbsp;help**                                                    | Lista de comandos compatibles.                                                   |

## Dungeons Soportados

| ID                      | Nombre de la dungeon                        | Idioma  |
| ----------------------- | ------------------------------------------- | ------- |
| [2800](/guides/2800.js) | Dreadspire VALKYTEQ                         | Español |
| [2809](/guides/2809.js) | The Observatory (Arborea Reborn)            | Español |
| [2811](/guides/2811.js) | Sea of Honor (Arborea Reborn)               | Español |
| [3020](/guides/3020.js) | Sea of Honor                                | Español |
| [3023](/guides/3023.js) | Akalath Quarantine                          | Español |
| [3026](/guides/3026.js) | Corrupted Skynest                           | Español |
| [3027](/guides/3027.js) | Forbidden Arena [Hagufna]                   | Español |
| [3030](/guides/3030.js) | Commander's Residence                       | Español |
| [3032](/guides/3032.js) | Akalath Quarantine (Training)               | Español |
| [3034](/guides/3034.js) | Rampaging RK-9 Kennel                       | Español |
| [3036](/guides/3036.js) | Sky Cruiser (Extremo)                       | Español |
| [3037](/guides/3037.js) | Bahaar's Sanctum (Training)                 | Español |
| [3101](/guides/3101.js) | Gossamer Vault                              | Español |
| [3102](/guides/3102.js) | Draakon Arena                               | Español |
| [3103](/guides/3103.js) | Forbidden Arena [Undying Warlord]           | Español |
| [3104](/guides/3104.js) | Catalepticon                                | Español |
| [3123](/guides/3123.js) | Akalath Quarantine (Hard)                   | Español |
| [3126](/guides/3126.js) | Corrupted Skynest (Difícil)                 | Español |
| [3201](/guides/3201.js) | Gossamer Vault (Difícil)                    | Español |
| [3202](/guides/3202.js) | Draakon Arena (Difícil)                     | Español |
| [3203](/guides/3203.js) | Forbidden Arena [Nightmare Undying Warlord] | Español |
| [3204](/guides/3204.js) | Catalepticon (Hard)                         | Español |
| [7011](/guides/7011.js) | Shadow of the Gutrends (Guardian)           | Español |
| [7015](/guides/7015.js) | Escape from Balder's Refuge (Guardian)      | Español |
| [9027](/guides/9027.js) | Manaya's Core (Difícil)                     | Español |
| [9034](/guides/9034.js) | Dreadspire                                  | Español |
| [9044](/guides/9044.js) | Bahaar's Sanctum                            | Español |
| [9053](/guides/9053.js) | Kezzel's Gorge                              | Español |
| [9054](/guides/9054.js) | Bathysmal Rise (Difícil)                    | Español |
| [9056](/guides/9056.js) | Timescape (Difícil)                         | Español |
| [9057](/guides/9057.js) | Akeron's Inferno (Difícil)                  | Español |
| [9066](/guides/9066.js) | Demon's Wheel                               | Español |
| [9067](/guides/9067.js) | Demokron Factory (Difícil)                  | Español |
| [9068](/guides/9068.js) | Shadow Sanguinary (Difícil)                 | Español |
| [9070](/guides/9070.js) | Manglemire                                  | Español |
| [9710](/guides/9710.js) | Broken Prison                               | Español |
| [9716](/guides/9716.js) | Sky Cruiser Endeavor                        | Español |
| [9720](/guides/9720.js) | Antaroth's Abyss                            | Español |
| [9735](/guides/9735.js) | RK-9 Kennel                                 | Español |
| [9739](/guides/9739.js) | Red Refuge                                  | Español |
| [9754](/guides/9754.js) | Bathysmal Rise                              | Español |
| [9756](/guides/9756.js) | Timescape                                   | Español |
| [9757](/guides/9757.js) | Akeron's Inferno                            | Español |
| [9759](/guides/9759.js) | Forsaken Island (Difícil)                   | Español |
| [9768](/guides/9768.js) | Shadow Sanguinary                           | Español |
| [9770](/guides/9770.js) | Ruinous Manor                               | Español |
| [9780](/guides/9780.js) | Velik's Hold (5-Person)                     | Español |
| [9781](/guides/9781.js) | Velik's Sanctuary                           | Español |
| [9782](/guides/9782.js) | Grotto of Lost Souls                        | Español |
| [9783](/guides/9783.js) | Dark Reach Citadel                          | Español |
| [9794](/guides/9794.js) | Thaumetal Refinery                          | Español |
| [9916](/guides/9916.js) | Sky Cruiser Endeavor (Difícil)              | Español |
| [9920](/guides/9920.js) | Antaroth's Abyss (Difícil)                  | Español |
| [9935](/guides/9935.js) | RK-9 Kennel (Difícil)                       | Español |
| [9939](/guides/9939.js) | Red Refuge (Difícil)                        | Español |
| [9970](/guides/9970.js) | Ruinous Manor (Difícil)                     | Español |
| [9980](/guides/9980.js) | Velik's Hold (Difícil)                      | Español |
| [9981](/guides/9981.js) | Velik's Sanctuary (Difícil)                 | Español |
| [9982](/guides/9982.js) | Grotto of Lost Souls (Difícil)              | Español |
| [9983](/guides/9983.js) | Dark Reach Citadel (Difícil)                | Español |
| [9994](/guides/9994.js) | Thaumetal Refinery (Difícil)                | Español |

## Configuración de Mensajes

- En la pantalla (en la parte inferior) y mensajes de chat, si el parámetro **lNotice** está _activado_, todos los mensajes se enviaran al canal **Notice**. (**Mensajes en Chat Notice**).<br>
  <img src="https://github.com/Loliconera/tera-guide-spanish/assets/69399372/9590b9f4-c7c3-4db7-982c-ae70cd2c5dab" alt="drawing" width="435"/>

- En la pantalla (en la parte superior), si el parámetro **lNotice** está _desactivado_, todos los mensajes se mostraran en la parte superior de la pantalla. (**Mensajes en Pantalla**).<br>
  <img src="https://github.com/Loliconera/tera-guide-spanish/assets/69399372/cbad0e85-27cd-4ff7-a079-302c63580d5c" alt="drawing" width="435"/>

- Cuando el parámetro **gNotice** está _activado_, todos los mensajes se enviarán al canal **Party**. (**Mensaje en Chat Party**).<br>
  <img src="https://github.com/Loliconera/tera-guide-spanish/assets/69399372/9dd3c39c-a802-40c7-86d1-706acaa19e0e" alt="drawing" width="435"/>

- Cuando el parámetro **stream** está _activado_, todos los mensajes de texto se enviarán solamente al canal de chat **Toolbox(/8)**, pero se reproducirán los mensajes de texto a voz TTS. (**Mensajes en Chat Toolbox**).<br>
  <img src="https://github.com/Loliconera/tera-guide-spanish/assets/69399372/39b251f0-4818-475d-8357-9925f7b14184" alt="drawing" width="435"/>
- Escriba el comando **!guia help** para mostrar una lista completa de todos los comandos soportados y una lista de colores de textos en pantalla.<br>
  <img src="https://github.com/Loliconera/tera-guide-spanish/assets/69399372/f9922fd7-d62d-4297-bc39-4e561cd3e384" alt="drawing" width="435"/>

- Cuando ingresa a una dungeon el modulo le notificará con un mensaje de bienvenida, donde tambien le mostrara informacion adicional para el uso de comandos.<br>
  <img src="https://github.com/Loliconera/tera-guide-spanish/assets/69399372/d33cf5ab-5c64-4ca1-8bae-1b6afcd111f0" alt="drawing" width="498"/>

- Para desactivar o activar los mensajes de texto a voz TTS, use el comando **!guia voice**.<br>

- Para cambiar el género de la a voz TTS, use el comando **!guia `male`/`female`**.<br>

- Para **cambiar a otro idioma**, use el comando **!guia `auto`/`en`/`es`**, o tambien puede utilizar la interfaz GUI y selecionar el idioma que desea.<br>
  <img src="https://github.com/Loliconera/tera-guide-spanish/assets/69399372/f0806ac4-e2bb-48c4-b55d-61ec6997ef3f" alt="drawing" width="498"/>

## Interfaz GUI

- Escriba el comando **!guia gui** para mostrar una interfaz gráfica del modulo, puede tambien cambiar las configuraciones básicas.<br>
  <img src="https://github.com/Loliconera/tera-guide-spanish/assets/69399372/3d5b294b-03e7-4128-8eae-22f9a585ebbe" alt="drawing" width="498"/>

## Más información

- Wiki para desarrolladores [HSDN](https://github.com/hsdn/tera-guide-core/wiki)
- Para preguntas y sugerencias, comuníquese a través de Discord: **JKQ#5649**

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
