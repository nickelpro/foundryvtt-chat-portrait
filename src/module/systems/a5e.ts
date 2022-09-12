import type { ImageReplaceVoiceData } from "../ChatPortraitModels";
import CONSTANTS from "../constants";

export default {
	SYSTEM_ID: "a5e",
	imageReplacerDamageType: <ImageReplaceVoiceData[]>[
		{ name: "A5E.DamageAcid", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/acid.svg` },
		{ name: "A5E.DamageBludgeoning", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/bludgeoning.svg` },
		{ name: "A5E.DamageCold", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/cold.svg` },
		{ name: "A5E.DamageFire", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/fire.svg` },
		{ name: "A5E.DamageForce", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/force.svg` },
		{ name: "A5E.DamageLightning", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/lightning.svg` },
		{ name: "A5E.DamageNecrotic", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/necrotic.svg` },
		{ name: "A5E.DamagePiercing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/piercing.svg` },
		{ name: "A5E.DamagePoison", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/poison.svg` },
		{ name: "A5E.DamagePsychic", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/psychic.svg` },
		{ name: "A5E.DamageRadiant", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/radiant.svg` },
		{ name: "A5E.DamageSlashing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/slashing.svg` },
		{ name: "A5E.DamageThunder", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/thunder.svg` },
		{ name: "A5E.DamageUnknown", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/non_magical_physical.svg` },
	],
	imageReplacerWeaponProperties: <ImageReplaceVoiceData[]>[
		{ name: "A5E.WeaponPropertyBurn", icon: `` },
		{ name: "A5E.WeaponPropertyBreaker", icon: `` },
		{ name: "A5E.WeaponPropertyCompounding", icon: `` },
		{ name: "A5E.WeaponPropertyDefensive", icon: `` },
		{ name: "A5E.WeaponPropertyDualWielding", icon: `` },
		{ name: "A5E.WeaponPropertyFinesse", icon: `` },
		{ name: "A5E.WeaponPropertyFlamboyant", icon: `` },
		{ name: "A5E.WeaponPropertyHandMounted", icon: `` },
		{ name: "A5E.WeaponPropertyHeavy", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/heavy.svg` },
		{ name: "A5E.WeaponPropertyInaccurate", icon: `` },
		{ name: "A5E.WeaponPropertyLoading", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/loading.svg` },
		{ name: "A5E.WeaponPropertyMounted", icon: `` },
		{ name: "A5E.WeaponPropertyMuzzleLoading", icon: `` },
		{ name: "A5E.WeaponPropertyParrying", icon: `` },
		{ name: "A5E.WeaponPropertyParryingImmunity", icon: `` },
		{ name: "A5E.WeaponPropertyQuickdraw", icon: `` },
		{ name: "A5E.WeaponPropertyRange", icon: `` },
		{ name: "A5E.WeaponPropertyReach", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/reach.svg` },
		{ name: "A5E.WeaponPropertyRifled", icon: `` },
		{ name: "A5E.WeaponPropertyScatter", icon: `` },
		{ name: "A5E.WeaponPropertyShock", icon: `` },
		{ name: "A5E.WeaponPropertySimple", icon: `` },
		{ name: "A5E.WeaponPropertyThrown", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/thrown.svg` },
		{ name: "A5E.WeaponPropertyTriggerCharge", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/special.svg` },
		{ name: "A5E.WeaponPropertyTrip", icon: `` },
		{ name: "A5E.WeaponPropertyTwoHanded", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/two-Handed.svg` },
		{ name: "A5E.WeaponPropertyVersatile", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/versatile.svg` },
		{ name: "A5E.WeaponPropertyVicious", icon: `` },
	],
	imageReplacerIconizer: <ImageReplaceVoiceData[]>[
		{ name: "A5E.AbilityDefault", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/gaming_set.svg` },
		{ name: "A5E.AbilitySpellcasting", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/arcana.svg` },
		{ name: "A5E.AbilityCheck", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/survival.svg` },

		{ name: "A5E.AbilityStr", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/strength.svg` },
		{ name: "A5E.AbilityDex", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/dexterity.svg` },
		{ name: "A5E.AbilityCon", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/constitution.svg` },
		{ name: "A5E.AbilityInt", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/intelligence.svg` },
		{ name: "A5E.AbilityWis", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/wisdom.svg` },
		{ name: "A5E.AbilityCha", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/charisma.svg` },

		{ name: "A5E.SkillAcr", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/acrobatics.svg` },
		{ name: "A5E.SkillAni", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/animal_handling.svg` },
		{ name: "A5E.SkillArc", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/arcana.svg` },
		{ name: "A5E.SkillAth", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/athletics.svg` },
		{ name: "A5E.SkillCul", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/culture.svg` },
		{ name: "A5E.SkillDec", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/deception.svg` },
		{ name: "A5E.SkillEng", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/engineering.svg` },
		{ name: "A5E.SkillHis", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/history.svg` },
		{ name: "A5E.SkillIns", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/insight.svg` },
		{ name: "A5E.SkillItm", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/intimidation.svg` },
		{ name: "A5E.SkillInv", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/investigation.svg` },
		{ name: "A5E.SkillMed", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/medicine.svg` },
		{ name: "A5E.SkillNat", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/nature.svg` },
		{ name: "A5E.SkillPrc", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/perception.svg` },
		{ name: "A5E.SkillPrf", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/performance.svg` },
		{ name: "A5E.SkillPer", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/persuasion.svg` },
		{ name: "A5E.SkillRel", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/religion.svg` },
		{ name: "A5E.SkillSlt", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/sleight_of_hand.svg` },
		{ name: "A5E.SkillSte", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/stealth.svg` },
		{ name: "A5E.SkillSur", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/survival.svg` },
		{ name: "A5E.SkillSpecialties", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/specialties.svg` },
		{ name: "A5E.SkillSpecialtyAberrations", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/aberrations.svg` },
		{ name: "A5E.SkillSpecialtyActing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/acting.svg` },
		{ name: "A5E.SkillSpecialtyAppraisal", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/appraisal.svg` },
		{ name: "A5E.SkillSpecialtyAlignment", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/alignment.svg` },
		{ name: "A5E.SkillSpecialtyAnimals", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/animals.svg` },
		{ name: "A5E.SkillSpecialtyAnonymity", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/anonymity.svg` },
		{ name: "A5E.SkillSpecialtyArchitecture", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/architecture.svg` },
		{ name: "A5E.SkillSpecialtyArts", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/arts.svg` },
		{ name: "A5E.SkillSpecialtyAstronomy", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/astronomy.svg` },
		{ name: "A5E.SkillSpecialtyAuthority", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/authority.svg` },
		{ name: "A5E.SkillSpecialtyAutopsy", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/autopsy.svg` },
		{ name: "A5E.SkillSpecialtyBalancing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/balancing.svg` },
		{ name: "A5E.SkillSpecialtyBeastLore", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/beast Lore.svg` },
		{ name: "A5E.SkillSpecialtyBoasting", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/boasting.svg` },
		{ name: "A5E.SkillSpecialtyBribery", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/bribery.svg` },
		{ name: "A5E.SkillSpecialtyCalming", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/calming.svg` },
		{ name: "A5E.SkillSpecialtyCelestials", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/celestials.svg` },
		{ name: "A5E.SkillSpecialtyCamouflage", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/camouflage.svg` },
		{ name: "A5E.SkillSpecialtyCasing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/casing.svg` },
		{ name: "A5E.SkillSpecialtyChemistry", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/chemistry.svg` },
		{ name: "A5E.SkillSpecialtyCiphers", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/ciphers.svg` },
		{ name: "A5E.SkillSpecialtyClimbing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/climbing.svg` },
		{
			name: "A5E.SkillSpecialtyConcealingEmotions",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/concealing_emotions.svg`,
		},
		{ name: "A5E.SkillSpecialtyComposing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/composing.svg` },
		{ name: "A5E.SkillSpecialtyConstructs", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/constructs.svg` },
		{
			name: "A5E.SkillSpecialtyCourtlyManners",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/courtly_manners.svg`,
		},
		{ name: "A5E.SkillSpecialtyCults", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/cults.svg` },
		{ name: "A5E.SkillSpecialtyDancing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/dancing.svg` },
		{ name: "A5E.SkillSpecialtyDeciphering", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/deciphering.svg` },
		{
			name: "A5E.SkillSpecialtyDetectingLies",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/detecting_lies.svg`,
		},
		{ name: "A5E.SkillSpecialtyDetection", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/detection.svg` },
		{ name: "A5E.SkillSpecialtyDiseases", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/diseases.svg` },
		{ name: "A5E.SkillSpecialtyDistraction", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/distraction.svg` },
		{ name: "A5E.SkillSpecialtyDragons", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/dragons.svg` },
		{ name: "A5E.SkillSpecialtyDriving", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/driving.svg` },
		{ name: "A5E.SkillSpecialtyDungeoneering", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/dungeoneering.svg` },
		{ name: "A5E.SkillSpecialtyElementals", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/elementals.svg` },
		{ name: "A5E.SkillSpecialtyEmpires", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/empires.svg` },
		{
			name: "A5E.SkillSpecialtyEscapeArtistry",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/escape_artistry.svg`,
		},
		{ name: "A5E.SkillSpecialtyEtiquette", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/etiquette.svg` },
		{ name: "A5E.SkillSpecialtyExplosives", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/explosives.svg` },
		{ name: "A5E.SkillSpecialtyFarming", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/farming.svg` },
		{ name: "A5E.SkillSpecialtyFarsight", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/farsight.svg` },
		{ name: "A5E.SkillSpecialtyFerocity", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/ferocity.svg` },
		{ name: "A5E.SkillSpecialtyFey", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/fey.svg` },
		{ name: "A5E.SkillSpecialtyFineArt", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/fine_art.svg` },
		{ name: "A5E.SkillSpecialtyFlattery", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/flattery.svg` },
		{ name: "A5E.SkillSpecialtyForaging", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/foraging.svg` },
		{
			name: "A5E.SkillSpecialtyForbiddenKnowledge",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/forbidden_knowledge.svg`,
		},
		{ name: "A5E.SkillSpecialtyForensics", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/forensics.svg` },
		{ name: "A5E.SkillSpecialtyFiends", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/fiends.svg` },
		{ name: "A5E.SkillSpecialtyGadgetry", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/gadgetry.svg` },
		{
			name: "A5E.SkillSpecialtyGatheringRumors",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/gathering_rumors.svg`,
		},
		{ name: "A5E.SkillSpecialtyGenealogy", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/genealogy.svg` },
		{ name: "A5E.SkillSpecialtyGods", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/gods.svg` },
		{ name: "A5E.SkillSpecialtyHerbalism", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/herbalism.svg` },
		{ name: "A5E.SkillSpecialtyHolySymbols", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/holy_symbols.svg` },
		{ name: "A5E.SkillSpecialtyHunting", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/hunting.svg` },
		{ name: "A5E.SkillSpecialtyInterrogation", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/interrogation.svg` },
		{
			name: "A5E.SkillSpecialtyInvisibleObjects",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/invisible _objects.svg`,
		},
		{ name: "A5E.SkillSpecialtyJumping", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/jumping.svg` },
		{ name: "A5E.SkillSpecialtyLaws", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/laws.svg` },
		{ name: "A5E.SkillSpecialtyLeadership", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/leadership.svg` },
		{ name: "A5E.SkillSpecialtyLegends", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/legends.svg` },
		{ name: "A5E.SkillSpecialtyLegerdemain", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/legerdemain.svg` },
		{ name: "A5E.SkillSpecialtyLifting", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/lifting.svg` },
		{ name: "A5E.SkillSpecialtyLinguistics", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/linguistics.svg` },
		{ name: "A5E.SkillSpecialtyListening", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/listening.svg` },
		{ name: "A5E.SkillSpecialtyMathematics", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/mathematics.svg` },
		{
			name: "A5E.SkillSpecialtyMechanicalTraps",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/mechanical_traps.svg`,
		},
		{ name: "A5E.SkillSpecialtyMimicry", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/mimicry.svg` },
		{ name: "A5E.SkillSpecialtyMonstrosities", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/monstrosities.svg` },
		{ name: "A5E.SkillSpecialtyMorality", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/morality.svg` },
		{ name: "A5E.SkillSpecialtyNegotiation", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/negotiation.svg` },
		{ name: "A5E.SkillSpecialtyOozes", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/oozes.svg` },
		{ name: "A5E.SkillSpecialtyPeacemaking", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/peacemaking.svg` },
		{ name: "A5E.SkillSpecialtyPickpocketing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/pickpocketing.svg` },
		{ name: "A5E.SkillSpecialtyThePlanes", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/the_planes.svg` },
		{ name: "A5E.SkillSpecialtyPlantLore", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/plant_lore.svg` },
		{ name: "A5E.SkillSpecialtyPoisons", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/poisons.svg` },
		{ name: "A5E.SkillSpecialtyProphecy", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/prophecy.svg` },
		{
			name: "A5E.SkillSpecialtyReadingEmotions",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/reading_emotions.svg`,
		},
		{
			name: "A5E.SkillSpecialtyRegionalGoods",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/regional_goods.svg`,
		},
		{ name: "A5E.SkillSpecialtyResearch", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/research.svg` },
		{ name: "A5E.SkillSpecialtyRiding", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/riding.svg` },
		{ name: "A5E.SkillSpecialtyRunning", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/running.svg` },
		{ name: "A5E.SkillSpecialtyScent", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/scent.svg` },
		{
			name: "A5E.SkillSpecialtySensingMotives",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/sensing_motives.svg`,
		},
		{ name: "A5E.SkillSpecialtySiegecraft", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/siegecraft.svg` },
		{ name: "A5E.SkillSpecialtySinging", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/singing.svg` },
		{ name: "A5E.SkillSpecialtySpeaking", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/speaking.svg` },
		{ name: "A5E.SkillSpecialtyStreetwise", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/streetwise.svg` },
		{
			name: "A5E.SkillSpecialtySubtleThreats",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/subtle_threats.svg`,
		},
		{ name: "A5E.SkillSpecialtySwimming", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/swimming.svg` },
		{ name: "A5E.SkillSpecialtySwinging", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/swinging.svg` },
		{ name: "A5E.SkillSpecialtyThrowing", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/throwing.svg` },
		{ name: "A5E.SkillSpecialtyTracking", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/tracking.svg` },
		{ name: "A5E.SkillSpecialtyTrade", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/trade.svg` },
		{ name: "A5E.SkillSpecialtyTraining", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/training.svg` },
		{ name: "A5E.SkillSpecialtyTrapfinding", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/trapfinding.svg` },
		{ name: "A5E.SkillSpecialtyTumbling", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/tumbling.svg` },
		{ name: "A5E.SkillSpecialtyUndead", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/undead.svg` },
		{ name: "A5E.SkillSpecialtyWars", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/wars.svg` },
		{ name: "A5E.SkillSpecialtyWayfinding", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/wayfinding.svg` },
		{
			name: "A5E.SkillSpecialtyWeaponDisplays",
			icon: `modules/${CONSTANTS.MODULE_NAME}/assets/weapon_displays.svg`,
		},
		{ name: "A5E.SkillSpecialtyWeather", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/weather.svg` },
		{ name: "A5E.SkillSpecialtyWriting", icon: `modules/${CONSTANTS.MODULE_NAME}/assets/writing.svg` },
	],
};
