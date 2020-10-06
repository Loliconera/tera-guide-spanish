"use strict";

module.exports.NetworkMod = function (mod) {
	try {
		mod.require["tera-guide-core"].load(mod, {
			colors: { gui: {}, general: {} }, // configuración de color
			command: ["guide"], // comando del módulo
			chat_name: "Guia", // establecer el nombre del autor del chat para los avisos
		});
	} catch (e) {
		mod.error("¡Advertencia!\nModulo dependiente \"tera-guide-core\" necesario para TERA-Guia no esta instalado!\nPor favor descargue e instale: https://github.com/hsdn/tera-guide-core\n");
		throw e;
	}
};