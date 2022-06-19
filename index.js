"use strict";

module.exports.NetworkMod = function (mod) {
	try {
		mod.require["tera-guide-core"].load(mod, {
			languages: ["en", "es"], // Idiomas soportados
			colors: { gui: {}, general: {} }, // ajustes de color
			command: ["guia"], // comando del módulo
			chat_name: "Guía", // establecer el nombre del autor del chat para los avisos
		});
	} catch (e) {
		mod.error("¡Advertencia!\n¡El modulo dependiente \"tera-guide-core\" necesario para el correcto funcionamiento del modulo TERA-Guía-ES no está instalado!\nPor favor descargue e instale: https://github.com/hsdn/tera-guide-core\n");
		throw e;
	}
};