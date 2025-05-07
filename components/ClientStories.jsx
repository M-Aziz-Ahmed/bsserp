import Image from "next/image";
import Link from "next/link";

const TrustedCustomers = () => {
  const cards = [
    {
      img: '/Lazienda.jpg', 
      title: 'Lazienda Denim (Pvt) Ltd.', 
      description: 'Lazienda Denim (Pvt) Ltd. is fastest growing manufacturers/Exporters in textile industry, producing Woven bottoms, basic pants, chinos, basic five pocket jeans for all the leading global brands', 
      link: ''
    },
    {
      img: '/LA.jpg', 
      title: 'Lahore Apparel (Pvt.) Ltd.', 
      description: 'Lahore Apparel has collaborated with a diverse range of global brands, maintaining a 100% client satisfaction rate. Their bespoke manufacturing process, which includes pre-production consultations, pattern development, fabric sourcing, sampling, bulk manufacturing, and rigorous quality checks, ensures that each clients unique requirements are met with precision and excellence.', 
      link: ''
    },
    {
      img: '/rt.jpg', 
      title: 'Royal Tag', 
      description: 'Royal Tag is a smart formal fashion retail brand for men, committed to producing quality products and delivering consistent customer care, with the goal of achieving long-lasting success in the market. Royal Tag is continually working to strengthen its relationship with valued customers by offering contemporary products and ensuring the highest quality.', 
      link: ''
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text mb-3">Successful Client Stories</h2>
          <div className="mx-auto mb-4 bg-highlight" style={{ width: '100px', height: '4px' }}></div>
          <p className="lead text-secondary max-w-2xl mx-auto">
            Click on a case study to read more information about the achievements and goals of the client.
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {cards.map((card) => (
            <div className="col-lg-4 col-md-6" key={card.title}>
              <div className="h-100 border-0 hover-shadow transition-all">
                <div className="d-flex flex-column gap-1">
                  <div className="mb-4 overflow-hidden" style={{}}>
                    <Image 
                      src={card.img} 
                      width={400} 
                      height={400} 
                      alt={card.title || "Client logo"} 
                      className="object-fit-cover c-img"
                    />
                  </div>
                  <h3 className="h4 mb-3 text">{card.title}</h3>
                  <p className="text-secondary mb-4">{card.description}</p>
                  {/* */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCustomers;