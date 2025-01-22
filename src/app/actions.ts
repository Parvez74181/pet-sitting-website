"use server";
export const fetchDistrictData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/district-data.json`, {
    method: "GET",
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch district data");
  }

  const data = await res.json();

  return { data, ok: res.ok };
};
