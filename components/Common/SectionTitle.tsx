const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
        WHY PHOENIX ARTS ?
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
        At Phoenix Arts-we offer quality full service digital printing and a full line of small and large format printing services. We build strong relationships based on superior customer service, our industry experience and mutual trust Phoenix Arts takes pride in offering the most knowledgeable staff, quality services, and a personal approach with real solutions for all of your digital needs. <br/><br/>
        Our design specialists are experts in the various forms of digital output. Whether your needs are for small or large format, black & white or color, we are dedicated to provide the quality and level of service that you deserve. Our services are available 24/7, Just give us a call to discuss your print document and special needs anytime
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
