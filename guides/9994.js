// Thaumetal Refinery (Hard)
//
// made by ITunk / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	const { entity } = dispatch.require.library;

	let blue_vaccine_loc = null;
	let red_vaccine_loc = null;
	let road_from_gameId = null;

	function spawn_road(loc) {
		const road_from_ent = entity.mobs[road_from_gameId];
		if (road_from_ent && loc) {
			const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
			const distance = road_from_ent.pos.dist2D(loc);
			handlers.spawn({ func: "vector", args: [476, 0, 0, angle, distance, 0, 10000] }, { loc: road_from_ent.pos });
		}
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 9941030) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "message", message: "Put banana to the tree", message_ES: "Ponle plátano al árbol." });
			}
		}
	});

	return {
		// 1 BOSS
		"nd-994-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-994-1000-103-0": [
			{ type: "text", sub_type: "message", message: "AOE Stun (Dodge)", message_ES: "AOE Stun (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 125, null, 230, 0, 2000] }
		],
		"s-994-1000-107-0": [
			{ type: "text", sub_type: "message", message: "Jump (Dodge)", message_ES: "Saltar (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 2500, 2500] }
		],
		"s-994-1000-108-1": [{ type: "text", sub_type: "message", message: "Stun Back", message_ES: "Stun Atrás" }],
		"s-994-1000-111-0": [
			{ type: "text", sub_type: "message", message: "Explosions (In)", message_ES: "Explosiones (Entrar)", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 275, 1000, 4000] }
		],
		"s-994-1000-112-0": [
			{ type: "text", sub_type: "message", message: "Explosions (Out)", message_ES: "Explosiones (Salir)", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 325, 1000, 4000] }
		],
		"s-994-1000-113-0": [
			{ type: "text", sub_type: "message", message: "Explosions (Middle)", message_ES: "Explosiones (Medio)", delay: 1000 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 210, 1000, 4000] },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 400, 1000, 4000] }
		],
		"s-994-1000-114-0": [{ type: "text", sub_type: "message", message: "Many Attacks | Pull", message_ES: "Muchos golpes | Pull" }],
		"s-994-1000-115-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1000 }],
		"s-994-1000-116-0": [{ type: "text", sub_type: "message", message: "Gather!", message_ES: "¡Reunirse!", delay: 3000 }],
		"s-994-1000-119-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar" }],
		"s-994-1000-312-0": [{ type: "text", sub_type: "message", message: "Shield!", message_ES: "Escudo!", delay: 2000 }],
		"s-994-1000-315-0": [{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar" }],
		"ae-0-0-9941002": [{ type: "text", sub_type: "message", message: "Eye (boss to banana)", message_ES: "Ojo (lleva al jefe al plátano)" }],
		"qb-994-1000-994008": [{ type: "text", sub_type: "message", message: "Push (Kaia)", message_ES: "Empujar (Kaia)" }],

		// 2 BOSS
		"nd-994-2000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"s-994-2000-111-0": [{ type: "text", sub_type: "message", message: "Bait (2 stones)", message_ES: "Bait (2 Piedras)" }],
		"s-994-2000-112-0": [{ type: "text", sub_type: "message", message: "Bait (3 stones)", message_ES: "Bait (3 Piedras)" }],
		"s-994-2000-106-0": [{ type: "text", sub_type: "message", message: "Bait (Rock)", message_ES: "Bait (Roca)" }],
		"s-994-2000-108-0": [{ type: "text", sub_type: "message", message: "Jump to Tank", message_ES: "Saltar al tanque" }],
		"s-994-2000-307-0": [{ type: "text", sub_type: "message", message: "Stones", message_ES: "Piedras" }],
		"ae-0-0-9942006": [{ type: "text", sub_type: "message", message: "Stone on you", message_ES: "Piedra sobre ti", delay: 1000 }],
		"s-994-2000-117-0": [{ type: "text", sub_type: "message", message: "Inward Wave", message_ES: "Ola Interior", delay: 1000 }],
		"s-994-2000-118-0": [{ type: "text", sub_type: "message", message: "Outward Wave", message_ES: "Ola Exterior" }],
		"s-994-2000-114-0": [{ type: "text", sub_type: "message", message: "Together", message_ES: "Reunirse" }],
		"s-994-2000-113-0": [
			{ type: "text", sub_type: "message", message: "Donut (In > Out)", message_ES: "Donas (Entrar > Salir)", delay: 1500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 225, 1500, 3000] },
			{ type: "text", sub_type: "message", message: "Out", message_ES: "Salir", delay: 3500 },
			{ type: "spawn", func: "circle", args: [false, 553, 0, 0, null, 325, 3500, 3000] }
		],
		"s-994-2000-110-0": [{ type: "text", sub_type: "message", message: "Hit in dd", message_ES: "Golpear en dd" }],

		// 3 BOSS
		"nd-994-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-994-3002": [{ type: "func", func: ent => road_from_gameId = ent.gameId }], // Колба с мобом
		"ns-994-3003": [{ type: "func", func: ent => road_from_gameId = ent.gameId, delay: 1000 }], // Эксперимент(моб)
		"nd-994-3003": [{ type: "func", func: () => road_from_gameId = null }],
		"ns-994-3004": [{ type: "func", func: ent => blue_vaccine_loc = ent.pos }], // Синий
		"ns-994-3005": [{ type: "func", func: ent => red_vaccine_loc = ent.pos }], // Красный
		"s-994-3000-103-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar" }],
		"s-994-3000-107-0": [{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Ataque Frontal (Iframe)" }],
		"s-994-3000-108-0": [{ type: "text", sub_type: "message", message: "Back (Dodge)", message_ES: "Ataque Atrás (Iframe)" }],
		"s-994-3000-104-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait" }],
		"s-994-3000-111-0": [{ type: "text", sub_type: "message", message: "Out Safe", message_ES: "Salir Seguro" }],
		"s-994-3000-112-0": [{ type: "text", sub_type: "message", message: "In Safe", message_ES: "Entrar Seguro" }],
		"s-994-3000-113-0": [{ type: "text", sub_type: "message", message: "Donut (In)", message_ES: "Donas (Entrar)" }],
		"s-994-3000-114-0": [{ type: "text", sub_type: "message", message: "Donut (Out)", message_ES: "Donas (Salir)" }],
		"s-994-3000-116-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-994-3000-118-0": [{ type: "text", sub_type: "message", message: "Back", message_ES: "Ataque Atrás" }],
		"s-994-3000-122-0": [{ type: "text", sub_type: "message", message: "Gather!", message_ES: "¡Reunirse!" }],
		"s-994-3000-125-0": [{ type: "text", sub_type: "message", message: "Bait (Puddle)", message_ES: "Bait (Charco)" }],
		"s-994-3000-126-0": "s-994-3000-111-0",
		"s-994-3000-127-0": "s-994-3000-112-0",
		"s-994-3000-128-0": "s-994-3000-113-0",
		"s-994-3000-130-0": "s-994-3000-116-0",
		"s-994-3000-301-0": [
			{ type: "text", sub_type: "message", message: "Line up the puddles to blue", message_ES: "Alinea los charcos en azul." },
			{ type: "func", func: () => spawn_road(blue_vaccine_loc) }
		],
		"s-994-3000-302-0": [
			{ type: "text", sub_type: "message", message: "Line up the puddles to red", message_ES: "Alinea los charcos en rojo." },
			{ type: "func", func: () => spawn_road(red_vaccine_loc) }
		],
		"s-994-3000-315-0": [{ type: "text", sub_type: "message", message: "Pull", message_ES: "Pull" }],
		"s-994-3000-316-0": "s-994-3000-315-0",
		"qb-994-3000-994064": [{ type: "text", sub_type: "message", message: "Give stun!", message_ES: "¡Dar Stun al Boss!" }],
		"qb-994-3000-994065": [{ type: "text", sub_type: "message", message: "Gather!", message_ES: "¡Reunirse!" }]
	};
};