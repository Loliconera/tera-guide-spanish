// Draakon Arena
//
// made by Kuroine / HSDN

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// Ress bait / range check
	"s-3102-1000-107-0": [{ "type": "text", "sub_type": "message", "message": "Spectral Throw (Bait)", "message_RU": "Спектральный бросок (байт)", "message_ES": "Lanzamiento espectral > (objetivo)" }],

	// Basic attacks
	"s-3102-1000-103-0": [{ "type": "text", "sub_type": "message", "message": "2 Hits | Bleed", "message_RU": "2 удара | Кровоток", "message_ES": "2 Golpes | Sangrar" }],
	"s-3102-1000-113-0": [{ "type": "text", "sub_type": "message", "message": "4 Hits Combo", "message_RU": "4 удара комба", "message_ES": "Combo de 4 golpes" }],
	"s-3102-1000-105-0": [{ "type": "text", "sub_type": "message", "message": "Uppercut | Stun", "message_RU": "Удар снизу | Стан", "message_ES": "Ataque de Corte | Stun" }],
	"s-3102-1000-106-0": [{ "type": "text", "sub_type": "message", "message": "Stun", "message_RU": "Стан", "message_ES": "Stun" }],
	// 120 > 114
	"s-3102-1000-120-0": [{ "type": "text", "sub_type": "message", "message": "Many Pokes | Stun (AOE)", "message_RU": "Несколько ударов | Стан (AOE)", "message_ES": "Muchos Cortes | Stun (AOE)" }],
	"s-3102-1000-114-0": [
		{ "type": "text", "sub_type": "message", "message": "Stun (AOE)", "message_RU": "Стан (AOE)", "message_ES": "Stun (AOE)" },
		{ "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 0, 16, 420, 100, 3000] }
	],
	"s-3102-1000-111-0": [{ "type": "text", "sub_type": "message", "message": "Leap (Stun)", "message_RU": "Прыжок (стан)", "message_ES": "Salto > (al jugador)" }],
	"s-3102-1000-115-0": [{ "type": "text", "sub_type": "message", "message": "AOE Bombs (Gather)", "message_RU": "AOE бомбы (вместе)", "message_ES": "AOE Bombas (reunir)" },
		{ "type": "text", "sub_type": "message", "delay": 3000, "message": "Gather!", "message_RU": "Собраться!", "message_ES": "¡Reunir!" }
	],
	"s-3102-1000-112-0": [{ "type": "text", "sub_type": "message", "message": "Front | Back Kick", "message_RU": "Разворот | Откид назад", "message_ES": "Patada Delantera | Trasera" },
	{ "type": "spawn_func", "func": "vector", "args": [553, 90, 120, 160, 300, 0, 3000] },
	{ "type": "spawn_func", "func": "vector", "args": [553, 270, 120, -160, 300, 0, 3000] }
	],
	"s-3102-1000-110-0": [{ "type": "text", "sub_type": "message", "message": "Donuts + Wave", "message_RU": "Бублики + Волна", "message_ES": "Donas + Ola" },
	{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 650, 0, 4000] }
	],
	"s-3102-1000-109-0": [{ "type": "text", "sub_type": "message", "message": "Knockdown + Spin", "message_RU": "Опрокид + Крутилка", "message_ES": "Derribo + Girar" },
	{ "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 100, 10, 420, 0, 1000] },
	{ "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 150, 10, 420, 1000, 2000] }
	],
	"s-3102-1000-304-0": [{ "type": "text", "sub_type": "message", "message": "Shield!", "message_RU": "ЩИТ!", "message_ES": "¡Escudo!" }],
	"ab-3102-1000-31021006": [{ "type": "text", "sub_type": "message", "message": "Plague/Regress", "message_RU": "Чума/регресс", "message_ES": "Plague/Regress"  }],

	// Right Foot
	"s-3102-1000-121-0": [
		{ "type": "text", "sub_type": "message", "message": "Pizza", "message_RU": "Пицца", "message_ES": "Pie Derecho" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 550, 0, 3000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [-60, 70, 912, 0, 50, 8, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [120, 250, 912, 0, 50, 8, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 50, 70, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 50, 120, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 50, 250, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 50, 300, 450, 0, 4000] },
		{ "type": "text", "sub_type": "message", "delay": 1900, "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!" }
	],
	"s-3102-1000-122-0": [{ "type": "spawn_func", "func": "marker", "args": [false, 0, 200, 500, 2000, true, null] }],
	"s-3102-1000-123-0": [
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 0, 295, 550, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 0, 85, 550, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [85, 295, 912, 0, 0, 6, 550, 0, 2000] }
	],
	// Left Foot
	"s-3102-1000-124-0": [
		{ "type": "text", "sub_type": "message", "message": "Pizza", "message_RU": "Пицца", "message_ES": "Pie Izquierdo"  },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 550, 0, 3000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [-60, 70, 912, 0, 50, 8, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [120, 250, 912, 0, 50, 8, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 50, 70, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 50, 120, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 50, 250, 450, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 50, 300, 450, 0, 4000] },
		{ "type": "text", "sub_type": "message", "delay": 1900, "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!" }
	],
	"s-3102-1000-125-0": [{ "type": "spawn_func", "func": "marker", "args": [false, 0, 200, 500, 3000, true, null] }],
	"s-3102-1000-126-0": [
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 0, 295, 550, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 0, 85, 550, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [85, 295, 912, 0, 0, 6, 550, 0, 2000] }
	]
};