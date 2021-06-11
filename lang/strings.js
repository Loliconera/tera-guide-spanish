"use strict";

// Cadenas disponibles para idiomas adicionales
// Si no se encuentra ningún idioma, se mostrará el idioma predeterminado (inglés)
module.exports.general = {

	// Español
	es: {
		unknowncommand: "Comando desconocido, escriba \"guide help\"",
		helpheader: "Escriba \"guide help\" para obtener mas informacion",
		helpbody: [
			["guide, modulo on/off", "PRMSG"],
			["guide gui, mostrar modulo GUI", "PRMSG"],
			["guide voice, mensajes de texto a voz (TTS)", "PRMSG"],
			["guide lNotice, enviar mensajes en el canal Chat Notice en lugar de mensajes en pantalla", "PRMSG"],
			["guide gNotice, enviar mensajes en el canal Chat Party", "PRMSG"],
			["guide male~female, cambiar el genero de voz TTS (si esta disponible)", "PRMSG"],			
			["guide 1~10, ajustar la velocidad de voz TTS", "PRMSG"],
			["guide spawnObject, generacion de objetos marcadores", "PRMSG"],
			["guide stream, modo streamer (ocultar mensajes y objetos)", "PRMSG"],
			["guide dungeons, lista de todas las dungeons compatibles", "PRMSG"],
			["guide verbose id, enviar mensajes para dungeons especificas", "PRMSG"],
			["guide spawnObject id, generacion de objetos marcadores para dungeons especificas", "PRMSG"],
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
		settings: "Configuraciones",
		spawnObject: "Generacion de Objetos",
		speaks: "Mensajes por Voz (TTS)",
		lNotice: "Mensajes en Chat Notice",
		gNotice: "Mensajes en Chat Party",
		stream: "Modo Streamer",
		voice: "Genero de voz",
		rate: "Velocidad de voz",
		color: "Cambiar el color",
		dungeons: "Configuraciones de Dungeons",
		verbose: "Mensajes",
		objects: "Objetos",
		test: "Prueba de voz",
		module: "Modulo TERA-Guia",
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