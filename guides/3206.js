// Crimson Killing Grounds
//
// hecho por HSDN / Kuroine

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		"nd-3206-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"qb-3206-1000-32061001": [
			{ type: "text", sub_type: "message", message: "Debuff (Close)", message_ES: "Debuff (Cercano)" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Usar Stun Pronto...", delay: 2000 }
		],
		"qb-3206-1000-32061002": [
			{ type: "text", sub_type: "message", message: "Debuff (Furthest)", message_ES: "Debuff (Más lejano)" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Usar Stun Pronto...", delay: 2000 }
		],

		"s-3206-1000-106-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_ES: "Girar (Empujar)" }],
		"s-3206-1000-108-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_ES: "Girar (Empujar)" }],		
		"s-3206-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_ES: "Salto (Derribar)" }],
		"s-3206-1000-201-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-3206-1000-202-0": [{ type: "text", sub_type: "message", message: "Front AoE", message_ES: "Ataque Frontal AoE" }],
		"s-3206-1000-203-0": [{ type: "text", sub_type: "message", message: "Front AoE + Wave", message_ES: "Ataque Frontal AoE + Ola" }],
		"s-3206-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3206-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Ataque Giratorio (Sangrar)" }],
		"s-3206-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Ataque Giratorio (Sangrar)" }],
		"s-3206-1000-209-0": [
			{ type: "text", sub_type: "notification", message: "Give Stun! (Knockdown)", message_ES: "¡Usar Stun! (Derribar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 1500] }
		],
		"s-3206-1000-210-0": [
			{ type: "text", sub_type: "notification", message: "Give Stun! (Knockdown)", message_ES: "¡Usar Stun! (Derribar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 1500] }
		],
		"s-3206-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar" }],
		"s-3206-1000-216-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal" }],
		"s-3206-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Outward Waves (Out > In)", message_ES: "Donas afuera: (Salir > Entrar)" },
			{ type: "spawn", func: "item", args: [206960, 0, 0, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 350, 1500, 5000] }
		],
		"s-3206-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Inward Waves (In > Out)", message_ES: "Donas adentro: (Entrar > Salir)" },
			{ type: "spawn", func: "item", args: [110684, 0, 0, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 350, 1500, 5000] }
		],
		"s-3206-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash | Jump (Knockdown)", message_ES: "Pull | Salto (Derribar)" }],
		"s-3206-1000-516-0": "s-3206-1000-508-0",
		"s-3206-1000-517-0": "s-3206-1000-509-0",
		
		"s-3206-1000-502-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Unleash" }],
		"s-3206-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Unleash" }],
		"s-3206-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Unleash" }],
		"s-3206-1000-306-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3206-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-3206-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }],
		"s-3206-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }]
	};
};