// Draakon Arena (Difícil)
//
// hecho por Kuroine / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	return {
		"nd-3202-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		// Ress bait / range check
		"s-3202-1000-107-0": [{ type: "text", sub_type: "message", message: "Spectral Throw (Bait)", message_ES: "Lanzamiento Espectral > (al objetivo)" }],

		// Basic attacks
		"s-3202-1000-103-0": [{ type: "text", sub_type: "message", message: "2 Hits | Bleed", message_ES: "2 Golpes | Sangrar" }],
		"s-3202-1000-113-0": [{ type: "text", sub_type: "message", message: "4 Hits Combo", message_ES: "Combo de 4 golpes" }],
		"s-3202-1000-105-0": [{ type: "text", sub_type: "message", message: "Uppercut | Stun", message_ES: "Ataque de Corte | Stun" }],
		"s-3202-1000-106-0": [{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun" }],
		// 120 > 114
		"s-3202-1000-120-0": [{ type: "text", sub_type: "message", message: "Many Pokes | Stun (AOE)", message_ES: "Muchos Cortes | Stun (AOE)" }],
		"s-3202-1000-114-0": [
			{ type: "text", sub_type: "message", message: "Stun (AOE)", message_ES: "Stun (AOE)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 16, 420, 100, 3000] }
		],
		"s-3202-1000-111-0": [{ type: "text", sub_type: "message", message: "Leap (Stun)", message_ES: "Salto > (al jugador)" }],
		"s-3202-1000-115-0": [
			{ type: "text", sub_type: "message", message: "AOE Bombs (spread if no ninja)", message_ES: "AOE Bombas (separarse si no ay ninja)" },
			{ type: "text", sub_type: "message", delay: 3000, message: "Gather!", message_ES: "¡Reunir!" }
		],
		"s-3202-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Front | Back Kick", message_ES: "Patada frontal | Patada hacia atras" },
			{ type: "spawn", func: "vector", args: [553, 90, 120, 160, 300, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 270, 120, -160, 300, 0, 3000] }
		],
		"s-3202-1000-110-0": [
			{ type: "text", sub_type: "message", message: "Donuts + Wave", message_ES: "Donas + Ola" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 650, 0, 4000] }
		],
		"s-3202-1000-109-0": [
			{ type: "text", sub_type: "message", message: "Knockdown + Spin", message_ES: "Derribo + Girar" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 100, 10, 420, 0, 1000] },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 150, 10, 420, 1000, 2000] }
		],
		"s-3202-1000-304-0": [{ type: "text", sub_type: "message", message: "Shield!", message_ES: "¡Escudo!" }],
		"ab-3202-1000-32021006": [
		    { type: "text", sub_type: "message", message: "Plague of Exhaustion", message_ES: "Plague", "class_position": "priest" },
			{ type: "text", sub_type: "message", message: "Regression", message_ES: "Regress", "class_position": "mystic" }
		],

		// Pizza + Donuts (outward waves)
		"s-3202-1000-121-0": [
			{ type: "text", sub_type: "message", message: "Pizza (Right foot) | Outward Waves: Stay Out > Get In", message_ES: "Pizza (Pie Derecho) | Olas hacia afuera: Quedate afuera > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "semicircle", args: [-60, 70, 912, 0, 0, 8, 450, 0, 4000] },
			{ type: "spawn", func: "semicircle", args: [120, 250, 912, 0, 0, 8, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 70, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 120, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 250, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 300, 450, 0, 4000] },
			{ type: "text", sub_type: "message", delay: 1900, message: "Dodge!", message_ES: "¡Iframe!" }
		],
		"s-3202-1000-122-0": [{ type: "spawn", func: "marker", args: [false, 0, 100, 500, 3000, true, null] }],
		"s-3202-1000-123-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 295, 550, 0, 1500] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 85, 550, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [85, 295, 912, 0, 0, 6, 550, 0, 1500] }
		],
		"s-3202-1000-127-0": [
			{ type: "text", sub_type: "message", message: "Outward Waves: Stay Out > Get In", message_ES: "Olas hacia afuera: Quedate afuera > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 14, 160, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 390, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 620, 0, 3000] }
		],
		// Pizza + Donuts (inward waves)
		"s-3202-1000-124-0": [
			{ type: "text", sub_type: "message", message: "Pizza (Left foot) | Inward Waves: Stay In > Get Out", message_ES: "Pizza (Pie Izquierdo) | Olas hacia adentro: Quedate adentro > Salir" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 550, 0, 3000] },
			{ type: "spawn", func: "semicircle", args: [-60, 70, 912, 0, 0, 8, 450, 0, 4000] },
			{ type: "spawn", func: "semicircle", args: [120, 250, 912, 0, 0, 8, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 70, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 120, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 250, 450, 0, 4000] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 300, 450, 0, 4000] },
			{ type: "text", sub_type: "message", delay: 1900, message: "Dodge!", message_ES: "¡Iframe!" }
		],
		"s-3202-1000-125-0": [{ type: "spawn", func: "marker", args: [false, 0, 300, 500, 3000, true, null] }],
		"s-3202-1000-126-0": [
			{ type: "spawn", func: "vector", args: [912, 0, 0, 295, 550, 0, 1500] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 85, 550, 0, 1500] },
			{ type: "spawn", func: "semicircle", args: [85, 295, 912, 0, 0, 6, 550, 0, 1500] }
		],
		"s-3202-1000-128-0": [
			{ type: "text", sub_type: "message", message: "Inward Waves: Stay In > Get Out", message_ES: "Olas hacia adentro: Quedate adentro > Salir" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 14, 160, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 8, 390, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 620, 0, 3000] }
		]
	};
};