// Ruinous Manor (Difícil)
//
// WIP

module.exports = (dispatch, handlers, guide, lang) => {
	return {

		// 3 BOSS

		"s-970-3000-1102-0": [{ "type": "text", "sub_type": "message", "message_ES": "Mano izquierda", "message": "Left Hand" }],
		"s-970-3000-2102-0": [{ "type": "text", "sub_type": "message", "message_ES": "Mano izquierda", "message": "Left Hand" }],

		// Right Hand
		"s-970-3000-1101-0": [{ "type": "text", "sub_type": "message", "message_ES": "Mano derecha", "message": "Right Hand" }],
		"s-970-3000-2101-0": [{ "type": "text", "sub_type": "message", "message_ES": "Mano derecha", "message": "Right Hand" }],

		// Tail Slam
		"s-970-3000-1103-0": [{ "type": "text", "sub_type": "message", "message_ES": "Golpe de cola", "message": "Tail Slam" }],
		"s-970-3000-2103-0": [{ "type": "text", "sub_type": "message", "message_ES": "Golpe de cola", "message": "Tail Slam" }],

		// FATE Avoid Circles
		"s-970-3000-1301-0": [{ "type": "text", "sub_type": "message", "message_ES": "Evita los círculos", "message": "FATE Avoid Circles" }],

		// Tail AOE (jump in front)
		"s-970-3000-2110-0": [{ "type": "text", "sub_type": "message", "message_ES": "Cola AOE (saltar al frente)", "message": "Tail AOE (jump in front)" }],
		"s-970-3000-1110-0": [{ "type": "text", "sub_type": "message", "message_ES": "Cola AOE (saltar al frente)", "message": "Tail AOE (jump in front)" }],

		// Get Ready! (for in out mechanic)
		"s-970-3000-1304-0": [{ "type": "text", "sub_type": "message", "message_ES": "¡Prepárate! (PARA LA MECANICA)", "message": "Get Ready! (for in out mechanic)" }],
		"s-970-3000-1303-0": [{ "type": "text", "sub_type": "message", "message_ES": "¡Prepárate! (PARA LA MECANICA)", "message": "Get Ready! (for in out mechanic)" }],

		// GO OUT then come in
		"s-970-3000-2113-0": [{ "type": "text", "sub_type": "message", "message_ES": "Salir > Entrar", "message": "Out > In" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 15, 300, 0, 5000] }],
		"s-970-3000-1113-0": [{ "type": "text", "sub_type": "message", "message_ES": "Salir > Entrar", "message": "Out > In" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 15, 300, 0, 5000] }],

		// STAY IN then go out
		"s-970-3000-2116-0": [{ "type": "text", "sub_type": "message", "message_ES": "Entrar > Salir", "message": " In > Out" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 15, 300, 0, 5000] }],
		"s-970-3000-1116-0": [{ "type": "text", "sub_type": "message", "message_ES": "Entrar > Salir", "message": " In > Out" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 15, 300, 0, 5000] }],

		// GET RED SKULL
		"s-970-3000-1318-0": [{ "type": "text", "sub_type": "message", "message_ES": "¡Consigue una calavera roja!", "message": "Get red skull!" }],
		"s-970-3000-1317-0": [{ "type": "text", "sub_type": "message", "message_ES": "¡Consigue una calavera roja!", "message": "Get red skull!" }],
		"s-970-3000-1319-0": [{ "type": "text", "sub_type": "message", "message_ES": "¡Consigue una calavera roja!", "message": "Get red skull!" }],

		// DODGE the PATTERNS
		"s-970-3000-1322-0": [{ "type": "text", "sub_type": "message", "message_ES": "Iframe!", "message": "DODGE the PATTERNS!" }],

		// GATHER FOR CLEANSE
		"s-970-3000-1311-0": [{ "type": "text", "sub_type": "message", "message_ES": "¡REUNIRSE PARA EL CLEANSE", "message": "GATHER FOR CLEANSE!" }]
	};
};