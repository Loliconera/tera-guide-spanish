// RK-9 Kennel
//
// made by michengs

const { SpawnPoint, SpawnVector, SpawnCircle } = module.parent.exports.lib;

let player, entity, library, effect;

module.exports = {
	load(dispatch) {
		({ player, entity, library, effect } = dispatch.require.library);
	 },

	// 1 BOSS
	"s-735-1000-111-0": [{ "type": "text", "sub_type": "message", "message": "Back + Front", "message_RU": "Удар назад + вперед", "message_ES": "Ataque hacia atrás + Adelante" }],
	"s-735-1000-112-0": [{ "type": "text", "sub_type": "message", "message": "Back", "message_RU": "Удар назад", "message_ES": "Ataque hacia atrás" }],
	"s-735-1000-304-0": [{ "type": "text", "sub_type": "message", "message": "Out", "message_RU": "От него", "message_ES": "Salir" }],
	"s-735-1000-305-0": [{ "type": "text", "sub_type": "message", "message": "In", "message_RU": "К нему", "message_ES": "Entrar" }],
	"s-735-1000-306-0": [{ "type": "text", "sub_type": "message", "message": "Bombs", "message_RU": "Бомбы", "message_ES": "Bombas" }],
	"s-735-1000-307-0": [{ "type": "text", "sub_type": "message", "message": "Pull", "message_RU": "Стяжка", "message_ES": "Pull" }],
	"s-735-1000-309-0": [{ "type": "text", "sub_type": "message", "message": "Four Missile", "message_RU": "Запуск 4 ракет", "message_ES": "Lanzamiento de 4 misiles" }],

	// 2 BOSS
	"s-735-2000-102-0": [
		{ "type": "text", "sub_type": "message", "message": "Pizza Cutter", "message_RU": "Пила (Эвейд)", "message_ES": "Cortador de pizza" },
		{ "type": "func", "func": SpawnCircle.bind(null, true, 553, 0, 300, 12, 228, 0, 3000) }
	],
	"s-735-2000-105-0": [
		{ "type": "text", "sub_type": "message", "message": "360", "message_RU": "Крутилка (откид)", "message_ES": "Girar" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 10, 278, 0, 4000) }
	],
	"s-735-2000-108-0": [
		{ "type": "text", "sub_type": "message", "message": "Back Swipe", "message_RU": "Откид назад", "message_ES": "Ataque hacia atrás" },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 0, 0, 240, 380, 0, 2000) },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 0, 0, 120, 380, 0, 2000) }
	],
	"s-735-2000-301-0": [{ "type": "text", "sub_type": "message", "message": "Throwing Orb", "message_RU": "Бомба", "message_ES": "Lanzamiento de Orb" }],
	"s-735-2000-304-0": [
		{ "type": "text", "sub_type": "message", "message": "Get Out", "message_RU": "От него", "message_ES": "Salir" },
		{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 8, 400, 0, 4000) }
	],
	"s-735-2007-201-0": [
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 0, 500, 0, 4000) },
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 90, 500, 0, 4000) },
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 180, 500, 0, 4000) },
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 270, 500, 0, 4000) }
	],
	"s-735-2007-306-0": [
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 0, 500, 0, 4000) },
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 90, 500, 0, 4000) },
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 180, 500, 0, 4000) },
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 270, 500, 0, 4000) }
	],
	"s-735-2007-307-0": [
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 0, 500, 0, 4000) },
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 90, 500, 0, 4000) },
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 180, 500, 0, 4000) },
		{ "type": "func", "func": SpawnVector.bind(null, 912, 0, 0, 270, 500, 0, 4000) }
	],

	// 3 BOSS
	"s-735-3000-116-0": [{ "type": "text", "sub_type": "message", "message": "Right Safe", "message_RU": "Справа сейф", "message_ES": "Derecha Segura" },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 120, 250, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 130, 240, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 140, 230, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 150, 220, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 160, 210, 0, 3000) },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 170, 210, 180, 290, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 300, 250, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 310, 240, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 320, 230, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 330, 220, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 340, 210, 0, 3000) },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 350, 210, 0, 290, 0, 3000) }
	],
	"s-735-3000-117-0": [{ "type": "text", "sub_type": "message", "message": "Left Safe", "message_RU": "Слева сейф", "message_ES": "Izquierda Segura" },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 10, 210, 0, 290, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 20, 210, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 30, 220, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 40, 230, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 50, 240, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 60, 250, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 240, 250, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 230, 240, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 220, 230, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 210, 220, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 200, 210, 0, 3000) },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 190, 210, 180, 290, 0, 3000) }
	],
	"s-735-3000-118-0": [{ "type": "text", "sub_type": "message", "message": "Left Safe", "message_RU": "Слева сейф", "message_ES": "Izquierda Segura" },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 10, 210, 0, 290, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 20, 210, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 30, 220, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 40, 230, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 50, 240, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 60, 250, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 240, 250, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 230, 240, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 220, 230, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 210, 220, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 200, 210, 0, 3000) },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 190, 210, 180, 290, 0, 3000) }
	],
	"s-735-3000-119-0": [{ "type": "text", "sub_type": "message", "message": "Right Safe", "message_RU": "Справа сейф", "message_ES": "Derecha Segura" },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 120, 250, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 130, 240, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 140, 230, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 150, 220, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 160, 210, 0, 3000) },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 170, 210, 180, 290, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 300, 250, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 310, 240, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 320, 230, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 330, 220, 0, 3000) },
		{ "type": "func", "func": SpawnPoint.bind(null, 553, 340, 210, 0, 3000) },
		{ "type": "func", "func": SpawnVector.bind(null, 553, 350, 210, 0, 290, 0, 3000) }
	],
	"s-735-3000-129-0": [{ "type": "text", "class_position": "tank", "sub_type": "message", "message": "Dodge", "message_RU": "Эвейд", "message_ES": "Iframe" }],
	"s-735-3000-305-0": [{ "type": "func", "func": SpawnCircle.bind(null, false, 553, 0, 0, 8, 300, 0, 7000) }],
	"s-735-3000-321-0": [{ "type": "text", "sub_type": "message", "message": "Shield!", "message_RU": "Щит!", "message_ES": "¡Escudo!" }],
	"s-735-3000-324-0": [{ "type": "text", "sub_type": "message", "message": "Dodge", "message_RU": "Эвейд", "message_ES": "Iframe" }],
	"s-735-3000-325-0": [{"type": "text","sub_type": "message","message": "In","message_RU": "К нему","message_ES": "Entrar"}]
};