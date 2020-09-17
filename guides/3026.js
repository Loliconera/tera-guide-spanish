// Corrupted Skynest
//
// made by michengs / HSDN / ZC

const { MARKER_ITEM, Spawn } = module.parent.exports.lib;

let player, entity, library, effect;

let debuff = null;
let timer1;
let timer2;
let timer3;
let timer4;
let timer5;
let boss_ent;
let boss_offset = 0;
let qbacting = null;
let blue = false;
let red  = false;
let debuff_tracker_started = false;

const mech_messages = {
	0: { message: "IN",  message_RU: "К НЕМУ",  message_ES: "ENTRAR" },
	1: { message: "OUT", message_RU: "ОТ НЕГО", message_ES: "SALIR" }
};
const qbacting_messages = {
	0: { message: "different", message_RU: "разные",     message_ES: "diferente" },
	1: { message: "same",      message_RU: "одинаковые", message_ES: "igual" }
};
const debuff_messages = {
	0: { message: "Ready to get Fire debuff", message_RU: "Готовность к переключению на Огонь", message_ES: "Listo para cambiar al debuff de Fuego" },
	1: { message: "Ready to get Ice debuff",  message_RU: "Готовность к переключению на Лед",  message_ES: "Listo para cambiar al debuff de Hielo" }
};

// NULL % 2 = 0
//    1 % 2 = 1
//    0 % 2 = 0
//    2 % 2 = 0

function spawn_marker(out, handlers, dispatch) {
	if (!boss_ent) return;
	const boss_spawn = new Spawn(handlers, null, boss_ent, dispatch);	
	let distance = 220;
	let caption  = "IN"; // ENTRAR
	if (out) {
		distance = 620;
		caption  = "OUT"; // SALIR
	}
	boss_spawn.marker(false,  45 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]);
	boss_spawn.marker(false, 135 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]);
	boss_spawn.marker(false, 225 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]);
	boss_spawn.marker(false, 315 + boss_offset, distance, 0, 4000, true, [caption, "SAFE"]);
}

function debuff_added(id, handlers, dispatch) {
	debuff_removed(dispatch);
	debuff = id; // debuff event id
	timer1 = dispatch.setTimeout(() => {
		if (debuff != null) {
			handlers["text"]({
				"sub_type": "message",
				"message": "Debuff 20 seconds",
				"message_RU": "Дебафф 20 сек.",
				"message_ES": "Debuff 20 segundos"
			});
		}
	}, 70000);
	timer2 = dispatch.setTimeout(() => {
		if (debuff != null) {
			dispatch.setTimeout(() => {
				handlers["text"]({
					"sub_type": "alert",
					"message": (`${debuff_messages[debuff % 2].message}`),
					"message_RU": (`${debuff_messages[debuff % 2].message_RU}`),
					"message_ES": (`${debuff_messages[debuff % 2].message_ES}`)					
				});
			}, 2000);
			handlers["text"]({
				"sub_type": "message",
				"message": "Debuff 50 seconds",
				"message_RU": "Дебафф 50 сек.",
				"message_ES": "Debuff 50 segundos"
			});
		}
	}, 40000);
	timer3 = dispatch.setTimeout(() => {
		if (debuff != null) {
			handlers["text"]({
				"sub_type": "message",
				"message": "Warning! Debuff 15 seconds",
				"message_RU": "Дебафф 15 сек.",
				"message_ES": "¡Advertencia! Debuff 15 segundos"
			});
		}
	}, 75000);
	timer4 = dispatch.setTimeout(() => {
		if (debuff != null) {
			handlers["text"]({
				"sub_type": "message",
				"message": "Warning! Debuff 10 seconds",
				"message_RU": "Дебафф 10 сек.",
				"message_ES": "¡Advertencia! Debuff 10 segundos"
			});
		}
	}, 80000);
	timer5 = dispatch.setTimeout(() => {
		if (debuff != null) {
			handlers["text"]({
				"sub_type": "message",
				"message": "Warning! Debuff 5 seconds",
				"message_RU": "Дебафф 5 сек.",
				"message_ES": "¡Advertencia! Debuff 5 segundos"
			});
		}
	}, 85000);
	//
	if (blue) {
		handlers["text"]({
			"sub_type": "message",
			"message": (`${mech_messages[(qbacting + debuff + 1) % 2].message}`),
			"message_RU": (`${mech_messages[(qbacting + debuff + 1) % 2].message_RU}`),
			"message_ES": (`${mech_messages[(qbacting + debuff + 1) % 2].message_ES}`)			
		});
		spawn_marker((qbacting + debuff + 1) % 2, handlers, dispatch);
	} else if (red) {
		handlers["text"]({
			"sub_type": "message",
			"message": (`${mech_messages[(qbacting + debuff) % 2].message}`),
			"message_RU": (`${mech_messages[(qbacting + debuff) % 2].message_RU}`),
			"message_ES": (`${mech_messages[(qbacting + debuff) % 2].message_ES}`)			
		});
		spawn_marker((qbacting + debuff) % 2, handlers, dispatch);
	}
}

