// Bahaar's Sanctum
//
// made by michengs

const { Spawn } = module.parent.exports.lib;

let player, entity, library, effect;

let shining = false;
let skill = 0;
let print = false;
let notice = true;
let notices = true;
let printend = false;

function skillds_event(skillids, handlers, event, ent, dispatch) {
	if (skillids === 104) {
		skill = 104;
		//dispatch.setTimeout(() => skill = 0, 500);
	} else if (skillids === 134) {
		skill = 134;
		//dispatch.setTimeout(() => skill = 0, 500);
	} else if (skillids === 118) {
		skill = 118;
		//dispatch.setTimeout(() => skill = 0, 500);
	}
}

function skilld_event(skillid,  handlers,  event,  ent,  dispatch) {
	const spawn = new Spawn(handlers, event, ent, dispatch);
	if (skillid == 90442000) shining = true;
	if (skillid == 90442001) shining = false;
	if (skillid == 90442304) {
		handlers["text"]({ "sub_type": "notification", "message": "Stun", "message_RU": "Стан!!!", "message_ES": "Stun" });
		handlers["text"]({ "sub_type": "message", "message": "Stun", "message_RU": "Стан!!!", "message_ES": "Stun" });
	}
	if (skillid == 90444001 && skill == 104) {
		dispatch.setTimeout(() => {
			if (shining){
				handlers["text"]({ "sub_type": "msgcp", "message": "Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" });
				skill = 0;
				notices = false;
				dispatch.setTimeout(() => notices = true, 1000);
			}
		},  500);
	}
	if (skillid == 90442000 && skill == 134) dispatch.setTimeout(() => {
		if (shining) {
			handlers["text"]({ "sub_type": "msgcp", "message": "Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" });
			skill = 0; 
			notices = false;
			dispatch.setTimeout(() => notices = true, 1000);
		}
	},  300);
	if (skillid == 90444001 && skill == 118) dispatch.setTimeout(() => {
		if (shining) {
			handlers["text"]({ "sub_type": "msgcp", "message": "Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" });
			skill = 0; 
			notices = false;
			dispatch.setTimeout(() => notices = true, 1000);
		}
	},  300);
	if (notice && skillid == 305) {
		notice = false;
		handlers["text"]({ "sub_type": "notification", "message": "Laser", "message_RU": "Лазер !!!", "message_ES": "Láser" });
		handlers["text"]({ "sub_type": "message", "message": "Laser", "message_RU": "Лазер !!!", "message_ES": "Láser" });
		dispatch.setTimeout(() => notice = true,  4000);
	}
	if (notices && skillid == 137) {
		handlers["text"]({ "sub_type": "message", "message": "Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" });
	}
	//
	if ([1121, 2121].includes(skillid)) {
		spawn.marker(false, 37, 125, 0, 2533, false, ["safe", "safe"]);
		spawn.marker(false, 143, 125, 0, 2533, false, ["safe", "safe"]);

		spawn.vector(553, 90, 50, 0, 500, 0, 6000);
		spawn.vector(553, 270, 50, 0, 500, 0, 6000);
		spawn.vector(553, 90, 50, 180, 500, 0, 6000);
		spawn.vector(553, 270, 50, 180, 500, 0, 6000);
		spawn.circle(false, 445, 0, 0, 6, 400, 0, 6000);

		handlers["text"]({ "type": "text", "sub_type": "alert", "delay": 60000, "message": "Waves soon...", "message_RU": "Скоро волны", "message_ES": "Olas pronto..." });
	}
	// Right
	if ([1140, 2140].includes(skillid)) {
		spawn.marker(false, 323, 125, 0, 2533, false, ["safe", "safe"]);
		spawn.marker(false, 217, 125, 0, 2533, false, ["safe", "safe"]);

		spawn.vector(553, 90, 50, 0, 500, 0, 6000);
		spawn.vector(553, 270, 50, 0, 500, 0, 6000);
		spawn.vector(553, 90, 50, 180, 500, 0, 6000);
		spawn.vector(553, 270, 50, 180, 500, 0, 6000);
		spawn.circle(false, 445, 0, 0, 6, 400, 0, 6000);

		handlers["text"]({ "type": "text", "sub_type": "alert", "delay": 60000, "message": "Waves soon...", "message_RU": "Скоро волны", "message_ES": "Olas pronto..." });
	}
	// 2nd fast 123 142
	// Left
	if ([1123, 2123].includes(skillid)) {
		spawn.marker(false, 37, 125, 0, 2500, false, ["safe", "safe"]);
		spawn.marker(false, 143, 125, 0, 2500, false, ["safe", "safe"]);

		spawn.vector(553, 90, 50, 0, 500, 0, 6000);
		spawn.vector(553, 270, 50, 0, 500, 0, 6000);
		spawn.vector(553, 90, 50, 180, 500, 0, 6000);
		spawn.vector(553, 270, 50, 180, 500, 0, 6000);
		spawn.circle(false, 445, 0, 0, 6, 400, 0, 6000);

		handlers["text"]({ "type": "text", "sub_type": "alert", "delay": 60000, "message": "Waves soon...", "message_RU": "Скоро волны", "message_ES": "Olas pronto..." });
	}
	// Right
	if ([1142, 2142].includes(skillid)) {
		spawn.marker(false, 323, 125, 0, 2500, false, ["safe", "safe"]);
		spawn.marker(false, 217, 125, 0, 2500, false, ["safe", "safe"]);

		spawn.vector(553, 90, 50, 0, 500, 0, 6000);
		spawn.vector(553, 270, 50, 0, 500, 0, 6000);
		spawn.vector(553, 90, 50, 180, 500, 0, 6000);
		spawn.vector(553, 270, 50, 180, 500, 0, 6000);
		spawn.circle(false, 445, 0, 0, 6, 400, 0, 6000);

		handlers["text"]({ "type": "text", "sub_type": "alert", "delay": 60000, "message": "Waves soon...", "message_RU": "Скоро волны", "message_ES": "Olas pronto..." });
	}
	// 3rd fast 122 141
	// Left
	if ([1122, 2122].includes(skillid)) {
		spawn.marker(false, 37, 125, 0, 2533, false, ["safe", "safe"]);
		spawn.marker(false, 143, 125, 0, 2533, false, ["safe", "safe"]);

		spawn.vector(553, 90, 50, 0, 500, 0, 6000);
		spawn.vector(553, 270, 50, 0, 500, 0, 6000);
		spawn.vector(553, 90, 50, 180, 500, 0, 6000);
		spawn.vector(553, 270, 50, 180, 500, 0, 6000);
		spawn.circle(false, 445, 0, 0, 6, 400, 0, 6000);

		handlers["text"]({ "type": "text", "sub_type": "alert", "delay": 60000, "message": "Waves soon...", "message_RU": "Скоро волны", "message_ES": "Olas pronto..." });
	}
	// Right
	if ([1141, 2141].includes(skillid)) {
		spawn.marker(false, 323, 125, 0, 2533, false, ["safe", "safe"]);
		spawn.marker(false, 217, 125, 0, 2533, false, ["safe", "safe"]);

		spawn.vector(553, 90, 50, 0, 500, 0, 6000);
		spawn.vector(553, 270, 50, 0, 500, 0, 6000);
		spawn.vector(553, 90, 50, 180, 500, 0, 6000);
		spawn.vector(553, 270, 50, 180, 500, 0, 6000);
		spawn.circle(false, 445, 0, 0, 6, 400, 0, 6000);

		handlers["text"]({ "type": "text", "sub_type": "alert", "delay": 60000, "message": "Waves soon...", "message_RU": "Скоро волны", "message_ES": "Olas pronto..." });
	}
}

