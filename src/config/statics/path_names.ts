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
export enum path_name_machine {
	tractors = "tractors",
	nebulizers = "nebulizers",
}

// TODO: Cambiar
export enum path_name_not_category {
	bussines_name = "business_names",
	role = "roles",
	cost_centers = "cost-centers",
}

export enum path_name_profile{
	profile_user= "profile_user",
}