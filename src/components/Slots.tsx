import React from "react";
import ProductCard from "./ProductCard";
import { useGetServiceQuery } from "../redux/api/service/serviceApi";
import ServiceCard from "./ServiceCard";

const Slots = () => {
  const { data } = useGetServiceQuery(undefined);
  console.log(data?.data);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-10">All Services</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {/* <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard /> */}
        {data?.data.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Slots;
