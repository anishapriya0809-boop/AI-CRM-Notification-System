import "../styles/pipeline.css";

const deals = [
  {
    brand: "Apple",
    creator: "Jane Doe",
    value: "$45,000",
    status: "Negotiation",
  },
  {
    brand: "Nike",
    creator: "John Smith",
    value: "$120,000",
    status: "Signed",
  },
  {
    brand: "Sephora",
    creator: "Emma W.",
    value: "$8,500",
    status: "Review",
  },
  {
    brand: "Spotify",
    creator: "Alex Chen",
    value: "$30,000",
    status: "Contracting",
  },
];

function PipelineTable() {
  return (
    <div className="pipeline-card">

      <div className="pipeline-header">
        <h3>Active Pipeline</h3>

        <button>View All</button>
      </div>

      <table>

        <thead>
          <tr>
            <th>Brand</th>
            <th>Creator</th>
            <th>Value</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {deals.map((deal, index) => (

            <tr key={index}>

              <td>{deal.brand}</td>

              <td>{deal.creator}</td>

              <td>{deal.value}</td>

              <td>
                <span
                  className={
                    "status " +
                    deal.status.toLowerCase().replace(" ", "-")
                  }
                >
                  {deal.status}
                </span>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default PipelineTable;