function debuff_removed(dispatch) {
	debuff = null;
	dispatch.clearTimeout(timer1);
	dispatch.clearTimeout(timer2);
	dispatch.clearTimeout(timer3);
	dispatch.clearTimeout(timer4);
	dispatch.clearTimeout(timer5);
}

function skilld_event(skillid, handlers, event, ent, dispatch) {
	const spawn = new Spawn(handlers, event, ent, dispatch);	
	const abnormality_change = (added, event) => {
		// Fire/Ice debuff
		if (player.isMe(event.target.toString()) && [30260001, 30260002, 31260001, 31260002].includes(event.id)) {
			if (added) {
				debuff_added(event.id, handlers, dispatch);
			} else {
				debuff_removed(dispatch);
			}
		}
		// Argon Priest Essence buff
		if (player.isMe(event.target.toString()) && [30261701, 31261701].includes(event.id)) {
			if (added && boss_ent) {
				let shield_loc = boss_ent["loc"].clone();
				shield_loc.w = boss_ent["loc"].w;
				handlers["spawn"]({ // spawn teleport mark
					"sub_type": "item",
					"id": MARKER_ITEM,
					"sub_delay": 50000,
					"pos": {
						x: 53192,
						y: 100761,
						z: 14233
					}
				}, {
					loc: shield_loc
				});
			}
		}
	};
	// In-Out quest balloons (qbacting => ярость 0, ужас 1)
	if ([3026004, 3126004, 3026005, 3126005].includes(skillid)) {
		qbacting = skillid % 2;
	}
	// Fire/Ice debuff (debuff % 2 => синий 0, красный 1)
	if ([30260001, 31260001, 30260002, 31260002].includes(skillid) && !debuff_tracker_started) {
		debuff_added(skillid, handlers, dispatch);
	}
	// In-Out identification
	if ([212, 213, 214, 215].includes(skillid)) {
		boss_ent = ent;
		spawn.circle(false, 445, 0, 0, 8, 440, 200, 8000);
		spawn.circle(false, 445, 0, 0, 4, 840, 200, 8000);
	}
	if ([212, 214].includes(skillid)) { // Fire claw (141, 142)
		boss_offset = 10;
		spawn.vector(553, 0, 0, 190, 840, 200, 8000);
		spawn.vector(553, 0, 0,  10, 840, 200, 8000);
	}
	if ([213, 215].includes(skillid)) { // Ice claw (143, 144)
		boss_offset = -10;
		spawn.vector(553, 0, 0, 170, 840, 200, 8000);
		spawn.vector(553, 0, 0, 350, 840, 200, 8000);
	}
	if ([213, 214].includes(skillid)) { // Ice inside
		dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers["text"]({
					"sub_type": "message",
					"message": (`Ice inside (${qbacting_messages[qbacting].message}) | ${mech_messages[(qbacting + debuff + 1) % 2].message}`),
					"message_RU": (`Внутри лед (${qbacting_messages[qbacting].message_RU}) | ${mech_messages[(qbacting + debuff + 1) % 2].message_RU}`),
					"message_ES": (`Hielo Interior (${qbacting_messages[qbacting].message_ES}) | ${mech_messages[(qbacting + debuff + 1) % 2].message_ES}`)
				});
				spawn_marker((qbacting + debuff + 1) % 2, handlers, dispatch);
			} else {
				handlers["text"]({
					"sub_type": "message",
					"message": (`Ice inside (${qbacting_messages[qbacting].message})`),
					"message_RU": (`Внутри лед (${qbacting_messages[qbacting].message_RU})`),
					"message_ES": (`Hielo Interior (${qbacting_messages[qbacting].message_ES})`)
				});
			}
		}, 500);
		blue = true;
		red  = false;
		dispatch.setTimeout(() => blue = false, 6500); //6700
	}
	if ([212, 215].includes(skillid)) { // Fire inside
		dispatch.setTimeout(() => {
			if (debuff != null) {
				handlers["text"]({
					"sub_type": "message",
					"message": (`Fire inside (${qbacting_messages[qbacting].message}) | ${mech_messages[(qbacting + debuff) % 2].message}`),
					"message_RU": (`Внутри огонь (${qbacting_messages[qbacting].message_RU}) | ${mech_messages[(qbacting + debuff) % 2].message_RU}`),
					"message_ES": (`Fuego Interior (${qbacting_messages[qbacting].message_ES}) | ${mech_messages[(qbacting + debuff) % 2].message_ES}`)
				});
				spawn_marker((qbacting + debuff) % 2, handlers, dispatch);
			} else {
				handlers["text"]({
					"sub_type": "message",
					"message": (`Fire inside (${qbacting_messages[qbacting].message})`),
					"message_RU": (`Внутри огонь (${qbacting_messages[qbacting].message_RU})`),
					"message_ES": (`Fuego Interior (${qbacting_messages[qbacting].message_ES})`)
				});
			}
		}, 500);
		blue = false;
		red  = true;
		dispatch.setTimeout(() => red = false, 6500);
	}
	if (skillid === 99020020) { // Death release debuff
		dispatch.clearTimeout(timer1);
		dispatch.clearTimeout(timer2);
	}
	if (!debuff_tracker_started) {
		dispatch.hook("S_ABNORMALITY_BEGIN", 4, abnormality_change.bind(null, true));
		dispatch.hook("S_ABNORMALITY_END", 1, abnormality_change.bind(null, false));
		debuff_tracker_started = true;
	}
}

