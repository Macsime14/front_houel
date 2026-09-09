import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { site, orTodo, hasEmail } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  const { editor, privacy } = site.legal;
  const contactEmail = hasEmail
    ? site.contact.email
    : "l'adresse email de contact (à compléter)";

  return (
    <LegalLayout title="Politique de confidentialité">
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          Les données collectées sur ce site sont traitées par{" "}
          {orTodo(editor.legalName)}
          {editor.address.trim() ? `, ${editor.address}` : ""}.
        </p>
      </section>

      <section>
        <h2>Données collectées</h2>
        <p>
          Le site ne collecte des données personnelles que lorsque vous
          remplissez le formulaire de contact. Sont alors recueillis :
        </p>
        <ul>
          <li>votre nom ;</li>
          <li>votre numéro de téléphone ;</li>
          <li>votre adresse email, si vous la renseignez (facultatif) ;</li>
          <li>le type de projet et le message que vous rédigez.</li>
        </ul>
        <p>
          Aucun compte n&apos;est créé et aucune donnée de navigation n&apos;est
          collectée à des fins statistiques ou publicitaires.
        </p>
      </section>

      <section>
        <h2>Finalité et base légale</h2>
        <p>
          Ces données sont utilisées uniquement pour traiter votre demande et
          vous recontacter afin d&apos;établir un devis. La base légale est votre
          consentement, recueilli lors de l&apos;envoi du formulaire, ainsi que
          l&apos;exécution de mesures précontractuelles prises à votre demande.
        </p>
      </section>

      <section>
        <h2>Destinataires</h2>
        <p>
          Vos données sont destinées à l&apos;éditeur du site. Elles transitent
          par les prestataires techniques suivants, agissant comme
          sous-traitants :
        </p>
        <ul>
          {privacy.processors.map((processor) => (
            <li key={processor}>{processor}</li>
          ))}
        </ul>
        <p>
          Certains de ces prestataires peuvent héberger ou acheminer les données
          en dehors de l&apos;Union européenne, dans le cadre des garanties
          prévues par le RGPD.
        </p>
      </section>

      <section>
        <h2>Durée de conservation</h2>
        <p>Les demandes de contact sont conservées {privacy.retention}.</p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, de limitation et d&apos;opposition au traitement de
          vos données, ainsi que d&apos;un droit à la portabilité. Pour
          l&apos;exercer, contactez l&apos;éditeur à {contactEmail}.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la
          Commission nationale de l&apos;informatique et des libertés (CNIL) :{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            www.cnil.fr
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Ce site n&apos;utilise aucun cookie de suivi ni de mesure
          d&apos;audience. Seuls des cookies strictement nécessaires au
          fonctionnement du site peuvent être déposés ; ils ne requièrent pas
          votre consentement.
        </p>
      </section>
    </LegalLayout>
  );
}
