// Kezzel's Gorge
//
// Made by Multarix

const { SpawnCircle } = module.parent.exports.lib;

let player, entity, library, effect;

module.exports = {
	load(dispatch){
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"s-453-999-103-0": [{ "type": "text", "sub_type": "message", "message": "Smash (Left)", "message_RU": "Удар (лево)", "message_ES": "Golpear (Izquierda)" }],
	"s-453-999-104-0": [{ "type": "text", "sub_type": "message", "message": "Smash (Right)", "message_RU": "Удар (право)", "message_ES": "Golpear (Derecha)" }],
	"s-453-999-105-0": [
		{ "type": "text", "sub_type": "message", "message": "Rock Smash", "message_RU": "Удар (танк)", "message_ES": "Golpe de Rocas", "class_position": "tank" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 210, 10, 185, 0, 3500) }
	],
	"s-453-999-106-0": [
		{ "type": "text", "sub_type": "message", "message": "Blast", "message_RU": "Выстрел", "message_ES": "Explosión" },
		{ "type": "text", "sub_type": "message", "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!", "delay": 2000 }
	],
	"s-453-999-107-0": [{ "type": "text", "sub_type": "message", "message": "Whip", "message_RU": "Кнут", "message_ES": "Látigo" }],
	"s-453-999-116-0": [{ "type": "text", "sub_type": "message", "message": "Shield", "message_RU": "Щит", "message_ES": "Escudo" }],
	"s-453-999-119-0": [
		{ "type": "text", "sub_type": "message", "message": "Kaia/ Thrall of Protection", "message_RU": "Кайа", "message_ES": "Kaia/ Thrall of Protection" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 75, 10, 450, 0, 5700) } // Unsure on size and position, the in-game telegraphs for this boss are buggy
	],
	"s-453-999-120-0": [
		{ "type": "text", "sub_type": "message", "message": "AoE Waves", "message_RU": "AoE волны", "message_ES": "AoE Olas" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 445, 0, 0, 10, 200, 0, 5700) }, // Inner circle
		{ "type": "func", "func": SpawnCircle.bind(null, false, 445, 0, 0, 10, 390, 0, 6700) }, // Middle circle
		{ "type": "func", "func": SpawnCircle.bind(null, false, 445, 0, 0, 10, 590, 0, 7700) }  // Outer circle
	]
};