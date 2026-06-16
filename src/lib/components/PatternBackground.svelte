<script lang="ts">
	import type { Snippet } from 'svelte';

	let { patternIndex = 0, children }: { patternIndex?: number; children: Snippet } = $props();

	const index = $derived(patternIndex % 5);
</script>

<div class="pattern-bg" style="background-color: var(--color-amg-beige);">
	<svg
		class="pattern-svg"
		viewBox="0 0 1400 900"
		preserveAspectRatio="xMidYMid slice"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		{#if index === 0}
			<!--
				GROEN: ~5 brede diagonale penseelstreken
				Van linksboven naar rechtsonder, licht gebogen, niet perfect parallel
			-->
			<g stroke="var(--color-amg-green)" fill="none" stroke-linecap="round" opacity="0.55">
				<path d="M30,-60 C60,200 120,500 200,960" stroke-width="52" />
				<path d="M280,-60 C320,200 400,520 500,960" stroke-width="58" />
				<path d="M560,-60 C590,220 660,540 780,960" stroke-width="50" />
				<path d="M820,-60 C850,200 930,540 1060,960" stroke-width="56" />
				<path d="M1100,-60 C1120,200 1190,540 1320,960" stroke-width="48" />
			</g>

		{:else if index === 1}
			<!--
				BLAUW: grote slangvormige golven
				Eén doorlopende lijn die van links naar rechts slingert met grote amplitude.
				U-bocht linksonder, boog bovenin, U-bocht rechtsonder.
			-->
			<g stroke="var(--color-amg-blue)" fill="none" stroke-linecap="round" opacity="0.5">
				<path
					d="M-60,280
					   C-20,500 50,820 250,830
					   C450,840 520,400 530,150
					   C540,-50 650,-80 760,150
					   C870,400 920,800 1050,830
					   C1180,860 1280,500 1350,250
					   C1400,100 1460,-20 1520,100"
					stroke-width="55"
				/>
			</g>

		{:else if index === 2}
			<!--
				ORANJE: doorlopende lijn met een kleine lus en een grote ovale lus
				- Lijn komt van links over de bovenkant
				- Kleine druppelvormige lus bij ~35% links
				- Grote ovale lus in het midden/rechts
				- Verlaat het kader rechtsonder met een bocht
			-->
			<g stroke="var(--color-amg-orange)" fill="none" stroke-linecap="round" opacity="0.5">
				<path
					d="M-50,170
					   C100,140 250,120 380,150
					   C420,160 440,220 430,290
					   C415,370 370,370 370,300
					   C370,240 400,190 450,170
					   C550,130 650,180 750,300
					   C880,480 900,650 800,720
					   C680,800 520,760 440,650
					   C360,540 380,400 480,350
					   C580,300 680,320 750,300
					   C850,260 950,200 1080,250
					   C1200,300 1350,500 1500,650"
					stroke-width="50"
				/>
			</g>

		{:else if index === 3}
			<!--
				KORAAL: cursieve "vh"
				- Drie rechte steile diagonalen die de V vormen
				- Vloeiende U-bocht onderaan die overgaat in de "h"
				- Brede ronde boog bovenaan de "h"
				- Lange horizontale staart rechtsonder
			-->
			<g stroke="var(--color-amg-coral)" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.25">
				<path
					d="M110,-40
					   L220,740
					   L460,20
					   L600,700
					   C630,790 690,800 740,750
					   C790,680 810,440 820,280
					   C830,180 870,160 930,180
					   C990,210 1020,400 1040,580
					   C1055,680 1080,740 1150,760
					   C1220,780 1350,770 1500,740"
					stroke-width="55"
				/>
			</g>

		{:else}
			<!--
				LAVENDEL: cursieve "a" met staart
				- Horizontale lijn van links over de bovenkant
				- Grote boog naar rechts en omlaag
				- Grote ovale lus (tegen de klok in) in het midden
				- Lijn kruist over zichzelf
				- Dan verticaal omlaag
				- Scherpe rechte hoek naar rechts
				- Horizontale staart die rechts het kader verlaat
			-->
			<g stroke="var(--color-amg-lavender)" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.55">
				<path
					d="M-50,155
					   C150,130 350,110 600,120
					   C780,130 880,200 940,350
					   C1010,520 940,670 800,730
					   C660,790 500,760 410,660
					   C320,560 310,430 350,330
					   C400,220 490,190 580,210
					   C660,230 710,280 740,360
					   C770,450 780,580 780,680
					   C780,740 810,770 870,775
					   L1500,760"
					stroke-width="52"
				/>
			</g>
		{/if}
	</svg>

	<div class="pattern-content">
		{@render children()}
	</div>
</div>

<style>
	.pattern-bg {
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		min-height: 0;
		overflow: hidden;
	}

	.pattern-svg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.pattern-content {
		position: relative;
		z-index: 1;
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
