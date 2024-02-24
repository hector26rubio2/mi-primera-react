import PropTypes from 'prop-types';

const Exite = ({ title, description, footer, urlProducto, action }) => {
  return (
    <article className="card">
      <header>
        <h5 className="card-title">{title}</h5>
      </header>
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
      <div className="footer">
        <a href={urlProducto} className="btn btn-primary">
          Botón
        </a>
        <button
          onClick={() => {
            action(title);
          }}>
          action
        </button>
        <small className="text-muted">{footer}</small>
      </div>
    </article>
  );
};

export const Card = ({ title, description, footer, urlProducto, action }) => {
  return title ? (
    <Exite
      title={title}
      description={description}
      footer={footer}
      urlProducto={urlProducto}
      action={action}
    />
  ) : (
    <div>no se encontró</div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  urlProducto: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

Card.defaultProps = {
  description: 'Default Description',
  footer: 'Default Footer',
  urlProducto: 'https://example.com',
};
