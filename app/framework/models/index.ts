export interface Data {
	name: string;
	avatar: string;
	links: Link[];
	socials: Social[];
}

interface Link {
	href: string;
	title: string;
	icon?: string;
}

interface Social {
	title: string;
	href: string;
	icons: string;
	color?: string;
}
