import React from "react";

export default function ServicePage({ params }) {
  const { service } = params;
  return <div className="flex flex-col">{service}</div>;
}