let skills = {
	"112-0": [{ "type": "text", "sub_type": "message", "message": "Ice DOT", "message_RU": "Лед (полоса)", "message_ES": "Ataque de Hielo" }],
	"110-0": [{ "type": "text", "sub_type": "message", "message": "Fire DOT", "message_RU": "Огонь (лужа)", "message_ES": "Ataque de Fuego" }],
	"108-0": [
		{ "type": "text", "sub_type": "message", "message": "Turn Right (Repel)", "message_RU": "Поворот вправо (откид)", "message_ES": "Girar a la derecha (Repeler)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 8, 440, 0, 2000] }
	],
	"158-0": [
		{ "type": "text", "sub_type": "message", "message": "Turn Right (Repel)", "message_RU": "Поворот вправо (откид)", "message_ES": "Girar a la derecha (Repeler)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 8, 440, 0, 2000] }
	],
	"109-0": [
		{ "type": "text", "sub_type": "message", "message": "Turn Left (Repel)", "message_RU": "Поворот влево (откид)", "message_ES": "Girar a la izquierda (repeler)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 8, 440, 0, 2000] }
	],
	"159-0": [
		{ "type": "text", "sub_type": "message", "message": "Turn Left (Repel)", "message_RU": "Поворот влево (откид)", "message_ES": "Girar a la izquierda (repeler)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 912, 0, 0, 8, 440, 0, 2000] }
	],
	"120-0": [{ "type": "text", "sub_type": "message", "message": "Together", "message_RU": "Яростный рев", "message_ES": "Rugido furioso" }],
	"145-0": [{ "type": "text", "sub_type": "message", "message": "Stun", "message_RU": "Стан", "message_ES": "Stun", }],
	"157-0": [{ "type": "text", "sub_type": "message", "message": "Change", "message_RU": "Смена", "message_ES": "Cambio" }],
	"103-0": [
		{ "type": "text", "sub_type": "message", "message": "Tail (Flying)", "message_RU": "Хвост (полет)", "message_ES": "Coletazo (Volar)" },
		{ "type": "text", "sub_type": "message", "message": "Arise!", "message_RU": "Удочка!", "message_ES": "Arise!", "delay": 1500, "class_position": "priest" },
		{ "type": "spawn_func", "func": "semicircle", "args": [140, 260, 912, 0, 0, 10, 500, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 0, 135, 500, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 0, 260, 500, 0, 2000] }
	],
	"153-0": [
		{ "type": "text", "sub_type": "message", "message": "Tail (Flying)", "message_RU": "Хвост (полет!!)", "message_ES": "Coletazo (Volar)" },
		{ "type": "text", "sub_type": "message", "message": "Arise!", "message_RU": "Удочка!", "message_ES": "Arise!", "delay": 1500, "class_position": "priest" },
		{ "type": "spawn_func", "func": "semicircle", "args": [140, 260, 912, 0, 0, 10, 500, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 0, 135, 500, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 0, 0, 260, 500, 0, 2000] }
	],
	"118-0": [{ "type": "text", "sub_type": "message", "message": "Jump", "message_RU": "Прыжок", "message_ES": "Saltar" }],
	"118-1": [{ "type": "text", "sub_type": "message", "message": "Dodge", "message_RU": "Эвейд!", "message_ES": "Iframe" }],

	// AOE лед (большой)
	"104-0": [
		{ "type": "text", "sub_type": "message", "message": "Ice Storm DOTs", "message_RU": "Ледяные лужи", "message_ES": "Tormenta de HIELO (Amplio)" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 500, 0, 5000] }
	],
	// AOE огонь (большой)
	"105-0": [
		{ "type": "text", "sub_type": "message", "message": "Fire Bombs", "message_RU": "Огненные бомбы", "message_ES": "Meteoros de Fuego" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 135, 500, 10, 270, 0, 3000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 315, 500, 10, 270, 0, 3250] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 45, 500, 10, 270, 0, 3500] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 235, 500, 10, 270, 0, 3750] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 90, 500, 10, 270, 0, 4000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 270, 500, 10, 270, 0, 4250] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 500, 10, 270, 0, 4500] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 180, 500, 10, 270, 0, 4750] }
	],
	// AOE лед (малый)
	"154-0": [
		{ "type": "text", "sub_type": "message", "message": "Ice Storm", "message_RU": "Ледяной шторм", "message_ES": "Tormenta de HIELO" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 500, 0, 6000] }
	],
	// AOE огонь (малый)
	"155-0": [{ "type": "text", "sub_type": "message", "message": "Fire (Knockdown)", "message_RU": "Огненный столб (опрокид)", "message_ES": "Fuego (Derribo)" },
		{ "type": "text", "sub_type": "message", "delay": 1200, "message": "Dodge", "message_RU": "Эвейд", "message_ES": "Iframe" }
	],

	"206-0": [{ "type": "text", "sub_type": "message", "message": "Jump Back", "message_RU": "Прыжок назад", "message_ES": "Saltar atrás" }],
	"206-2": [{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 15, 350, 0, 3000] }],
	"137-0": [{ "type": "text", "sub_type": "message", "message": "Knockdown", "message_RU": "Опрокидывание", "message_ES": "¡¡[Rugido]!!" }],
	"138-0": [{ "type": "text", "sub_type": "message", "message": "AOE", "message_RU": "AOE", "message_ES": "AOE" }],
	"139-0": [
		{ "type": "text", "sub_type": "message", "message": "60 degrees (Fire to all)", "message_RU": "60° (Огонь всем)", "message_ES": "[Temp] 60° | Cambiar al (Hielo)" },
		{ "type": "text", "sub_type": "message", "delay": 4000, "message": "Lower the temp", "message_RU": "Снизить температуру", "message_ES": "Bajar la temperatura" }
	],
	"140-0": [
		{ "type": "text", "sub_type": "message", "message": "40 degrees (Ice to all)", "message_RU": "40° (Лед всем)", "message_ES": "[Temp] 40° | Cambiar al (Fuego)" },
		{ "type": "text", "sub_type": "message", "delay": 4000, "message": "Raise the temp", "message_RU": "Повысить температуру", "message_ES": "Subir la temperatura" }
	],

	"s-3026-1000-1212-0": [{ "type": "func", "func": skilld_event.bind(null, 212) }],
	"s-3026-1000-1215-0": [{ "type": "func", "func": skilld_event.bind(null, 215) }],
	"s-3026-1000-1213-0": [{ "type": "func", "func": skilld_event.bind(null, 213) }],
	"s-3026-1000-1214-0": [{ "type": "func", "func": skilld_event.bind(null, 214) }],
	"qb-3026-1000-3026005": [{ "type": "func", "func": skilld_event.bind(null, 3026005) }], // ужас, одинаковые цвета
	"qb-3026-1000-3026004": [{ "type": "func", "func": skilld_event.bind(null, 3026004) }], // ярость, разные цвета
	"qb-3026-1000-3126005": [{ "type": "func", "func": skilld_event.bind(null, 3126005) }], // ужас, одинаковые цвета
	"qb-3026-1000-3126004": [{ "type": "func", "func": skilld_event.bind(null, 3126004) }], // ярость, разные цвета
	"ae-0-0-99020020": [{ "type": "func", "func": skilld_event.bind(null, 99020020) }],
	"am-3026-1000-30260001": [{ "type": "func", "func": skilld_event.bind(null, 30260001) }], // красный
	"am-3026-1000-30260002": [{ "type": "func", "func": skilld_event.bind(null, 30260002) }], // синий
	"am-3026-1000-31260001": [{ "type": "func", "func": skilld_event.bind(null, 31260001) }], // красный
	"am-3026-1000-31260002": [{ "type": "func", "func": skilld_event.bind(null, 31260002) }]  // синий
};

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	}
};

for (let [key, value] of Object.entries(skills)) {
	if (key.length === 5) {
		module.exports["s-3026-1000-1" + key] = value;
		module.exports["s-3026-1000-2" + key] = value;
	} else {
		module.exports[key] = value;
	}
}