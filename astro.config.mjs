// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

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
                  collapsed: true,
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Kursoversikt', slug: 'intro/kursintro' },
                      { label: 'Viktig Informasjon', slug: 'intro/viktig_informasjon' },
                  ],
              },

              {
              	label: 'Dag 1',
                  collapsed: true,
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Informasjon Dag 1', slug: 'dag1/informasjon_dag1' },
                      { label: 'Introduksjon Fusion 360', slug: 'dag1/1kursintro_fusion' },
                      { label: 'Installasjon av Fusion 360', slug: 'dag1/2installasjon' },
                      { label: 'Innlevering Dag 1', slug: 'dag1/innlevering_dag1' },
                  ],
              },

              {
              	label: 'Dag 2',
                  collapsed: true,
                  items: [
                      { label: 'Informasjon Dag 2', slug: 'dag2/informasjon_dag2' },
                      {
                           label: 'Grunnleggende Fusion 360',
                           collapsed: true,
                          items: [
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
                      { label: 'Innlevering Dag 2', slug: 'dag2/innlevering_dag2' },
                  ],
              },
              
              {
              	label: 'Dag 3',
                  collapsed: true,
                  items: [
                      { label: 'Informasjon Dag 3', slug: 'dag3/informasjon_dag3' },
                      {
                          label: 'Avansert Fusion 360',
                          collapsed: true,
                          items: [
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
                      { label: 'Innlevering Dag 3', slug: 'dag3/innlevering_dag3' },
                  ],
              },
              {
               	label: 'Dag 4',
                  collapsed: true,
                  items: [
                      { label: 'Informasjon Dag 4', slug: 'dag4/informasjon_dag4' },
                      {
                          label: 'Vibe Code',
                          collapsed: true,
                          items: [
                              { label: 'Installasjoner Vibe Code', slug: 'dag4/vibe-code/installasjon_vibe' },
                          ],
                      },
                      { label: 'Innlevering Dag 4', slug: 'dag4/innlevering_dag4' },
                  ],
              },
              {
              	label: 'Dag 5',
                  collapsed: true,
                  items: [
                      { label: 'Informasjon Dag 5', slug: 'dag5/informasjon_dag5' },
                      {
                          label: 'Laserkutting og 3D Scanning',
                          collapsed: true,
                          items: [
                              { label: 'Laserkutting', slug: 'dag5/laser-scan/laser' },
                              { label: 'Laserkutting Tips', slug: 'dag5/laser-scan/laser-tips' },
                              { label: 'Lightburn Intro', slug: 'dag5/laser-scan/lightburn-intro' },
                              { label: 'Bruk Lightburn', slug: 'dag5/laser-scan/lightburn' },
                              { label: '3D Scanning', slug: 'dag5/laser-scan/3dscan' },
                          ],
                      },
                      { label: 'Innlevering Dag 5', slug: 'dag5/innlevering_dag5' },
                  ],
              },

              {
              	label: 'Resten av Måneden',
                  collapsed: true,
                  items: [
                      { label: 'Uke 2', slug: 'maaned/uke2' },
                      { label: 'Uke 3', slug: 'maaned/uke3' },
                      { label: 'Uke 4', slug: 'maaned/uke4' },
                  ],
              },

              {
                  label: 'GitHub',
                  collapsed: true,
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'GitHub', slug: 'github/github' },
                  ],
              },

          ],
      }),
	],

  adapter: cloudflare(),
});
