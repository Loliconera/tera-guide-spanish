// Desolarus Testing Grounds
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		"nd-3107-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// "s-3107-1000-101-0": [{ type: "text", sub_type: "message", message: "Wide Attack", message_ES: "Полосы" }],
		// "s-3107-1000-102-0": [{ type: "text", sub_type: "message", message: "Wide Attack", message_ES: "Полосы" }],
		// "s-3107-1000-106-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Передние" }],
		// "s-3107-1000-107-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Задние" }],
		// "s-3107-1000-108-0": [{ type: "text", sub_type: "message", message: "Right", message_ES: "Правые" }],
		// "s-3107-1000-109-0": [{ type: "text", sub_type: "message", message: "Left", message_ES: "Левые" }],
		"s-3107-1000-112-0": [{ type: "text", sub_type: "message", message: "Inner + Outer Bombs", message_ES: "Bombas: Adentro + Afuera" }],
		"s-3107-1000-113-0": [{ type: "text", sub_type: "message", message: "Inner Bombs", message_ES: "Bombas Adentro" }],
		"s-3107-1000-302-0": [{ type: "text", sub_type: "message", message: "Shield", message_ES: "Escudo" }], // 302 -> 303 / 304 -> 305
		"s-3107-1000-304-0": [{ type: "text", sub_type: "message", message: "Break Failure", message_ES: "Escudo no Perforado" }],
		"s-3107-1000-310-0": [{ type: "text", sub_type: "message", message: "Break Stones", message_ES: "Romper Piedras" }], // spawn ghosts
		"s-3107-1000-311-0": [{ type: "text", sub_type: "message", message: "Break Stones", message_ES: "Romper Piedras" }],
		"s-3107-1000-320-0": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_ES: "Pizza (Empuje hacia atrás)" }], // half forward
		"s-3107-1000-321-0": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_ES: "Pizza (Empuje hacia atrás)" }], // half reverse
		"s-3107-1000-322-0": [{ type: "text", sub_type: "message", message: "Pizza Spin (Pushback)", message_ES: "Pizza Girar (Empuje hacia atrás)" }], // spin forward
		"s-3107-1000-323-0": [{ type: "text", sub_type: "message", message: "Pizza Spin (Pushback)", message_ES: "Pizza Girar (Empuje hacia atrás)" }], // spin reverse
		"s-3107-1000-336-0": [{ type: "text", sub_type: "message", message: "180 (Front)", message_ES: "180 (Frontal)" }],
		"s-3107-1000-337-0": [{ type: "text", sub_type: "message", message: "180 (Right)", message_ES: "180 (Derecha)" }],
		"s-3107-1000-338-0": [{ type: "text", sub_type: "message", message: "180 (Back)", message_ES: "180 (Atrás)" }],
		"s-3107-1000-339-0": [{ type: "text", sub_type: "message", message: "180 (Left)", message_ES: "180 (Izquierda)" }],
		"s-3107-1000-370-0": [{ type: "text", sub_type: "message", message: "Cross (Target)", message_ES: "Cruz (Objetivo)" }],

		"qb-3107-1000-31070003": [{ type: "text", sub_type: "message", message: "Circles (Target) | Dodge", message_ES: "Círculos (Objetivo) | Iframe" }],
		"qb-3107-1000-31070010": [{ type: "text", sub_type: "message", message: "Pizza (Pushback)", message_ES: "Pizza (Empuje hacia atrás)" }] // 324 - 335
	};
};