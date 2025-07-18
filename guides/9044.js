﻿// Bahaar's Sanctum
//
// made by michengs / Emilia-s2 / HSDN / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	guide.type = SP;

	const { player } = dispatch.require.library;
  let print_loading = true;
	let print_lasers = true;

	function waves_event() {
		handlers.event([
			{ type: "spawn", func: "vector", args: [553, 90, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 90, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 270, 50, 180, 500, 0, 6000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 6, 400, 0, 6000] },
			{ type: "text", sub_type: "alert", delay: 60000, message: "Waves soon...", message_ES: "Olas pronto..." }
		]);
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 90442502) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "notification", message: "Laser on you", message_ES: "Láser sobre ti" });
			} else {
				const member = player.playersInParty.get(event.target);
				if (member) {
					handlers.text({
						sub_type: "message",
						message: `Laser on ${member.name}`,
						message_ES: `Láser Activado ${member.name}`
					});
				}
			}
		}
	});

	return {
		// PHASE 1
		"nd-444-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		// Not enraged
		"s-444-1000-1103-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Martillazo Frontal (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-444-1000-1108-0": [
			{ type: "text", sub_type: "message", message: "Back Throw", message_ES: "Martillo Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 250, 12, 300, 100, 3000] }
		],
		"s-444-1000-1111-0": [
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Martillazo Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 1500, 2000] }
		],
		"s-444-1000-1113-0": [{ type: "text", sub_type: "message", message: "Throw (Bait)", message_ES: "Lanzar Martillo > (al jugador)" }],
		"s-444-1000-1114-0": [
			{ type: "text", sub_type: "message", message: "Front Slam", message_ES: "Mano Izquierda: Aplaste Frontal" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-444-1000-1115-0": [{ type: "text", sub_type: "message", delay: 1100, message: "Dodge", message_ES: "Iframe" }], // Knockup
		"s-444-1000-1116-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In)", message_ES: "Mano Derecha: Donas (Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 290, 0, 2000] }
		],
		"s-444-1000-1116-1": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "Salir > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 290, 0, 4000] }
		],
		"s-444-1000-1117-0": [{ type: "text", sub_type: "message", message: "Jump (Bait)", message_ES: "Saltar > (al Jugador)" }],
		"s-444-1000-1118-0": [{ type: "text", sub_type: "message", message: "Jump (Tank)", message_ES: "Saltar > (al Tank)" }],
		"s-444-1000-1118-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 400, 12, 300, 100, 2000] }],
		"s-444-1000-1121-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left)", message_ES: "Olas (Izquierda)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-1000-1131-0": [
			{ type: "text", sub_type: "message", message: "Front | Left Scratch", message_ES: "Martillazo Frontal | Arrastre Izquierdo" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Dodge", message_ES: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }
		],
		"s-444-1000-1137-0": [
			{ type: "text", sub_type: "message", message: "Hammer Back", message_ES: "Martillazo Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-444-1000-1138-0": [{ type: "text", sub_type: "message", delay: 1100, message: "Dodge", message_ES: "Iframe" }], // Knockup (Bait)
		"s-444-1000-1139-0": [
			{ type: "text", sub_type: "message", delay: 550, message: "Dodge!", message_ES: "Iframe!" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 8, 360, 0, 2000] }
		],
		"s-444-1000-1140-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right)", message_ES: "Olas (Derecha)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		// Enraged
		"s-444-1000-2103-0": "s-444-1000-1103-0",
		"s-444-1000-2108-0": "s-444-1000-1108-0",
		"s-444-1000-2111-0": "s-444-1000-1111-0",
		"s-444-1000-2113-0": "s-444-1000-1113-0",
		"s-444-1000-2114-0": "s-444-1000-1114-0",
		"s-444-1000-2115-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }], // Knockup
		"s-444-1000-2116-0": "s-444-1000-1116-0",
		"s-444-1000-2116-1": "s-444-1000-1116-1",
		"s-444-1000-2117-0": "s-444-1000-1117-0",
		"s-444-1000-2118-0": "s-444-1000-1118-0",
		"s-444-1000-2118-1": "s-444-1000-1118-1",
		"s-444-1000-2121-0": "s-444-1000-1121-0",
		"s-444-1000-2131-0": "s-444-1000-1131-0",
		"s-444-1000-2137-0": "s-444-1000-1137-0",
		"s-444-1000-2138-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe" }], // Knockup (Bait)
		"s-444-1000-2139-0": "s-444-1000-1139-0",
		"s-444-1000-2140-0": "s-444-1000-1140-0",

		// PHASE 2
		"nd-444-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-444-2000": [
			{ type: "spawn", func: "marker", args: [false, 0, -700, 100, 60000000, false, ["Trono", "Dirección del Trono"]] },
			{ type: "spawn", func: "point", args: [513, 0, 800, 100, 60000000] },
			{ type: "func", func: () => print_loading = true },
			{ type: "func", func: () => print_lasers = true }
		],
		// Not enraged
		"s-444-2000-1101-0": [
			{ type: "text", sub_type: "message", message: "4 Hit Combo", message_ES: "270° (Zona-segura)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 195, 500, 0, 3000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 270, 500, 0, 3000] }
		],
		"s-444-2000-1103-0": [
			{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Martillazo Frontal (Iframe)" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 3000] }
		],
		"s-444-2000-1107-0": [{ type: "text", sub_type: "message", message: "4 Hit (3)", message_ES: "4 Hit (3)" }],
		"s-444-2000-1108-0": [
			{ type: "text", sub_type: "message", message: "Back Throw", message_ES: "Martillo Atrás (Stun)" },
			{ type: "spawn", func: "circle", args: [false, 553, 180, 250, 12, 300, 100, 3000] }
		],
		"s-444-2000-1111-0": [
			{ type: "text", sub_type: "message", message: "Back", message_ES: "Martillazo Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 1500, 2000] }
		],
		"s-444-2000-1112-0": [
			{ type: "text", sub_type: "message", delay: 0, message: "Perfect Defense (Fast)", message_ES: "Defensa Perfecta (Rápida)" },
			{ type: "text", sub_type: "message", delay: 1200, message: "Block", message_ES: "Bloquear" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-444-2000-1113-0": [{ type: "text", sub_type: "message", message: "Throw (Bait)", message_ES: "Lanzar Martillo > (al jugador)" }],
		"s-444-2000-1114-0": [
			{ type: "text", sub_type: "message", message: "Front Slam", message_ES: "Mano Izquierda: Aplaste Frontal" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 260, 10, 320, 100, 3000] }
		],
		"s-444-2000-1115-0": [{ type: "text", sub_type: "message", delay: 1100, message: "Dodge", message_ES: "Iframe" }], // Knockup
		"s-444-2000-1116-0": [
			{ type: "text", sub_type: "message", message: "Donuts (In)", message_ES: "Mano Derecha: Donas (Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 912, 0, 0, 12, 290, 100, 2000] }
		],
		"s-444-2000-1116-1": [
			{ type: "text", sub_type: "message", message: "Out > In", message_ES: "Salir > Entrar" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 290, 100, 4000] }
		],
		"s-444-2000-1117-0": [{ type: "text", sub_type: "message", message: "Jump (Bait)", message_ES: "Saltar > (al Jugador)" }],
		"s-444-2000-1118-0": [{ type: "text", sub_type: "message", message: "Jump (Tank)", message_ES: "Saltar > (al Tank)" }],
		"s-444-2000-1118-1": [{ type: "spawn", func: "circle", args: [false, 553, 0, 400, 12, 300, 100, 2000] }],
		"s-444-2000-1119-0": [
			{ type: "text", sub_type: "message", message: "Left Swipe", message_ES: "Izquierda" },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [0, 180, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 270, 300, 100, 2000, true, null] }
		],
		"s-444-2000-1120-0": [
			{ type: "text", sub_type: "message", message: "Right Swipe", message_ES: "Derecha" },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 20, 160, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 12, 220, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 10, 300, 0, 2000] },
			{ type: "spawn", func: "semicircle", args: [180, 360, 912, 0, 0, 8, 360, 0, 2000] },
			{ type: "spawn", func: "marker", args: [false, 90, 300, 100, 2000, true, null] }
		],
		"s-444-2000-1121-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left)", message_ES: "Olas (Izquierda)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-2000-1122-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left) 3nd fast", message_ES: "Olas (Izquierda) 3er rápido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-2000-1123-0": [
			{ type: "text", sub_type: "message", message: "Waves (Left) 2nd fast", message_ES: "Olas (Izquierda) 2do rápido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 37, 125, 0, 2500, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 143, 125, 0, 2500, false, ["safe", "safe"]] }
		],
		"s-444-2000-1125-0": [
			{ type: "text", sub_type: "message", message: "Front | Right Scratch", message_ES: "Martillazo Frontal | Arrastre Derecho" },
			{ type: "text", sub_type: "message", delay: 1750, message: "Dodge", message_ES: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 400, 8, 350, 100, 2000] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, 175, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 60, 290, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, -5, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 290, 95, 175, 800, 0, 3500] }
		],
		"s-444-2000-1131-0": [
			{ type: "text", sub_type: "message", message: "Front | Left Scratch", message_ES: "Martillazo Frontal | Arrastre Izquierdo" },
			{ type: "text", sub_type: "message", delay: 1250, message: "Dodge", message_ES: "Iframe" },
			{ type: "spawn", func: "circle", args: [false, 553, 358, 340, 6, 630, 100, 2000] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 186, 800, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 90, 115, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 6, 300, 0, 3500] },
			{ type: "spawn", func: "vector", args: [553, 270, 250, 186, 800, 0, 3500] }
		],
		"s-444-2000-1135-0": [
			{ type: "text", sub_type: "message", message: "Perfect Defense", message_ES: "Defensa Perfecta" },
			{ type: "text", sub_type: "message", delay: 800, message: "Block", message_ES: "Bloquear" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 3000] }
		],
		"s-444-2000-1137-0": [
			{ type: "text", sub_type: "message", message: "Hammer back", message_ES: "Martillazo Atrás" },
			{ type: "spawn", func: "circle", args: [false, 553, 185, 500, 8, 490, 100, 2000] }
		],
		"s-444-2000-1138-0": [{ type: "text", sub_type: "message", delay: 900, message: "Dodge", message_ES: "Iframe" }], // Knockup (Bait)
		"s-444-2000-1139-0": [{ type: "text", sub_type: "message", delay: 200, message: "Dodge!", message_ES: "Iframe" }],
		"s-444-2000-1140-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right)", message_ES: "Olas (Derecha)" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-2000-1141-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right) 3nd fast", message_ES: "Olas (Derecha) 3er rápido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2533, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2533, false, ["safe", "safe"]] }
		],
		"s-444-2000-1142-0": [
			{ type: "text", sub_type: "message", message: "Waves (Right) 2nd fast", message_ES: "Olas (Derecha) 2do rápido" },
			{ type: "func", func: waves_event },
			{ type: "spawn", func: "marker", args: [false, 323, 125, 0, 2500, false, ["safe", "safe"]] },
			{ type: "spawn", func: "marker", args: [false, 217, 125, 0, 2500, false, ["safe", "safe"]] }
		],
		"s-444-2000-1307-0": [
			{ type: "text", sub_type: "message", message: "!", message_ES: "!" },
			{ type: "text", sub_type: "message", delay: 20000, message: "Last aerolite", message_ES: "Ultimo Meteorito" }
		],
		"s-444-2000-1308-0": [{ type: "text", sub_type: "message", message: "Stun (1)", message_ES: "Stun (1)" }],
		"s-444-2000-1309-0": [{ type: "text", sub_type: "message", message: "Stun (2)", message_ES: "Stun (2)" }],
		"s-444-2000-1310-0": [{ type: "text", sub_type: "message", message: "Stun (3)", message_ES: "Stun (3)" }],
		"s-444-2000-1311-0": [
			{ type: "text", sub_type: "message", message: "Wrath (Kaia)", message_ES: "Ira (Kaia)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		"s-444-2000-1312-0": [
			{ type: "text", sub_type: "message", message: "Wrath (Kaia)", message_ES: "Ira (Kaia)" },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 0, 500, 0, 6000] },
			{ type: "spawn", func: "vector", args: [553, 0, 0, 180, 500, 0, 6000] }
		],
		// Enraged
		"s-444-2000-2101-0": "s-444-2000-1101-0",
		"s-444-2000-2103-0": "s-444-2000-1103-0",
		"s-444-2000-2107-0": "s-444-2000-1107-0",
		"s-444-2000-2108-0": "s-444-2000-1108-0",
		"s-444-2000-2111-0": "s-444-2000-1111-0",
		"s-444-2000-2112-0": [
			{ type: "text", sub_type: "message", delay: 1000, message: "Perfect Defense x2 (slow)", message_ES: "Defensa Perfecta x2 (Lenta)" },
			{ type: "text", sub_type: "message", delay: 2400, message: "Block", message_ES: "Bloquear" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-444-2000-2113-0": "s-444-2000-1113-0",
		"s-444-2000-2114-0": "s-444-2000-1114-0",
		"s-444-2000-2115-0": [{ type: "text", sub_type: "message", delay: 100, message: "Dodge", message_ES: "Iframe" }], // Knockup
		"s-444-2000-2116-0": "s-444-2000-1116-0",
		"s-444-2000-2116-1": "s-444-2000-1116-1",
		"s-444-2000-2117-0": "s-444-2000-1117-0",
		"s-444-2000-2118-0": "s-444-2000-1118-0",
		"s-444-2000-2118-1": "s-444-2000-1118-1",
		"s-444-2000-2119-0": "s-444-2000-1119-0",
		"s-444-2000-2120-0": "s-444-2000-1120-0",
		"s-444-2000-2121-0": "s-444-2000-1121-0",
		"s-444-2000-2122-0": "s-444-2000-1122-0",
		"s-444-2000-2123-0": "s-444-2000-1123-0",
		"s-444-2000-2125-0": "s-444-2000-1125-0",
		"s-444-2000-2131-0": "s-444-2000-1131-0",
		"s-444-2000-2135-0": [
			{ type: "text", sub_type: "message", delay: 0, message: "Perfect Defense x2", message_ES: "Defensa Perfecta x2" },
			{ type: "text", sub_type: "message", delay: 800, message: "Block", message_ES: "Bloquear" },
			{ type: "spawn", func: "circle", args: [false, 553, 356, 220, 12, 210, 100, 4000] }
		],
		"s-444-2000-2137-0": "s-444-2000-1137-0",
		"s-444-2000-2138-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 0 }], // Knockup (Bait)
		"s-444-2000-2139-0": "s-444-2000-1139-0",
		"s-444-2000-2140-0": "s-444-2000-1140-0",
		"s-444-2000-2141-0": "s-444-2000-1141-0",
		"s-444-2000-2142-0": "s-444-2000-1142-0",
		//
		"s-444-2500-1201-0": [
			{ type: "event", check_func: () => print_loading, args: [
				{ type: "text", sub_type: "alert", message: "Loading lasers...", message_ES: "Cargando láseres..." },
				{ type: "func", func: () => print_loading = false }
			] }
		],
		"s-444-2500-1305-0": [
			{ type: "event", check_func: () => print_lasers, args: [
				{ type: "text", sub_type: "message", message: "Laser", message_ES: "Láser" },
				{ type: "func", func: () => print_lasers = false },
				{ type: "func", func: () => print_lasers = true, delay: 4000 }
			] },
			{ type: "spawn", func: "vector", args: [912, 0, 0, 0, 3000, 0, 4000] }
		],
		"ab-444-2000-90442303": [{ type: "text", sub_type: "message", message: "Plague/Regress", message_ES: "Plague" }],
		"ab-444-2000-90442304": [
			{ type: "text", sub_type: "notification", message: "Stun", message_ES: "Stun!", speech: false },
			{ type: "text", sub_type: "message", message: "Stun", message_ES: "Stun!" }
		]
	};
};