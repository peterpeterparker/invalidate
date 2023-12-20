import type { LoadEvent } from '@sveltejs/kit';

const loadRouteParams = ($event: LoadEvent) => {
	const {
		url: { searchParams }
	} = $event;

	return {
		network: searchParams?.get('network'),
	};
};

export const load = ($event: LoadEvent) => loadRouteParams($event);
