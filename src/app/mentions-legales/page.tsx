import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { site, orTodo, hasEmail, hasPhone } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  const { editor, insurance, mediator, host, publicationDirector } = site.legal;

  return (
    <LegalLayout title="Mentions légales">
      <section>
        <h2>Éditeur du site</h2>
        <ul>
          <li>Dénomination : {orTodo(editor.legalName)}</li>
          <li>Forme juridique : {orTodo(editor.legalStatus)}</li>
          <li>Adresse : {orTodo(editor.address)}</li>
          <li>SIRET : {orTodo(editor.siret)}</li>
          <li>
            Immatriculation au Répertoire des Métiers :{" "}
            {orTodo(editor.rmRegistration)}
          </li>
          <li>
            Numéro de TVA intracommunautaire :{" "}
            {editor.vatNumber.trim() || "Non applicable / À compléter"}
          </li>
          {editor.capital.trim() ? (
            <li>Capital social : {editor.capital}</li>
          ) : null}
          <li>
            Contact :{" "}
            {hasPhone ? site.contact.phone : "téléphone à compléter"}
            {" — "}
            {hasEmail ? site.contact.email : "email à compléter"}
          </li>
        </ul>
      </section>

      <section>
        <h2>Directeur de la publication</h2>
        <p>{orTodo(publicationDirector)}</p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par {host.name}, {host.address}.{" "}
          <a href={host.url} target="_blank" rel="noopener noreferrer">
            {host.url}
          </a>
        </p>
      </section>

      <section>
        <h2>Assurance professionnelle</h2>
        <p>
          Responsabilité civile professionnelle souscrite auprès de{" "}
          {orTodo(insurance.company)}
          {insurance.contact.trim() ? ` (${insurance.contact})` : ""}. Couverture
          géographique : {insurance.coverageArea}.
        </p>
      </section>

      <section>
        <h2>Médiation de la consommation</h2>
        <p>
          Conformément à l&apos;article L.616-1 du Code de la consommation, le
          client particulier peut recourir gratuitement à un médiateur de la
          consommation en vue de la résolution amiable d&apos;un litige.
        </p>
        <p>
          Médiateur désigné : {orTodo(mediator.name)}
          {mediator.url.trim() ? (
            <>
              {" — "}
              <a href={mediator.url} target="_blank" rel="noopener noreferrer">
                {mediator.url}
              </a>
            </>
          ) : null}
          .
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus de ce site (textes, éléments graphiques,
          mise en page) est protégé par le droit d&apos;auteur. Toute
          reproduction ou réutilisation sans autorisation préalable est
          interdite.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Le traitement des données transmises via le formulaire de contact est
          décrit dans la{" "}
          <a href="/politique-de-confidentialite">
            politique de confidentialité
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
