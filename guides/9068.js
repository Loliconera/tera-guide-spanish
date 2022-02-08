// Shadow Sanguinary (Hard)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let thirdboss_stacks_count = 0;
	let thirdboss_stacks_timer = null;

	function secondboss_floor_event(one, two) {
		if (one && two) {
			handlers.event([
				{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza" },
				{ type: "spawn", func: "marker", args: [false, one * 45 - 20, 500, 0, 5000, true, null] },
				{ type: "spawn", func: "marker", args: [false, two * 45 - 20, 300, 8000, 5000, true, null] }
			]);
		}
	}

	function thirdboss_stacks_event(count) {
		thirdboss_stacks_count = count;
		dispatch.clearTimeout(thirdboss_stacks_timer);

		if (count === 0) {
			handlers.event([
				{ type: "text", sub_type: "notification", message: "Stacks removed", message_ES: "Pilas eliminadas", speech: false },
				{ type: "text", sub_type: "message", message: "Stacks removed", message_ES: "Pilas eliminadas" }
			]);
		} else {
			thirdboss_stacks_timer = dispatch.setTimeout(() => {
				handlers.event([
					{ type: "text", sub_type: "notification", message: `${count} stacks`, message_ES: `pilas: ${count}`, speech: false },
					{ type: "text", sub_type: "message", message: `${count} stacks`, message_ES: `pilas: ${count}` }
				]);
			}, 500);
		}
	}

	return {
		// 1 BOSS
		"nd-468-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-468-1000-102-0": [{ type: "text", sub_type: "message", message: "Turn Attack", message_ES: "Ataque Turno" }],
		"s-468-1000-106-0": [{ type: "text", sub_type: "message", message: "Three Combo", message_ES: "Combo Triple" }],
		"s-468-1000-107-0": [{ type: "text", sub_type: "message", message: "Front Combo", message_ES: "Combo Frontal" }],
		"s-468-1000-301-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_ES: "Ola Frontal" }],
		"s-468-1000-304-0": [{ type: "text", sub_type: "message", message: "Strike (Target)", message_ES: "Disparar (Objetivo)" }],
		"s-468-1000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 700 }],
		"s-468-1000-305-0": [{ type: "text", sub_type: "message", message: "8 explosions", message_ES: "8 explosiones" }],
		"s-468-1000-306-0": [{ type: "text", sub_type: "message", message: "Stones", message_ES: "Piedras" }], // 306 -> 307

		// 2 BOSS
		"nd-468-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-468-2000-101-0": [{ type: "text", sub_type: "message", message: "Fireball", message_ES: "Bola de fuego" }],
		"s-468-2000-102-0": [{ type: "text", sub_type: "message", message: "Drain", message_ES: "Descarga" }],
		"s-468-2000-103-0": [{ type: "text", sub_type: "message", message: "Explosion", message_ES: "Explosión" }],
		"s-468-2000-104-0": [{ type: "text", sub_type: "message", message: "Dark Frame", message_ES: "Marco Oscuro" }],
		"s-468-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal" }],
		"s-468-2000-111-0": [{ type: "text", sub_type: "message", message: "360", message_ES: "360" }], // 114 -> 111
		"s-468-2000-112-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_ES: "Ataque hacia atrás" }],
		"s-468-2000-117-0": [{ type: "text", sub_type: "message", message: "Laser (Target)", message_ES: "Láser (Objetivo)" }],
		"s-468-2000-117-2": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 600 }],
		"s-468-2000-118-0": [{ type: "text", sub_type: "message", message: "Laser", message_ES: "Láser" }],
		"s-468-2000-307-0": [{ type: "text", sub_type: "message", message: "Donut", message_ES: "Donas" }],
		"s-468-2000-501-0": [{ type: "text", sub_type: "message", message: "Charging", message_ES: "Cargando" }],
		"s-468-2000-301-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-468-2000-302-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-468-2000-303-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],
		"s-468-2000-304-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 1-4-2-3-5
		"s-468-2000-305-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 4-2-5-1-3
		"s-468-2000-306-0": [{ type: "func", func: secondboss_floor_event, args: [0, 0] }], // 5-1-4-3-2
		"s-468-2000-310-0": [{ type: "func", func: secondboss_floor_event, args: [4, 7] }],
		"s-468-2000-311-0": [{ type: "func", func: secondboss_floor_event, args: [2, 6] }],
		"s-468-2000-312-0": [{ type: "func", func: secondboss_floor_event, args: [7, 3] }],

		// 3 BOSS
		"nd-468-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-468-3000-60": [{ type: "text", sub_type: "message", message: "60%" }],
		"h-468-3000-40": [{ type: "text", sub_type: "message", message: "40%" }],
		"s-468-3000-130-0": [{ type: "text", sub_type: "message", message: "Left", message_ES: "Empujar a la Izquierda" }],
		"s-468-3000-105-0": [ // 130 -> 105
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-468-3000-106-0": [ // 128 -> 106
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque hacia atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 12, 270, 0, 2600] }
		],
		"s-468-3000-131-0": [{ type: "text", sub_type: "message", message: "Right", message_ES: "Empujar a la Derecha" }],
		"s-468-3000-107-0": [ // 131 -> 107
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 1500] }
		],
		"s-468-3000-108-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-468-3000-109-0": "s-468-3000-106-0",
		"s-468-3000-110-0": [{ type: "text", sub_type: "message", message: "Back Move", message_ES: "Mover hacia atrás" }],
		"s-468-3000-111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_ES: "Ataque Giratorio" }],
		"s-468-3000-114-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Pull" }], // 114 -> 111
		"s-468-3000-115-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos" }], // 202/205 -> 115
		"s-468-3000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 200 }],
		"s-468-3000-117-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Saltar" }], // 503 -> 117
		"s-468-3000-134-0": [ // qb 468052 -> 134
			{ type: "text", sub_type: "message", message: "Inner + AoE", message_ES: "Interno + AoE" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 14, 175, 0, 1500] }
		],
		"s-468-3000-134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-468-3000-136-0": [{ type: "text", sub_type: "message", message: "Donut", message_ES: "Donas" }], // 135 -> 136
		"s-468-3000-202-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Lanzar Objetivo" }], // 503 -> 201 -> 202
		"s-468-3000-205-0": [{ type: "text", sub_type: "message", message: "Target Throw", message_ES: "Lanzar Objetivo" }], // 503 -> 117 -> 203 -> 204 -> 205
		"s-468-3000-206-0": [{ type: "text", sub_type: "message", message: "Pike (Target)", message_ES: "Pike (Objetivo)" }], // 206 -> 207
		"s-468-3000-302-0": [{ type: "text", sub_type: "message", message: "Bait (Target)", message_ES: "Bait (Objetivo)" }],
		"s-468-3000-302-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1600 }],
		"s-468-3000-501-0": [
			{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula" },
			{ type: "text", sub_type: "alert",
				message: "Stand in the red zone to remove stack", message_ES: "Párese en la zona roja para eliminar la pila",
				speech: false, check_func: () => thirdboss_stacks_count > 0, delay: 2000
			}
		],
		"s-468-3000-502-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 3000] }
		],
		"s-468-3000-503-0": [{ type: "text", sub_type: "message", message: "Target Lockon", message_ES: "Bloquear Objetivo" }], // qb 468050 -> 503
		"s-468-3000-504-0": [{ type: "text", sub_type: "message", message: "Mobs Summon", message_ES: "Invocar Mobs" }],
		// "s-468-3000-508-0": [{ type: "text", sub_type: "message", message: "Buff" }],
		"dm-0-0-9068013": [
			{ type: "text", sub_type: "notification", message: "Ready to Shield", message_ES: "Listo para el Escudo", speech: false },
			{ type: "text", sub_type: "alert", message: "Ready to Shield", message_ES: "Listo para el Escudo" }
		],
		"ae-0-0-468039-4": [{ type: "func", func: thirdboss_stacks_event, args: [4] }],
		"ae-0-0-468039-3": [{ type: "func", func: thirdboss_stacks_event, args: [3] }],
		"ae-0-0-468039-2": [{ type: "func", func: thirdboss_stacks_event, args: [2] }],
		"ae-0-0-468039-1": [{ type: "func", func: thirdboss_stacks_event, args: [1] }],
		"ar-0-0-468039": [{ type: "func", func: thirdboss_stacks_event, args: [0] }]
	};
};