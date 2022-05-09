"use strict";

// Available strings for additional languages
// If no language is found, the default language (English) will be displayed
module.exports.general = {

	// Español
	es: {
		unknowncommand: "Comando desconocido, escriba \"guide help\"",
		helpheader: "Escriba \"guide help\" para obtener mas informacion",
		helpbody: [
			["guide, modulo on/off", "PRMSG"],
			["guide gui, mostrar interfaz GUI", "PRMSG"],
			["guide voice, mensajes de texto a voz (TTS)", "PRMSG"],
			["guide lNotice, enviar mensajes en el canal Chat Notice en lugar de mensajes en pantalla", "PRMSG"],
			["guide gNotice, enviar mensajes en el canal Chat Party", "PRMSG"],
			["guide auto~en~es, cambiar el idioma de la guía", "PRMSG"],
			["guide male~female, cambiar el genero de voz TTS (si esta disponible)", "PRMSG"],			
			["guide 1~10, ajustar la velocidad de voz TTS", "PRMSG"],
			["guide spawnObject, generación de objetos marcadores", "PRMSG"],
			["guide stream, modo streamer (ocultar mensajes y objetos)", "PRMSG"],
			["guide dungeons, lista de todas las dungeons compatibles", "PRMSG"],
			["guide verbose id, enviar mensajes para dungeons especificas", "PRMSG"],
			["guide spawnObject id, generación de objetos marcadores para dungeons especificas", "PRMSG"],
			["guide cr, el color del mensaje es ROJO", "CRMSG"],
			["guide co, el color del mensaje es NARANJA", "COMSG"],
			["guide cy, el color del mensaje es AMARILLO", "CYMSG"],
			["guide cg, el color del mensaje es VERDE", "CGMSG"],
			["guide cdb, el color del mensaje es AZUL OSCURO", "CDBMSG"],
			["guide cb, el color del mensaje es AZUL", "CBMSG"],
			["guide cv, el color del mensaje es VIOLETA", "CVMSG"],
			["guide cp, el color del mensaje es ROSA", "CPMSG"],
			["guide clp, el color del mensaje es ROSA CLARO", "CLPMSG"],
			["guide clb, el color del mensaje es AZUL CLARO", "CLBMSG"],
			["guide cbl, el color del mensaje es NEGRO", "CBLMSG"],
			["guide cgr, el color del mensaje es GRIS", "CGRMSG"],
			["guide cw, el color del mensaje es BLANCO", "CWMSG"]
		],
		red: "Rojo",
		green: "Verde",
		settings: "Ajustes",
		spawnObject: "Generacion de Marcadores",
		speaks: "Mensajes por Voz (TTS)",
		lNotice: "Mensajes de Chat Notice",
		gNotice: "Mensajes de Chat Party",
		stream: "Modo Streamer (ocultar mensajes y objetos)",
		language: "Selección de idioma",
		voice: "Genero de voz",
		rate: "Velocidad de voz",
		color: "Cambiar el color",
		dungeons: "Configuración de la Dungeons",
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
