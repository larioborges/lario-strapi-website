<script lang="ts">
const { heading, content } = $props();
</script>

<section class="page-section">
	<div>
		<div class="heading-wrapper">
      {@render heading()}
		</div>
		<div class="content-wrapper">
			{@render content()}
		</div>
	</div>
</section>

<style lang="postcss">
@reference '@/styles/global.css';

.page-section {
	@apply from-muted/20 to-background bg-gradient-to-b py-12;

	> div {
    @apply container mx-auto max-w-4xl px-6 md:px-4;
  }

  .content-wrapper {
  	@apply mb-8;
  }

  .heading-wrapper {
  	@apply mb-3 flex items-center;
  }
}
</style>
