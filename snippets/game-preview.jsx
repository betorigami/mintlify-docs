export const GamePreview = ({ title, src }) => {
  return (
    <div className="origami-preview">
      <div className="origami-preview-frame">
        <iframe
          className="origami-preview-iframe"
          src={src}
          title={`${title} demo preview`}
          loading="lazy"
          allow="fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
};
