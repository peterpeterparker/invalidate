<script lang="ts">
	import { page } from '$app/stores';
	import { invalidateAll, replaceState } from '$app/navigation';

	const updateUrl = async () => {
		const url = new URL(window.location.href);
		url.searchParams.set('network', `${Math.random()}`);
		replaceState(url, {});

		await invalidateAll();
	}
</script>

<output>{$page.data.network}</output>

<button on:click={updateUrl}>Update URL</button>