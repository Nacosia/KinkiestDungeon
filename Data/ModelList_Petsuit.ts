/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */


AddModel({
	Name: "Petsuit",
	Folder: "Petsuit",
	Parent: "Petsuit",
	TopLevel: true,
	Categories: ["Restraints", "Cosplay"],
	Restraint: true,
	AddPose: ["HideArms", "EncaseArmLeft", "EncaseArmRight", "ForceKneel"],
	HideLayerGroups: ["PetsuitArms"],
	Layers: ToLayerMap([
		{ Name: "Arms", Layer: "BindForeArms", Pri: -30,
			Invariant: true,
			Poses: ToMap(["Front"]),
		},
		{ Name: "ArmsBelts", Layer: "BindForeArms", Pri: -29.9,
			Invariant: true,
			TieToLayer: "Arms",
			NoOverride: true,
			Poses: ToMap(["Front"]),
		},
		{ Name: "Legs", Layer: "PetsuitLegs", Pri: -5,
			Poses: ToMap(["KneelClosed", "Kneel", "Hogtie"]),
			GlobalDefaultOverride: ToMap(["KneelClosed", "Hogtie"]),
		},
		{ Name: "LegsBelts", Layer: "PetsuitLegs", Pri: -4.9,
			TieToLayer: "Legs",
			NoOverride: true,
			Poses: ToMap(["KneelClosed", "Kneel", "Hogtie"]),
			GlobalDefaultOverride: ToMap(["KneelClosed", "Hogtie"]),
		},
		{ Name: "LeftLegs", Layer: "PetsuitLegs", Pri: -5,
			Poses: ToMap(["KneelClosed", "Kneel"]),
			GlobalDefaultOverride: ToMap(["KneelClosed"]),
			InheritColor: "Legs",
			DisplaceAmount: 50,
			DisplacementInvariant: true,
			DisplaceLayers: ToMap(["Petsuit"]),
			DisplacementSprite: "PetsuitSquish",
		},
		{ Name: "LeftLegsBelts", Layer: "PetsuitLegs", Pri: -4.9,
			TieToLayer: "LeftLegs",
			NoOverride: true,
			Poses: ToMap(["KneelClosed", "Kneel"]),
			GlobalDefaultOverride: ToMap(["KneelClosed"]),
			InheritColor: "LegsBelts",
		},
	])
});
