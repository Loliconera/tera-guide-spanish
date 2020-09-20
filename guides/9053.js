// Kezzel's Gorge
//
// Made by Multarix

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},
	// Kezzel (1st boss)
	"s-453-999-103-0": [{ "type": "text", "sub_type": "message", "message": "Smash (Left)", "message_RU": "Удар (лево)", "message_ES": "Golpe (Izquierdo)" }],
	"s-453-999-104-0": [{ "type": "text", "sub_type": "message", "message": "Smash (Right)", "message_RU": "Удар (право)", "message_ES": "Golpe (Derecho)" }],
	"s-453-999-105-0": [
		{ "type": "text", "sub_type": "message", "message": "Rock Smash", "message_RU": "Удар (танк)", "message_ES": "Golpe de Rocas", "class_position": "tank" },
		{ "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 210, 14, 190, 0, 3000] }
	],
	"s-453-999-106-0": [
		{ "type": "text", "sub_type": "message", "message": "Blast", "message_RU": "Выстрел", "message_ES": "Disparar" },
		{ "type": "text", "sub_type": "message", "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!", "delay": 2000 }
	],
	"s-453-999-107-0": [{ "type": "text", "sub_type": "message", "message": "Whip", "message_RU": "Кнут", "message_ES": "Látigo" }],
	"s-453-999-116-0": [{ "type": "text", "sub_type": "message", "message": "Shield", "message_RU": "Щит", "message_ES": "Escudo" }],
	"s-453-999-119-0": [
		{ "type": "text", "sub_type": "message", "message": "Kaia's Shield", "message_RU": "Кайа", "class_position": "priest" },
		{ "type": "text", "sub_type": "message", "message": "Thrall of Protection", "message_RU": "Кайа", "class_position": "mystic" },
		{ "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 0, 10, 500, 0, 6000] }
	],
	"s-453-999-120-0": [
		{ "type": "text", "sub_type": "message", "message": "AoE Waves", "message_RU": "AoE волны", "message_ES": "AoE Olas" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 14, 200, 0, 7000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 10, 390, 0, 7000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 8, 590, 0, 7000] }
	]
};