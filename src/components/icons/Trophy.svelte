<script lang="ts">
const { width = 24, height = 24, class: className = '' } = $props();
</script>
<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`${className} trophy`} data-astro-cid-5etgkhek="true">
  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
  <path d="M4 22h16"></path>
  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
</svg>


<style lang="postcss">
@reference "@/styles/global.css";
.trophy {
	@apply text-white;
}
.icon-wapper {
  @apply mr-2 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 p-1.5;
}
</style>
