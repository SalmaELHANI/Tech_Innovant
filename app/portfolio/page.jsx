import React from "react";

const Portfolio = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <a Name="portfolio"></a>
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
          <span className="mb-2 block text-lg font-semibold text-blue-700">
            Explorez nos réalisations et projets innovants.
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
            Découvrez Notre Portfolio
          </h2>
        </div>
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="https://www.deplacementspros.com/wp-content/uploads/2024/01/ia-messagerie.webp"
              CardTitle="Assistant Virtuel Alimenté par l'IA"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Notre assistant virtuel alimenté par l'IA révolutionnaire simplifie les tâches, automatise les processus et améliore la productivité."
              Button="View Details"
            />
            <SingleCard
              image="https://www.valtus.fr/wp-content/uploads/2022/10/blockchain.jpg"
              CardTitle="Solutions Blockchain de Prochaine Génération"
              CardDescription="Explorez nos solutions blockchain de Prochaine Génération conçues pour apporter transparence, sécurité et efficacité à diverses industries."
              Button="View Details"
            />
            <SingleCard
              image="https://blog.bimserver.center/wp-content/uploads/2021/03/rv_retocada2-scaled.jpg"
              CardTitle="Expériences Réalité Augmentée (AR) Innovantes"
              CardDescription="Plongez-vous dans nos projets AR, offrant des expériences interactives et captivantes pour les utilisateurs sur différentes plateformes."
              Button="View Details"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-2xl duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full h-[200px]" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border  hover:border-blue-700 hover:bg-white hover:text-black px-7 py-2 text-base font-medium text-body-color transition hover:border-primary bg-blue-700 text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
