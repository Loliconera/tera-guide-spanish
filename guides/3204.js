// Catalepticon (Hard)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_count = 0;

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 32040001)
			handlers.marker({ id: event.target, color: "yellow", sub_delay: 1000000 });
	});

	return {
		"ns-3204-1000": [{ type: "func", func: () => combo_count = 0 }],
		"nd-3204-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "marker_remove_all" }
		],

		"qb-3204-1000-32041000": [
			{ type: "text", sub_type: "message", message: "Arrows", message_ES: "Flechas" },
			{ type: "func", func: () => combo_count = 0 }
		],
		"qb-3204-1000-32042000": [{ type: "text", sub_type: "message", message: "Arrows + Line", message_ES: "Flechas + Línea" }],
		"qb-3204-1000-32042006": [
			{ type: "text", sub_type: "message", message: "Cage", message_ES: "Jaula" },
			{ type: "text", sub_type: "alert", message: "Cage soon...", message_ES: "Jaula pronto...", delay: 100000 }
		],
		"qb-3204-1000-32042009": [
			{ type: "text", sub_type: "message", message: "Skeletons", message_ES: "Esqueletos" },
			{ type: "text", sub_type: "alert", message: "Skeletons soon...", message_ES: "Esqueletos pronto...", delay: 220000 }
		],

		"h-3204-1000-90": [{ type: "text", sub_type: "message", message: "90%", message_ES: "90%" }],
		"h-3204-1000-75": [{ type: "text", sub_type: "message", message: "75%", message_ES: "75%" }],
		"h-3204-1000-40": [{ type: "text", sub_type: "message", message: "40%", message_ES: "40%" }],

		"s-3204-1000-104-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_ES: "Stun (AOE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -50, 10, 380, 0, 2000] }
		],
		"s-3204-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Line Forward + Side Lines", message_ES: "Línea Medio + Líneas Laterales" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 1000 }
		],
		"s-3204-1000-110-0": [
			{ type: "text", sub_type: "message", message: "Target + Wave", message_ES: "Atrás | Frontal (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -500, 10, 350, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 120, 500, 0, 2000], delay: 1500 },
			{ type: "spawn", func: "vector", args: [553, 180, -50, 240, 500, 0, 2000], delay: 1500 },
			{ type: "func", func: () => combo_count++ },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 3000, true, null], check_func: () => combo_count == 2, delay: 2500 }
		],
		"s-3204-1000-112-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_ES: "Empuje Frontal" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 70, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 290, 500, 0, 2000] }
		],
		"s-3204-1000-114-0": [{ type: "text", sub_type: "message", message: "Inner + Outer AOEs", message_ES: "AOE Interno + Externo" }],
		"s-3204-1000-116-0": [
			{ type: "text", sub_type: "message", message: "Line Forward", message_ES: "Línea Medio" },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 1000, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 1000, 0, 2000] }
		],
		"s-3204-1000-119-0": [{ type: "text", sub_type: "message", message: "Two Strikes", message_ES: "Dos Ataques" }],
		"s-3204-1000-120-0": [
			{ type: "text", sub_type: "message", message: "Two Strikes + Stun (AOE)", message_ES: "Dos Ataques + Stun (AOE)" },
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_ES: "Stun (AOE)", delay: 1500 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, -100, 10, 700, 0, 2500], delay: 1500 }
		],
		"s-3204-1000-123-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" }],
		"s-3204-1000-125-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_ES: "Stun (Tank)" }],
		"s-3204-1000-127-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3204-1000-128-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 0, 150, 0, 2000, true, null] }
		],
		"s-3204-1000-148-0": [
			{ type: "text", sub_type: "message", message: "Pizza", message_ES: "Pizza" },
			{ type: "spawn", func: "marker", args: [false, 150, 150, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 340, 150, 0, 2000, true, null], delay: 1500 }
		],
		"s-3204-1000-156-0": [{ type: "text", sub_type: "message", message: "Get Skulls", message_ES: "Cráneos" }],
		"s-3204-1000-157-0": [
			{ type: "text", sub_type: "message", message: "3 seconds", message_ES: "3 Segundos" },
			{ type: "text", sub_type: "message", message: "Gather!", message_ES: "¡Reunirse!", delay: 2000 }],
		"s-3204-1000-158-0": [
			{ type: "text", sub_type: "message", message: "6 seconds", message_ES: "6 Segundos" },
			{ type: "text", sub_type: "message", message: "Gather!", message_ES: "¡Reunirse!", delay: 5000 }
		],
		"s-3204-1000-159-0": [
			{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE" },
			{ type: "marker_remove_all", delay: 3000 }
		]
	};
};