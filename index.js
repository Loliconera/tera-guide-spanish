"use strict";

module.exports.NetworkMod = function (mod) {
	try {
		mod.require["tera-guide-core"].load(mod, {
			colors: { gui: {}, general: {} }, // ajustes de color
			command: ["guide"], // comando del módulo
			chat_name: "Guia", // establecer el nombre del autor del chat para los avisos
		});
	} catch (e) {
		mod.error("¡Advertencia!\n¡El módulo dependiente \"tera-guide-core\" necesario para el correcto funcionamiento del módulo TERA-Guía no está instalado!\nPor favor descargue e instale: https://github.com/hsdn/tera-guide-core\n");
		throw e;
	}
};