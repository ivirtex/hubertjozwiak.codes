import AppStoreBadgeSvg from "./../public/app_store_badge.svg";

const height_ratio = 3.375;

export default function AppStoreBadge({
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
      <AppStoreBadgeSvg />
    </a>
  );
}