function start_boss() {
	print = true;
	printend = true;
}

function print_th(handlers) {
	if (print) {
		handlers['text']({
			"sub_type": "message",
			"message": "Laser (loading)",
			"message_RU": "Лазер (зарядка)",
			"message_ES": "Láser (cargando)"
		});
	}
	print = false;
}

function print_end(handlers) {
	if (printend) {
		handlers['text']({
			"sub_type": "message",
			"message": "Laser (loading)",
			"message_RU": "Лазер (зарядка)",
			"message_ES": "Láser (cargando)"
		});
		handlers['text']({
			"sub_type": "message",
			"delay": 30000,
			"message": "Laser (loading)",
			"message_RU": "Лазер (зарядка)",
			"message_ES": "Láser (cargando)"
		});
	}
	printend = false;
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// PHASE 1

	// ---------------------------------------- Not enraged ----------------------------------------
	"s-444-1000-2103-0": [
		{ "type": "text", "sub_type": "message", "message": "Front (Dodge)", "message_RU": "Удар вперед (эвейд)", "message_ES": "Martillazo frontal (Iframe)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 400, 8, 350, 100, 3000] }
	],
	"s-444-1000-2108-0": [{ "type": "text", "sub_type": "message", "message": "Back Throw | Front", "message_RU": "Стан назад | Черенок", "message_ES": "Stun hacia atrás" }],
	"s-444-1000-2111-0": [
		{ "type": "text", "sub_type": "message", "message": "Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 180, 500, 8, 480, 100, 2000] }
	],
	"s-444-1000-2113-0": [{ "type": "text", "sub_type": "message", "message": "Throw (Bait)", "message_RU": "Молот (байт)", "message_ES": "Lanzar Martillo > (al jugador)" }],
	"s-444-1000-2114-0": [
		{ "type": "text", "sub_type": "message", "message": "Front Slam", "message_RU": "Удар назад", "message_ES": "Martillazo frontal" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 260, 10, 320, 100, 4000] }
	],
	"s-444-1000-2115-0": [{ "type": "text", "sub_type": "message", "delay": 234, "message": "Knockup", "message_RU": "Черкаш (полет)", "message_ES": "Batear" }],
	"s-444-1000-2116-0": [
		{ "type": "text", "sub_type": "message", "message": "Donuts", "message_RU": "Бублики", "message_ES": "Donas: Entrar > Salir > Entrar" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 290, 100, 6000] }
	],
	"s-444-1000-2117-0": [{ "type": "text", "sub_type": "message", "message": "Jump (Bait)", "message_RU": "Прыжок (байт)", "message_ES": "Saltar > (al Jugador)" }],
	"s-444-1000-2118-0": [
		{ "type": "text", "sub_type": "message", "message": "Jump (Tank)", "message_RU": "Прыжок (танк)", "message_ES": "Saltar > (al Tank)" }
		//{ "type": "func", "func": skillds_event.bind(null, 118) }
	],
	"s-444-1000-2121-0": [{ "type": "text", "sub_type": "message", "message": "Waves (Left)", "message_RU": "Волны (левая)", "message_ES": "Olas (Izquierda)" }, { "type": "func", "func": skilld_event.bind(null, 2121) }],
	//
	"s-444-1000-2131-0": [
		{ "type": "text", "sub_type": "message", "message": "Front | Left Scratch", "message_RU": "Удар в вперед | Левый черкаш", "message_ES": "Martillazo frontal | Arrastre Izquierdo" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 358, 340, 8, 660, 100, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 358, 0, 180, 500, 100, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 358, 0, 0, 500, 100, 4000] }
	],
	"s-444-1000-2132-0": [
		{ "type": "spawn_func", "func": "vector", "args": [553, 270, 200, 0, 500, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 270, 200, 180, 500, 0, 2000] }
	],
	//
	"s-444-1000-2137-0": [
		{ "type": "text", "sub_type": "message", "message": "Hammer Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 180, 500, 8, 480, 100, 2000] }
	],
	"s-444-1000-2138-0": [{ "type": "text", "sub_type": "message", "delay": 234, "message": "Knockup (Bait)", "message_RU": "Черкаш (полет)", "message_ES": "Batear (al Jugador)" }],
	"s-444-1000-2139-0": [
		{ "type": "text", "sub_type": "message", "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 20, 160, 0, 2000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 12, 220, 0, 2000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 10, 300, 0, 2000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 8, 360, 0, 2000] }
	],
	"s-444-1000-2140-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Right)", "message_RU": "Волны (правая)", "message_ES": "Olas (Derecha)" },
		{ "type": "func", "func": skilld_event.bind(null, 2140) }
	],

	// ---------------------------------------- Enraged ----------------------------------------
	"s-444-1000-1103-0": [
		{ "type": "text", "sub_type": "message", "message": "Front (Dodge)", "message_RU": "Удар вперед (эвейд)", "message_ES": "Martillazo frontal (Iframe)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 400, 8, 350, 100, 3000] }
	],
	"s-444-1000-1108-0": [{ "type": "text", "sub_type": "message", "message": "Back Throw | Front", "message_RU": "Стан назад | Черенок", "message_ES": "Stun hacia atrás" }],
	"s-444-1000-1111-0": [
		{ "type": "text", "sub_type": "message", "message": "Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 180, 500, 8, 480, 100, 2000] }
	],
	"s-444-1000-1113-0": [{ "type": "text", "sub_type": "message", "message": "Throw (Bait)", "message_RU": "Молот (байт)", "message_ES": "Lanzar Martillo > (al jugador)" }],
	"s-444-1000-1114-0": [
		{ "type": "text", "sub_type": "message", "message": "Front Slam", "message_RU": "Удар назад", "message_ES": "Martillazo frontal" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 260, 10, 320, 100, 4000] }
	],
	"s-444-1000-1115-0": [{ "type": "text", "sub_type": "message", "delay": 1300, "message": "Knockup", "message_RU": "Черкаш (полет)", "message_ES": "Batear" }],
	"s-444-1000-1116-0": [
		{ "type": "text", "sub_type": "message", "message": "Donuts", "message_RU": "Бублики", "message_ES": "Donas: Entrar > Salir > Entrar" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 290, 100, 6000] }
	],
	"s-444-1000-1117-0": [{ "type": "text", "sub_type": "message", "message": "Jump (Bait)", "message_RU": "Прыжок (байт)", "message_ES": "Saltar > (al Jugador)" }],
	"s-444-1000-1118-0": [
		{ "type": "text", "sub_type": "message", "message": "Jump (Tank)", "message_RU": "Прыжок (танк)", "message_ES": "Saltar > (al Tank)" }
		//{ "type": "func", "func": skillds_event.bind(null, 118) }
	],
	"s-444-1000-1121-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Left)", "message_RU": "Волны (левая)", "message_ES": "Olas (Izquierda))" },
		{ "type": "func", "func": skilld_event.bind(null, 1121) }
	],
	"s-444-1000-1131-0": [
		{ "type": "text", "sub_type": "message", "message": "Front | Left Scratch", "message_RU": "Удар вперед | Левый черкаш", "message_ES": "Martillazo frontal | Arrastre Izquierdo" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 358, 340, 8, 660, 100, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 358, 0, 180, 500, 100, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 358, 0, 0, 500, 100, 4000] }
	],
	"s-444-1000-1132-0": [
		{ "type": "spawn_func", "func": "vector", "args": [553, 270, 200, 0, 500, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 270, 200, 180, 500, 0, 2000] }
	],
	"s-444-1000-1137-0": [
		{ "type": "text", "sub_type": "message", "message": "Hammer Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 180, 500, 8, 480, 100, 2000] }
	],
	"s-444-1000-1138-0": [{ "type": "text", "sub_type": "message", "delay": 1300, "message": "Knockup (Bait)", "message_RU": "Черкаш (полет)", "message_ES": "Batear (al Jugador)" }],
	"s-444-1000-1139-0": [
		{ "type": "text", "sub_type": "message", "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 20, 160, 0, 2000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 12, 220, 0, 2000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 10, 300, 0, 2000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 8, 360, 0, 2000] }
	],
	"s-444-1000-1140-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Right)", "message_RU": "Волны (правая)", "message_ES": "Olas (Derecha)" },
		{ "type": "func", "func": skilld_event.bind(null, 1140) }
	],


	// PHASE 2
	"h-444-2000-100": [
		//{ "type": "spawn_func", "func": "vector", "args": [542, 0, 0, 0, 3000, 0, 6000000] },
		//{ "type": "spawn_func", "func": "vector", "args": [542, 0, 0, 180, 3000, 0, 6000000] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 0, -700, 100, 60000000, false, ["Throne", "Throne Direction"]] },
		{ "type": "spawn_func", "func": "point", "args": [513, 0, 800, 100, 60000000] }
	],
	"h-444-2000-99": [{ "type": "func", "func": start_boss }],
	"h-444-2000-0": [{ "type": "func", "func": print_end }],

	// ---------------------------------------- Not enraged ----------------------------------------
	"s-444-2000-1101-0": [
		{ "type": "text", "sub_type": "message", "message": "4 Hit Combo", "message_RU": "270", "message_ES": "4 Hit Combo (270)" },
		{ "type": "spawn_func", "func": "vector", "args": [553, 0, 0, 195, 500, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 0, 0, 270, 500, 0, 3000] }
	],
	"s-444-2000-1103-0": [
		{ "type": "text", "sub_type": "message", "message": "Front (Dodge)", "message_RU": "Удар вперед (эвейд)", "message_ES": "Martillazo frontal (Iframe)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 400, 8, 350, 100, 3000] }
	],
	//"s-444-2000-1104-0": [{ "type": "func", "func": skillds_event.bind(null, 104) }],
	"s-444-2000-1107-0": [{ "type": "text", "sub_type": "message", "message": "4 Hit (3)", "message_RU": "4", "message_ES": "4 Hit (3)" }],
	"s-444-2000-1108-0": [{ "type": "text", "sub_type": "message", "message": "Back Throw | Front", "message_RU": "Стан назад | Удар вперед", "message_ES": "Stun hacia atrás" }],
	"s-444-2000-1111-0": [
		{ "type": "text", "sub_type": "message", "message": "Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 180, 500, 8, 480, 100, 2000] }
	],
	"s-444-2000-1112-0": [
		//{ "type": "text", "sub_type": "message", "message": "Perfect Defense", "message_RU": "Идеальный блок" },
		{ "type": "text", "sub_type": "message", "delay": 1240, "message": "Perfect Defense", "message_RU": "Идеальный блок", "message_ES": "Defensa Perfecta" },
		//{ "type": "text", "sub_type": "message", "delay": 2040, "message": "1" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 220, 12, 210, 100, 4000] }
	],
	"s-444-2000-1113-0": [{ "type": "text", "sub_type": "message", "message": "Throw (Bait)", "message_RU": "Молот (байт)", "message_ES": "Lanzar Martillo > (al jugador)" }],
	"s-444-2000-1114-0": [
		{ "type": "text", "sub_type": "message", "message": "Front Slam", "message_RU": "Удар назад", "message_ES": "Martillazo frontal" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 260, 10, 320, 100, 4000] }
	],
	"s-444-2000-1115-0": [{ "type": "text", "sub_type": "message", "delay": 1300, "message": "Knockup", "message_RU": "Черкаш (полет)", "message_ES": "Batear" }],
	"s-444-2000-1116-0": [
		{ "type": "text", "sub_type": "message", "message": "Donuts", "message_RU": "Бублики", "message_ES": "Donas: Entrar > Salir > Entrar" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 290, 100, 6000] }
	],
	"s-444-2000-1117-0": [{ "type": "text", "sub_type": "message", "message": "Jump (Bait)", "message_RU": "Прыжок (байт)", "message_ES": "Saltar > (al Jugador)" }],
	"s-444-2000-1118-0": [
		{ "type": "text", "sub_type": "message", "message": "Jump (Tank)", "message_RU": "Прыжок (танк)", "message_ES": "Saltar > (al Tank)" }
		//{ "type": "func", "func": skillds_event.bind(null, 118) }
	],
	"s-444-2000-1119-0": [
		{ "type": "text", "sub_type": "message", "message": "Left Swipe", "message_RU": "Слева", "message_ES": "Izquierda" },
		{ "type": "spawn_func", "func": "semicircle", "args": [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [0, 180, 912, 0, 0, 8, 360, 0, 2000] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 270, 300, 100, 2000, true, null] }
	],
	"s-444-2000-1120-0": [
		{ "type": "text", "sub_type": "message", "message": "Right Swipe", "message_RU": "Справа", "message_ES": "Derecha" },
		{ "type": "spawn_func", "func": "semicircle", "args": [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [180, 360, 912, 0, 0, 8, 360, 0, 2000] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 90, 300, 100, 2000, true, null] }
	],
	"s-444-2000-1121-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Left)", "message_RU": "Волны (левая)", "message_ES": "Olas (Izquierda)" },
		{ "type": "func", "func": skilld_event.bind(null, 1121) }
	],
	"s-444-2000-1122-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Left) 3nd fast", "message_RU": "Волны (левая) 3-я быстрая", "message_ES": "Olas (Izquierda) 3er rápido" },
		{ "type": "func", "func": skilld_event.bind(null, 1122) }
	],
	"s-444-2000-1123-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Left) 2nd fast", "message_RU": "Волны (левая) 2-я быстрая", "message_ES": "Olas (Izquierda) 2do rápido" },
		{ "type": "func", "func": skilld_event.bind(null, 1123) }
	],
	//
	"s-444-2000-1125-0": [
		{ "type": "text", "sub_type": "message", "message": "Front | Right Scratch", "message_RU": "Удар вперед | Правый черкаш", "message_ES": "Martillazo frontal | Arrastre Derecho" }, 
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 400, 8, 350, 100, 3000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 356, 0, 180, 500, 100, 3000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 356, 0, 0, 500, 100, 3000] }
	],
	"s-444-2000-1126-0": [
		{ "type": "spawn_func", "func": "vector", "args": [553, 90, 200, 0, 500, 100, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 90, 200, 180, 500, 100, 2000] }
	],
	"s-444-2000-1131-0": [
		{ "type": "text", "sub_type": "message", "message": "Front | Left Scratch", "message_RU": "Удар вперед | Левый черкаш", "message_ES": "Martillazo frontal | Arrastre Izquierdo" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 358, 340, 8, 660, 100, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 358, 0, 180, 500, 100, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 358, 0, 0, 500, 100, 4000] }
	],
	"s-444-2000-1132-0": [
		{ "type": "spawn_func", "func": "vector", "args": [553, 270, 200, 0, 500, 100, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 270, 200, 180, 500, 100, 2000] }
	],
	//
	//"s-444-2000-1134-0": [{ "type": "func", "func": skillds_event.bind(null, 134) }],
	"s-444-2000-1135-0": [
		//{ "type": "text", "sub_type": "message", "message": "Perfect Defense", "message_RU": "Идеальный блок" },
		{ "type": "text", "sub_type": "message", "delay": 200, "message": "Perfect Defense", "message_RU": "Идеальный блок", "message_ES": "Defensa Perfecta" },
		//{ "type": "text", "sub_type": "message", "delay": 1535, "message": "1" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 220, 12, 210, 100, 4000] }
	],
	"s-444-2000-1137-0": [
		//{ "type": "func", "func": skilld_event.bind(null, 137) },
		{ "type": "text", "sub_type": "message", "message": "Hammer back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 180, 500, 8, 480, 100, 2000] }
	],
	"s-444-2000-1138-0": [{ "type": "text", "sub_type": "message", "delay": 1300, "message": "Knockup (Bait)", "message_RU": "Черкаш (полет)", "message_ES": "Batear (al Jugador)" }],
	"s-444-2000-1139-0": [{ "type": "text", "sub_type": "message", "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!" }],
	"s-444-2000-1140-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Right)", "message_RU": "Волны (правая)", "message_ES": "Olas (Derecha)" },
		{ "type": "func", "func": skilld_event.bind(null, 1140) }
	],
	"s-444-2000-1141-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Right) 3nd fast", "message_RU": "Волны (правая) 3-я быстрая", "message_ES": "Olas (Derecha) 3er rápido" },
		{ "type": "func", "func": skilld_event.bind(null, 1141) }
	],
	"s-444-2000-1142-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Right) 2nd fast", "message_RU": "Волны (правая) 2-я быстрая", "message_ES": "Olas (Derecha) 2do rápido" },
		{ "type": "func", "func": skilld_event.bind(null, 1142) }
	],
	"s-444-2000-1307-0": [{ "type": "text", "sub_type": "message", "message": "!", "message_RU": "!", "message_ES": "¡Golpe de Meteoritos!" },
		{ "type": "text", "sub_type": "message", "delay": 20000, "message": "Last aerolite", "message_RU": "Последний метеор", "message_ES": "Último Meteorito" }
	],
	"ab-444-2000-90442303": [{ "type": "text", "sub_type": "message", "message": "Plague/Regress", "message_RU": "Регресс", "message_ES": "Plague/Regress" }],
	"s-444-2000-1308-0": [{ "type": "text", "sub_type": "message", "message": "Stun (1)", "message_RU": "Стан (1)", "message_ES": "Stun (1)" }],
	"s-444-2000-1309-0": [{ "type": "text", "sub_type": "message", "message": "Stun (2)", "message_RU": "Стан (2)", "message_ES": "Stun (2)" }],
	"s-444-2000-1310-0": [{ "type": "text", "sub_type": "message", "message": "Stun (3)", "message_RU": "Стан (3)", "message_ES": "Stun (3)" }],
	"s-444-2000-1311-0": [
		{ "type": "text", "sub_type": "message", "message": "Wrath", "message_RU": "Облепиха", "message_ES": "Ira" },
		{ "type": "spawn_func", "func": "vector", "args": [553, 0, 0, 0, 500, 0, 6000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 0, 0, 180, 500, 0, 6000] }
	],
	"s-444-2000-1312-0": [
		{ "type": "text", "sub_type": "message", "message": "Wrath!", "message_RU": "Облепиха", "message_ES": "¡Ira!" },
		{ "type": "spawn_func", "func": "vector", "args": [553, 0, 0, 0, 500, 0, 6000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 0, 0, 180, 500, 0, 6000] }
	],

	// ---------------------------------------- Enraged ----------------------------------------
	"s-444-2000-2101-0": [
		{ "type": "text", "sub_type": "message", "message": "4 Hit combo", "message_RU": " 270 ", "message_ES": "4 Hit combo (270)" },
		{ "type": "spawn_func", "func": "vector", "args": [553, 0, 0, 195, 500, 0, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 0, 0, 270, 500, 0, 3000] }
	],
	"s-444-2000-2103-0": [
		{ "type": "text", "sub_type": "message", "message": "Front (Dodge)", "message_RU": "Удар вперед (эвейд)", "message_ES": "Martillazo frontal (Iframe)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 400, 8, 350, 100, 3000] }
	],
	//"s-444-2000-2104-0": [{ "type": "func", "func": skillds_event.bind(null, 104) }],
	"s-444-2000-2107-0": [{ "type": "text", "sub_type": "message", "message": "4 Hit (3)", "message_RU": "4", "message_ES": "4 Hit (3)" }],
	"s-444-2000-2108-0": [{ "type": "text", "sub_type": "message", "message": "Back Throw | Front", "message_RU": "Стан назад | Удар вперед", "message_ES": "Stun hacia atrás" }],
	"s-444-2000-2111-0": [
		{ "type": "text", "sub_type": "message", "message": "Back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 180, 500, 8, 480, 100, 2000] }
	],
	"s-444-2000-2112-0": [
		//{ "type": "text", "sub_type": "message", "message": "Perfect Defense", "message_RU": "Идеальный блок" },
		{ "type": "text", "sub_type": "message", "delay": 2000, "message": "Perfect Defense", "message_RU": "Идеальный блок", "message_ES": "Defensa Perfecta" },
		{ "type": "text", "sub_type": "message", "delay": 2700, "message": "x2" },
		//{ "type": "text", "sub_type": "message", "delay": 2800, "message": "1" },
		//{ "type": "text", "sub_type": "message", "delay": 3690, "message": "2" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 220, 12, 210, 100, 4000] }
	],
	"s-444-2000-2113-0": [{ "type": "text", "sub_type": "message", "message": "Throw (Bait)", "message_RU": "Молот (байт)", "message_ES": "Lanzar Martillo > (al jugador)" }],
	"s-444-2000-2114-0": [
		{ "type": "text", "sub_type": "message", "message": "Front Slam", "message_RU": "Удар назад", "message_ES": "Martillazo frontal" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 260, 10, 320, 100, 4000] }
	],
	"s-444-2000-2115-0": [{ "type": "text", "sub_type": "message", "delay": 234, "message": "Knockup", "message_RU": "Черкаш (полет)", "message_ES": "Batear" }],
	"s-444-2000-2116-0": [
		{ "type": "text", "sub_type": "message", "message": "Donuts", "message_RU": "Бублики", "message_ES": "Donas: Entrar > Salir > Entrar" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 290, 100, 6000] }
	],
	"s-444-2000-2117-0": [{ "type": "text", "sub_type": "message", "message": "Jump (Bait)", "message_RU": "Прыжок (байт)", "message_ES": "Saltar > (al Jugador)" }],
	"s-444-2000-2118-0": [{ "type": "text", "sub_type": "message", "message": "Jump (Tank)", "message_RU": "Прыжок (танк)", "message_ES": "Saltar > (al Tank)" }
		//{ "type": "func", "func": skillds_event.bind(null, 118) }
	],
	 "s-444-2000-2119-0": [
		{ "type": "text", "sub_type": "message", "message": "Left Swipe", "message_RU": "Слева", "message_ES": "Izquierda" },
		{ "type": "spawn_func", "func": "semicircle", "args": [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [0, 180, 912, 0, 0, 8, 360, 0, 2000] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 270, 300, 100, 2000, true, null] }
	],
	 "s-444-2000-2120-0": [
		{ "type": "text", "sub_type": "message", "message": "Right Swipe", "message_RU": "Справа", "message_ES": "Derecha" },
		{ "type": "spawn_func", "func": "semicircle", "args": [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
		{ "type": "spawn_func", "func": "semicircle", "args": [180, 360, 912, 0, 0, 8, 360, 0, 2000] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 90, 300, 100, 2000, true, null] }
	],
	"s-444-2000-2121-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Left)", "message_RU": "Волны (левая)", "message_ES": "Olas (Izquierda)" },
		{ "type": "func", "func": skilld_event.bind(null, 2121) }
	],
	"s-444-2000-2122-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Left) 3nd fast", "message_RU": "Волны (левая) 3-я быстрая", "message_ES": "Olas (Izquierda) 3er rápido"  },
		{ "type": "func", "func": skilld_event.bind(null, 2122) }
	],
	"s-444-2000-2123-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Left) 2nd fast", "message_RU": "Волны (левая) 2-я быстрая", "message_ES": "Olas (Izquierda) 2do rápido"  },
		{ "type": "func", "func": skilld_event.bind(null, 2123) }
	],
	//
	"s-444-2000-2125-0": [
		{ "type": "text", "sub_type": "message", "message": "Front | Right Scratch", "message_RU": "Удар вперед | Правый черкаш", "message_ES": "Martillazo frontal | Arrastre Derecho" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 400, 8, 350, 100, 3000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 356, 0, 180, 500, 100, 3000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 356, 0, 0, 500, 100, 3000] }
	],
	 "s-444-2000-2126-0": [
		{ "type": "spawn_func", "func": "vector", "args": [553, 90, 200, 0, 500, 100, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 90, 200, 180, 500, 100, 2000] }
	],
	"s-444-2000-2131-0": [
		{ "type": "text", "sub_type": "message", "message": "Front | Left Scratch", "message_RU": "Удар вперед | Левый черкаш", "message_ES": "Martillazo frontal | Arrastre Izquierdo" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 358, 340, 8, 660, 100, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 358, 0, 180, 500, 100, 4000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 358, 0, 0, 500, 100, 4000] }
	],
	"s-444-2000-2132-0": [
		{ "type": "spawn_func", "func": "vector", "args": [553, 270, 200, 0, 500, 100, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 270, 200, 180, 500, 100, 2000] }
	],
	//
	//"s-444-2000-2134-0": [{ "type": "func", "func": skillds_event.bind(null, 134) }],
	"s-444-2000-2135-0": [
		//{ "type": "text", "sub_type": "message", "message": "Perfect Defense", "message_RU": "Идеальный блок" },
		{ "type": "text", "sub_type": "message", "delay": 200, "message": "Perfect Defense", "message_RU": "Идеальный блок", "message_ES": "Defensa Perfecta" },
		{ "type": "text", "sub_type": "message", "delay": 1535, "message": "x2" },
		//{ "type": "text", "sub_type": "message", "delay": 1535, "message": "1" },
		//{ "type": "text", "sub_type": "message", "delay": 2535, "message": "2" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 356, 220, 12, 210, 100, 4000] }
	],
	"s-444-2000-2137-0": [
		//{ "type": "func", "func": skilld_event.bind(null, 137) },
		{ "type": "text", "sub_type": "message", "message": "Hammer back", "message_RU": "Удар назад", "message_ES": "Martillazo hacia atrás" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 180, 500, 8, 480, 100, 2000] }
	],
	"s-444-2000-2138-0": [{ "type": "text", "sub_type": "message", "delay": 234, "message": "Knockup (Bait)", "message_RU": "Черкаш (полет)", "message_ES": "Batear (al Jugador)" }],
	"s-444-2000-2139-0": [{ "type": "text", "sub_type": "message", "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!" }],
	"s-444-2000-2140-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Right)", "message_RU": "Волны (правая)", "message_ES": "Olas (Derecha)" },
		{ "type": "func", "func": skilld_event.bind(null, 2140) }
	],
	"s-444-2000-2141-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Right) 3nd fast", "message_RU": "Волны (правая) 3-я быстрая", "message_ES": "Olas (Derecha) 3er rápido" },
		{ "type": "func", "func": skilld_event.bind(null, 2141) }
	],
	"s-444-2000-2142-0": [
		{ "type": "text", "sub_type": "message", "message": "Waves (Right) 2nd fast", "message_RU": "Волны (правая) 2-я быстрая", "message_ES": "Olas (Derecha) 2do rápido" },
		{ "type": "func", "func": skilld_event.bind(null, 2142) }
	],

	"ab-444-2000-90442000": [{ "type": "func", "func": skilld_event.bind(null, 90442000) }],
	"ab-444-2000-90442001": [{ "type": "func", "func": skilld_event.bind(null, 90442001) }],
	"ab-444-2000-90442304": [{ "type": "func", "func": skilld_event.bind(null, 90442304) }],
	"ab-444-2000-90444001": [{ "type": "func", "func": skilld_event.bind(null, 90444001) }],
	"s-444-2500-1201-0": [{ "type": "func", "func": print_th }],
	"s-444-2500-1305-0": [
		{ "type": "func", "func": skilld_event.bind(null, 305) },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 0, 0, 3000, 0, 4000] }
	]
};