// Velik's Sanctuary (Hard)
//
// made by michengs / HSDN

let player, entity, library, effect;

let thirdboss_fifty = false;

function thirdboss_message_event(skillid, handlers, event, ent, dispatch) {
	switch (skillid) {
		// Lakan has noticed you.
		case 1043:
			if (!thirdboss_fifty) {
				handlers['text']({
					"sub_type": "notification",
					"message": "Debuffs > Circles > Bombs",
					"message_RU": "ДКБ"
				});
			} else {
				handlers['text']({
					"sub_type": "notification",
					"message": "Debuffs > Bombs > Circles",
					"message_RU": "ДБК"
				});
			}
			break;
		// Lakan is trying to take you on one at a time.
		case 1044:
			if (!thirdboss_fifty) {
				handlers['text']({
					"sub_type": "notification",
					"message": "Circles > Bombs > Debuffs",
					"message_RU": "КБД"
				});
			} else {
				handlers['text']({
					"sub_type": "notification",
					"message": "Circles > Debuffs > Bombs",
					"message_RU": "КДБ"
				});
			}
			break;
		// Lakan intends to kill all of you at once.
		case 1045:
			if (!thirdboss_fifty) {
				handlers['text']({
					"sub_type": "notification",
					"message": "Bombs > Debuffs > Circles",
					"message_RU": "БДК"
				});
			} else {
				handlers['text']({
					"sub_type": "notification",
					"message": "Bombs > Circles > Debuffs",
					"message_RU": "БКД"
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

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"s-981-1000-2401": [
		{ "type": "text", "sub_type": "message", "message": "Right", "message_RU": "Откид вправо" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 300, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 230, 100, 0, 2000, true, null] }
	],
	"s-981-1000-2402": [
		{ "type": "text", "sub_type": "message", "message": "Left", "message_RU": "Откид влево" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 60, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 130, 100, 0, 2000, true, null] }
	],
	"s-981-1000-2304-0": [{ "type": "text", "sub_type": "message", "message": "Flying", "message_RU": "Взлет" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 300, 0, 6000] }],
	"s-981-1000-2303-0": [{ "type": "text", "sub_type": "message", "message": "Spin", "message_RU": "Крутилка" }],
	"s-981-1000-2113-0": [{ "type": "text", "sub_type": "message", "message": "Front + AoEs", "message_RU": "Передняя | AOE" }],
	"s-981-1000-2308-0": [{ "type": "text", "sub_type": "message", "message": "OUT", "message_RU": "Наружу" }],
	"s-981-1000-2309-0": [{ "type": "text", "sub_type": "message", "message": "IN", "message_RU": "Внутрь" }],
	"s-981-1000-1401": [
		{ "type": "text", "sub_type": "message", "message": "Right", "message_RU": "Откид вправо" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 300, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 230, 100, 0, 2000, true, null] }
	],
	"s-981-1000-1402": [
		{ "type": "text", "sub_type": "message", "message": "Left", "message_RU": "Откид влево" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 60, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 130, 100, 0, 2000, true, null] }
	],
	"s-981-1000-1304-0": [{ "type": "text", "sub_type": "message", "message": "Flying", "message_RU": "Взлет" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 300, 0, 6000] }],
	"s-981-1000-1303-0": [{ "type": "text", "sub_type": "message", "message": "Spin", "message_RU": "Крутилка" }],
	"s-981-1000-1113-0": [{ "type": "text", "sub_type": "message", "message": "Front + AoEs", "message_RU": "Передняя | AOE" }],
	"s-981-1000-1308-0": [{ "type": "text", "sub_type": "message", "message": "OUT", "message_RU": "Наружу" }],
	"s-981-1000-1309-0": [{ "type": "text", "sub_type": "message", "message": "IN", "message_RU": "Внутрь" }],
	//"qb-981-1000-98102": [{ "type": "text", "sub_type": "message", "message": "Run away", "message_RU": "Уходи!" }],
	//"qb-981-1000-98103": [{ "type": "text", "sub_type": "message", "message": "点名炸石柱", "message_RU": "点名炸石柱" }], // круг на одного
	//"qb-981-1000-98106": [{ "type": "text", "sub_type": "message", "message": "集体炸石柱", "message_RU": "集体炸石柱" }], // круги на всех

	// 2 BOSS
	// Cage Mechanic
	//"s-981-2000-1503-0": [{ "type": "text", "sub_type": "message", "message": "坦快跑远", "message_RU": "坦快跑远" }],
	"s-981-2000-1106-0": [{ "type": "text", "sub_type": "message", "message": "Back", "message_RU": "Задний" }],
	"s-981-2000-1108-0": [{ "type": "text", "sub_type": "message", "message": "Front", "message_RU": "Передний" }],
	"s-981-2000-1111-0": [{ "type": "text", "sub_type": "message", "message": "360 attack", "message_RU": "Круговая" }],
	"s-981-2000-1302-0": [{ "type": "text", "sub_type": "message", "message": "Bait", "message_RU": "Байт" }],
	//"s-981-2000-1121-0": [{ "type": "text", "sub_type": "message", "message": "Summon Mobs", "message_RU": "Призыв мобов" }],
	"s-981-2000-1501-0": [
		{ "type": "text", "sub_type": "message", "message": "Identification", "message_RU": "Идентификация" },
		{ "type": "text", "sub_type": "message", "delay": 1000, "message": "3" },
		{ "type": "text", "sub_type": "message", "delay": 2000, "message": "2" },
		{ "type": "text", "sub_type": "message", "delay": 3000, "message": "1" }
	],
	//"s-981-2000-1112-0": [{ "type": "func", "func": single_stage_callout.bind(null, "STAB + KNOCKUP") }],
	"s-981-2000-1130-0": [
		{ "type": "text", "sub_type": "message", "message": "Left", "message_RU": "Откид влево" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 60, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 130, 100, 0, 2000, true, null] }
	],
	"s-981-2000-1131-0": [
		{ "type": "text", "sub_type": "message", "message": "Right", "message_RU": "Откид вправо" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 300, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 230, 100, 0, 2000, true, null] }
	],
	//"s-981-2000-2503-0": [{ "type": "text", "sub_type": "message", "message": "坦快跑远", "message_RU": "坦快跑远" }],
	"s-981-2000-2106-0": [{ "type": "text", "sub_type": "message", "message": "Back", "message_RU": "Задний" }],
	"s-981-2000-2108-0": [{ "type": "text", "sub_type": "message", "message": "Front", "message_RU": "Передний" }],
	"s-981-2000-2111-0": [{ "type": "text", "sub_type": "message", "message": "360 attack", "message_RU": "Круговая" }],
	//"s-981-2000-2121-0": [{ "type": "text", "sub_type": "message", "message": "Summon Mobs", "message_RU": "Призыв мобов" }],
	"s-981-2000-2501-0": [
		{ "type": "text", "sub_type": "message", "message": "Identification", "message_RU": "Идентификация" },
		{ "type": "text", "sub_type": "message", "delay": 1000, "message": "3" },
		{ "type": "text", "sub_type": "message", "delay": 2000, "message": "2" },
		{ "type": "text", "sub_type": "message", "delay": 3000, "message": "1" }
	],
	"s-981-2000-2130-0": [
		{ "type": "text", "sub_type": "message", "message": "Left", "message_RU": "Откид влево" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 60, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 130, 100, 0, 2000, true, null] }
	],
	"s-981-2000-2131-0": [
		{ "type": "text", "sub_type": "message", "message": "Right", "message_RU": "Откид вправо" },
		{ "type": "spawn_func", "func": "marker", "args": [false, 300, 100, 0, 2000, true, null] },
		{ "type": "spawn_func", "func": "marker", "args": [false, 230, 100, 0, 2000, true, null] }
	],
	//"s-981-2000-4000-0": [{ "type": "text", "sub_type": "alert", "message": "鉴定！！！！", "message_RU": "Дискотека！" }],
	//"dm-0-0-9981022": [{ "type": "text", "sub_type": "alert", "message": "鉴定", "message_RU": "鉴定" }],
	//"dm-0-0-9981023": [{ "type": "text", "sub_type": "message", "message": "全场鉴定", "message_RU": "全场鉴定" }],
	"dm-0-0-9981046": [{ "type": "text", "sub_type": "message", "message": "First: (Debuffs) Closest", "message_RU": "[ДКБ] Первая: дебафф (ближние)" }], // Thank you... for this release...
	"dm-0-0-9981047": [{ "type": "text", "sub_type": "message", "message": "First: (Circles) Spread", "message_RU": "[КБД] Первая: круги (отдельно)" }], // Beware the... red lightning...
	"dm-0-0-9981048": [{ "type": "text", "sub_type": "message", "message": "First: (Bombs) Gather + Cleanse", "message_RU": "[БДК] Первая: бомбы (вместе + клинс)" }], // Beware the mark... of Lakan...

	// 3 BOSS
	"h-981-3000-99": [{ "type": "func", "func": thirdboss_start_event }],
	"h-981-3000-50": [{ "type": "func", "func": thirdboss_fifty_event }],
	"dm-0-0-9981043": [{ "type": "func", "func": thirdboss_message_event.bind(null, 1043) }], // Lakan has noticed you.
	"dm-0-0-9981044": [{ "type": "func", "func": thirdboss_message_event.bind(null, 1044) }], // Lakan is trying to take you on one at a time.
	"dm-0-0-9981045": [{ "type": "func", "func": thirdboss_message_event.bind(null, 1045) }], // Lakan intends to kill all of you at once.
	"s-981-3000-1404-0": [{ "type": "text", "sub_type": "message", "message": "(Debuffs) Closest", "message_RU": "Дебафф (ближние)" }],
	"s-981-3000-1405-0": [{ "type": "text", "sub_type": "message", "message": "(Debuffs) Farthest", "message_RU": "Дебафф (дальние)" }],
	"s-981-3000-1301-0": [{ "type": "text", "sub_type": "message", "message": "(Bombs) Gather + Cleanse", "message_RU": "Бомбы (вместе!) + клинс" }],
	"s-981-3000-1302-0": [{ "type": "text", "sub_type": "message", "message": "(Bombs) Gather + No cleanse", "message_RU": "Бомбы (вместе!) + без клинса" }],
	"s-981-3000-3103-0": [{ "type": "text", "sub_type": "message", "message": "(Circles) Spread", "message_RU": "Круги (отдельно!)" }],
	"s-981-3000-3105-0": [{ "type": "text", "sub_type": "message", "message": "(Circles) Gather", "message_RU": "Круги (вместе!)" }],
	//"s-981-3000-1116-0": [{ "type": "text", "sub_type": "message", "message": "Wave", "message_RU": "Волны" }],
	//"s-981-3000-2116-0": [{ "type": "text", "sub_type": "message", "message": "Circle", "message_RU": "Круг" }],
	"s-981-3000-1136-0": [{ "type": "text", "sub_type": "message", "message": "Claw", "message_RU": "Когти" }],
	"s-981-3000-1701-0": [{ "type": "text", "sub_type": "message", "message": "Back + front", "message_RU": "Назад + Вперед" }],
	"s-981-3000-1113-0": [{ "type": "text", "sub_type": "message", "message": "Bait", "message_RU": "Байт" }],
	"s-981-3000-1151-0": [{ "type": "text", "sub_type": "message", "message": "Attention stun", "message_RU": "Стан" }],
	"s-981-3000-2151-0": [{ "type": "text", "sub_type": "message", "message": "Attention stun", "message_RU": "Стан" }],
	"s-981-3000-2113-0": [{ "type": "text", "sub_type": "message", "message": "Bait", "message_RU": "Байт" }],
	"s-981-3000-1152-0": [{ "type": "text", "sub_type": "message", "message": "Stun + Back", "message_RU": "Стан + Откид назад" }],
	"s-981-3000-2152-0": [{ "type": "text", "sub_type": "message", "message": "Stun + Back", "message_RU": "Стан + Откид назад" }],
	"s-981-3000-2138-0": [{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 250, 0, 6000] }],
	"s-981-3000-1138-0": [{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 250, 0, 6000] }],
	"s-981-3000-1144-0": [{ "type": "text", "sub_type": "message", "message": "OUT", "message_RU": "Наружу" }],
	"s-981-3000-1145-0": [{ "type": "text", "sub_type": "message", "message": "IN", "message_RU": "Внутрь" }],
	"s-981-3000-1240-0": [{ "type": "text", "sub_type": "message", "message": "Donuts", "message_RU": "Бублики" }, { "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 10, 350, 0, 6000] }],
	"s-981-3000-1401-0": [{ "type": "text", "sub_type": "message", "message": "Plague/Regress", "message_RU": "Регресс!" }],
	"s-981-3000-1402-0": [{ "type": "text", "sub_type": "message", "message": "Sleep", "message_RU": "Слип!" }]
};