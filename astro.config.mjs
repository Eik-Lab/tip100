// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			locales: {
				root: {
					label: 'Norsk',
					lang: 'nb',
				},
			},
			title: 'TIP100',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Intro',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Kursoversikt', slug: 'intro/1kursintro' },
						{ label: 'Viktig Informasjon', slug: 'intro/viktig_informasjon' },
						{ label: 'Installasjon av Fusion 360', slug: 'intro/2installasjon' },
					],
				},
				{
					label: 'Grunnleggende Fusion 360',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Navigasjon', slug: 'fusion_grunnleggende/3navigasjon' },
						{ label: 'Teori 2D', slug: 'fusion_grunnleggende/4teori' },
						{ label: 'Dimensjoner og Constraints', slug: 'fusion_grunnleggende/5dimensjoner_constraints' },
						{ label: 'Orioentering', slug: 'fusion_grunnleggende/6orientering' },
						{ label: 'Extrusion', slug: 'fusion_grunnleggende/7extrusion' },
						{ label: 'Cut', slug: 'fusion_grunnleggende/8cut' },
						{ label: 'Enkel Boks', slug: 'fusion_grunnleggende/9boks' },
						{ label: 'Bambu Studio', slug: 'fusion_grunnleggende/10bambu' },
						{ label: 'Muttere og Bolter', slug: 'fusion_grunnleggende/11muttere_bolter' },
						{ label: 'Parametrisk Design', slug: 'fusion_grunnleggende/12parametrisk_design' },
						{ label: 'Loft og Shell', slug: 'fusion_grunnleggende/13loft_shell' },
						{ label: 'Tannbørste Etui', slug: 'fusion_grunnleggende/14tannborste' },
						{ label: 'Revolve og Spline Tool', slug: 'fusion_grunnleggende/15revolve_spline' },
						{ label: 'Løsning Vase', slug: 'fusion_grunnleggende/16losning_vase' },
					],
				},
				{
					label: 'Avansert Fusion 360',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'PVC Albue', slug: 'fusion_avansert/17pvc_albue' },
						{ label: 'Parametrisert PVC', slug: 'fusion_avansert/18parametrisert_pvc' },
						{ label: 'Supports i Bambu Studio', slug: 'fusion_avansert/19supports_bambu' },
						{ label: 'Assembly', slug: 'fusion_avansert/20assembly' },
						{ label: 'CAD fra Datablad', slug: 'fusion_avansert/21datablad' },
						{ label: 'Vifte med Brakett', slug: 'fusion_avansert/22vifte_brakett' },
						{ label: 'Forstå BOM', slug: 'fusion_avansert/23bom' },
						{ label: 'Export og Import Assembly', slug: 'fusion_avansert/24export_import' },
						{ label: 'AI i CAD', slug: 'fusion_avansert/ai' },
					],
				},
				{
					label: 'GitHub',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'GitHub', slug: 'github/github' },
					],
				}
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
