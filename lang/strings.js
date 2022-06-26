"use strict";

// Cadenas disponibles para idiomas adicionales
// Si no se encuentra ningún idioma, se mostrará el idioma predeterminado (inglés).
module.exports.general = {

	// Español
	es: {
		unknowncommand: "Comando desconocido, Para ver todos los comandos escriba <font color='#ffff00'>!guia help</font>",
		helpheader: "Use el comando <font color='#ffff00'>!guia gui </font> para configurar tu Guía <font color='#00a6ff'>\nGuía en idioma </font><font color='#00bb2d'>ES</font><font color='#FFFFFF'>PA</font><font color='#FF0000'>ÑOL</font><font color='#00a6ff'>, También disponible en idioma Inglés \nUse el comando </font><font color='#ffff00'>!guia en </font><font color='#00a6ff'>para cambiar al idioma</font> <font color='#00ffff'>Inglés</font>",
		helpbody: [
			["guia, modulo on/off", "PRMSG"],
			["guia gui, mostrar interfaz GUI", "PRMSG"],
			["guia voice, mensajes de texto a voz (TTS)", "PRMSG"],
			["guia lNotice, enviar mensajes en el canal Chat Notice en lugar de mensajes en pantalla", "PRMSG"],
			["guia gNotice, enviar mensajes en el canal Chat Party", "PRMSG"],
			["guia auto~en~es, cambiar el idioma de la guía", "PRMSG"],
			["guia male~female, cambiar el genero de voz TTS (si esta disponible)", "PRMSG"],			
			["guia 1~10, ajustar la velocidad de voz TTS", "PRMSG"],
			["guia spawnObject, generación de objetos marcadores", "PRMSG"],
			["guia stream, modo streamer (ocultar mensajes y objetos)", "PRMSG"],
			["guia dungeons, lista de todas las dungeons compatibles", "PRMSG"],
			["guia verbose id, enviar mensajes para dungeons especificas", "PRMSG"],
			["guia spawnObject id, generación de objetos marcadores para dungeons especificas", "PRMSG"],
			["guia cr, el color del mensaje es ROJO", "CRMSG"],
			["guia co, el color del mensaje es NARANJA", "COMSG"],
			["guia cy, el color del mensaje es AMARILLO", "CYMSG"],
			["guia cg, el color del mensaje es VERDE", "CGMSG"],
			["guia cdb, el color del mensaje es AZUL OSCURO", "CDBMSG"],
			["guia cb, el color del mensaje es AZUL", "CBMSG"],
			["guia cv, el color del mensaje es VIOLETA", "CVMSG"],
			["guia cp, el color del mensaje es ROSA", "CPMSG"],
			["guia clp, el color del mensaje es ROSA CLARO", "CLPMSG"],
			["guia clb, el color del mensaje es AZUL CLARO", "CLBMSG"],
			["guia cbl, el color del mensaje es NEGRO", "CBLMSG"],
			["guia cgr, el color del mensaje es GRIS", "CGRMSG"],
			["guia cw, el color del mensaje es BLANCO", "CWMSG"]
		],
		red: "Rojo",
		green: "Verde",
		settings: "Ajustes",
		spawnObject: "Generacion de Marcadores",
		speaks: "Mensajes por Voz (TTS)",
		lNotice: "Mensajes de Chat Notice",
		gNotice: "Mensajes de Chat Party",
		stream: "Modo Streamer",
		language: "Selección de idioma",
		voice: "Genero de voz",
		rate: "Velocidad de voz",
		color: "Cambiar el color",
		dungeons: "Ajustes de Dungeons",
		verbose: "Mensajes",
		objects: "Marcadores",
		test: "Prueba de voz",
		module: "TERA-Guía módulo",
		enabled: "Activado",
		disabled: "Desactivado",
		male: "Masculino",
		female: "Femenino",
		voicetest: "[Prueba de velocidad de voz]",
		colorchanged: "El color de la notificacion del mensaje ha cambiado",
		dgnotfound: "Dungeon no encontrada.",
		dgnotspecified: "ID de dungeon no especificada.",
		enterdg: "¡Bienvenido! a la Dungeon",	
		fordungeon: "para dungeon"
	}
};
