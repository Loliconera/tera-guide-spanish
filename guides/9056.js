// Timescape (Difícil)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = ES;

	const third_boss_sun_w = -2;
	const third_boss_daemon_w = 0;
	const third_boss_goddess_w = 2;
	let third_boss_wall_w = null;
	let third_boss_small_w = null;
	let third_boss_middle_w = null;
	let third_boss_large_w = null;
	let third_boss_small_game_id = null;
	let third_boss_middle_game_id = null;
	let third_boss_large_game_id = null;

	function w_to_deg(radians) {
		if (radians == 0) return 0;
		if (radians == 2) return 120;
		if (radians == -2) return 240;
	}

	function calc_step(a, b, reverse = false) {
		if (a === b) return 0;
		let diff = w_to_deg(b) - w_to_deg(a);
		if (diff <= 0) diff += 360;
		if (reverse) return diff > 120 ? 1 : 2;
		return diff > 120 ? 2 : 1;
	}

	function third_boss_wall_announce() {
		const small = calc_step(third_boss_small_w, third_boss_wall_w);
		const middle = calc_step(third_boss_middle_w, third_boss_wall_w, true);
		const large = calc_step(third_boss_large_w, third_boss_wall_w);
		if (small + middle + large === 0) {
			handlers.text({
				sub_type: "notification",
				message: "Set",
				message_ES: "Notificación",
				speech: false
			});
		} else {
			handlers.text({
				sub_type: "notification",
				message: `Small: ${small}, Middle: ${middle}, Large: ${large}`,
				message_ES: `Pequeño: ${small}, Medio: ${middle}, Grande: ${large}`,
				speech: false
			});
		}
	}

	dispatch.hook("S_SPAWN_NPC", "*", e => {
		if (e.templateId === 243) {
			third_boss_wall_w = third_boss_sun_w;
			handlers.event([
				{ type: "text", sub_type: "alert", message: "Wall Change (Sun)", message_ES: "Cambio de Pared (Sol)" },
				{ type: "func", func: third_boss_wall_announce, delay: 2000 }
			]);
		}
		if (e.templateId === 244) {
			third_boss_wall_w = third_boss_daemon_w;
			handlers.event([
				{ type: "text", sub_type: "alert", message: "Wall Change (Demon)", message_ES: "Cambio de Pared (Demonio)" },
				{ type: "func", func: third_boss_wall_announce, delay: 2000 }
			]);
		}
		if (e.templateId === 245) {
			third_boss_wall_w = third_boss_goddess_w;
			handlers.event([
				{ type: "text", sub_type: "alert", message: "Wall Change (Goddess)", message_ES: "Cambio de Pared (Diosa)" },
				{ type: "func", func: third_boss_wall_announce, delay: 2000 }
			]);
		}
		if (e.templateId === 301) {
			third_boss_small_game_id = e.gameId;
			third_boss_small_w = parseInt(e.w);
		}
		if (e.templateId === 302) {
			third_boss_middle_game_id = e.gameId;
			third_boss_middle_w = parseInt(e.w);
		}
		if (e.templateId === 303) {
			third_boss_large_game_id = e.gameId;
			third_boss_large_w = parseInt(e.w);
		}
	});

	dispatch.hook("S_CREATURE_ROTATE", "*", e => {
		dispatch.setTimeout(() => {
			if (e.gameId === third_boss_small_game_id) {
				third_boss_small_w = parseInt(e.w);
				third_boss_wall_announce();
			}
			if (e.gameId === third_boss_middle_game_id) {
				third_boss_middle_w = parseInt(e.w);
				third_boss_wall_announce();
			}
			if (e.gameId === third_boss_large_game_id) {
				third_boss_large_w = parseInt(e.w);
				third_boss_wall_announce();
			}
		}, e.time + 100);
	});

	return {
		// Boss 1 (phase 1)
		"nd-456-401": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-456-401-104-0": [
			{ type: "text", sub_type: "message", message: "Bomb", message_ES: "Bomba" },
			{ type: "text", sub_type: "warning", message: "(1)", speech: false, delay: 550 },
			{ type: "text", sub_type: "warning", message: "(2)", speech: false, delay: 1300 },
			{ type: "text", sub_type: "warning", message: "(3)", speech: false, delay: 2050 },
			{ type: "text", sub_type: "message", message: "(4) Dodge!", message_ES: "(4) ¡Iframe!", delay: 2800 }
		],
		"s-456-1001-107-0": [{ type: "text", sub_type: "alert", message: "Shot", message_ES: "Disparar" }],

		"s-456-403-106-0": [{ type: "text", sub_type: "alert", message: "Circle", message_ES: "Círculo" }],
		"s-456-1001-103-0": [{ type: "text", sub_type: "alert", message: "Tail", message_ES: "Cola" }],
		"s-456-1001-101-0": [{ type: "text", sub_type: "alert", message: "Hit", message_ES: "Golpear" }],
		"s-456-1001-112-0": [{ type: "text", sub_type: "message", message: "Rotate", message_ES: "Girar" }],
		"s-456-1001-113-0": "s-456-1001-112-0",
		"s-456-1001-111-0": [{ type: "text", sub_type: "message", message: "Flight", message_ES: "Volar" }],
		"qb-456-1001-456020": [{ type: "text", sub_type: "message", message: "Give stun", message_ES: "Dar Stun" }],

		// Boss 1 (phase 2)
		"nd-456-413": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-456-413-104-0": [
			{ type: "text", sub_type: "message", message: "Bomb", message_ES: "Bomba" },
			{ type: "text", sub_type: "warning", message: "(1)", speech: false, delay: 550 },
			{ type: "text", sub_type: "warning", message: "(2)", speech: false, delay: 1300 },
			{ type: "text", sub_type: "warning", message: "(3)", speech: false, delay: 2050 },
			{ type: "text", sub_type: "message", message: "(4) Dodge!", message_ES: "(4) ¡Iframe!", delay: 2800 }
		],
		"s-456-414-104-0": "s-456-413-104-0",
		"s-456-415-104-0": "s-456-413-104-0",
		"s-456-416-104-0": "s-456-413-104-0",
		"s-456-1000-107-0": [{ type: "text", sub_type: "alert", message: "Shot", message_ES: "Disparar" }],
		"ab-456-1000-905685": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression", class_position: "mystic" }
		],

		"s-456-1000-103-0": "s-456-1001-103-0",
		"s-456-1000-101-0": "s-456-1001-101-0",
		"s-456-1000-112-0": "s-456-1001-112-0",
		"s-456-1000-113-0": "s-456-1001-112-0",
		"s-456-1000-111-0": "s-456-1001-111-0",
		"dm-456-1000-456001": "qb-456-1001-456020",

		// Boss 2
		"nd-456-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-456-1002-102-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Saltar" }],
		"s-456-1002-103-0": [{ type: "text", sub_type: "message", message: "Combo", message_ES: "Combo" }],
		"s-456-1002-104-0": [{ type: "text", sub_type: "message", message: "Shot (target)", message_ES: "Disparar -> (Objetivo)" }],
		"s-456-1002-107-0": [{ type: "text", sub_type: "message", message: "Many Pokes", message_ES: "Muchos Golpes" }],
		"s-456-1002-110-0": [{ type: "text", sub_type: "message", message: "Clap", message_ES: "Aplaudir" }],
		"s-456-1002-111-0": [{ type: "text", sub_type: "message", message: "Front | Jump Back", message_ES: "Aplaudir | Saltar Atrás" }],
		"s-456-1002-212-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Saltar Atrás" }],
		"s-456-1002-314-0": [{ type: "text", sub_type: "alert", message: "Lay Back", message_ES: "Tumbarse" }],
		"s-456-1002-315-0": [{ type: "text", sub_type: "alert", message: "Lay Front", message_ES: "Tirarse" }],
		"s-456-1002-319-0": [{ type: "text", sub_type: "alert", message: "Spin", message_ES: "Girar" }],
		"s-456-1002-3110-0": [{ type: "text", sub_type: "message", message: "Breath", message_ES: "Aliento" }],
		"s-456-1002-3113-0": [{ type: "text", sub_type: "message", message: "AOE (Give stun)", message_ES: "AOE (Dar Stun)", delay: 4000 }],

		// Boss 3
		"nd-456-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ab-456-1003-905607": [
			{ type: "text", sub_type: "message", message: "Cleanse + Plague of Exhaustion", message_ES: "Cleanse + Plague", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Cleanse + Regression", message_ES: "Cleanse + Regression", class_position: "mystic" }
		],
		"s-456-1003-3101-0": [
			{ type: "text", sub_type: "message", message: "Take a Circle", message_ES: "Toma la Dona", check_func: () => third_boss_wall_w !== third_boss_middle_w },
			{ type: "text", sub_type: "message", message: "Don't Take a Circle", message_ES: "No tomes la Dona", check_func: () => third_boss_wall_w === third_boss_middle_w }
		],
		"s-756-1003-103-0": [
			{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 340, 0, 5000] }
		],
		"s-456-1003-104-0": [{ type: "text", sub_type: "message", message: "Clap", message_ES: "Aplaudir" }],
		"s-456-1003-105-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-456-1003-105-1": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque Atrás" }],
		"s-456-1003-107-0": [{ type: "text", sub_type: "message", message: "Swipe", message_ES: "Golpe Fuerte" }],
		"s-456-1003-108-0": [{ type: "text", sub_type: "message", message: "Swipe", message_ES: "Golpe Fuerte" }],
		"s-456-1003-109-0": [{ type: "text", sub_type: "message", message: "Breath (target)", message_ES: "Aliento -> (Objetivo)" }],
		"s-456-1003-111-0": [{ type: "text", sub_type: "message", message: "Leash (target)", message_ES: "Correa -> (Objetivo)" }],
		"s-456-1003-3104-0": [{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula" }], // 456016
		"s-456-1003-3108-0": [{ type: "text", sub_type: "message", message: "Waves", message_ES: "Olas" }],
		"qb-456-1003-456015": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE" }], // 3103
		"qb-456-1003-456017": [{ type: "text", sub_type: "message", message: "Give Stun", message_ES: "Dar Stun" }] // 3102
	};
};