export default function Hero({ title, subtitle, image }) {
  return (
    <div className="position-relative" style={{ height: "180px", overflow: "hidden" }}>
      <img
        src={image}
        alt="Hero Banner"
        className="w-100 h-100"
        style={{ objectFit: "cover", filter: "brightness(70%)" }}
      />
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}