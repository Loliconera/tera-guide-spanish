// Grotto of Lost Souls (Hard)
//
// made by michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {

	let color = 0;
	let debuff = 0;
	let print_wave = true;
	let awakening_one = false;
	let awakening_two = false;
	let stack_level = 0;

	function stacks_level_event() {
		if (!awakening_one) return;

		stack_level++;

		if ((!awakening_two && stack_level > 0) || (awakening_two && stack_level > 2)) {
			handlers.text({
				sub_type: "notification",
				message: `Stack ${stack_level}`,
				message_ES: `Stack ${stack_level}`,
				speech: false
			});
		}

		if (stack_level === 4) {
			handlers.text({
				sub_type: "alert",
				message: "Explosion soon",
				message_ES: "Explosión pronto"
			});
		}
	}

	return {
		// 1 BOSS
		"nd-982-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-982-1000-106-0": [{ type: "text", class_position: "tank", sub_type: "message", message: "Heavy", message_ES: "Gran Mordida" }],
		"s-982-1000-107-0": [
			{ type: "text", class_position: "dps", sub_type: "message", message: "Pushback", message_ES: "Empujar" },
			{ type: "text", class_position: "heal", sub_type: "message", message: "Pushback (Kaia)", message_ES: "Empujar (Kaia)" },
			{ type: "spawn", func: "vector", args: [553, 90, 30, 140, 600, 1000, 2000] },
			{ type: "spawn", func: "vector", args: [553, 270, 30, -140, 600, 1000, 2000] }
		],
		"s-982-1000-108-0": [
			{ type: "text", sub_type: "message", message: "Bait Front (Flying)", message_ES: "Frontal Bait (Volar)" }
		],
		"s-982-1000-108-1": [
			{ type: "spawn", func: "vector", args: [553, 90, 140, 5, 620, 0, 1500] },
			{ type: "spawn", func: "vector", args: [553, 270, 140, 355, 620, 0, 1500] }
		],
		"s-982-1000-109-0": [{ type: "text", sub_type: "message", message: "Rocks (Small)", message_ES: "Rocas (Pequeñas)" }],
		"s-982-1000-110-0": [{ type: "text", sub_type: "message", message: "Rocks (Large)", message_ES: "Rocas (Grandes)" }],
		"s-982-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Stun (Dodge)", message_ES: "Stun (Iframe)", delay: 1500 },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 50, null, 350, 1500, 2000] }
		],
		"s-982-1000-113-0": [{ type: "text", sub_type: "message", message: "Thorns (Bleed)", message_ES: "Espinas (Sangrar)" }],
		"s-982-1000-116-0": [
			{ type: "text", sub_type: "message", message: "AoE", message_ES: "AoE" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 2000 }
		],
		"s-982-1000-301-0": [
			{ type: "text", sub_type: "message", message: "Flower Stuns", message_ES: "Flor Canibal" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 2000 }
		],
		"s-982-1000-307-0": [{ type: "text", sub_type: "message", message: "Cage (Don't move)", message_ES: "Jaula (No te muevas)" }],
		// Flowers mech
		"ab-982-1003-98200161": [
			{ type: "text", sub_type: "message", message: "Green", message_ES: "Verde" },
			{ type: "func", func: () => color = 1 }
		],
		"ab-982-1003-98200162": [
			{ type: "text", sub_type: "message", message: "Violet", message_ES: "Violeta" },
			{ type: "func", func: () => color = 2 }
		],
		"ae-0-0-98200148": [{ type: "func", func: () => debuff = 1 }], // green
		"ae-0-0-98200149": [{ type: "func", func: () => debuff = 2 }], // violet
		"s-982-1000-201-0": [{ type: "text", sub_type: "alert", message: "Change Debuff", message_ES: "Cambiar Debuff", check_func: () => debuff !== 0 && color !== debuff, delay: 5000 }],
		"s-982-1000-309-0": [
			{ type: "text", sub_type: "message", message: "One Flower", message_ES: "Una Flor" },
			{ type: "text", sub_type: "alert", message: "Dodge the flower!", message_ES: "¡Esquiva la flor!", check_func: () => color === debuff, delay: 1500 }
		],
		"s-982-1000-310-0": [
			{ type: "text", sub_type: "message", message: "Two Flowers", message_ES: "Dos Flores" },
			{ type: "text", sub_type: "alert", message: "Dodge ONE flower!", message_ES: "¡Esquiva UNA flor!", check_func: () => color !== debuff, delay: 1500 }
		],
		"s-982-1000-312-0": [
			{ type: "text", sub_type: "message", message: "Break Golden Flower", message_ES: "Romper la Flor Dorada" },
			{ type: "text", sub_type: "alert", message: "Dodge the Flower!", message_ES: "¡Esquiva la Flor!", check_func: () => color === debuff, delay: 1500 }
		],
		"s-982-1000-308-0": [
			{ type: "func", func: () => color = 0 },
			{ type: "func", func: () => debuff = 0 }
		],

		// 2 BOSS
		"nd-982-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-982-2000-105-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" }],
		"s-982-2000-108-0": [{ type: "text", sub_type: "message", message: "Shot Forward", message_ES: "Disparo Frontal" }],
		"s-982-2000-109-0": [{ type: "text", sub_type: "message", message: "Wave Forward", message_ES: "Ola Frontal" }],
		"s-982-2000-112-0": [{ type: "text", sub_type: "message", message: "Kick Forward", message_ES: "Patada Frontal" }],
		"s-982-2000-113-0": [
			{ type: "text", sub_type: "message", message: "Stun (AoE)", message_ES: "Stun (AoE)" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 310, 0, 3000] }
		],
		"s-982-2000-114-0": [
			{ type: "text", sub_type: "message", message: "Get In", message_ES: "Entrar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 5000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 600, 0, 5000] }
		],
		"s-982-2000-116-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Ataque Frontal | Atras" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 5000] },
			{ type: "spawn", func: "vector", args: [553, 180, 0, 90, 500, 0, 5000] }
		],
		"s-982-2000-117-0": "s-982-2000-116-0",
		"s-982-2000-301-0": [
			{ type: "text", sub_type: "message", message: "Get Out | Dodge", message_ES: "Salir | Iframe" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 3700 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-982-2000-302-0": [
			{ type: "text", sub_type: "message", message: "Get In | Dodge", message_ES: "Entrar | Iframe" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 3700 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 260, 0, 3000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 650, 0, 3000] }
		],
		"s-982-2000-307-0": [{ type: "text", sub_type: "message", message: "Target", message_ES: "Objetivo" }],
		"s-982-2000-307-2": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }],

		// 3 BOSS
		"nd-982-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-982-3000-99": [
			{ type: "func", func: () => print_wave = true },
			{ type: "func", func: () => awakening_one = false },
			{ type: "func", func: () => awakening_two = false },
			{ type: "func", func: () => stack_level = 0 }
		],
		"h-982-3000-80": [{ type: "text", sub_type: "message", message: "80%", message_ES: "80%" }],
		"h-982-3000-30": [{ type: "text", sub_type: "message", message: "30%", message_ES: "30%" }],
		"s-982-3000-109-0": [{ type: "text", sub_type: "message", message: "Front Throw (Target)", message_ES: "Ataque Frontal (Objetivo)" }],
		"s-982-3000-134-0": [{ type: "text", sub_type: "message", message: "Front Throw (Target)", message_ES: "Ataque Frontal (Objetivo)" }],
		"s-982-3000-118-0": [{ type: "text", sub_type: "message", message: "Front Triple", message_ES: "Ataque Frontal triple" }],
		"s-982-3000-143-0": [
			{ type: "text", sub_type: "message", message: "Left Rear", message_ES: "Pata Trasera Izquierda" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 330, null, 280, 0, 3000] }
		],
		"s-982-3000-145-0": "s-982-3000-143-0",
		"s-982-3000-144-0": [
			{ type: "text", sub_type: "message", message: "Right Rear", message_ES: "Pata Trasera Derecha" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 330, null, 280, 0, 3000] }
		],
		"s-982-3000-147-0": "s-982-3000-144-0",
		"s-982-3000-146-0": [
			{ type: "text", sub_type: "message", message: "Pulses Left", message_ES: "Pulsos Izquierdo" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-982-3000-154-0": [
			{ type: "text", sub_type: "message", message: "Pulses Left", message_ES: "Pulsos Izquierdo" },
			{ type: "spawn", func: "circle", args: [true, 553, 200, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 215, 370, 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 215, 370, 6, 800, 2000, 6000] }
		],
		"s-982-3000-148-0": [
			{ type: "text", sub_type: "message", message: "Pulses Right", message_ES: "Pulsos Derecho" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, 5300, 3000, true, null] }, // 1
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-982-3000-155-0": [
			{ type: "text", sub_type: "message", message: "Pulses Right", message_ES: "Pulsos Derecho" },
			{ type: "spawn", func: "circle", args: [true, 553, 160, 350, null, 280, 500, 2000] },
			{ type: "spawn", func: "marker", args: [false, 155, 388, 4200, 4000, true, null] }, // 2
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 15, 160, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 12, 320, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 10, 480, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 8, 640, 2000, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 155, 388, 6, 800, 2000, 6000] }
		],
		"s-982-3000-161-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Ataque Frontal | Atras" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-982-3000-162-0": [
			{ type: "text", sub_type: "message", message: "Front | Back", message_ES: "Ataque Frontal | Atras" },
			{ type: "spawn", func: "circle", args: [true, 553, 180, 310, null, 290, 3000, 2500] }
		],
		"s-982-3000-213-0": [{ type: "text", sub_type: "message", message: "Tail", message_ES: "Cola" }],
		"s-982-3000-215-0": [{ type: "text", sub_type: "message", message: "Tail (Combo)", message_ES: "Cola (Combo)" }],
		"s-982-3000-139-0": [
			{ type: "text", sub_type: "message", message: "Wave + Wing (Left Safe)", message_ES: "Ola (Izquierda Segura)", check_func: () => print_wave },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 270, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-982-3000-139-1": "s-982-3000-139-0",
		"s-982-3000-139-2": "s-982-3000-139-0",
		"s-982-3000-150-0": "s-982-3000-139-0", //
		"s-982-3000-150-1": "s-982-3000-139-0",
		"s-982-3000-150-2": "s-982-3000-139-0",
		"s-982-3000-141-0": [
			{ type: "text", sub_type: "message", message: "Wave + Wing (Right Safe)", message_ES: "Ola (Derecha Segura)", check_func: () => print_wave },
			{ type: "despawn_all", tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 90, 0, 0, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "vector", args: [912, 270, 0, 180, 600, 100, 3000], tag: "wave" },
			{ type: "spawn", func: "marker", args: [false, 90, 200, 100, 4000, true, null], tag: "wave" },
			{ type: "func", func: () => print_wave = false },
			{ type: "func", func: () => print_wave = true, delay: 8000 }
		],
		"s-982-3000-141-1": "s-982-3000-141-0",
		"s-982-3000-141-2": "s-982-3000-141-0",
		"s-982-3000-152-0": "s-982-3000-141-0", //
		"s-982-3000-152-1": "s-982-3000-141-0",
		"s-982-3000-152-2": "s-982-3000-141-0",
		"s-982-3000-300-0": [
			{ type: "text", sub_type: "message", message: "Dodge! (Awakening 1)", message_ES: "¡Iframe! (Awakening 1)", delay: 800 }, // <80%
			{ type: "func", func: () => awakening_one = true },
			{ type: "func", func: () => stack_level = 0 }
		],
		"s-982-3000-399-0": [
			{ type: "text", sub_type: "message", message: "Dodge! (Awakening 2)", message_ES: "¡Iframe! (Awakening 2)", delay: 1400 }, // <30%
			{ type: "func", func: () => awakening_two = true },
			{ type: "func", func: () => stack_level = 0 }
		],
		"s-982-3000-360-0": [
			{ type: "text", sub_type: "message", message: "Dodge! (Explosion)", message_ES: "¡Iframe! (Explosión)" },
			{ type: "func", func: () => stack_level = 0 }
		],
		"ab-982-3000-98200399": [{ type: "func", func: stacks_level_event }],
		"s-982-3000-351-0": [
			{ type: "text", sub_type: "message", message: "Stones", message_ES: "Piedras" },
			{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 2000 },
			{ type: "text", sub_type: "message", message: "Line up to the plate", message_ES: "Alinear hasta la placa", delay: 4000 },
			{ type: "text", sub_type: "message", message: "Kaia!", message_ES: "¡Kaia!", delay: 9500 }
		],
		"s-982-3011-352-0": [
			{ type: "text", sub_type: "message", message: "Break Sphere", message_ES: "Romper la Esfera", check_func: () => !awakening_two },
			{ type: "text", sub_type: "message", message: "Break Three Spheres", message_ES: "Romper Tres Esferas", check_func: () => awakening_two }
		],
		"s-982-3012-353-0": "s-982-3011-352-0"
	};
};