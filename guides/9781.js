// Velik's Sanctuary
//
// hecho por michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_fifty = false;

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan te ha notado.
			case 1043:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs",
						message_ES: "Debuffs > Círculos > Bombas"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles",
						message_ES: "Debuffs > Bombas > Círculos"
					});
				}
				break;
			// Lakan está tratando de enfrentarte de uno en uno.
			case 1044:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs",
						message_ES: "Círculos > Bombas > Debuffs"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs",
						message_ES: "Círculos > Debuffs > Bombas"
					});
				}
				break;
			// Lakan tiene la intención de matarlos a todos a la vez.
			case 1045:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles",
						message_ES: "Bombas > Debuffs > Círculos"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs",
						message_ES: "Bombas > Círculos > Debuffs"
					});
				}
				break;
		}
	}

	return {
		// 1 BOSS
		"nd-781-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-781-1000-1401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-781-1000-1402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" }],
		"s-781-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_ES: "Volar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-781-1000-1308-0": [{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR" }],
		"s-781-1000-1309-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR" }],
		"s-781-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_ES: "Ataque frontal | AOE" }],
		"s-781-1000-2401-0": "s-781-1000-1401-0",
		"s-781-1000-2402-0": "s-781-1000-1402-0",
		"s-781-1000-2303-0": "s-781-1000-1303-0",
		"s-781-1000-2304-0": "s-781-1000-1304-0",
		"s-781-1000-2308-0": "s-781-1000-1308-0",
		"s-781-1000-2309-0": "s-781-1000-1309-0",
		"s-781-1000-2113-0": "s-781-1000-1113-0",

		// 2 BOSS
		"nd-781-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Mecánica de jaula
		"s-781-2000-1501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_ES: "Identificación" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-781-2000-1106-0": [
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 340, 14, 270, 0, 2600] }
		],
		"s-781-2000-1108-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque frontal" }],
		"s-781-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_ES: "Ataque Circular" }],
		"s-781-2000-1134-0": [
			{ type: "text", sub_type: "message", message: "Combo Attack (Dodge)", message_ES: "Ataque Combo (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 80, 8, 390, 0, 2000] }
		],
		"s-781-2000-1134-1": [
			{ type: "spawn", func: "circle", args: [true, 553, 0, 75, 15, 175, 100, 2000] }
		],
		"s-781-2000-1130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha" },
			{ type: "spawn", func: "vector", args: [553, 360, 400, 180, 800, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-781-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Ataque -> (al jugador)" }],
		"s-781-2000-2501-0": "s-781-2000-1501-0",
		"s-781-2000-2106-0": "s-781-2000-1106-0",
		"s-781-2000-2108-0": "s-781-2000-1108-0",
		"s-781-2000-2111-0": "s-781-2000-1111-0",
		"s-781-2000-2134-0": "s-781-2000-1134-0",
		"s-781-2000-2134-1": "s-781-2000-1134-1",
		"s-781-2000-2130-0": "s-781-2000-1130-0",
		"s-781-2000-2131-0": "s-781-2000-1131-0",
		//
		"qb-781-4000-9781046": [{ type: "text", sub_type: "notification", message: "First: (Debuffs) Closest", message_ES: "Primero: Debuff (Más cercano)" }], // Gracias... por esta versión...
		"qb-781-4000-9781047": [{ type: "text", sub_type: "notification", message: "First: (Círculos) Spread", message_ES: "Primero: Círculos (Separarse)" }], // Cuidado con el... rayo rojo...
		"qb-781-4000-9781048": [{ type: "text", sub_type: "notification", message: "First: (Bombas) Gather + Cleanse", message_ES: "Primero: Bombas (Reunirse + Cleanse)" }], // Cuidado con la marca... de Lakan...

		// 3 BOSS
		"nd-781-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-781-3000-99": [{ type: "func", func: () => thirdboss_fifty = false }],
		"h-781-3000-50": [{ type: "func", func: () => thirdboss_fifty = true }],
		"dm-0-0-9781043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan se ha fijado en ti.
		"dm-0-0-9781044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan está tratando de enfrentarte de uno en uno.
		"dm-0-0-9781045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan tiene la intención de matarlos a todos a la vez.
		"s-781-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_ES: "Debuff (Más cercano)" }],
		"s-781-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_ES: "Debuff (Más lejano)" }],
		"s-781-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombas) Gather + Cleanse", message_ES: "Bombas (Reunirse) + Cleanse" }],
		"s-781-3000-1302-0": [{ type: "text", sub_type: "message", message: "(Bombas) Gather + No cleanse", message_ES: "Bombas (Reunirse) + No Cleanse" }],
		"s-781-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Círculos) Spread", message_ES: "Círculos (Separarse)" }],
		"s-781-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Círculos) Gather", message_ES: "Círculos (Reunirse)" }],
		"s-781-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_ES: "Garra" }],
		"s-781-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR" }],
		"s-781-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR" }],
		"s-781-3000-1240-0": [
			{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donas" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }
		],
		"s-781-3000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress" }],
		"s-781-3000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_ES: "¡¡Dormir!!" }],
		"s-781-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_ES: "Ataque atrás + Ataque frontal" }],
		//
		"s-781-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Ataque -> (al jugador)" }],
		"s-781-3000-1151-0": [{ type: "text", sub_type: "message", message: "Attention Stun", message_ES: "Stun" }],
		"s-781-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_ES: "Stun + Ataque atrás" }],
		"s-781-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-781-3000-2113-0": "s-781-3000-1113-0",
		"s-781-3000-2151-0": "s-781-3000-1151-0",
		"s-781-3000-2152-0": "s-781-3000-1152-0",
		"s-781-3000-2138-0": "s-781-3000-1138-0"
	};
};