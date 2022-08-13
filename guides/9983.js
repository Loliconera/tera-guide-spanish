// Dark Reach Citadel (Hard)
//
// made by ITunk / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		// 1 BOSS
		"nd-983-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-983-1000-119-0": [{ type: "text", sub_type: "message", message: "Heavy Attack", message_ES: "Ataque Fuerte" }],
		"s-983-1000-120-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }],
		"s-983-1000-302-0": [{ type: "text", sub_type: "message", message: "AOE", message_ES: "AOE" }],
		"s-983-1000-108-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		"s-983-1000-109-0": [{ type: "text", sub_type: "message", message: "Push Back", message_ES: "Enpujar Atras" }],
		"s-983-1000-127-0": [{ type: "text", sub_type: "message", message: "Many Attack", message_ES: "Muchos Ataques" }],
		"s-983-1000-305-0": [{ type: "text", sub_type: "message", message: "Triple Laser (Together)", message_ES: "Triple Láser (Juntos)" }],
		"s-983-1000-304-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Jalar" }],

		// 2 BOSS
		"nd-983-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-983-2000-110-0": [{ type: "text", sub_type: "message", message: "Front Attack (Dodge)", message_ES: "Ataque Frontal (Iframe)" }],
		"s-983-2000-112-0": [{ type: "text", sub_type: "message", message: "Push Back (Right)", message_ES: "Enpujar Atras (Derecha)" }],
		"s-983-2000-115-0": [{ type: "text", sub_type: "message", message: "Push Back (Left)", message_ES: "Enpujar Atras (Izquierda)" }],
		"s-983-2000-119-0": [{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_ES: "Salto (Iframe)" }],
		"s-983-2000-120-0": [{ type: "text", sub_type: "message", message: "Front Attack | Push Back", message_ES: "Ataque Frontal | Enpujar Atras" }],
		/*	{ type: "spawn", func: "vector", args: [553, 0, 0, 70, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 305, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 210, 380, 0, 4000] },
			{ type: "spawn", func: "vector", args: [553, 0, 50, 150, 380, 0, 4000] } */
		"s-983-2000-105-0": [{ type: "text", sub_type: "message", message: "Whip (Dodge)", message_ES: "Látigo (Iframe)" }],
		"s-983-2000-316-0": [{ type: "text", sub_type: "message", message: "Fire AOE", message_ES: "Fuego AOE" }],
		"s-983-2000-306-0": [{ type: "text", sub_type: "message", message: "Dodge | Out", message_ES: "Iframe | Salir" }],
		// { type: "spawn", func: "circle", args: [false, 553, 0, -50, null, 675, 0, 3000] }
		"s-983-2000-317-0": [{ type: "text", sub_type: "message", message: "Dodge (AOE)", message_ES: "Iframe (AOE)" }],
		"s-983-2000-318-0": [{ type: "text", sub_type: "message", message: "Dodge (Get out)", message_ES: "Iframe (Salir)" }],
		// { type: "spawn", func: "circle", args: [false, 553, 0, -50, null, 675, 0, 7000] }

		// 3 BOSS
		"nd-983-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-983-3000-106-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar" }],
		"s-983-3000-309-0": [{ type: "text", sub_type: "message", message: "Debuff!!!", message_ES: "Debuff!!!" }],
		"s-983-3000-110-0": [{ type: "text", sub_type: "message", message: "Throw Front (Stun)", message_ES: "Ataque Frontal (Stun)" }],
		"s-983-3000-113-0": [{ type: "text", sub_type: "message", message: "Push Back", message_ES: "Enpujar Atras" }],
		"s-983-3000-315-0": [{ type: "text", sub_type: "message", message: "Dodge | Out", message_ES: "Iframe | Salir" }],
		"s-983-3000-116-0": [ // 116 - 117 - 118
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 210, 380, null, 250, 0, 2000] }
		],
		"s-983-3000-119-0": [ // 119 - 120 - 121
			{ type: "text", sub_type: "message", message: "Throw Back (Stun)", message_ES: "Lanzar Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [true, 553, 150, 380, null, 250, 0, 2000] }
		],
		"s-983-3000-122-0": [ // 122 - 123 - 124
			{ type: "text", sub_type: "message", message: "Throw (Target)", message_ES: "Lanzar (Objetivo)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 550, null, 180, 0, 2000] }
		],
		"s-983-3000-123-0": [
			{ type: "spawn", func: "vector", args: [553, 90, 80, 0, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 80, 0, 500, 0, 2000] }
		],
		"s-983-3000-124-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "AOE" }],
		"s-983-3000-125-0": [{ type: "text", sub_type: "message", message: "Hit | Frontal Stun", message_ES: "Lanzar | Stun Frontal" }],
		"s-983-3000-126-0": [
			{ type: "text", sub_type: "message", message: "Frontal Stun", message_ES: "Stun Frontal" },
			{ type: "spawn", func: "vector", args: [553, 60, 220, 20, 500, 0, 2000] },
			{ type: "spawn", func: "vector", args: [553, 300, 220, 340, 500, 0, 2000] }
		],
		"s-983-3000-129-0": [{ type: "text", sub_type: "message", message: "Somersault | Back Hit", message_ES: "Voltereta | Lanzar Atrás" }],
		"s-983-3000-130-0": [
			{ type: "text", sub_type: "message", message: "Back Hit (Bleed)", message_ES: "Lanzar Atrás (Sangrar)" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 340, null, 250, 0, 2000] }
		],
		"s-983-3000-142-0": [{ type: "text", sub_type: "message", message: "Frontal Combo", message_ES: "Combo Frontal" }],
		"s-983-3000-301-0": [{ type: "text", sub_type: "message", message: "Circles (Target)", message_ES: "Círculos х5 (Iframe)" }],
		"s-983-3000-303-0": [
			{ type: "text", sub_type: "message", message: "Right Safe", message_ES: "Derecha Segura" },
			{ type: "spawn", func: "marker", args: [false, 120, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 300, 250, 0, 4000, true, null] }
		],
		"s-983-3000-306-0": [
			{ type: "text", sub_type: "message", message: "Left Safe", message_ES: "Izquierda Segura" },
			{ type: "spawn", func: "marker", args: [false, 240, 250, 0, 4000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 60, 250, 0, 4000, true, null] }
		]
	};
};