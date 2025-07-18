import Image from "next/image";

function LinkCard({
   href,
   title,
   icons,
   color
}: {
   href: string;
   title: string;
   icons?: string;
   color?: string;
}) {
   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-white/30 backdrop-opacity-5 backdrop-invert mb-3 max-w-3xl"
      >
         <li className="flex text-center w-full">
            <div className={`flex justify-center items-center w-10 h-10`}>
               {icons && (
                  <Image
                     className="rounded-sm"
                     alt={title}
                     src={icons}
                     width={30}
                     height={30}
                  />
               )}
            </div>
            <h2 className="flex justify-center items-center font-semibold w-full text-black -ml-10">
               {title}
            </h2>
         </li>
      </a>
   );
}

export default LinkCard;
