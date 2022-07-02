// Ruinous Manor
//
// hecha por Emilia-s2 / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	return {
		// 1 BOSS
		"nd-770-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-1000-1206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto Atrás" }],
		"s-770-1000-2206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto Atrás" }],
		"s-770-1000-1106-0": [{ type: "text", sub_type: "message", message: "Stun Frontal (Iframe)", message_ES: "Stun Frontal (Iframe)" }],
		"s-770-1000-2106-0": [{ type: "text", sub_type: "message", message: "Stun Frontal (Iframe)", message_ES: "Stun Frontal (Iframe)" }],
		"s-770-1000-1107-0": [{ type: "text", sub_type: "message", message: "Front Push", message_ES: "Empuje Frontal (Iframe)" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-770-1000-2107-0": [{ type: "text", sub_type: "message", message: "Front Push", message_ES: "Empuje Frontal (Iframe)" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] }
		],
		"s-770-1000-1117-0": [{ type: "text", sub_type: "message", message: "Crush Front", message_ES: "Aplastar" }],
		"s-770-1000-2117-0": [{ type: "text", sub_type: "message", message: "Crush Front", message_ES: "Aplastar" }],

		// 3 BOSS
		"nd-770-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-770-3000-1102-0": [{ type: "text", sub_type: "message", message: "Left Hand", message_ES: "Mano Izquierda" }],
		"s-770-3000-2102-0": [{ type: "text", sub_type: "message", message: "Left Hand", message_ES: "Mano Izquierda" }],
		"s-770-3000-1101-0": [{ type: "text", sub_type: "message", message: "Right Hand", message_ES: "Mano Derecha" }],
		"s-770-3000-2101-0": [{ type: "text", sub_type: "message", message: "Right Hand", message_ES: "Mano Derecha" }],
		"s-770-3000-1103-0": [
			{ type: "text", sub_type: "message", message: "Tail Slam", message_ES: "Coletazo Atrás" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] }
		],
		"s-770-3000-2103-0": [
			{ type: "text", sub_type: "message", message: "Tail Slam", message_ES: "Coletazo Atrás" },
			{ type: "spawn", func: "vector", args: [553, 283, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 77, 127, 180, 500, 0, 1400] },
			{ type: "spawn", func: "vector", args: [553, 165, 488, 270, 200, 0, 1400] }
		],
		"s-770-3000-1301-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos" }],
		"s-770-3000-2301-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos" }],
		"s-770-3000-1106-0": [{ type: "text", sub_type: "message", message: "Front Swipe", message_ES: "Empuje Frontal (Iframe)" }],
		"s-770-3000-2106-0": [{ type: "text", sub_type: "message", message: "Front Swipe", message_ES: "Empuje Frontal (Iframe)" }],
		"s-770-3000-1108-0": [
			{ type: "text", sub_type: "message", message: "Tail", message_ES: "Coletazo frontal" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],
		"s-770-3000-2108-0": [
			{ type: "text", sub_type: "message", message: "Tail", message_ES: "Coletazo frontal" },
			{ type: "spawn", func: "circle", args: [false, 553, -7, 280, 20, 155, 0, 2000] }
		],
		"s-770-3000-1110-0": [
			{ type: "text", sub_type: "message", message: "Tail AOE (jump in front)", message_ES: "Cola AoE (saltar en frente)" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }
		],
		"s-770-3000-2110-0": [
			{ type: "text", sub_type: "message", message: "Tail AOE (jump in front)", message_ES: "Cola AoE (saltar en frente)" },
			{ type: "spawn", func: "semicircle", args: [26, 340, 553, 0, 0, 7, 630, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 4, 40, 338, 600, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, -4, 40, -338, 600, 0, 3000] }
		],
		"s-770-3000-1304-0": [{ type: "text", sub_type: "message", message: "Get Ready!", message_ES: "¡Preparate!" }],
		"s-770-3000-1303-0": [{ type: "text", sub_type: "message", message: "Get Ready!", message_ES: "¡Preparate!" }],
		"s-770-3000-1113-0": [
			{ type: "text", sub_type: "alert", message: "OUT", message_ES: "SALIR" },
			{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],		
		"s-770-3000-2113-0": [
			{ type: "text", sub_type: "alert", message: "OUT", message_ES: "SALIR" }, 
			{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],
		"s-770-3000-1116-0": [
			{ type: "text", sub_type: "alert", message: "IN", message_ES: "ENTRAR" },
			{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],		
		"s-770-3000-2116-0": [
			{ type: "text", sub_type: "alert", message: "IN", message_ES: "ENTRAR" }, 
			{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR", delay: 2500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 300, 0, 5000] }
		],
		"s-770-3000-1322-0": [
			{ type: "text", sub_type: "message", message: "Dodge!", message_ES: "¡Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 14, 230, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 12, 430, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 630, 0, 5000] }
		],
		"s-770-3000-1311-0": [{ type: "text", sub_type: "message", message: "Gather for Cleanse!", message_ES: "¡Reunirse para Cleanse!" }],
		"s-770-3000-1120-0": [{ type: "text", sub_type: "message", message: "Shooting Skulls", message_ES: "Laser (Triple)" }],
		"s-770-3000-2120-0": [{ type: "text", sub_type: "message", message: "Shooting Skulls", message_ES: "Laser (Triple)" }],
		"s-770-3000-1121-0": [{ type: "text", sub_type: "message", message: "Double Shooting Skulls", message_ES: "Laser (Doble)" }],
		"s-770-3000-2121-0": [{ type: "text", sub_type: "message", message: "Double Shooting Skulls", message_ES: "Laser (Doble)" }]
	};
};