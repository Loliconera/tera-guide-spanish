// Broken Prison
//
// made by ITunk

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"s-710-1000-102-0": [{ type: "text", sub_type: "message", message: "Pushback (Kaia)", message_ES: "Empujar (Kaia)" }],
		"s-710-1000-105-0": [{ type: "text", sub_type: "message", message: "Bait (DoT)", message_ES: "Bait (DoT)" }],
		"s-710-1000-113-0": [{ type: "text", sub_type: "message", message: "DoT - Out", message_ES: "DoT - Salir" }],
		"s-710-1000-119-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		"s-710-1000-303-0": [{ type: "text", sub_type: "message", message: "Mechanics", message_ES: "Mecánica" }],
		"s-710-1000-304-0": [
			{ type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague", class_position: "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regression", class_position: "mystic" }
		],

		// 2 BOSS
		"s-710-2000-102-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		"s-710-2000-110-0": [{ type: "text", sub_type: "message", message: "Cleanse", message_ES: "Cleanse" }],
		"s-710-2000-111-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		"s-710-2000-115-0": [{ type: "text", sub_type: "message", message: "Damage - Stun", message_ES: "Daño - Stun" }],
		"s-710-2000-116-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait" }],
		"s-710-2000-118-0": [{ type: "text", sub_type: "message", message: "Laser 360", message_ES: "Láser 360" }],

		// 3 BOSS
		"s-710-3000-302-0": [{ type: "text", sub_type: "message", message: "Keep BLUE", message_ES: "Dejar AZUL" }],
		"s-710-3000-301-0": [{ type: "text", sub_type: "message", message: "Stand at the portal", message_ES: "Ponte detrás del portal" }],
		"s-710-3000-106-0": [{ type: "text", sub_type: "message", message: "Back attack", message_ES: "Ataque Atrás" }],
		"s-710-3000-102-0": [{ type: "text", sub_type: "message", message: "Spin (Kaia)", message_ES: "Girar (Kaia)" }],
		"s-710-3000-110-0": [{ type: "text", sub_type: "message", message: "Get Out", message_ES: "Salir" }],
		"s-710-3000-205-0": [{ type: "text", sub_type: "message", message: "Mechanics", message_ES: "Mecánica" }],
		"s-710-3000-107-0": [{ type: "text", sub_type: "message", message: "Back attack", message_ES: "Ataque Atrás" }],
		"s-710-3000-109-0": [{ type: "text", sub_type: "message", message: "Spin (Kaia)", message_ES: "Girar (Kaia)" }],
		"s-710-3000-111-0": [{ type: "text", sub_type: "message", message: "Get In", message_ES: "Entrar" }],
		"s-710-3000-115-0": [{ type: "text", sub_type: "message", message: "Bait attack", message_ES: "Ataque Bait" }]
	};
};