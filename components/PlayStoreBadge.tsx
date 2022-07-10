import PlayStoreBadgeSvg from "./../public/play_store_badge.svg";

const height_ratio = 3.375;

export default function PlayStoreBadge({
  width = 135,
  height = width / height_ratio,
  url,
}) {
  return (
    <a
      style={{
        display: "inline-block",
        width: width,
        height: height,
      }}
      href={url}
    >
      <PlayStoreBadgeSvg />
    </a>
  );
}
