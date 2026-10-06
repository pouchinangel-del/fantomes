export default function Accueil() {
  return (
    <main className="mx-auto max-w-2xl px-5 pb-16 pt-10">
      <p className="font-titre text-xl font-semibold text-emeraude-fonce">
        Fantômes
      </p>

      <h1 className="font-titre mt-8 text-4xl font-semibold leading-tight sm:text-5xl">
        Combien d&apos;abonnements paies-tu sans t&apos;en servir&nbsp;?
      </h1>
      <p className="mt-5 text-lg text-gris">
        Dépose ton relevé bancaire. On repère les prélèvements oubliés, on les
        classe par coût sur l&apos;année, et on écrit la lettre pour les
        résilier.
      </p>

      <a
        href="#"
        className="mt-8 flex min-h-14 w-full items-center justify-center rounded-xl bg-emeraude px-6 text-lg font-semibold text-white active:bg-emeraude-fonce sm:w-auto sm:inline-flex"
      >
        Commencer, c&apos;est gratuit
      </a>

      <section className="mt-14 rounded-2xl bg-nuit p-6 text-creme">
        <p className="text-sm uppercase tracking-wide text-sable">
          Un exemple
        </p>
        <p className="font-titre mt-3 text-2xl leading-snug">
          5 petits abonnements oubliés à 8&nbsp;€ par mois, ça fait
        </p>
        <p className="font-titre mt-2 text-5xl font-semibold text-emeraude">
          480&nbsp;€ par an
        </p>
        <p className="mt-3 text-sable">
          Aucun n&apos;est assez gros pour se remarquer sur un relevé. Ensemble,
          ils pèsent.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-titre text-2xl font-semibold">
          Ce que tu obtiens
        </h2>
        <ul className="mt-6 space-y-6">
          <li>
            <p className="font-semibold">Les fantômes sont repérés</p>
            <p className="mt-1 text-gris">
              Essai jamais résilié, service remplacé, option activée une fois :
              on retrouve les prélèvements qui reviennent chaque mois.
            </p>
          </li>
          <li>
            <p className="font-semibold">Classés par montant annuel</p>
            <p className="mt-1 text-gris">
              Pas par mois, parce que 9&nbsp;€ ne fait pas peur et 108&nbsp;€
              par an, si.
            </p>
          </li>
          <li>
            <p className="font-semibold">La lettre est déjà écrite</p>
            <p className="mt-1 text-gris">
              Une lettre de résiliation prête pour chaque abonnement. Tu
              l&apos;envoies, c&apos;est fini.
            </p>
          </li>
        </ul>
      </section>

      <a
        href="#"
        className="mt-12 flex min-h-14 w-full items-center justify-center rounded-xl bg-emeraude px-6 text-lg font-semibold text-white active:bg-emeraude-fonce sm:w-auto sm:inline-flex"
      >
        Commencer, c&apos;est gratuit
      </a>
    </main>
  );
}