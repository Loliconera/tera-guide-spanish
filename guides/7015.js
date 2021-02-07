// Escape from Balder's Refuge
//
// hecho por Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-620-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-620-1000-107-0": [{ type: "text", sub_type: "message", message: "Attack (Back)", message_ES: "Ataque (hacia atrás)" }],
		"s-620-1000-115-0": [{ type: "text", sub_type: "message", message: "Fireballs", message_ES: "Bolas de fuego" }],
		"s-620-1000-127-0": [
			{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto hacia atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 376, 12, 232, 0, 6750] }
		],	
		"s-620-1000-120-0": [{ type: "text", sub_type: "message", message: "Fire Wave", message_ES: "Ola de fuego" }],
		"s-620-1000-121-0": [{ type: "text", sub_type: "message", message: "Repel (Dodge)", message_ES: "Repeler (Iframe)" }],
		"s-620-1000-119-0": [{ type: "text", sub_type: "message", message: "Explosion | In", message_ES: "Explosión | Entrar" }],
		"s-620-1000-108-0": [{ type: "text", sub_type: "message", message: "Attack (Back)", message_ES: "Ataque (hacia atrás)" }],
		"s-620-1000-103-0": [{ type: "text", sub_type: "message", message: "Stun Frontal", message_ES: "Stun Frontal" }],
		"s-620-1000-209-0": [{ type: "text", sub_type: "message", message: "Back to Middle + Fireballs", message_ES: "Volver al medio + Bolas de fuego" }],
		"s-620-1000-125-0": [{ type: "text", sub_type: "message", message: "Fireballs", message_ES: "Bolas de fuego" }],

		"s-620-1001-303-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "АОЕ" }],
		"s-620-1002-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1003-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1004-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],
		"s-620-1005-303-0": [{ type: "alias", id: "s-620-1001-303-0" }],

		"s-620-1000-129-0": [{ type: "text", sub_type: "message", message: "Fireballs", message_ES: "Bolas de fuego" }],
		"s-620-1000-106-0": [{ type: "text", sub_type: "message", message: "Random Jump", message_ES: "Salto aleatorio" }],
	};
};