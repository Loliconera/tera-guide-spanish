// Red Refuge
//
// made by multarix

const { SpawnVector, SpawnCircle } = module.parent.exports.lib;

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	},

	// 1 BOSS
	"s-739-1000-105-0": [{ "type": "text", "sub_type": "message", "message": "Turn + Breath", "message_RU": "Поворот + дыхание", "message_ES": "Girar + Respirar" }],
	"s-739-1000-308-0": [
		{ "type": "text", "sub_type": "message", "message": "In > Out", "message_RU": "К нему > От него", "message_ES": "Entrar > Salir" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 10, 300, 0, 7500) }
	],
	"s-739-1000-308-1": [{ "type": "text", "sub_type": "message", "message": "Out", "message_RU": "От него", "message_ES": "Salir" }],
	"s-739-1000-112-0": [{ "type": "text", "sub_type": "message", "message": "Back Spray", "message_RU": "Волна назад", "message_ES": "Ataque hacia atrás" }],
	"s-739-1000-107-0": [{ "type": "text", "sub_type": "message", "message": "Jump", "message_RU": "Прыжок", "message_ES": "Saltar" }],
	"s-739-1000-306-0": [
		{ "type": "text", "sub_type": "message", "message": "Out > In", "message_RU": "От него > К нему", "message_ES": "Salir > Entrar" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 10, 300, 0, 7500) }
	],
	"s-739-1000-306-1": [{ "type": "text", "sub_type": "message", "message": "In", "message_RU": "К нему", "message_ES": "Entrar" }],

	// 2 BOSS
	"s-739-2000-105-0": [
		{ "type": "text", "sub_type": "message", "message": "360", "message_RU": "360", "message_ES": "Girar" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 10, 300, 0, 2500) },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 10, 510, 0, 2500) }
	],
	"s-739-2000-113-0": [{ "type": "text", "sub_type": "message", "message": "Stun", "message_RU": "Стан", "message_ES": "Stun" }],
	"s-739-2000-108-0": [{ "type": "text", "sub_type": "message", "message": "Clense", "message_RU": "Клинс", "message_ES": "Cleanse", "class_position": "heal" }],
	"s-739-2000-115-0": [
		{ "type": "text", "sub_type": "message", "message": "Whirlwind", "message_RU": "Вихрь", "message_ES": "Vórtice" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 10, 360, 0, 6500) }
	],
	"s-739-2000-119-0": [{ "type": "text", "sub_type": "message", "message": "Front", "message_RU": "Спереди", "message_ES": "Ataque Frontal" }],
	"s-739-2000-120-0": [{ "type": "text", "sub_type": "message", "message": "Back", "message_RU": "Сзади", "message_ES": "Ataque hacia atrás" }],
	"s-739-2000-303-0": [{ "type": "text", "sub_type": "message", "message": "Whip", "message_RU": "Кнут", "message_ES": "Látigo" }],

	// 3 BOSS
	"h-739-3001-30": [{ "type": "text", "sub_type": "message", "message": "Reveal soon...", "message_RU": "Скоро разоблачение...", "message_ES": "Revelación pronto..." }],
	"s-739-3000-201-0": [{ "type": "text", "sub_type": "message", "delay": 3600, "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!" }],
	"s-739-3000-107-0": [{ "type": "text", "sub_type": "message", "message": "Many Hits", "message_RU": "Несколько ударов", "message_ES": "Muchos Golpes" }],
	"s-739-3000-115-0": [
		{ "type": "text", "sub_type": "message", "delay": 1750, "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 10, 630, 0, 4000) }
	],
	"s-739-3000-118-0": [{ "type": "text", "sub_type": "message", "message": "Scratching", "message_RU": "Крутилка", "message_ES": "Arañazo" }],
	// Revealed Argog
	"s-739-3000-167-0": [{ "type": "text", "sub_type": "message", "message": "Many Hits", "message_RU": "Несколько ударов", "message_ES": "Muchos Golpes" }],
	"s-739-3000-175-0": [
		{ "type": "text", "sub_type": "message", "delay": 1750, "message": "Dodge!", "message_RU": "Эвейд!", "message_ES": "¡Iframe!" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 10, 630, 0, 4000) }
	],
	"s-739-3000-178-0": [{ "type": "text", "sub_type": "message", "message": "Scratching (bleed)", "message_RU": "Крутилка (Кровоток)", "message_ES": "Arañazo (sangrar)" }]
};