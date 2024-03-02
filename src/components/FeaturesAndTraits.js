export function FeaturesAndTraits({ features, traits }) {
  return (
    <div className="featuresAndTraits">
      <h2> Features</h2>
      <form>
        <textarea
          placeholder="Features"
          value={features} />
      </form>
      <br />
      <h2> Traits </h2>
      <form>
        <textarea
          placeholder="Traits"
          value={traits} />
      </form>
    </div>
  );
}
