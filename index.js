"use strict";

module.exports.NetworkMod = function (mod) {
	try {
		mod.require["tera-guide-core"].load(mod, {
			colors: { gui: {}, general: {} }, // ajustes de color
			command: ["guide"], // comando del módulo
			chat_name: "Guía", // establecer el nombre del autor del chat para los avisos
		});
	} catch (e) {
		mod.error("Warning!\nDepended module \"tera-guide-core\" needed for TERA-Guide is not installed!\nPlease download and install: https://github.com/hsdn/tera-guide-core\n");
		throw e;
	}
};