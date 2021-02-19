// * Se usan tanto para azure funcion (POST Y PUT), como para las rutas

export enum path_name {
	active_ingredients = "ingredients",
	application_targets = "targets",
	barracks = "barracks",
	category_ingredients = "ingredient_categories",
	certified_entities = "certified_entities",
	phenological_events = "phenological_events",
	plotlands = "plotlands",
	rootstocks = "rootstock",
	seasons = "seasons",
	species = "species",
	varietys = "varieties",
	sectors = "sectors",
}

export enum order_pathname {
	preorder = "preorders",
	order_folder = "order_folders",
	phenological = "phenologicals",
	no_phenological = "no_phenologicals",
}
