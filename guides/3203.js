// Forbidden Arena [Nightmare Undying Warlord]
//
// made by HSDN

let player, entity, library, effect;

let timer1;
let print_target = true;
let in_bait = false;

function skilld_event(skillid, handlers, event, ent, dispatch) {
	if ([107, 310].includes(skillid)) { // Bait/Back Flip
		in_bait = true;
		dispatch.setTimeout(() => in_bait = false, 3500);
	}
	if (skillid == 116) { // Haymaker
		if (in_bait) {
			handlers["text"]({
				"sub_type": "message",
				"message": "Haymaker",
				"message_RU": "Мощный удар"
			});
		} else { // 116 -> 146
			handlers["text"]({
				"sub_type": "message",
				"message": "Haymaker | Back Kick",
				"message_RU": "Мощный удар | Откид назад"
			});
		}
	}
	if ([31031007, 32031007].includes(skillid)) { // "Ha" attacks
		if (print_target) {
			dispatch.clearTimeout(timer1);
			print_target = false;
			dispatch.setTimeout(() => print_target = true, 5000);
			timer1 = dispatch.setTimeout(() => {
				handlers["text"]({
					"sub_type": "alert",
					"message": "Target attacks soon...",
					"message_RU": "Скоро таргет-атака..."
				});
			}, 65000);
		}
	}
}

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	"h-3203-1000-30": [{ "type": "text", "sub_type": "message", "message": "30%", "message_RU": "30%" }],

	//"s-3203-1000-101-0": [{ "type": "text", "class_position": "tank", "sub_type": "message", "message": "Punch", "message_RU": "Серия ударов" }],
	"s-3203-1000-113-0": [{ "type": "text", "class_position": "tank", "sub_type": "message", "message": "Roundhouse Kick", "message_RU": "Удар с разворота" }],
	"s-3203-1000-111-0": [{ "type": "text", "class_position": "tank", "sub_type": "message", "message": "Knockdown", "message_RU": "Опрокид" }],
	"s-3203-1000-120-0": [{ "type": "text", "class_position": "tank", "sub_type": "message", "message": "Knockdown", "message_RU": "Опрокид" }],
	//"s-3203-1000-102-0": [{ "type": "text", "class_position": "tank", "sub_type": "message", "message": "Combo", "message_RU": "Комба" }], // 102 153/154 115/116
	"s-3203-1000-153-0": [{ "type": "text", "class_position": "tank", "sub_type": "message", "message": "Two Kicks", "message_RU": "Два удара" }], // 153 108
	//"s-3203-1000-108-0": [{ "type": "text", "class_position": "tank", "sub_type": "message", "message": "Floor Punch", "message_RU": "Удар о землю" }],
	//"s-3203-1000-127-0": [{ "type": "text", "class_position": "tank", "sub_type": "message", "message": "Many Kicks", "message_RU": "Несколько ударов" }],

	"s-3203-1000-121-0": [{ "type": "text", "sub_type": "message", "message": "Flip Kick (Stun)", "message_RU": "Удар в воздухе (стан)" }],
	"s-3203-1000-107-0": [{ "type": "text", "sub_type": "message", "message": "Bait", "message_RU": "Байт" }, { "type": "func", "func": skilld_event.bind(null, 107) }],
	"s-3203-1000-110-0": [{ "type": "text", "sub_type": "message", "message": "Spin", "message_RU": "Крутилка" }, { "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 0, 12, 420, 0, 3000] }],
	"s-3203-1000-114-0": [{ "type": "text", "sub_type": "message", "message": "Leap (Knockdown)", "message_RU": "Прыжок (опрокид)" }, { "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 0, 12, 240, 0, 2000] }],
	//"s-3203-1000-154-0": [{ "type": "text", "sub_type": "message", "message": "Jumping Kick", "message_RU": "Удар в прыжке" }], // 154 310 116
	"s-3203-1000-310-0": [{ "type": "text", "sub_type": "message", "message": "Back Flip | Haymaker", "message_RU": "Сальто назад | Мощный удар" }, { "type": "func", "func": skilld_event.bind(null, 310) }], // 310 116
	"s-3203-1000-116-0": [{ "type": "func", "func": skilld_event.bind(null, 116) }], // Haymaker
	"s-3203-1000-115-0": [{ "type": "text", "sub_type": "message", "message": "Haymaker (Tank)", "message_RU": "Мощный удар (танк)" }],
	"s-3203-1000-131-0": [{ "type": "text", "sub_type": "message", "message": "Rhythmic Blows", "message_RU": "Ураганная серия" }], // 131 132 133
	"s-3203-1000-146-0": [
		{ "type": "text", "sub_type": "message", "message": "Back Kick", "message_RU": "Откид назад" }, // 116 146
		{ "type": "spawn_func", "func": "vector", "args": [553, 90, 120, 170, 600, 0, 3000] },
		{ "type": "spawn_func", "func": "vector", "args": [553, 270, 120, -170, 600, 0, 3000] }
	],

	// Shield
	"qb-3203-1000-32031006": [{ "type": "text", "sub_type": "message", "message": "Shield!", "message_RU": "Щит!" }],

	// Target "Ha" attacks 308 32031007 125
	"qb-3203-1000-32031007": [{ "type": "text", "sub_type": "message", "message": "Target", "message_RU": "Таргет" }, { "type": "func", "func": skilld_event.bind(null, 32031007) }],
	"s-3203-1000-124-0": [{ "type": "text", "sub_type": "message", "message": "Kick", "message_RU": "Удар" }], // 305 124
	"s-3203-1000-125-0": [{ "type": "text", "sub_type": "message", "message": "Kick", "message_RU": "Удар" }],

	// Donuts
	"qb-3203-1000-32031008": [{ "type": "text", "sub_type": "message", "message": "Donuts: Out > In > Dodge", "message_RU": "Бублики: От него > К нему > Эвейд" }], // 32031008 303/304 117 155
	"qb-3203-1000-32031009": [{ "type": "text", "sub_type": "message", "message": "Donuts: In > Out > Dodge", "message_RU": "Бублики: К нему > От него > Эвейд" }], // 32031009 303/304 118 155
	"s-3203-1000-303-0": [
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 630, 0, 7000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 12, 250, 0, 5000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 8, 480, 0, 5000] }
	],
	"s-3203-1000-304-0": [
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 8, 630, 0, 7000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 12, 250, 0, 5000] },
		{ "type": "spawn_func", "func": "circle", "args": [false, 445, 0, 0, 8, 480, 0, 5000] }
	],
	"s-3203-1000-155-0": [{ "type": "text", "sub_type": "message", "delay": 400, "message": "Dodge", "message_RU": "Эвейд" }],

	// Stun 142 148 129
	"s-3203-1000-142-0": [{ "type": "text", "sub_type": "message", "message": "Stun | Back Wave", "message_RU": "Стан | Волна назад" }],
	"s-3203-1000-148-0": [{ "type": "spawn_func", "func": "circle", "args": [true, 912, 0, 0, 12, 300, 0, 3000] }],
	"s-3203-1000-129-0": [
		{ "type": "text", "sub_type": "message", "message": "Back Wave", "message_RU": "Волна назад (откид)" },
		{ "type": "spawn_func", "func": "vector", "args": [912, 90, 210, 390, 300, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 90, 140, 380, 350, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 90, 70, 370, 400, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 90, 0, 0, 400, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 270, 70, -370, 400, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 270, 140, -380, 350, 0, 2000] },
		{ "type": "spawn_func", "func": "vector", "args": [912, 270, 210, -390, 300, 0, 2000] }
	],

	// Jump 143-0 143-1
	"s-3203-1000-143-0": [{ "type": "text", "sub_type": "message", "message": "Jump (Stun)", "message_RU": "Прыжок (стан)" }],
	"s-3203-1000-143-1": [{ "type": "spawn_func", "func": "circle", "args": [true, 553, 0, 0, 14, 240, 0, 2000] }],

	// AoE 313 314
	"s-3203-1000-313-0": [{ "type": "text", "sub_type": "message", "message": "AOE", "message_RU": "AOE" }],
	"s-3203-1000-314-0": [
		{ "type": "text", "sub_type": "message", "message": "Get Out", "message_RU": "Выйти" },
		{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 20, 460, 0, 4000] }
	],

	// Explosion 320310?? ??? ???
	//"s-3203-1000-???-0": [{ "type": "text", "sub_type": "message", "message": "Explosion (Stun)", "message_RU": "Взрыв (стан)" },
	//	{ "type": "spawn_func", "func": "circle", "args": [false, 553, 0, 0, 14, 360, 0, 3000] },
	//	{ "type": "text", "sub_type": "alert", "delay": 65000, "message": "Explosion soon...", "message_RU": "Скоро взрыв..." }
	//],
	//"s-3203-1000-???-0": [{ "type": "text", "sub_type": "message", "message": "Dodge!", "message_RU": "Эвейд!" }],

	// Debuff
	"ae-0-0-32031011": [{ "type": "text", "sub_type": "alert", "message": "Debuff Stack", "message_RU": "Дебафф (стаки)" }],
	"am-3203-1000-32031011": [{ "type": "text", "sub_type": "alert", "message": "Debuff Stack", "message_RU": "Дебафф (стаки)" }],
	"am-3203-1000-32031012": [{ "type": "text", "sub_type": "alert", "message": "Debuff Stack", "message_RU": "Дебафф (стаки)" }], 
};