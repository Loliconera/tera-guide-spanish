// The Observatory
//
// made by False

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	const { entity } = dispatch.require.library;

	let orb1_loc = null;
	let orb2_loc = null;
	let orb3_loc = null;
	let orb4_loc = null;
	let orb5_loc = null;
	let road_from_gameId = null;
	let enrage = 0;
	let enrage_time = 0;
	let num_debuff = null;
	let color = "blue";
		
	function spawn_road(loc) {
		const road_from_ent = entity.mobs[road_from_gameId];
		if (road_from_ent && loc) {
			const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
			const distance = road_from_ent.pos.dist2D(loc);
			handlers.spawn({ func: "vector", args: [445, 0, 0, angle, distance, 0, 99999999], tag: "light" }, { loc: road_from_ent.pos });
		}
	}
	
	function side(skillid) {
		const left_safe = [
			{ type: "text", sub_type: "message", message: "Left safe!", message_ES: "¡Izquierda Seguro!" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 1000, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 250, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 340, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 430, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 7, 520, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 6, 610, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 5, 700, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 4, 790, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 3, 880, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 2, 1000, 0, 2500] }
		];
		const right_safe = [
			{ type: "text", sub_type: "message", message: "Right safe!", message_ES: "¡Derecha Seguro!" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 1000, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1000, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 250, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 340, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 430, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 7, 520, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 6, 610, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 5, 700, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 4, 790, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 3, 880, 0, 2500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 2, 1000, 0, 2500] }
		];
		if ([112].includes(skillid)) {
			if (color == "red") {
				handlers.event(left_safe);
			} else if (color == "blue") {
				handlers.event(right_safe);
			}
		}
		if ([111].includes(skillid)) {
			if (color == "blue") {
				handlers.event(left_safe);
			} else if (color == "red") {
				handlers.event(right_safe);
			}
		}
	}
	
	function range_check() {
		enrage = new Date() - enrage_time >= 32100 ? 0 : 1;
		if (enrage == 1) {
			handlers.event([
				{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 300, 200, 5000] },
				{ type: "text", sub_type: "message", message: "In!", message_ES: "¡Entrar!" }
			]);
		} else {
			handlers.event([
				{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 350, 200, 5000] },
				{ type: "text", sub_type: "message", message: "Out!", message_ES: "¡Salir!" }
			]);
		}
	}
	
	return {
		"ns-2809-1000": [{ type: "func", func: ent => road_from_gameId = ent.gameId }],
		"nd-2809-1000": [
			{ type: "func", func: () => road_from_gameId = null },
			{ type: "func", func: () => color = "blue" },
			{ type: "func", func: () => enrage = 0 },
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		
		//Механика с шарами и Debuffфами
		"ns-2809-1001": [
			{ type: "spawn", func: "marker", args: [false, -150, 0, 100, 99999999, false, ["11111", "111"]] },
			{ type: "func", func: ent => orb1_loc = ent.pos }
		],	//1
		"ns-2809-1002": [
			{ type: "spawn", func: "marker", args: [false, -85, 0, 100, 99999999, false, ["22222", "222"]] },
			{ type: "func", func: ent => orb2_loc = ent.pos }
		],		//2
		"ns-2809-1003": [
			{ type: "spawn", func: "marker", args: [false, -10, 0, 100, 99999999, false, ["33333", "333"]] },
			{ type: "func", func: ent => orb3_loc = ent.pos }
		],		//3
		"ns-2809-1004": [
			{ type: "spawn", func: "marker", args: [false, 60, 0, 100, 99999999, false, ["44444", "444"]] },
			{ type: "func", func: ent => orb4_loc = ent.pos }
		],		//4
		"ns-2809-1005": [
			{ type: "spawn", func: "marker", args: [false, 140, 0, 100, 99999999, false, ["55555", "555"]] },
			{ type: "func", func: ent => orb5_loc = ent.pos }
		],		//5
		
		"am-2809-1000-428091001": [
			{ type: "func", func: () => num_debuff = 1 },
			{ type: "text", sub_type: "message", message: "Debuff 1", message_ES: "Debuff 1" },
			{ type: "func", func: () => spawn_road(orb1_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 23790, y: 160322, z: 12617, w: 2.07 }, tag: "light" }
		],
		"am-2809-1000-428091002": [
			{ type: "func", func: () => num_debuff = 2 },
			{ type: "text", sub_type: "message", message: "Debuff 2", message_ES: "Debuff 2" },
			{ type: "func", func: () => spawn_road(orb2_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 24082, y: 161256, z: 12617, w: 1.69 }, tag: "light" }
		],
		"am-2809-1000-428091003": [
			{ type: "func", func: () => num_debuff = 3 },
			{ type: "text", sub_type: "message", message: "Debuff 3", message_ES: "Debuff 3" },
			{ type: "func", func: () => spawn_road(orb3_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 23449, y: 162197, z: 12617, w: 2.83 }, tag: "light" }
		],
		"am-2809-1000-428091004": [
			{ type: "func", func: () => num_debuff = 4 },
			{ type: "text", sub_type: "message", message: "Debuff 4", message_ES: "Debuff 4" },
			{ type: "func", func: () => spawn_road(orb4_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 22142, y: 161855, z: 12617, w: -0.76 }, tag: "light" }
		],
		"am-2809-1000-428091005": [
			{ type: "func", func: () => num_debuff = 5 },
			{ type: "text", sub_type: "message", message: "Debuff 5", message_ES: "Debuff 5" },
			{ type: "func", func: () => spawn_road(orb5_loc) },
			{ type: "spawn", sub_type: "item", id: 88704, sub_delay: 99999999, pos: { x: 22463, y: 160329, z: 12617, w: 1.44 }, tag: "light" }
		],
		"ar-2809-1000-428091001": [
			{ type: "despawn_all", tag: "light" },
			{ type: "func", func: () => num_debuff = null }
		],
		"ar-2809-1000-428091002": "ar-2809-1000-428091001",
		"ar-2809-1000-428091003": "ar-2809-1000-428091001",
		"ar-2809-1000-428091004": "ar-2809-1000-428091001",
		"ar-2809-1000-428091005": "ar-2809-1000-428091001",
		"qb-2809-1000-2809101": [{ type: "despawn_all", tag: "light" }],
		
		//Бежать к шарам
		"qb-2809-1000-2809103": [
			{ type: "text", sub_type: "message", message: "Run to orb 1", message_ES: "Corre hacia la esfera 1 ", check_func: () => num_debuff === 1 },
			{ type: "text", sub_type: "message", message: "Run to orb 2", message_ES: "Corre hacia la esfera 2 ", check_func: () => num_debuff === 2 },
			{ type: "text", sub_type: "message", message: "Run to orb 3", message_ES: "Corre hacia la esfera 3 ", check_func: () => num_debuff === 3 },
			{ type: "text", sub_type: "message", message: "Run to orb 4", message_ES: "Corre hacia la esfera 4 ", check_func: () => num_debuff === 4 },
			{ type: "text", sub_type: "message", message: "Run to orb 5", message_ES: "Corre hacia la esfera 5 ", check_func: () => num_debuff === 5 }
		],
		
		//Рес-байт
		"qb-2809-1013-2809106": [{ type: "text", sub_type: "message", message: "Res-Bait!", message_ES: "Res-Bait!" }],
		
		//Механика с лужами
		"qb-2809-1000-2809104": [{ type: "text", sub_type: "message", message: "Remove puddles from the boss!", message_ES: "¡Retire los charcos del jefe!" }],
		"qb-2809-1000-2809107": [{ type: "text", sub_type: "message", message: "Stand in the puddles!", message_ES: "¡Párate en los charcos!" }],
		
		//Механика красный/синий
		
		"s-2809-1001-1102-0": [
			{ type: "func", check_func: () => num_debuff === 1, func: () => color = "red" },
		],
		"s-2809-1002-1102-0": [
			{ type: "func", check_func: () => num_debuff === 2, func: () => color = "red" },
		],
		"s-2809-1003-1102-0": [
			{ type: "func", check_func: () => num_debuff === 3, func: () => color = "red" },
		],
		"s-2809-1004-1102-0": [
			{ type: "func", check_func: () => num_debuff === 4, func: () => color = "red" },
		],
		"s-2809-1005-1102-0": [
			{ type: "func", check_func: () => num_debuff === 5, func: () => color = "red" },
		],
		// awaiting qb-2809-1000-2809112
		"s-2809-1000-1313-0": [
			{ type: "func", func: side, args: [112], delay: 3000 },
			{ type: "func", func: () => color = "blue", delay: 60000 }
		],
		// standby qb-2809-1000-2809111
		"s-2809-1000-1312-0": [
			{ type: "func", func: side, args: [111], delay: 3000 },
			{ type: "func", func: () => color = "blue", delay: 60000 }
		],
		
		//Механика очистка
		"qb-2809-1000-2809105": [{ type: "text", sub_type: "message", message: "Purging!", message_ES: "¡Limpieza!" }],
		"s-2809-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "¡Iframe!", delay: 1200 },
			{ type: "text", sub_type: "message", message: "Make a puddle with Res-byte!", message_ES: "¡Haz un charco con Res-byte!", class_position: "heal", delay: 2500 }
		],
		
		//Проверка дальности
		"rb-2809-1000": [
			{ type: "func", func: () => enrage = 1 },
			{ type: "func", func: () => enrage_time = new Date() }
		],
		"re-2809-1000": [{ type: "func", func: () => enrage = 0 }],
		
		"qb-2809-1000-2809108": [{ type: "func", func: range_check }],
		
		//Механика бублики
		"qb-2809-1000-2809110": [
			{ type: "text", sub_type: "message", message: "Donuts!", message_ES: "¡Donas!" },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 10, 300, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 6, 600, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 4, 875, 200, 8000] },
			{ type: "spawn", func: "circle", args: [true, 445, 0, 0, 3, 1150, 200, 8000] }
		],
				
		//Механика кристаллы
		"qb-2809-1000-2809114": [{ type: "text", sub_type: "message", message: "Destroy crystals!", message_ES: "¡Romper los cristales!" }],
		
		//10% волны
		"h-2809-1000-10": [{ type: "text", sub_type: "message", message: "10%! Waves!", message_ES: "¡10%! ¡Olas!" }]
	};
};