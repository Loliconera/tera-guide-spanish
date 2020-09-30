'use strict';

module.exports.NetworkMod = function (mod) {
	try {
		mod.require["tera-guide-core"].load(mod);
	} catch (e) {
		throw "¡Advertencia!\nMódulo dependiente \"tera-guide-core\" necesario para TERA-Guide no está instalado!\nPor favor descargue e instale: https://github.com/hsdn/tera-guide-core";
	}
};