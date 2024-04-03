// Thaumetal Refinery
//
// made by ITunk / Vampic

module.exports = (dispatch, handlers, guide, lang) => {
	const { entity } = dispatch.require.library;

	let blue_vaccine_loc = null;
	let red_vaccine_loc = null;
	const road_from_gameIds = new Set();

	function spawn_road(loc) {
		road_from_gameIds.forEach(road_from_gameId => {
			const road_from_ent = entity.mobs[road_from_gameId];
			if (road_from_ent && loc) {
				const angle = (road_from_ent.pos.angleTo(loc) - road_from_ent.pos.w) * 180 / Math.PI;
				const distance = road_from_ent.pos.dist2D(loc);
				handlers.event([
					{ type: "spawn", func: "vector", args: [553, -90 + angle, 50, angle, distance, 0, 10000] },
					{ type: "spawn", func: "vector", args: [553, 90 + angle, 50, angle, distance, 0, 10000] }
				], { loc: road_from_ent.pos });
			}
		});
	}

	dispatch.hook("S_ABNORMALITY_BEGIN", dispatch._mod.majorPatchVersion >= 107 ? 5 : 4, event => {
		if (event.id === 7941030) {
			if (dispatch._mod.game.me.is(event.target)) {
				handlers.text({ sub_type: "message", message: "Put banana to the tree", message_ES: "Ponle plátano al árbol." });
			}
		}
  });

  return {
		// 1 BOSS
		"nd-794-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
    "s-794-1000-103-0": [
      { type: "text", sub_type: "message", message: "AOE Stun (Dodge)", message_ES: "AOE Stun (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 125, null, 250, 0, 2000] }
		],
    "s-794-1000-107-0": [
      { type: "text", sub_type: "message", message: "Jump (Dodge)", message_ES: "Saltar (Iframe)" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, null, 250, 2500, 2500] }
		],
		"s-794-1000-115-0": [{ type: "text", sub_type: "message", message: "Dodge", message_ES: "Iframe", delay: 1000 }],
		"s-794-1000-119-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar" }],
		"s-794-1000-315-0": [{ type: "text", sub_type: "message", message: "In", message_ES: "Entrar" }],
		"ae-0-0-7941002": [{ type: "text", sub_type: "message", message: "Eye (boss to banana)", message_ES: "Ojo (lleva al jefe al plátano)" }],
		"qb-794-1000-994008": [{ type: "text", sub_type: "message", message: "Push (Kaia)", message_ES: "Embestir (Kaia)" }],

		// 2 BOSS
		"s-794-2000-111-0": [{ type: "text", sub_type: "message", message: "Bait (2 stones)", message_ES: "Bait (2 Piedras)" }],
		"s-794-2000-112-0": [{ type: "text", sub_type: "message", message: "Bait (3 stones)", message_ES: "Bait (3 Piedras)" }],
		"s-794-2000-106-0": [{ type: "text", sub_type: "message", message: "Bait (Rock)", message_ES: "Bait (Roca)" }],
		"s-794-2000-307-0": [{ type: "text", sub_type: "message", message: "Stones", message_ES: "Piedras" }],
		"ae-0-0-7942006": [{ type: "text", sub_type: "message", message: "Stone on you", message_ES: "Piedra sobre ti", delay: 1000 }],
		"s-794-2000-117-0": [{ type: "text", sub_type: "message", message: "Inward Wave", message_ES: "Ola interior", delay: 1000 }],
		"s-794-2000-118-0": [{ type: "text", sub_type: "message", message: "Outward Wave", message_ES: "Ola exterior" }],
		"s-794-2000-114-0": [{ type: "text", sub_type: "message", message: "Together", message_ES: "Juntarse" }],
		"s-794-2000-110-0": [{ type: "text", sub_type: "message", message: "Hit in dd", message_ES: "Golpear en dd" }],

		// 3 BOSS
		"nd-794-3000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],
		"ns-794-3002": [{ type: "func", func: ent => road_from_gameIds.add(ent.gameId) }], // Колба с мобом
		"nd-794-3002": [{ type: "func", func: ent => road_from_gameIds.delete(ent.gameId), delay: 5000 }],
		"ns-794-3004": [{ type: "func", func: ent => blue_vaccine_loc = ent.pos }], // Синий
		"ns-794-3005": [{ type: "func", func: ent => red_vaccine_loc = ent.pos }], // Красный
		"s-794-3000-103-0": [{ type: "text", sub_type: "message", message: "Pushback", message_ES: "Empujar" }],
		"s-794-3000-107-0": [{ type: "text", sub_type: "message", message: "Front (Dodge)", message_ES: "Ataque Frontal (Iframe)" }],
		"s-794-3000-108-0": [{ type: "text", sub_type: "message", message: "Back (Dodge)", message_ES: "Ataque Atrás (Iframe)" }],
		"s-794-3000-104-0": [{ type: "text", sub_type: "message", message: "Bait", message_ES: "Bait" }],
		"s-794-3000-111-0": [{ type: "text", sub_type: "message", message: "Out Safe", message_ES: "Salir Seguro" }],
		"s-794-3000-112-0": [{ type: "text", sub_type: "message", message: "In Safe", message_ES: "Entrar Seguro" }],
		"s-794-3000-113-0": [{ type: "text", sub_type: "message", message: "Donut (In)", message_ES: "Donas (Entrar)" }],
		"s-794-3000-114-0": [{ type: "text", sub_type: "message", message: "Donut (Out)", message_ES: "Donas (Salir)" }],
		"s-794-3000-122-0": [{ type: "text", sub_type: "message", message: "Gather!", message_ES: "¡Reunirse!" }],
		"s-794-3000-125-0": [{ type: "text", sub_type: "message", message: "Bait (Puddle)", message_ES: "Bait (charco)" }],
		"s-794-3000-315-0": [
			{ type: "text", sub_type: "message", message: "Remove puddles from paths", message_ES: "Eliminar los charcos de los caminos" },
			{ type: "func", func: () => spawn_road(blue_vaccine_loc) }
		],
		"s-794-3000-316-0": [
			{ type: "text", sub_type: "message", message: "Remove puddles from paths", message_ES: "Eliminar los charcos de los caminos" },
			{ type: "func", func: () => spawn_road(red_vaccine_loc) }
		]
	};
};