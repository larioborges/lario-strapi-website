<script lang="ts">
import MotionDiv from '@/motion/MotionDiv.svelte';
import { cn } from '@/utils';

const { children, class: className, hoverEffect = true, ...props } = $props();
</script>

<MotionDiv
	class={cn(
		'border-border/50 bg-background/80 dark:bg-card/30 rounded-lg border shadow-sm backdrop-blur-md backdrop-filter dark:backdrop-blur-md',
		hoverEffect && 'transition-all duration-300 ease-in-out hover:shadow-md',
		className,
	)}
	whileHover={hoverEffect
		? {
			y: -5,
			transition: {
				duration: 0.2,
			},
		}
		: undefined}
	{...props}
>
	{@render children?.()}
</MotionDiv>
