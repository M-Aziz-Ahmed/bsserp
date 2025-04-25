import { notFound } from 'next/navigation';

// This could be moved to a separate data file
const cardData = {
  'accounts': {
    title: 'Accounts',
    desc: 'Biz Soft ERP Accounts Module in an integrated system designed to manage all financial transactions of an organization in a centralized and integrated way. It helps ensure accurate financial records, transparency, compliance, and efficient decision-making.',
    icon: 'BiCalculator',
    features: [
      'General Ledger',
      'Accounts Payable',
      'Accounts Receivable',
      'Bank Reconciliation',
      'Financial Reporting'
    ]
  },
  'human-resource': {
    title: 'Human Resource',
    desc: 'The Biz Soft ERP HR module in an integrated system is designed to manage the entire employee lifecycle and streamline HR-related tasks. It helps organizations. Automate and centralize HR processes. Improve employee data management. Ensure compliance with labor laws and company policies. Increase overall efficiency and reduce paperwork.',
    icon: 'FaUsers',
    features: [
      'Employee Management',
      'Attendance Tracking',
      'Payroll Processing',
      'Performance Reviews',
      'Recruitment'
    ]
  },
  'supply-chain': {
    title: 'Supply Chain Module',
    desc: 'The Biz Soft ERP Supply Chain module is an integrated system to streamline, automate, and optimize all processes involved in the supply chain from procurement of raw materials to product delivery. Its main goal is to ensure smooth coordination between supply, production, inventory, and distribution to minimize costs and maximize efficiency.',
    icon: 'FaWarehouse',
    features: [
      'Inventory Management',
      'Purchase Order Processing',
      'Vendor Management',
      'Logistics Tracking',
      'Demand Forecasting'
    ]
  },
  'sales-merchandizing': {
    title: 'Sales & Merchandizing',
    desc: 'Facilitates organization to manage Customers, Pre orders processing including costing, sampling and sales’ invoice generation. Manages all the operations from customer demand to customer dispatches.',
    icon: 'FaWarehouse',
    features: [
      'Inventory Management',
      'Purchase Order Processing',
      'Vendor Management',
      'Logistics Tracking',
      'Demand Forecasting'
    ]
  },
  'wip': {
    title: 'work in progress',
    desc: 'The Work in Progress Module in an ERP system offers several important benefits for manufacturing operations. It serves as the bridge between raw materials and finished goods, providing visibility and control throughout the production lifecycle, and streamlining workflows from WIP to finished goods.',
    icon: 'FaWarehouse',
    features: [
      'Inventory Management',
      'Purchase Order Processing',
      'Vendor Management',
      'Logistics Tracking',
      'Demand Forecasting'
    ]
  },
  'production': {
    title: 'Production',
    desc: 'The Production Module in a Biz ERP is a core part of the system that streamlines the entire manufacturing process from planning and scheduling to execution and tracking.',
    icon: 'FaWarehouse',
    features: [
      'Inventory Management',
      'Purchase Order Processing',
      'Vendor Management',
      'Logistics Tracking',
      'Demand Forecasting'
    ]
  },
  'dashboard': {
    title: 'Dashboard',
    desc: "Biz Soft ERP Dashboard is a visual interface that displays real-time data, KPIs, charts, and metrics related to your business operations all in one place. Think of it as your command center whether you're in finance, production, sales, or inventory, the ERP dashboard gives you instant insights to make better decisions, faster.",
    icon: 'FaWarehouse',
    features: [
      'Inventory Management',
      'Purchase Order Processing',
      'Vendor Management',
      'Logistics Tracking',
      'Demand Forecasting'
    ]
  },
  'support': {
    title: 'Support',
    desc: '24/7 technical support to ensure your ERP system runs smoothly with minimal downtime.',
    icon: 'FaWarehouse',
    features: [
      'Inventory Management',
      'Purchase Order Processing',
      'Vendor Management',
      'Logistics Tracking',
      'Demand Forecasting'
    ]
  },
};

export default function SolutionPage({ params }) {
  const { id } = params;
  const card = cardData[id];

  if (!card) {
    return notFound();
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text">{card.title}</h1>
            <p className="lead text-muted text-secondary">{card.desc}</p>
          </div>
          
          <div className="card shadow-lg border-0">
            <div className="card-body p-5 text">
              <h2 className="mb-4">Key Features</h2>
              <ul className="list-group list-group-flush ">
                {card.features.map((feature, index) => (
                  <li key={index} className="list-group-item bg-transparent py-3 text-secondary">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-5">
                <h3 className="mb-3">How It Works</h3>
                <p className="text-muted text-secondary">
                  Our {card.title} module integrates seamlessly with your existing business processes to provide a comprehensive solution tailored to your needs.
                </p>
              </div>
              
              <div className="mt-5 text-center">
                <button className="btn btn-theme btn-lg rounded-5">
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(cardData).map(id => ({
    id
  }));
}