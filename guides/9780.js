// Velik's Hold (5-Person)
//
// made by HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		// 1 boss
		"nd-780-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-1000-102-0": [{ type: "text", sub_type: "message", message: "Stun (Tank)", message_ES: "Stun (Tank)" }],
		"s-780-1000-103-0": [{ type: "text", sub_type: "message", message: "Frontal Hits", message_ES: "Ataque Frontal" }],
		"s-780-1000-104-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" }],
		"s-780-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Left", message_ES: "Empuje Izquierdo" }],
		"s-780-1000-110-0": [{ type: "text", sub_type: "message", message: "Push Right", message_ES: "Empuje Derecho" }],
		"s-780-1000-112-0": [{ type: "text", sub_type: "message", message: "Jump Fowrard", message_ES: "Salto adelante" }],
		"s-780-1000-113-0": [{ type: "text", sub_type: "message", message: "Jump Back", message_ES: "Salto atrás" }],
		"s-780-1000-114-0": [{ type: "text", sub_type: "message", message: "Back Attack", message_ES: "Ataque atrás" }],
		"s-780-1000-115-0": [{ type: "text", sub_type: "message", message: "Wave Front", message_ES: "Ola Frontal" }],
		"s-780-1000-115-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }],
		"s-780-1000-202-0": [{ type: "text", sub_type: "message", message: "Jump (Stun)", message_ES: "Salto (Stun)" }],
		"s-780-1000-108-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 2800 }],
		"s-780-1000-302-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" }],
		"s-780-1001-302-0": [{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 1600, 0, 4000] }],

		// 2 boss
		"nd-780-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-2000-105-0": [{ type: "text", sub_type: "message", message: "Heavy Front Attack", message_ES: "Ataque Frontal Fuerte" }],
		"s-780-2000-106-0": [{ type: "text", sub_type: "message", message: "Flame Ray (Target)", message_ES: "Rayo de Fuego (Objetivo)" }],
		"s-780-2000-106-2": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 200 }],
		"s-780-2000-108-0": [{ type: "text", sub_type: "message", message: "Front Attack (Stun)", message_ES: "Ataque Frontal (Stun)" }],
		"s-780-2000-301-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo" }],
		"s-780-2000-303-0": [{ type: "text", sub_type: "message", message: "Circles", message_ES: "Círculos" }],
		"s-780-2000-304-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto" }],
		"s-780-2000-304-1": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }],
		"s-780-2001-326-0": [{ type: "spawn", func: "marker", args: [false, 180, 250, 0, 6000, true, null] }], // stone marker

		// 3 boss
		"nd-780-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-780-3000-104-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal" }],
		"s-780-3000-105-0": [{ type: "text", sub_type: "message", message: "Push Front", message_ES: "Empuje Frontal" }],
		"s-780-3000-109-0": [{ type: "text", sub_type: "message", message: "Double Front Attack", message_ES: "Ataque Frontal Doble" }],
		"s-780-3000-111-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" }],
		"s-780-3000-112-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo" }],
		"s-780-3000-112-2": [{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Ataque Frontal | Atrás" }],
		"s-780-3000-113-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar" }], // left
		"s-780-3000-114-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar" }], // right
		"s-780-3000-301-0": [{ type: "text", sub_type: "message", message: "Get Out | Get In", message_ES: "Salir| Entrar" }],
		"s-780-3000-304-0": [{ type: "text", sub_type: "message", message: "Shot (Target)", message_ES: "Disparar (Objetivo)" }],
		"s-780-3000-304-3": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }],
		"s-780-3000-306-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 4600 }
		],
		"s-780-3000-307-0": "s-780-3000-306-0",
		"s-780-3000-308-0": "s-780-3000-306-0",
		"s-780-3000-309-0": [{ type: "text", sub_type: "message", message: "Jump", message_ES: "Salto" }]
	};
};