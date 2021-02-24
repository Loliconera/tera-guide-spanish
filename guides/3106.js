// Killing Grounds
//
// made by HSDN / Kuroine

module.exports = (dispatch, handlers, guide, lang) => {

	let combo_start = false;

	return {
		"nd-3106-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"qb-3106-1000-32061001": [{ type: "text", sub_type: "message", message: "Debuff (Close)", message_ES: "Debuff (Cercano)" }],
		"qb-3106-1000-32061002": [{ type: "text", sub_type: "message", message: "Debuff (Furthest)", message_ES: "Debuff (Más lejos)" }],

		"s-3106-1000-102-0": [
			{ type: "func", func: () => combo_start = true },
			{ type: "func", func: () => combo_start = false, delay: 4000 }
		],
		"s-3106-1000-105-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_ES: "Ataque Giratorio (Empujar)", check_func: () => combo_start === true }],
		"s-3106-1000-106-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_ES: "Ataque Giratorio (Empujar)" }],
		"s-3106-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_ES: "Saltar (Derribo)" }],
		"s-3106-1000-201-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal" }],
		"s-3106-1000-202-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal" }],
		"s-3106-1000-203-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal" }],
		"s-3106-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3106-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3106-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3106-1000-209-0": [{ type: "text", sub_type: "message", message: "Stomp (Knockdown)", message_ES: "Derribo" }],
		"s-3106-1000-210-0": [{ type: "text", sub_type: "message", message: "Stomp (Knockdown)", message_ES: "Derribo" }],
		"s-3106-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar" }],
		"s-3106-1000-216-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto mortal" }],

		"s-3106-1000-508-0": [ // 516
			{ type: "text", sub_type: "message", message: "Waves Outward", message_ES: "Olas hacia afuera" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 5000] }
		],
		"s-3106-1000-509-0": [ // 517
			{ type: "text", sub_type: "message", message: "Waves Inward", message_ES: "Olas hacia adentro" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 157, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 307, 1500, 5000] }
		],

		"s-3106-1000-506-0": [{ type: "text", sub_type: "message", message: "Bait (Stun)", message_ES: "Ataque -> al jugador (Stun)" }],
		"s-3106-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash + Jump (Knockdown)", message_ES: "Tirar + Salto (Derribo)" }],

		"s-3106-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Unleash" }],
		"s-3106-1000-310-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal" }],
		"s-3106-1000-311-0": [{ type: "text", sub_type: "message", message: "Front Attack", message_ES: "Ataque Frontal" }],
		"s-3106-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }],
		"s-3106-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }],
		"s-3106-1000-307-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }]
	};
};