// Shadow of the Gutrends
//
// hecho por Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-622-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-622-1000-206-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto hacia atrás" }],
		"s-622-1000-108-1": [{ type: "text", sub_type: "message", message: "Jump Forward", message_ES: "Salto hacia adelante" }],
		"s-622-1000-120-0": [
			{ type: "text", sub_type: "message", message: "Right Hand", message_ES: "Mano derecha", class_position: "tank"},
			{ type: "text", sub_type: "message", message: "Left Hand", message_ES: "Mano izquierda", class_position: "heal"},
			{ type: "text", sub_type: "message", message: "Left Hand", message_ES: "Mano izquierda", class_position: "dps"}
		],
		"s-622-1000-119-0": [
			{ type: "text", sub_type: "message", message: "Left Hand", message_ES: "Mano izquierda", class_position: "tank"},
			{ type: "text", sub_type: "message", message: "Right Hand", message_ES: "Mano derecha", class_position: "heal"},
			{ type: "text", sub_type: "message", message: "Right Hand", message_ES: "Mano derecha", class_position: "dps"}
		],
		"s-622-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Stun Frontal", message_ES: "Stun Frontal" },
			{ type: "spawn", func: "semicircle", args: [320, 404, 553, 0, 0, 7, 405, 0, 3500] }, // 85
			{ type: "spawn", func: "vector", args: [553, 0, 10, 406, 400, 0, 3500] }, // 380
			{ type: "spawn", func: "vector", args: [553, 0, 10, -406, 400, 0, 3500] } // 380
		],
		"s-622-1000-124-0": [{ type: "text", sub_type: "message", message: "Circles (Horizontal)", message_ES: "Circulos (horizontales)" }],
		"s-622-1000-123-0": [{ type: "text", sub_type: "message", message: "Circles (Vertical)", message_ES: "Circulos (verticales)" }],
		"s-622-1000-117-0": [{ type: "text", sub_type: "message", message: "Kicks", message_ES: "Patadas" }],
		"am-622-1000-622001": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Circulos (al objetivo)" }],
		"qb-622-1000-622004": [{ type: "text", sub_type: "message", message: "Explosive Waves", message_ES: "Olas Explosivas" }]
	};
};