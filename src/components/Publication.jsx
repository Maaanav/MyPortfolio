function Publication() {
  return (
    <section className="section section-muted" id="publication">
      <div className="container">

        <p className="section-label">06 / Publication</p>

        <h2 className="section-heading">
          Research Paper.
        </h2>

        <div className="publication-wrapper">

          <article className="publication-card">

            <p className="publication-meta">
              Springer Nature · Scopus Indexed
            </p>

            <h3>
              Securing Media Integrity: A Blockchain-Based Approach Against
              AI-Generated Deepfakes
            </h3>

            <p>
              Research exploring a blockchain-based approach to strengthen
              media integrity by verifying the authenticity of digital content
              and mitigating the spread of AI-generated deepfakes.
            </p>

            <div className="publication-tags">
              <span>Blockchain</span>
              <span>Deep Learning</span>
              <span>Cybersecurity</span>
              <span>AI</span>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Publication;