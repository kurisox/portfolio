import React from "react";
import { BentoGrid, BentoGridItem } from "@/app/components/bentogrid/bentogrid";
import { projects } from "@/app/content_config/projects/projectDetails";

export function BentoGridTwoColumns() {
  
  return (
    <BentoGrid className="max-w-6xl pt-10 pb-10 mx-auto md:auto-rows-[20rem]">
      {projects.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          link={item.link}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
