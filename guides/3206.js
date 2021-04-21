// Crimson Killing Grounds
//
// hecho por HSDN / Kuroine / Minghan

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_start = false;

	dispatch.hook("S_USER_EFFECT", 1, event => {
		if (event.circle == 3 && event.operation == 1) {
			handlers.marker({ id: event.target, color: "yellow", sub_delay: 1000000 });
		} else if (event.circle == 3 && event.operation == 2) {
			handlers.marker_remove_all({ delay: 1000 });
		}
	});

	return {
		"nd-3206-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" },
			{ type: "marker_remove_all" }
		],
		"h-3206-1000-99": [
			{ type: "spawn", func: "marker", args: [false, 3, -700, 100, 60000000, false, ["Giant", "Giant Direction"]] }
		],

		"qb-3206-1000-32061001": [
			{ type: "text", sub_type: "message", message: "Debuff (Close)", message_ES: "Debuff (Cercano)" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Usar Stun Pronto...", delay: 2000 }
		],
		"qb-3206-1000-32061002": [
			{ type: "text", sub_type: "message", message: "Debuff (Furthest)", message_ES: "Debuff (Más lejano)" },
			{ type: "text", sub_type: "alert", message: "Soon to give stun...", message_ES: "Usar Stun Pronto...", delay: 2000 }
		],

		"s-3206-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 1400 }
		],
		"s-3206-1000-105-0": [{ type: "text", sub_type: "message", message: "Knockback Spin (Kaia)", message_ES: "Girar (Kaia)", check_func: () => combo_start === true }],
		"s-3206-1000-106-0": [
			{ type: "text", sub_type: "message", message: "Knockback", message_ES: "Empujar" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 350, 0, 3000] }
		],

		"s-3206-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_ES: "Saltar (Derribar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 150, 10, 300, 0, 2500] }
		],
		"s-3206-1000-201-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-3206-1000-202-0": [{ type: "text", sub_type: "message", message: "Front AoE", message_ES: "Ataque Frontal АоЕ" }],
		"s-3206-1000-203-0": [{ type: "text", sub_type: "message", message: "Front AoE + Wave", message_ES: "Ataque Frontal АоЕ + Ola" }],
		"s-3206-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3206-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Ataque Giratorio (Sangrar)" }],
		"s-3206-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin (Bleed)", message_ES: "Ataque Giratorio (Sangrar)" }],
		"s-3206-1000-209-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_ES: "¡Usar Stun! (Derribar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3206-1000-210-0": [
			{ type: "text", sub_type: "message", message: "Give Stun! (Knockdown)", message_ES: "¡Usar Stun! (Derribar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 50, 10, 400, 0, 1500] }
		],
		"s-3206-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar" }],
		"s-3206-1000-212-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal" }],
		"s-3206-1000-215-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal" }],
		"s-3206-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash | Jump (Knockdown)", message_ES: "Pull | Salto (Derribar)" }],
		"s-3206-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Outward Waves (Out > In)", message_ES: "Donas afuera: (Salir > Entrar)" },
			{ type: "spawn", func: "item", args: [206960, 0, 0, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Inward Waves (In > Out)", message_ES: "Donas adentro: (Entrar > Salir)" },
			{ type: "spawn", func: "item", args: [110684, 0, 0, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-516-0": [
			{ type: "text", sub_type: "message", message: "Outward Waves Fast (Out > In)", message_ES: "Donas afuera Rápido: (Salir > Entrar)" },
			{ type: "spawn", func: "item", args: [206960, 0, 0, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-517-0": [
			{ type: "text", sub_type: "message", message: "Inward Waves Fast (In > Out)", message_ES: "Donas adentro Rápido: (Entrar > Salir)" },
			{ type: "spawn", func: "item", args: [110684, 0, 0, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 360, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 10, 550, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 860, 1500, 5000] }
		],
		"s-3206-1000-512-0": [{ type: "text", sub_type: "message", message: "Turn | Spin", message_ES: "Turno | Ataque Giratorio" }],
		//"s-3206-1000-513-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Чума/регресс" }],
		//"s-3206-1000-514-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Чума/регресс" }],

		"s-3206-1000-502-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Unleash" }],
		"s-3206-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Unleash" }],
		"s-3206-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Unleash" }],
		"s-3206-1000-306-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3206-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-3206-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }],
		"s-3206-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }]
	};
};