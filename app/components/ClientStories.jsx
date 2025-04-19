import Image from "next/image";
import Link from "next/link";

const TrustedCustomers = () => {
  const cards = [
    {
      img: '/nida.png', 
      title: 'Nida Pakistan', 
      description: 'NIDA Pakistan (National Integrated Development Association) is a dedicated non-governmental organization (NGO) that began in 1998.', 
      link: ''
    },
    {
      img: '/jadeed.png', 
      title: 'Jadeed Group', 
      description: 'Jadeed Group of Companies stands as a dominant force in Pakistan\'s poultry industry, focusing on importing and breeding top-quality grandparent poultry stock.', 
      link: ''
    },
    {
      img: '/hira.png', 
      title: 'Hira Papers', 
      description: 'Hira Papers, a leading paper manufacturer specializing in various cardboard paper types, has established itself as a key player in the paper industry of Pakistan.', 
      link: ''
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Successful Client Stories</h2>
          <div className="mx-auto mb-4" style={{ width: '100px', height: '4px', backgroundColor: '#FFC107' }}></div>
          <p className="lead text-muted max-w-2xl mx-auto">
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
                  <h3 className="h4 mb-3 text-dark">{card.title}</h3>
                  <p className="text-muted mb-4">{card.description}</p>
                  <div className="">
                  <Link href={card.link} className="btn btn-secondary d-inline mt-auto rounded-5 px-3 py-2">
                    Read Case Study
                  </Link>
                  </div>
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