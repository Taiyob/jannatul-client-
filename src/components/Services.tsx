import React from "react";
import { useGetServiceQuery } from "../redux/api/service/serviceApi";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { data, isLoading, isError, error } = useGetServiceQuery(undefined);

  if (isLoading) return <div>Loading services...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Services</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
