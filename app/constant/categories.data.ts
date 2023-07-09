import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
	GiBarn,
	GiBoatFishing,
	GiCactus,
	GiCastle,
	GiCaveEntrance,
	GiForestCamp,
	GiIsland,
	GiMushroomCloud,
	GiLightningDome,
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';
import { SlHome } from 'react-icons/sl';
import { LiaHotjar, LiaMugHotSolid } from 'react-icons/lia';
import { IconType } from 'react-icons';

type TCategoryItem = {
	icon?: IconType;
	label: string;
	description: string;
	imgSrc?: string;
};

export const categories: TCategoryItem[] = [
	{
		label: 'Shared homes',
		icon: SlHome,
		description: 'This property has an amazing view',
	},
	{
		label: 'OMG!',
		icon: GiMushroomCloud,
		description: 'This property has an amazing view',
	},
	{
		label: 'Trending',
		icon: LiaHotjar,
		description: 'This property has an amazing view',
	},
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'This property is close to the beach!',
	},
	{
		label: 'Bed & Breakfast',
		icon: LiaMugHotSolid,
		description: 'This property is has windmills!',
	},
	{
		label: 'Design',
		icon: MdOutlineVilla,
		description: 'This property is modern!',
	},
	{
		label: 'Countryside',
		icon: TbMountain,
		description: 'This property is in the countryside!',
	},
	{
		label: 'Pools',
		icon: TbPool,
		description: 'This is property has a beautiful pool!',
	},
	{
		label: 'Islands',
		icon: GiIsland,
		description: 'This property is on an island!',
	},
	{
		label: 'Lake',
		icon: GiBoatFishing,
		description: 'This property is near a lake!',
	},
	{
		label: 'Ski-in/out',
		icon: FaSkiing,
		description: 'This property has skiing activies!',
	},
	{
		label: 'Iconic cities',
		icon: GiCastle,
		description: 'This property is an ancient castle!',
	},
	{
		label: 'Caves',
		icon: GiCaveEntrance,
		description: 'This property is in a spooky cave!',
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		description: 'This property offers camping activities!',
	},
	{
		label: 'Dome',
		icon: GiLightningDome,
		description: 'This property is in arctic environment!',
	},
	{
		label: 'Arctic',
		icon: BsSnow,
		description: 'This property is in arctic environment!',
	},
	{
		label: 'Desert',
		icon: GiCactus,
		description: 'This property is in the desert!',
	},
	{
		label: 'Barns',
		icon: GiBarn,
		description: 'This property is in a barn!',
	},
	{
		label: 'Luxe',
		icon: IoDiamond,
		description: 'This property is brand new and luxurious!',
	},
];
