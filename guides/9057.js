// Akeron's Inferno (Difícil)
//
// made by Emilia-s2

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;
	
	return {
		// 1 BOSS
		"nd-457-1001": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1001-1104-0": [{ type: "text", sub_type: "message", message_ES: "Mano Derecha (Empujar)", message: "Right Hand (Push)" }],
		"s-457-1001-1117-0": [{ type: "text", sub_type: "message", message_ES: "Aplastar", message: "Kick (Smash)" }],
		"s-457-1001-1118-0": [{ type: "text", sub_type: "message", message_ES: "Salto Aleatorio", message: "Random Jump" }],
		"s-457-1001-1116-0": [{ type: "text", sub_type: "message", message_ES: "Saltos (Tank)", message: "Jumps (Tank)" }],
		"s-457-1001-1107-0": [{ type: "text", sub_type: "message", message_ES: "Ataque Frontal", message: "Front" }],
		"s-457-1001-1206-0": [{ type: "text", sub_type: "message", message_ES: "Salto Atrás", message: "Jump Back" }],
		"s-457-1001-1109-0": [{ type: "text", sub_type: "message", message_ES: "AoE Frontal", message: "Front AoE" }],
		"s-457-1001-1108-0": [{ type: "text", sub_type: "message", message_ES: "Salto Aleatorio", message: "Random Jump" }],
		"s-457-1001-2104-0": "s-457-1001-1104-0",
		"s-457-1001-2117-0": "s-457-1001-1117-0",
		"s-457-1001-2118-0": "s-457-1001-1118-0",
		"s-457-1001-2116-0": "s-457-1001-1116-0",
		"s-457-1001-2107-0": "s-457-1001-1107-0",
		"s-457-1001-2206-0": "s-457-1001-1206-0",
		"s-457-1001-2109-0": "s-457-1001-1109-0",
		"s-457-1001-2108-0": "s-457-1001-1108-0",
		
		// 2 BOSS
		"nd-457-1002": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1002-1105-0": [{ type: "text", sub_type: "message", message_ES: "Aliento de Fuego", message: "Fire Breath" }],
		"s-457-1002-1108-0": [{ type: "text", sub_type: "message", message_ES: "Bombas de Fuego", message: "Fire Bombs" }],
		"s-457-1002-1109-0": [{ type: "text", sub_type: "message", message_ES: "Nadar + AoE Atrás", message: "Swim + Back AoE" }],
		"s-457-1002-1206-0": [{ type: "text", sub_type: "message", message_ES: "Salto + Ataque Aleatorio", message: "Jump + Random Target" }],
		"s-457-1002-1204-0": [{ type: "text", sub_type: "message", message_ES: "AoE Amplio", message: "Large AoE", delay: 3000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 6, 650, 3000, 4000] }
		],
		"s-457-1002-1107-0": [{ type: "text", sub_type: "message", message_ES: "Giro ¡CUIDADO!", message: "Spin" }],
		"s-457-1002-1106-1": [{ type: "text", sub_type: "message", message_ES: "AoE + Llamas", message: "AoE + Side Flames", delay: 4000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 450, 4000, 4000] }
		],
		"s-457-1002-1112-0": [{ type: "text", sub_type: "message", message_ES: "Bolas de Fuego (Objetivo)", message: "Target Fireball" }],
		"s-457-1002-2105-0": "s-457-1002-1105-0",
		"s-457-1002-2108-0": "s-457-1002-1108-0",
		"s-457-1002-2109-0": "s-457-1002-1109-0",
		"s-457-1002-2206-0": "s-457-1002-1206-0",
		"s-457-1002-2204-0": "s-457-1002-1204-0",
		"s-457-1002-2107-0": "s-457-1002-1107-0",
		"s-457-1002-2106-1": "s-457-1002-1106-1",
		"s-457-1002-2112-0": "s-457-1002-1112-0",
		
		// 3 BOSS
		"nd-457-1003": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1003-1105-0": [{ type: "text", sub_type: "message", message_ES: "AoE", message: "AoE" }],
		"s-457-1003-1203-0": [{ type: "text", sub_type: "message", message_ES: "Ataque Giratorio", message: "Spin Cut Attack" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 8, 400, 100, 4000] }
		],
		"s-457-1003-1110-0": [{ type: "text", sub_type: "message", message_ES: "Veneno (Círculo)", message: "Poison (Circle)" }],
		"s-457-1003-2105-0": "s-457-1003-1105-0",
		"s-457-1003-2203-0": "s-457-1003-1203-0",
		"s-457-1003-2110-0": "s-457-1003-1110-0",

		// 4 BOSS
		"nd-457-1004": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-457-1004-1105-0": [{ type: "text", sub_type: "message", message_ES: "Golpe Frontal", message: "Frontal Hit" }],
		"s-457-1004-1106-0": [{ type: "text", sub_type: "message", message_ES: "Disparo", message: "Random Shot" }],
		"s-457-1004-1107-0": [{ type: "text", sub_type: "message", message_ES: "Látigo", message: "Random Whip" }],
		"s-457-1004-1109-0": [{ type: "text", sub_type: "message", message_ES: "Círculos Seguro", message: "Safe Circles" },
			{ type: "spawn", func: "marker", args: [false, 157, -700, 0, 5000, true, ["SEGURO", "SEGURO"]] },
			{ type: "spawn", func: "marker", args: [false, 247, -700, 0, 5000, true, ["SEGURO", "SEGURO"]] },
			{ type: "spawn", func: "marker", args: [false, -23, -700, 0, 5000, true, ["SEGURO", "SEGURO"]] },
			{ type: "spawn", func: "marker", args: [false, 67, -700, 0, 5000, true, ["SEGURO", "SEGURO"]] },
		],
		"s-457-1004-1108-0": [{ type: "text", sub_type: "message", message_ES: "Línea de Tierra", message: "Earth Line" }],
		"s-457-1004-1111-0": [{ type: "text", sub_type: "message", message_ES: "Combo de Pisadas", message: "Stomp Combo" }],
		"s-457-1004-3108-0": [{ type: "text", sub_type: "message", message_ES: "Iframe", message: "Iframe" }],
		"s-457-1004-3105-0": [{ type: "text", sub_type: "message", message_ES: "Ataque AoE", message: "AoE Attack" }],
		"s-457-1004-3106-0": [{ type: "text", sub_type: "message", message_ES: "Dona AoE", message: "Donut AoE" }],
		"s-457-1004-3103-0": [{ type: "text", sub_type: "message", message_ES: "Pisada AoE", message: "AoE Stomp" }],
		"s-457-1004-4201-0": [{ type: "text", sub_type: "message", message_ES: "Lava", message: "Lava" }],
		"qb-457-405-457016": [{ type: "text", sub_type: "message", message_ES: "ESCUDO", message: "SHIELD" }],
		"s-457-1004-2105-0": "s-457-1004-1105-0",
		"s-457-1004-2106-0": "s-457-1004-1106-0",
		"s-457-1004-2107-0": "s-457-1004-1107-0",
		"s-457-1004-2109-0": "s-457-1004-1109-0",
		"s-457-1004-2108-0": "s-457-1004-1108-0",
		"s-457-1004-2111-0": "s-457-1004-1111-0"
	};
};