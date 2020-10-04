// Velik's Sanctuary
//
// hecho por michengs / HSDN

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	let thirdboss_fifty = false;

	function thirdboss_message_event(skillid) {
		switch (skillid) {
			// Lakan has noticed you.
			case 1043:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Circles > Bombs",
						message_ES: "Debuffs > Circulos > Bombas"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Debuffs > Bombs > Circles",
						message_ES: "Debuffs > Bombas > Circulos"
					});
				}
				break;
			// Lakan is trying to take you on one at a time.
			case 1044:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Bombs > Debuffs",
						message_ES: "Circulos > Bombas > Debuffs"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Circles > Debuffs > Bombs",
						message_ES: "Circulos > Debuffs > Bombas"
					});
				}
				break;
			// Lakan intends to kill all of you at once.
			case 1045:
				if (!thirdboss_fifty) {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Debuffs > Circles",
						message_ES: "Bombas > Debuffs > Circulos"
					});
				} else {
					handlers.text({
						sub_type: "notification",
						message: "Bombs > Circles > Debuffs",
						message_ES: "Bombas > Circulos > Debuffs"
					});
				}
				break;
		}
	}

	function thirdboss_start_event() {
		thirdboss_fifty = false;
	}

	function thirdboss_fifty_event() {
		thirdboss_fifty = true;
	}

	return {
		// 1 BOSS
		"nd-781-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-781-1000-2401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha" },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-781-1000-2402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda" },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-1000-2304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_ES: "Volar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-781-1000-2303-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" }],
		"s-781-1000-2113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_ES: "Ataque frontal | AOE" }],
		"s-781-1000-2308-0": [{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR" }],
		"s-781-1000-2309-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR" }],
		"s-781-1000-1401-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha" },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		"s-781-1000-1402-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda" },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-1000-1304-0": [
			{ type: "text", sub_type: "message", message: "Flying", message_ES: "Volar" },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 300, 0, 6000] }
		],
		"s-781-1000-1303-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Girar" }],
		"s-781-1000-1113-0": [{ type: "text", sub_type: "message", message: "Front + AoEs", message_ES: "Ataque frontal | AOE" }],
		"s-781-1000-1308-0": [{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR" }],
		"s-781-1000-1309-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR" }],
		//"qb-781-1000-78102": [{ type: "text", sub_type: "message", message: "Run away", message_ES: "Уходи!" }],
		//"qb-781-1000-78103": [{ type: "text", sub_type: "message", message: "点名炸石柱", message_ES: "点名炸石柱" }], // круг на одного
		//"qb-781-1000-78106": [{ type: "text", sub_type: "message", message: "集体炸石柱", message_ES: "集体炸石柱" }], // круги на всех

		// 2 BOSS
		"nd-781-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Cage Mechanic
		//"s-781-2000-1503-0": [{ type: "text", sub_type: "message", message: "坦快跑远", message_ES: "坦快跑远" }], // наткнул
		"s-781-2000-1106-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque hacia atras" }],
		"s-781-2000-1108-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque frontal" }],
		"s-781-2000-1111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_ES: "Ataque 360" }],
		"s-781-2000-1302-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Ataque al jugador" }],
		//"s-781-2000-1121-0": [{ type: "text", sub_type: "message", message: "Summon Mobs", message_ES: "Призыв мобов" }],
		"s-781-2000-1501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_ES: "Identificacion" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-781-2000-1130-0": [
			{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda" },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha" },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		//"s-781-2000-2503-0": [{ type: "text", sub_type: "message", message: "坦快跑远", message_ES: "坦快跑远" }], // дурион выбрал цель
		"s-781-2000-2106-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque hacia atras" }],
		"s-781-2000-2108-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque frontal" }],
		"s-781-2000-2111-0": [{ type: "text", sub_type: "message", message: "360 attack", message_ES: "Ataque 360" }],
		//"s-781-2000-2121-0": [{ type: "text", sub_type: "message", message: "Summon Mobs", message_ES: "Призыв мобов" }],
		"s-781-2000-2501-0": [
			{ type: "text", sub_type: "message", message: "Identification", message_ES: "Identificacion" },
			{ type: "text", sub_type: "message", delay: 1000, message: "3" },
			{ type: "text", sub_type: "message", delay: 2000, message: "2" },
			{ type: "text", sub_type: "message", delay: 3000, message: "1" }
		],
		"s-781-2000-2130-0": [{ type: "text", sub_type: "message", message: "Left", message_ES: "Izquierda" },
			{ type: "spawn", func: "marker", args: [false, 60, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 130, 100, 0, 2000, true, null] }
		],
		"s-781-2000-2131-0": [{ type: "text", sub_type: "message", message: "Right", message_ES: "Derecha" },
			{ type: "spawn", func: "marker", args: [false, 300, 100, 0, 2000, true, null] },
			{ type: "spawn", func: "marker", args: [false, 230, 100, 0, 2000, true, null] }
		],
		//"s-781-2000-4000-0": [{ type: "text", sub_type: "alert", message: "鉴定！！！！", message_ES: "Дискотека！" }],
		//"dm-0-0-9781022": [{ type: "text", sub_type: "alert", message: "鉴定", message_ES: "鉴定" }],
		//"dm-0-0-9781023": [{ type: "text", sub_type: "message", message: "全场鉴定", message_ES: "全场鉴定" }],
		"dm-0-0-9781046": [{ type: "text", sub_type: "message", message: "First: (Debuffs) Closest", message_ES: "Primero: Debuffs (Mas cercano)" }], // Thank you... for this release...
		"dm-0-0-9781047": [{ type: "text", sub_type: "message", message: "First: (Circles) Spread", message_ES: "Primero: Circulos (Separarse)" }], // Beware the... red lightning...
		"dm-0-0-9781048": [{ type: "text", sub_type: "message", message: "First: (Bombs) Gather + Cleanse", message_ES: "Primero: Bombas (Reunir + Cleanse)" }], // Beware the mark... of Lakan...

		// 3 BOSS
		"nd-781-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"h-781-3000-99": [{ type: "func", func: thirdboss_start_event }],
		"h-781-3000-50": [{ type: "func", func: thirdboss_fifty_event }],
		"dm-0-0-9781043": [{ type: "func", func: thirdboss_message_event, args: [1043] }], // Lakan has noticed you.
		"dm-0-0-9781044": [{ type: "func", func: thirdboss_message_event, args: [1044] }], // Lakan is trying to take you on one at a time.
		"dm-0-0-9781045": [{ type: "func", func: thirdboss_message_event, args: [1045] }], // Lakan intends to kill all of you at once.
		"s-781-3000-1404-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Closest", message_ES: "Debuffs (Mas cercano)" }],
		"s-781-3000-1405-0": [{ type: "text", sub_type: "message", message: "(Debuffs) Farthest", message_ES: "Debuffs (Mas lejano)" }],
		"s-781-3000-1301-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + Cleanse", message_ES: "Bombas (Reunir + Cleanse)" }],
		"s-781-3000-1302-0": [{ type: "text", sub_type: "message", message: "(Bombs) Gather + No cleanse", message_ES: "Bombas (Reunir + No Cleanse)" }],
		"s-781-3000-3103-0": [{ type: "text", sub_type: "message", message: "(Circles) Spread", message_ES: "Circulos (Separarse)" }],
		"s-781-3000-3105-0": [{ type: "text", sub_type: "message", message: "(Circles) Gather", message_ES: "Circulos (Reunir)" }],
		//"s-781-3000-1116-0": [{ type: "text", sub_type: "message", message: "Wave", message_ES: "Волны" }],
		//"s-781-3000-2116-0": [{ type: "text", sub_type: "message", message: "Circle", message_ES: "Круг" }],
		"s-781-3000-1136-0": [{ type: "text", sub_type: "message", message: "Claw", message_ES: "Garras" }],
		"s-781-3000-1701-0": [{ type: "text", sub_type: "message", message: "Back + Front", message_ES: "Ataque hacia atras + Adelante" }],
		"s-781-3000-1113-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Ataque al jugador" }],
		"s-781-3000-1151-0": [{ type: "text", sub_type: "message", message: "Attention Stun", message_ES: "Stun" }],
		"s-781-3000-2151-0": [{ type: "text", sub_type: "message", message: "Attention Stun", message_ES: "Stun" }],
		"s-781-3000-2113-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Ataque al jugador" }],
		"s-781-3000-1152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_ES: "Stun + Ataque hacia atras" }],
		"s-781-3000-2152-0": [{ type: "text", sub_type: "message", message: "Stun + Back", message_ES: "Stun + Ataque hacia atras" }],
		"s-781-3000-2138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-781-3000-1138-0": [{ type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 250, 0, 6000] }],
		"s-781-3000-1144-0": [{ type: "text", sub_type: "message", message: "OUT", message_ES: "SALIR" }],
		"s-781-3000-1145-0": [{ type: "text", sub_type: "message", message: "IN", message_ES: "ENTRAR" }],
		"s-781-3000-1240-0": [{ type: "text", sub_type: "message", message: "Donuts", message_ES: "Donas" }, { type: "spawn", func: "circle", args: [false, 553, 0, 0, 10, 350, 0, 6000] }],
		"s-781-3000-1401-0": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague/Regress" }],
		"s-781-3000-1402-0": [{ type: "text", sub_type: "message", message: "Sleep", message_ES: "¡¡Dormir!!" }]
	};
};