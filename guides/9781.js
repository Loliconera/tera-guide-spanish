// Velik's Sanctuary
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

  let thirdboss_fifty = false;

	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza" },
				{ type: "spawn", func: "marker", args: [false, one * 45 + 68, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 45, 750, 0, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, one * 45 + 90, 750, 0, 5000] },
				{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 330, 0, 6000] },
				{ type: "spawn", func: "marker", args: [false, two * 45 + 68, 300, 7000, 5000, true, null] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 45, 750, 7000, 5000] },
				{ type: "spawn", func: "vector", args: [553, 0, 0, two * 45 + 90, 750, 7000, 5000] }
			]);
		}
	}

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs",
						message_ES: "Debuffs > Circulos > Bombas"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles",
						message_ES: "Debuffs > Bombas > Circulos"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs",
						message_ES: "Circulos > Bombas > Debuffs"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs",
						message_ES: "Circulos > Debuffs > Bombas"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles",
						message_ES: "Bombas > Debuffs > Circulos"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs",
						message_ES: "Bombas > Circulos > Debuffs"
					});
				}
				break;
		}
	}

	return {
		// 1 BOSS
		"nd-781-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
    ],
    "s-781-1000-1111-0": [{ type: "text", sub_type: "message", message: "Back 360", message_ES: "Átras 360" }],
		"s-781-1000-1401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-781-1000-1402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-781-1000-1301-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE" },
			{ type: "text", sub_type: "message", message: "Dodge! (Go to the safe)", message_ES: "¡Iframe! (vaya al área segura)", delay: 1000 }
		],
		"s-781-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" }],
		"s-781-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_ES: "Volar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-781-1000-1308-0": [{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR" }],
		"s-781-1000-1309-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR" }],
		"s-781-1000-1112-0": [{ type: "text", sub_type: "message", message_ES: "Mover atrás", message: "Back Move" }],
		"s-781-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_ES: "Ataque frontal | AOE" }],
		"s-781-1000-1114-0": [
			{ type: "text", sub_type: "message", message_ES: "Objetivo", message: "Target Attack" },
			{ type: "spawn", func: "vector", args: [553, 90, 150, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 90, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 75, 0, 1300, 0, 2500] },
			{ type: "spawn", func: "vector", args: [553, 270, 150, 0, 1300, 0, 2500] }
		],
		"s-781-1000-1115-0": [{ type: "text", sub_type: "message", delay: 3200, message_ES: "Iframe", message: "Dodge" }], // dodge circle
		"s-781-1000-1117-0": [{ type: "text", sub_type: "message", delay: 5200, message_ES: "Iframe", message: "Dodge" }], // dodge circles
		"s-781-1000-2111-0": "s-781-1000-1111-0",
		"s-781-1000-2112-0": "s-781-1000-1112-0",
		"s-781-1000-2113-0": "s-781-1000-1113-0",
		"s-781-1000-2114-0": "s-781-1000-1114-0",
		"s-781-1000-2115-0": "s-781-1000-1115-0",
		"s-781-1000-2117-0": "s-781-1000-1117-0",
		"qb-781-1000-98103": [{ type: "text", sub_type: "message", message: "Lead circle to the stone", message_ES: "Conduce el círculo a la piedra." }],
		"qb-781-1000-78107": [{ type: "text", sub_type: "message", message: "Lead circles to the stone", message_ES: "Conduce los Circulos a la piedra." }],

		// 2 BOSS
		"nd-781-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Cage Mechanic
		"s-781-2000-1501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_ES: "Identificación" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
    ],
		"s-781-2000-1138-0": [ // T1
			{ type: "event", delay: 6500, args: [
				{ type: "text", sub_type: "notification", message: "Out > In > Side > Side", message_ES: "Salir > Entrar > Lado > Lado" },
				// x6 normal + in circle
				{ type: "spawn", func: "marker", args: [false, 15, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 0, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 0, 3000, true, null] },
				// out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 1500, true, null] },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 170, 4500, 1000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 4500, 1000, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 5500, 2000, true, null] }
			] }
		],
		"s-781-2000-1139-0": [ // T2
			{ type: "event", delay: 7500, args: [
				{ type: "text", sub_type: "notification", message: "Side > In > Out > Side", message_ES: "Lado > Entrar > Salir > Lado" },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 0, 1500, true, null] },
				// x6 normal
				{ type: "spawn", func: "marker", args: [false, 15, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 1500, 1500, true, null] },
				// out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 1500, true, null] },
				// in circle
				{ type: "spawn", func: "marker", args: [false, 15, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 4500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 4500, 1500, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 270, 6000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 6000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 6000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 6000, 1500, true, null] }
			] }
		],
		"s-781-2000-1140-0": [ // T1
			{ type: "event", delay: 6500, args: [
				{ type: "text", sub_type: "notification", message: "Out > In > Side > Side", message_ES: "Salir > Entrar > Lado > Lado" },
				// in circle
				{ type: "spawn", func: "marker", args: [false, 45, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 0, 1500, true, null] },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 170, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 1500, 1500, true, null] },
				// x6 normal + out circle
				{ type: "spawn", func: "marker", args: [false, 15, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 3000, 2500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 170, 3000, 2500, true, null] },
				// x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 5500, 2000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 5500, 2000, true, null] }
			] }
		],
		"s-781-2000-1141-0": [ // T2
			{ type: "event", delay: 7500, args: [
				{ type: "text", sub_type: "notification", message: "Out > Side > Side > In", message_ES: "Salir > Lado > Lado > Entrar" },
				// x6 normal
				{ type: "spawn", func: "marker", args: [false, 15, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 75, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 135, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 195, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 0, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 315, 270, 0, 1500, true, null] },
				// x6 reverse
				{ type: "spawn", func: "marker", args: [false, 45, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 105, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 225, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 285, 270, 1500, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 1500, 1500, true, null] },
				// in circle
				{ type: "spawn", func: "marker", args: [false, 75, 270, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 270, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 270, 3000, 1500, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 270, 3000, 1500, true, null] },
				// out circle + x4
				{ type: "spawn", func: "marker", args: [false, 75, 170, 4500, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 165, 170, 4500, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 255, 170, 4500, 3000, true, null] },
				{ type: "spawn", func: "marker", args: [false, 345, 170, 4500, 3000, true, null] }
			] }
		],
		//
		"s-781-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 14, 270, 0, 2600] }
		],
		"s-781-2000-1108-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque frontal" }],
		"s-781-2000-1110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_ES: "Atrás Mover" }],
		"s-781-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_ES: "ataque 360" }],
		"s-781-2000-1114-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Pull" }],
		"s-781-2000-1115-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "circulos" }],
		"s-781-2000-1115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 150 }],
		"s-781-2000-1117-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Saltar" }],
		"s-781-2000-1130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-781-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-781-2000-1134-0": [
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_ES: "Interior + AoE" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-781-2000-1134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-781-2000-1136-0": [{ type: "text", sub_type: "message", message: "Donut", message_ES: "Dona" }],
		"s-781-2000-1202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Lanzar objetivo" }],
		"s-781-2000-1205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Lanzar objetivo" }],
		"s-781-2000-1206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_ES: "Lanza (Objetivo)" }],
		"s-781-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_ES: "Bait (Objetivo)" }],
		"s-781-2000-1302-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1600 }],
		"s-781-2000-1502-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-781-2000-1503-0": [{ type: "text", sub_type: "message", message: "Target Lockon", message_ES: "Bloqueo de objetivo" }],
		"s-781-2000-1504-0": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_ES: "Invocar mobs" }],
		//
		"s-781-2000-2106-0": "s-781-2000-1106-0",
		"s-781-2000-2108-0": "s-781-2000-1108-0",
		"s-781-2000-2110-0": "s-781-2000-1110-0",
		"s-781-2000-2111-0": "s-781-2000-1111-0",
		"s-781-2000-2114-0": "s-781-2000-1114-0",
		"s-781-2000-2115-0": "s-781-2000-1115-0",
		"s-781-2000-2115-1": "s-781-2000-1115-1",
		"s-781-2000-2117-0": "s-781-2000-1117-0",
		"s-781-2000-2130-0": "s-781-2000-1130-0",
		"s-781-2000-2131-0": "s-781-2000-1131-0",
		"s-781-2000-2134-0": "s-781-2000-1134-0",
		"s-781-2000-2134-1": "s-781-2000-1134-1",
		"s-781-2000-2136-0": "s-781-2000-1136-0",
		// Pizza Mechanic
		"s-781-927-1301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-781-927-1302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-781-927-1303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-781-927-1307-0": [{ type: "func", func: secondboss_floor_event, args: [1, 6] }],
		"s-781-927-1308-0": [{ type: "func", func: secondboss_floor_event, args: [3, 6] }],
		"s-781-927-1309-0": [{ type: "func", func: secondboss_floor_event, args: [6, 3] }],
		"s-781-927-1310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-781-927-1311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-781-927-1312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-781-927-1313-0": [{ type: "func", func: secondboss_floor_event, args: [1, 6] }],
		"s-781-927-1314-0": [{ type: "func", func: secondboss_floor_event, args: [3, 6] }],
		"s-781-927-1315-0": [{ type: "func", func: secondboss_floor_event, args: [6, 3] }],
		//
		"qb-781-4000-9781046": [{ type: "text", sub_type: "notification", message: "First: (Debuffs) Closest", message_ES: "Primero: Debuff (Más cercano)" }], // Thank you... for this release...
		"qb-781-4000-9781047": [{ type: "text", sub_type: "notification", message: "First: (Circulos) Spread", message_ES: "Primero: Circulos (Separarse)" }], // Beware the... red lightning...
		"qb-781-4000-9781048": [{ type: "text", sub_type: "notification", message: "First: (Bombas) Gather + Cleanse", message_ES: "Primero: Bombas (Reunirse + Cleanse)" }], // Beware the mark... of Lakan...

		// 3 BOSS
		"nd-781-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-781-3000-99": [{ type: "func", func: () => thirdboss_fifty = false }],
		"h-781-3000-50": [{ type: "func", func: () => thirdboss_fifty = true }],
		"dm-0-0-9781043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-9781044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-9781045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-781-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_ES: "Debuff (Más cercano)" }],
		"s-781-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_ES: "Debuff (Más lejano)" }],
		"s-781-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_ES: "Bombas (Reunirse) + Cleanse" }],
		"s-781-3000-1302-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + No cleanse", message_ES: "Bombas (Reunirse) + No Cleanse" }],
		"s-781-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Circles) Spread", message_ES: "Circulos (Separarse)" }],
		"s-781-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Circles) Gather", message_ES: "Circulos (Reunirse)" }],
		"s-781-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_ES: "Garra" }],
		"s-781-3000-1136-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1000 }],
		"s-781-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR" }],
		"s-781-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR" }],
		"s-781-3000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donas" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }
		],
		"s-781-3000-1401-0": [
			{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 15, 175, 1000, 7000] }
		],
		"s-781-3000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_ES: "¡¡Dormir!!" }],
		"s-781-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_ES: "Ataque atrás + Ataque frontal" }],
		//
		"s-781-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Ataque -> (al jugador)" }],
		"s-781-3000-1151-0": [{ type: "text", sub_type: "message", message: "Attention Stun", message_ES: "Stun" }],
		"s-781-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_ES: "Stun + Ataque atrás" }],
		"s-781-3000-1152-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1900 }],
		"s-781-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-781-3000-2113-0": "s-781-3000-1113-0",
		"s-781-3000-2151-0": "s-781-3000-1151-0",
		"s-781-3000-2152-0": "s-781-3000-1152-0",
		"s-781-3000-2152-1": "s-781-3000-1152-1",
		"s-781-3000-2138-0": "s-781-3000-1138-0",
		"s-781-3000-2136-0": "s-781-3000-1136-0",
		"s-781-3000-2136-1": "s-781-3000-1136-1"
	};
};